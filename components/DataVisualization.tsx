"use client"
import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Chart from 'chart.js/auto';
import styles from './DataVisualization.module.css';
import '../styles/global.css';

interface DoctorAppointmentData {
  doctorName: string;
  appointmentDate: string;
  patientGender: string;
  // Add other properties as needed based on your CSV file
}

const DoctorVisualization = () => {
  const [rawData, setRawData] = useState<DoctorAppointmentData[]>([]);

  const [showingAllTrends, setShowingAllTrends] = useState(false);
  const [charts, setCharts] = useState({});
  
  useEffect(() => {
    // Load CSV data with the correct type
    d3.csv<DoctorAppointmentData>('/data.csv')
      .then((data) => {
        setRawData(data);
        console.log('Data loaded:', data);
      })
      .catch((error) => console.error('Error loading CSV file:', error));
  }, []);
  // Implement your visualization logic here as functions or hooks
  return (
    <div className={styles.container}>
      <header>
        <h1>Doctor Appointment Data Visualization</h1>
      </header>
      <form id="filterForm" className={styles.filterForm}>
        {/* Form elements like dropdowns and buttons go here */}
      </form>
      <canvas id="appointmentsPerDoctorChart"></canvas>
      <canvas id="genderDistributionChart"></canvas>
      <canvas id="appointmentTimeHistogram"></canvas>
      <canvas id="appointmentLineChart"></canvas>
    </div>
  );

};

export default DoctorVisualization;
