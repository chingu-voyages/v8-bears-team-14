import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import Layout from '../components/Layout';
import {
  Wrapper,
  Image,
  Figure,
  ImageWrapper,
  Text
} from '../styles/Commissions';
import { Mail } from '../styles/Shared';

const Commissions = ({ collections }) => (
  <Layout
    pathname={false}
    collections={collections}
    title="Commissions | Dovile Jewellery"
  >
    <Wrapper>
      <ImageWrapper>
        <Figure>
          <Image src="../static/images/ffffr-12.JPG" alt="Cufflinks" />
        </Figure>
      </ImageWrapper>
      <Text>
        <Typography
          color="secondary"
          variant="h5"
          gutterBottom
          style={{
            paddingTop: '20px'
          }}
        >
          COMMISSIONS
        </Typography>
        <Typography align="left" paragraph variant="body1">
          For any interest, please{' '}
          <Mail href="mailto:hello@dovilejewellery.com" target="_top">
            e-mail me
          </Mail>{' '}
          stating the item you are interested in, from my designs. I am
          accepting ideas for customisations that fit my vision, aesthetics and
          work principles. The design, price, time frame and delivery will be
          discussed by email or in person.
        </Typography>

        <Typography align="left" paragraph variant="body1">
          Most of my designs could be re-created in new different ways as in
          different materials, gold-plating, different gemstones etc. Feel free
          to ask. I am making one of a kind pieces so each is unique and
          special.
        </Typography>
        <Typography align="left" paragraph variant="body1">
          Please note, I do not make copies of designs by other makers.
        </Typography>
      </Text>
    </Wrapper>
  </Layout>
);

Commissions.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.string)
};

export default Commissions;
