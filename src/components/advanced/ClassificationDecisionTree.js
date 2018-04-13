import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'react-md/lib/index';
import {CLASSIFICATION, NEXT_ACTIVITY, REGRESSION} from '../../reference';
import SelectField from 'react-md/lib/SelectFields/index';
import {classificationDecisionTreeCriterion, classificationDecisionTreeSplitter} from '../../advancedConfig';

const defaults = {
  'criterion': 'gini',
  'splitter': 'best',
  'max_depth': null,
  'min_samples_split': 2,
  'min_samples_leaf': 1
};
const ClassificationDecisionTree = (props) => {
  const methodConfig = `${props.predictionMethod}.decisionTree`;

  const criterion = <SelectField
    id="criterion"
    label="criterion"
    className="md-cell md-cell--4"
    menuItems={classificationDecisionTreeCriterion}
    position={SelectField.Positions.BELOW}
    onChange={props.onChange.bind(this, methodConfig, 'criterion')}
    defaultValue={defaults.criterion}
  />;
  const splitter = <SelectField
    id="splitter"
    label="splitter"
    className="md-cell md-cell--4"
    menuItems={classificationDecisionTreeSplitter}
    position={SelectField.Positions.BELOW}
    onChange={props.onChange.bind(this, methodConfig, 'splitter')}
    defaultValue={defaults.splitter}
  />;
  const maxDepth = <TextField
    id="max_depth"
    label="max_depth"
    type="number"
    defaultValue={defaults.max_depth}
    onChange={props.onChange.bind(this, methodConfig, 'max_depth')}
    min={0}
    className="md-cell md-cell--4"
  />;
  const minSamplesSplit = <TextField
    id="min_samples_split"
    label="min_samples_split"
    type="number"
    defaultValue={defaults.min_samples_split}
    onChange={props.onChange.bind(this, methodConfig, 'min_samples_split')}
    min={0}
    className="md-cell md-cell--4"
    required
  />;
  const minSamplesLeaf = <TextField
    id="min_samples_leaf"
    label="min_samples_leaf"
    type="number"
    defaultValue={defaults.min_samples_leaf}
    onChange={props.onChange.bind(this, methodConfig, 'min_samples_leaf')}
    min={0}
    className="md-cell md-cell--4"
    required
  />;

  return [criterion, splitter, maxDepth, minSamplesSplit, minSamplesLeaf];
};

ClassificationDecisionTree.propTypes = {
  onChange: PropTypes.func.isRequired,
  predictionMethod: PropTypes.oneOf([CLASSIFICATION, REGRESSION, NEXT_ACTIVITY]).isRequired
};
export default ClassificationDecisionTree;
