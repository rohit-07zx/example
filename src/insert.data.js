import fs, { promises } from "fs";

export default async function saveAsTxt(data1) {
  const data = JSON.stringify(data1);

  // File path
  const filePath = "data1.txt";

  // Write data to file
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log("Data has been written to file successfully.");
  });
}
