function counter() {
  let count = 0;
  setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
}

// Example Usage
// counter();

let count = 0;
function counter2() {
  setTimeout(() => {
    count++;
    console.log(count);
    counter2();
  }, 1000);
}

// Example Usage
counter2();
