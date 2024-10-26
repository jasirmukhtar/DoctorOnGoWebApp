// // import { promises as fs } from 'fs';
// // import path from 'path';
// // import formidable from 'formidable';

// // // Disable Next.js' default body parser for file uploads
// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const form = formidable();

// //     form.parse(req, async (err, fields, files) => {
// //       if (err) {
// //         console.error("Error parsing form:", err);
// //         res.status(500).json({ error: 'Failed to parse form data' });
// //         return;
// //       }

// //       // Handle the file correctly from the formidable result
// //       const file = Array.isArray(files.prescription) ? files.prescription[0] : files.prescription;

// //       // Log fields and files for debugging
// //       console.log('Fields:', fields);
// //       console.log('Files:', files);

// //       if (!file || !file.filepath) {
// //         res.status(400).json({ error: 'No file uploaded or invalid file' });
// //         return;
// //       }

// //       // // Define the upload directory
// //       const uploadDir = path.join(process.cwd(), '/public/EHR');

// //       await fs.mkdir(uploadDir, { recursive: true }); // Ensure the directory exists

// //       // Construct a unique filename (you can modify how the file is named)
// //       const newFileName = `prescription-${Date.now()}${path.extname(file.originalFilename)}`;
      


// //       const filePath = path.join(uploadDir, newFileName);

// //       console.log('Saving file to:', filePath); // Debug the file-saving path

// //       try {
// //         // Move and rename the uploaded file
// //         await fs.rename(file.filepath, filePath);
// //         res.status(200).json({ message: 'File uploaded successfully', filePath });
// //       } catch (error) {
// //         console.error("Error saving file:", error);
// //         res.status(500).json({ error: 'Failed to save the file' });
// //       }
// //     });
// //   } else {
// //     res.status(405).json({ error: 'Method not allowed' });
// //   }
// // }


// import { promises as fs } from 'fs';
// import path from 'path';
// import formidable from 'formidable';

// // Disable Next.js' default body parser for file uploads
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const form = formidable();

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         console.error("Error parsing form:", err);
//         res.status(500).json({ error: 'Failed to parse form data' });
//         return;
//       }

//       // Get the patientId from the fields (this was passed from the frontend)
//       const patientId = fields.patientId;
//       const file = Array.isArray(files.prescription) ? files.prescription[0] : files.prescription;

//       if (!file || !file.filepath) {
//         res.status(400).json({ error: 'No file uploaded or invalid file' });
//         return;
//       }

//       // Define the upload directory
//       const uploadDir = path.join(process.cwd(), '/public/EHR');

//       await fs.mkdir(uploadDir, { recursive: true }); // Ensure the directory exists

//       // Construct the file name using patientId
//       const newFileName = `prescription-${patientId}-${Date.now()}${path.extname(file.originalFilename)}`;

//       const filePath = path.join(uploadDir, newFileName);

//       console.log('Saving file to:', filePath); // Debug the file-saving path

//       try {
//         // Move and rename the uploaded file
//         await fs.rename(file.filepath, filePath);
//         res.status(200).json({ message: 'File uploaded successfully', filePath });
//       } catch (error) {
//         console.error("Error saving file:", error);
//         res.status(500).json({ error: 'Failed to save the file' });
//       }
//     });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

import { promises as fs } from 'fs';
import path from 'path';
import formidable from 'formidable';

// Disable Next.js' default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        res.status(500).json({ error: 'Failed to parse form data' });
        return;
      }

      // Access the userId from fields
      const userId = fields.userId;
      console.log('User ID:', userId); // You can now use userId in your logic

      // Handle the file correctly from the formidable result
      const file = Array.isArray(files.prescription) ? files.prescription[0] : files.prescription;

      if (!file || !file.filepath) {
        res.status(400).json({ error: 'No file uploaded or invalid file' });
        return;
      }

      // Define the upload directory
      const uploadDir = path.join(process.cwd(), '/public/EHR');

      await fs.mkdir(uploadDir, { recursive: true }); // Ensure the directory exists

      // Construct a unique filename using the userId
      const newFileName = `${userId}${path.extname(file.originalFilename)}`;
      const filePath = path.join(uploadDir, newFileName);

      console.log('Saving file to:', filePath); // Debug the file-saving path

      try {
        // Move and rename the uploaded file
        await fs.rename(file.filepath, filePath);
        res.status(200).json({ message: 'File uploaded successfully', filePath });
      } catch (error) {
        console.error("Error saving file:", error);
        res.status(500).json({ error: 'Failed to save the file' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
