import fs from 'node:fs';

export default function readFileToString(fileInputName: string) {
  try {
    const data = fs.readFileSync(fileInputName, 'utf8');
    return data;
  } catch (error) {
    console.log(error);
  }
}