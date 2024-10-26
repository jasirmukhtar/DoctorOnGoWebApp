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

const AppointmentsPerDoctor: React.FC<Props> = ({ data }) => {
  const doctorCount = data.reduce<Record<string, number>>((acc, curr) => {
    acc[curr["Name of Doctor"]] = (acc[curr["Name of Doctor"]] || 0) + 1;
    return acc;
  }, {});

  const chartData: ChartData<'bar'> = {
    labels: Object.keys(doctorCount),
    datasets: [
      {
        label: 'Count of Appointments',
        data: Object.values(doctorCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default AppointmentsPerDoctor;
