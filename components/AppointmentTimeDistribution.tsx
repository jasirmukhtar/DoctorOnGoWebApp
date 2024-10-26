import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

interface AppointmentData {
  "Name of Doctor": string;
  "Date": string;
  "Time": string;
  "Gender of Patient": string;
}

interface Props {
  data: AppointmentData[];
}

const AppointmentTimeDistribution: React.FC<Props> = ({ data }) => {
  const timeCount = data.reduce<Record<string, number>>((acc, curr) => {
    const time = new Date(curr["Date"] + ' ' + curr["Time"]).getHours();
    acc[time] = (acc[time] || 0) + 1;
    return acc;
  }, {});

  const chartData: ChartData<'bar'> = {
    labels: Object.keys(timeCount),
    datasets: [
      {
        label: 'Appointments by Hour',
        data: Object.values(timeCount),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default AppointmentTimeDistribution;
