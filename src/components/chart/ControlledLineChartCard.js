import React, {Component} from 'react';
import {CardText, CardTitle} from 'react-md/lib/Cards/index';
import PropTypes from 'prop-types';
import {jobPropType} from '../../propTypes';
import {makeLabels, makeTable} from '../../util/dataReducers';
import SelectField from 'react-md/lib/SelectFields/index';
import {CLASSIFICATION, REGRESSION, TIME_SERIES_PREDICTION} from '../../reference';
import Chart from 'react-google-charts';

/* eslint-disable no-unused-vars */
class ControlledLineChartCard extends Component {
    constructor(props) {
        super(props);

        const labels = makeLabels(this.props.jobs);
        const metricName = labels.length > 0 ? labels[0].label : null;
        this.state = {
            metricName, labels,
            predictionMethod: this.props.predictionMethod
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.predictionMethod !== this.props.predictionMethod) {
            const labels = makeLabels(this.props.jobs);
            const metricName = labels.length > 0 ? labels[0].label : null;
            this.setState({labels, metricName, predictionMethod: this.props.predictionMethod});
        }
    }

    selectChange(value) {
        this.setState({metricName: value});
    }

    getSelector() {
        return <SelectField
            id="metric-select"
            placeholder="Metric name"
            className="md-cell"
            menuItems={this.state.labels}
            position={SelectField.Positions.BELOW}
            onChange={this.selectChange.bind(this)}
            value={this.state.metricName}
        />;
    }

    render() {
        const data = makeTable(this.props.jobs, this.state.metricName);
        const columns = data[0].map((label) => {
            return {type: 'number', label};
        });
        const [_, ...rows] = data;
        const opts = {
            vAxis: {
                title: this.state.metricName
            },
            hAxis: {
                title: 'Prefix length',
                minValue: rows[0][0]
            },
            interpolateNulls: true,
            legend: {textStyle: {fontSize: 12}},
            chartArea: {right: 250, left: 100}
        };
        const chart = <Chart
            chartType="LineChart"
            rows={rows}
            columns={columns}
            options={opts}
            graph_id="rasdasfas"
            width="100%"
            legend_toggle
        />;
        return <div className="md-block-centered">
            <CardTitle title={`Prefix length by `}>{this.getSelector()}</CardTitle>
            <CardText>
                {rows.length === 0 ? 'No data' : chart}
            </CardText>
        </div>;
    }
}

ControlledLineChartCard.propTypes = {
    jobs: PropTypes.arrayOf(jobPropType).isRequired,
    predictionMethod: PropTypes.oneOf([CLASSIFICATION, REGRESSION, TIME_SERIES_PREDICTION]).isRequired,
};

export default ControlledLineChartCard;
