import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import axios from 'axios';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: '#9e2146',
    color: 'fff'
  },
  paddingTop: {
    paddingTop: '70px'
  },
  dangerButtons: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center'
  }
});

const DangerZone = ({
  classes,
  itemID,
  collection,
  removeItem,
  removeCollection
}) => {
  const deleteItem = id => {
    axios
      .delete('http://localhost:3000/api/delete', { params: { _id: id } })
      .then(res => {
        console.log(res.data.deletedItem);
        removeItem(res.data.deletedItem);
      })
      .catch(err => console.log(err));
  };

  const deleteCollection = collection => {
    axios
      .delete('http://localhost:3000/api/delete', { params: { collection } })
      .then(res => {
        removeCollection(res.data.deletedCollection);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={classes.paddingTop}>
      <Typography variant="h5" color="error" align="center">
        Danger zone
      </Typography>
      <div className={classes.dangerButtons}>
        <Button
          className={classes.button}
          type="submit"
          size="medium"
          variant="contained"
          color="secondary"
          onClick={() => {
            window.confirm('Are you sure you want to delete this item?') &&
              deleteItem(itemID);
          }}
        >
          Delete item
        </Button>
        <Button
          className={classes.button}
          type="submit"
          size="medium"
          variant="contained"
          color="secondary"
          onClick={() => {
            window.confirm(
              'Are you sure you want to delete the whole collection?'
            ) && deleteCollection(collection);
          }}
        >
          Delete whole collection
        </Button>
      </div>
    </div>
  );
};

DangerZone.propTypes = {
  collection: PropTypes.string.isRequired,
  itemID: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  removeCollection: PropTypes.func.isRequired
};

export default withStyles(styles)(DangerZone);