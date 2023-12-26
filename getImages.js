import app from './firebase-config.js';
import { getDatabase, ref, query, orderByChild, get } from "firebase/database";
import fs from 'fs';
import path from 'path';
import process from 'process';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const outputFile = path.join(__dirname, 'src', 'fetchedData.json'); // Output JSON file

const database = getDatabase(app);

async function fetchData() {
  const dbRef = ref(database, 'profiles');
  const orderedQuery = query(dbRef, orderByChild("upload_date"));
  try {
    const snapshot = await get(orderedQuery);
    if (snapshot.exists()) {
      const fetchedData = snapshot.val();
      fs.writeFileSync(outputFile, JSON.stringify(fetchedData, null, 2)); // Write data to file
      console.log('Data fetched and written to file');
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
  process.exit();
};

// Call the function
fetchData();