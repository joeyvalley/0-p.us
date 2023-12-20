const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'assets/img/profile'); // Adjust 'images' to your directory name
const outputFile = path.join(__dirname, 'src', 'imagesList.js'); // Output file in your src directory

const images = fs.readdirSync(imagesDir)
  .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)); // Filter to include only image files

fs.writeFileSync(outputFile, `export const imagesList = ${JSON.stringify(images)};`);
