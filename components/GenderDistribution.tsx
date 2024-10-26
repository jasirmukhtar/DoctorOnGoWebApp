import React from 'react';
import { Pie } from 'react-chartjs-2';
const GenderDistribution: React.FC<Props> = ({ data }) => {
  // Filter valid gender data
  const filteredData = data.filter(appointment => appointment["Gender of Patient"]);
  // Count gender occurrences
  const genderCount = filteredData.reduce<Record<string, number>>((acc, curr) => {
    const gender = curr["Gender of Patient"];
    if (gender) {
      acc[gender] = (acc[gender] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(genderCount),
    datasets: [
      {
        label: 'Gender Distribution',
        data: Object.values(genderCount),
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default GenderDistribution;
