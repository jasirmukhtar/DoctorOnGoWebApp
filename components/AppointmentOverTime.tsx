import React from 'react';
import { Line } from 'react-chartjs-2';
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

const AppointmentOverTime: React.FC<Props> = ({ data }) => {
  const appointmentsOverTime = data.reduce<Record<string, number>>((acc, curr) => {
    const date = curr["Date"];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const sortedDates = Object.keys(appointmentsOverTime).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  const chartData: ChartData<'line'> = {
    labels: sortedDates,
    datasets: [
      {
        label: 'Appointments Over Time',
        data: sortedDates.map((date) => appointmentsOverTime[date]),
        fill: false,
        borderColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default AppointmentOverTime;
