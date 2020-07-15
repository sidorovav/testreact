import React from 'react';
import PropTypes from 'prop-types';
import Test from './Test.jsx';

const Child = props => (
  <div>
    <Test prop1={prop1} />
  </div>
);

Child.propTypes = {};

export default Child;
