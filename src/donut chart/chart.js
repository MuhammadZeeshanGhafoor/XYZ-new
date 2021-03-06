import DonutChart from 'donut-chart-js';

const DChart = () => {
  return (
    <DonutChart data={[
      { label: 'red', value: 120, color: '#F15F5F' },
      { label: 'green', value: 250, color: '#BCE55C' },
      { label: 'blue', value: 180, color: '#B2CCFF' },
      { label: 'yellow', value: 70, color: '#FFE08C' },
    ]
    
}
/>
    )
  };

export default DChart;