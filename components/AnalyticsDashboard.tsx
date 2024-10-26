// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import AppointmentsPerDoctor from './AppointmentsPerDoctor';
// // import GenderDistribution from './GenderDistribution';
// // import AppointmentTimeDistribution from './AppointmentTimeDistribution';
// // import AppointmentOverTime from './AppointmentOverTime';
// // import { parseCSV } from '@/lib/utils';

// // // Import and register Chart.js components
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ArcElement,
// // } from 'chart.js';

// // // Register required chart components
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ArcElement // For pie and doughnut charts
// // );

// // interface AppointmentData {
// //   "Name of Doctor": string;
// //   "Date": string;
// //   "Time": string;
// //   "Gender of Patient": string;
// // }

// // // Enum to track the selected trend
// // type Trend = "DoctorAppointments" | "GenderDistribution" | "TimeDistribution" | "OverTime";

// // const AnalyticsDashboard: React.FC = () => {
// //   const [data, setData] = useState<AppointmentData[]>([]);
// //   const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null); // To track selected trend

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const parsedData: AppointmentData[] = await parseCSV('/data.csv');  // Adjust the path
// //         setData(parsedData);
// //       } catch (error) {
// //         console.error("Error parsing CSV:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (data.length === 0) return <div>Loading...</div>;

// //   return (
// //     <div>
// //       <h2>Doctor Appointment Analytics</h2>
      
// //       {/* Buttons to Select Trends */}
// //       <div style={{ marginBottom: '20px' }}>
// //         <button onClick={() => setSelectedTrend("DoctorAppointments")}>Count of Appointments per Doctor</button>
// //         <button onClick={() => setSelectedTrend("GenderDistribution")}>Gender Distribution</button>
// //         <button onClick={() => setSelectedTrend("TimeDistribution")}>Appointment Time Distribution</button>
// //         <button onClick={() => setSelectedTrend("OverTime")}>Appointments Over Time</button>
// //       </div>

// //       {/* Conditionally render charts based on selected trend */}
// //       {selectedTrend === "DoctorAppointments" && <AppointmentsPerDoctor data={data} />}
// //       {selectedTrend === "GenderDistribution" && <GenderDistribution data={data} />}
// //       {selectedTrend === "TimeDistribution" && <AppointmentTimeDistribution data={data} />}
// //       {selectedTrend === "OverTime" && <AppointmentOverTime data={data} />}
// //     </div>
// //   );
// // };

// // export default AnalyticsDashboard;

// "use client";
// import React, { useEffect, useState } from 'react';
// import AppointmentsPerDoctor from './AppointmentsPerDoctor';
// import GenderDistribution from './GenderDistribution';
// import AppointmentTimeDistribution from './AppointmentTimeDistribution';
// import AppointmentOverTime from './AppointmentOverTime';
// import { parseCSV } from '@/lib/utils';

// // Import and register Chart.js components
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';

// // Register required chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement // For pie and doughnut charts
// );

// interface AppointmentData {
//   "Name of Doctor": string;
//   "Date": string;
//   "Time": string;
//   "Gender of Patient": string;
// }

// type Trend = "DoctorAppointments" | "GenderDistribution" | "TimeDistribution" | "OverTime";

// const AnalyticsDashboard: React.FC = () => {
//   const [data, setData] = useState<AppointmentData[]>([]);
//   const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null); // To track selected trend

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const parsedData: AppointmentData[] = await parseCSV('/data.csv');  // Adjust the path
//         setData(parsedData);
//       } catch (error) {
//         console.error("Error parsing CSV:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (data.length === 0) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>Doctor Appointment Analytics</h2>
      
//       {/* Buttons to Select Trends */}
//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={() => setSelectedTrend("DoctorAppointments")}>
//           Count of Appointments per Doctor
//         </button>
//         <button style={styles.button} onClick={() => setSelectedTrend("GenderDistribution")}>
//           Gender Distribution
//         </button>
//         <button style={styles.button} onClick={() => setSelectedTrend("TimeDistribution")}>
//           Appointment Time Distribution
//         </button>
//         <button style={styles.button} onClick={() => setSelectedTrend("OverTime")}>
//           Appointments Over Time
//         </button>
//       </div>

