const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) return err;

  fs.writeFile("data.txt", data.split(" ").join(""), () => {
    console.log("Completed");
  });
})