import axios from 'axios';
import Link from 'next/link';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery/Gallery';
class Works extends React.Component {
  static async getInitialProps({ pathname, req }) {
    if (req) {
      const { db } = req;

      const data = await db
        .collection('works')
        .find()
        .toArray();

      return { data, pathname, from: 'server' };
    }

    const works = await axios.get('/api').then(res => {
      console.log('works again calling');

      return res.data;
    });

    return { data: works, pathname, from: 'rest api' };
  }

  render() {
    return (
      <Layout pathname={this.props.pathname}>
        <div>
          <p>This is Works page.</p>
          <p>path: {this.props.pathname}</p>
          <p>from: {this.props.from}</p>
          <Link href="/piece">
            <a>Dedicated item page</a>
          </Link>
          {/* <p>data: {this.props.data}</p> */}
          <Gallery data={this.props.data} />
        </div>
      </Layout>
    );
  }
}

export default Works;