//       {/* Conditionally render charts based on selected trend */}
//       <div className="chart-container">
//         {selectedTrend === "DoctorAppointments" && <AppointmentsPerDoctor data={data} />}
//         {selectedTrend === "GenderDistribution" && <GenderDistribution data={data} />}
//         {selectedTrend === "TimeDistribution" && <AppointmentTimeDistribution data={data} />}
//         {selectedTrend === "OverTime" && <AppointmentOverTime data={data} />}
//       </div>
//     </div>
//   );
// };

// // Inline styles for buttons and layout
// const styles = {
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'space-between', // Ensures equal spacing between buttons
//     marginBottom: '20px',
//     flexWrap: 'wrap', // Allows wrapping on smaller screens
//   },
//   button: {
//     backgroundColor: '#4CAF50', // Green background color
//     color: 'white', // White text color
//     padding: '10px 20px', // Padding around the button
//     border: 'none', // Remove default border
//     borderRadius: '5px', // Rounded corners
//     cursor: 'pointer', // Pointer cursor on hover
//     fontSize: '16px', // Font size
//     transition: 'background-color 0.3s ease', // Smooth transition for hover effect
//     margin: '10px', // Margin around the buttons
//     flex: '1 1 220px', // Ensure buttons are flexible and have a minimum width
//     textAlign: 'center', // Center the text in the button
//   },
//   buttonHover: {
//     backgroundColor: '#45a049', // Darker green on hover
//   },
// };

// export default AnalyticsDashboard;

"use client";
import React, { useEffect, useState } from 'react';
import AppointmentsPerDoctor from './AppointmentsPerDoctor';
import GenderDistribution from './GenderDistribution';
import AppointmentTimeDistribution from './AppointmentTimeDistribution';
import AppointmentOverTime from './AppointmentOverTime';
import { parseCSV } from '@/lib/utils';

// Import and register Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // For pie and doughnut charts
);

// Define the data structure for appointments
interface AppointmentData {
  "Name of Doctor": string;
  "Date": string;
  "Time": string;
  "Gender of Patient": string;
}

// Define the possible trends for buttons
type Trend = "DoctorAppointments" | "GenderDistribution" | "TimeDistribution" | "OverTime";

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AppointmentData[]>([]); // Appointment data array state
  const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null); // State to track which chart is selected

  // Fetch and parse the CSV data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedData: AppointmentData[] = await parseCSV('/data.csv'); // Adjust the path to your CSV file
        setData(parsedData);
      } catch (error) {
        console.error("Error parsing CSV:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) return <div>Loading...</div>; // Display loading message while data is being fetched

  return (
    <div>
      <h2>Doctor Appointment Analytics</h2>
      
      {/* Buttons to Select Trends */}
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => setSelectedTrend("DoctorAppointments")}
        >
          Count of Appointments per Doctor
        </button>
        <button
          style={styles.button}
          onClick={() => setSelectedTrend("GenderDistribution")}
        >
          Gender Distribution
        </button>
        <button
          style={styles.button}
          onClick={() => setSelectedTrend("TimeDistribution")}
        >
          Appointment Time Distribution
        </button>
        <button
          style={styles.button}
          onClick={() => setSelectedTrend("OverTime")}
        >
          Appointments Over Time
        </button>
      </div>

      {/* Conditionally render charts based on selected trend */}
      <div className="chart-container">
        {selectedTrend === "DoctorAppointments" && <AppointmentsPerDoctor data={data} />}
        {selectedTrend === "GenderDistribution" && <GenderDistribution data={data} />}
        {selectedTrend === "TimeDistribution" && <AppointmentTimeDistribution data={data} />}
        {selectedTrend === "OverTime" && <AppointmentOverTime data={data} />}
      </div>
    </div>
  );
};

// Inline styles for buttons and layout
const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Ensures equal spacing between buttons
    marginBottom: '20px',
    flexWrap: 'wrap', // Allows wrapping on smaller screens
  },
  button: {
    backgroundColor: '#4CAF50', // Green background color
    color: 'white', // White text color
    padding: '10px 20px', // Padding around the button
    border: 'none', // Remove default border
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Pointer cursor on hover
    fontSize: '16px', // Font size
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
    margin: '10px', // Margin around the buttons
    flex: '1 1 220px', // Ensure buttons are flexible and have a minimum width
    textAlign: 'center', // Center the text in the button
  },
  buttonHover: {
    backgroundColor: '#45a049', // Darker green on hover
  },
};

export default AnalyticsDashboard;
