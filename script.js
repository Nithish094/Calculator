let showdot = true;
let val = (display) => {
  let dis = document.getElementById("display").value;
  //console.log(display === ".");
  if (display === ".") {
    if (showdot) {
      //console.log("lets see");
      document.getElementById("display").value += display;
      showdot = false;
    }
  } else {
    document.getElementById("display").value += display;
    //console.log("see");
  }
};

let operations = (display) => {
  let dis = document.getElementById("display").value.at(-1);
  console.log(dis);
  if (dis === "+" || dis === "-" || dis === "*" || dis === "/") {
    // console.log("no operations");
  } else {
    // console.log("gng to else block");
    showdot = true;
    document.getElementById("display").value += display;
  }
};

//Function that evaluates the digits and gives the result

function calculate() {
  let x = document.getElementById("display").value;
  let y = eval(x);
  document.getElementById("display").value = y;
}
//Function that clear the displays
function clr() {
  showdot = true;
  document.getElementById("display").value = "";
}

//Function that clears the last digit in display
function deleteLastDigit() {
  let dis = document.getElementById("display").value;
  if (dis.at(-1) === ".") {
    document.getElementById("display").value = display.value.slice(0, -1);
    showdot = true;
  } else {
    document.getElementById("display").value = display.value.slice(0, -1);
  }
}

// //Function that display value
// let va = (display) => {
//   document.getElementById("display").value += display;
// };

// //Function that evaluates the digits and gives the result
// function calculate() {
//   let x = document.getElementById("display").value;
//   let y = eval(x);
//   document.getElementById("display").value = y;
// }

// //Function that clear the display
// function clr() {
//   document.getElementById("display").value = "";
// }
// //Function that clears the last digit in display
// function deleteLastDigit() {
//   document.getElementById("display").value = display.value.slice(0, -1);
// }

