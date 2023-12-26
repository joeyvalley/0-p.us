const app = require('./firebase-config');
const { getDatabase, ref, query, orderByChild, get } = require("firebase/database");
const fs = require('fs');
const path = require('path');
const { exit } = require('process');

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
  exit();
};

// Call the function
fetchData();
