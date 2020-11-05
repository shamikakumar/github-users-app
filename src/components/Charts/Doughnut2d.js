import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);

const ChartComponent = ({data}) =>{
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        caption: "Stars per Language",
        theme: "candy",
        decimals: 0,
        showPercentValues:0,
        pieRadius: '45%',
      },
      data
    },
  };
  return <ReactFC {...chartConfigs} />;
}

export default ChartComponent;