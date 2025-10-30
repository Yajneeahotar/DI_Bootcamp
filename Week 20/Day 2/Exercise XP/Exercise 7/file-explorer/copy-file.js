// copy-file.js
import fs from 'fs';

// Read content from source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
if (err) {
console.error('Error reading source file:', err);
return;
}

// Write content to destination.txt
fs.writeFile('destination.txt', data, (err) => {
if (err) {
    console.error('Error writing destination file:', err);
    return;
}

console.log('File copied successfully!');
});
});
