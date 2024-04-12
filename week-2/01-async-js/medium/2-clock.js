function getTime() {
  const now = new Date();

  let hh = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();

  console.log(
    `${hh > 9 ? hh : "0" + hh}:${mm > 9 ? mm : "0" + mm}:${
      ss > 9 ? ss : "0" + ss
    }`
  );
}

setInterval(getTime, 1000);
