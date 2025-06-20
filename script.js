let calculation = localStorage.getItem("calculation") || "";

function calculator(digit) {
  if (calculation.length <= 15) {
    calculation += digit;
    print();
  } else {
    alert("cant enter more than 15 digits");
  }
}

function print() {
  document.querySelector(".display").innerHTML = calculation;
}

function deleted() {
  calculation = calculation.slice(0, -1);
}

function result(){
  calculation= String(eval(calculation));
}
