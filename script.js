let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      string = string.replace(/X/g, "*"); // Replace "X" with "*"
      let result = eval(string);
      document.querySelector('input').value = result;
    } else if (value === "C") {
      string = "";
      document.querySelector('input').value = string;
    } else {
      string += value;
      document.querySelector('input').value = string;
    }
  });
});
