import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';
import React, { Component } from 'react';

function average(data){
	return _.round(_.sum(data)/data.length);
}
class Chart extends Component {
    render() {
      return (
        <div>
          <Sparklines data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
		  </Sparklines>
		  <div>{average(this.props.data)} {this.props.unit}</div>
        </div>
      );
    }
}

export default Chart;