const fs = require('fs');
const PDFDocument = require('pdfkit');

let textPath = 'text-file.txt';
let pdfPath = 'output-file.pdf';

const createPDF = () => {
  const doc = new PDFDocument();
  const writeStream = fs.createWriteStream(pdfPath);
  doc.pipe(writeStream);
  const readStream = fs.createReadStream(textPath);
  readStream.on('data', (chunk) => {
    doc.text(chunk.toString());
  });

  readStream.on('end', () => {
    doc.end();
    console.log('PDF creation done');
  });

  readStream.on('error', (error) => {
    console.error('Error reading the text file:', error);
  });

  writeStream.on('finish', () => {
    console.log('PDF writing completed!');
  });

  writeStream.on('error', (error) => {
    console.error('Error writing the PDF file:', error);
  });
};

createPDF();
