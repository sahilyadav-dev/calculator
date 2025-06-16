let calculation = localStorage.getItem("calculation") || "";

      function calculator(digit) {
        calculation += digit;
        print();
      }

      function print() {
        document.querySelector(".js-p").innerHTML = calculation;
      }

      function deleted() {
        calculation = calculation.slice(0, -1);
      }