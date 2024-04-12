const fs = require("fs");

const data = "Hello World";

fs.writeFile("data.txt", data, () => {
  console.log("File written");
});
