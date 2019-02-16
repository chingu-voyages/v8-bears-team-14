// credits to http://thecodebarbarian.com/building-a-nextjs-app-with-mongodb.html

const mongoose = require('mongoose');
const api = require('./api/api');
const body = require('body-parser');
const co = require('co');
const express = require('express');
const next = require('next');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'static/uploads');
  },
  filename: function(req, file, cb) {
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;

    cb(null, newFilename);
  }
});

const upload = multer({ storage });

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const MONGO_URL = 'mongodb://localhost:27017/dovile';
const PORT = 3000;

co(function*() {
  // Initialize the Next.js app
  yield app.prepare();

  console.log(`Connecting to ${MONGO_URL}`);
  mongoose.connect(MONGO_URL, { useNewUrlParser: true });
  const db = yield mongoose.connection;

  // Configure express to expose a REST API
  const server = express();
  server.use(cors());
  server.use(body.json());
  server.use((req, res, next) => {
    // Also expose the MongoDB database handle so Next.js can access it.
    req.db = db;
    next();
  });
  server.use('/api', api(db, upload));

  // make clean URL's possible from server
  server.get('/piece/:id', (req, res) => {
    const actualPage = '/piece';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/works/:collection', (req, res) => {
    const actualPage = '/works';
    const queryParams = { collection: req.params.collection.toLowerCase() };
    app.render(req, res, actualPage, queryParams);
  });

  // Everything that isn't '/api' gets passed along to Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}).catch(error => console.error(error.stack));
