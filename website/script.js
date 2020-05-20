const addButton1 = document.getElementById("add1");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

const add1 = (num1, num2) => num1 + num2; // will concat as a string

addButton1.addEventListener("click", () => {
  console.log(add1(input1.value, input2.value));
  document.getElementById("output1").innerHTML = add1(
    input1.value,
    input2.value
  );
});

const addButton2 = document.getElementById("add2");
const input3 = document.getElementById("num3");
const input4 = document.getElementById("num4");

const add2 = (num1, num2) => Number(num1) + Number(num2); // will add as numbers

addButton2.addEventListener("click", () => {
  console.log(add2(input3.value, input4.value));
  document.getElementById("output2").innerHTML = add2(
    input3.value,
    input4.value
  );
});
