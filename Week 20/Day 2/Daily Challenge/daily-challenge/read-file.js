
import { readFile } from 'fs';

readFile('./files/file-data.txt', 'utf8', (err, data) => 
{
    if (err) 
    {
        console.error('Error reading source file:', err);
        return;
    }
    console.log('File copied successfully!');
})