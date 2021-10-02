let maxLength = 9;
// Displays data on calculator display.
function displayData(value) {
  let displayContent = document.getElementById("prob").textContent;
  if (displayContent.length < maxLength) {
    if (displayContent == 0) {
      displayContent = value;
    } else {
      displayContent += value;
    }
  } else {
    if (maxLength == 9) {
      maxLength = 12;
      document.getElementById("prob").style.fontSize = "45px";
      displayContent += value;
    } else {
      console.log("Too Big");
    }
  }
  document.getElementById("prob").textContent = displayContent;
}
// Resets problem and answer to '0'.
function resetCalc() {
  document.getElementById("prob").textContent = "0";
  document.getElementById("prob").style.fontSize = "60px";
  document.getElementById("soln").textContent = "0";
  maxLength = 9;
}
// Removes last added numbers/sign from calculator display.
function remove() {
  let displayContent = document.getElementById("prob").textContent;
  let newDispalyContent = displayContent.substr(0, displayContent.length - 1);
  document.getElementById("prob").textContent = newDispalyContent || "0";
  if (newDispalyContent.length <= 9) {
    maxLength = 9;
    document.getElementById("prob").style.fontSize = "60px";
  }
}
// Evaluates problem statement and puts it in answer field.
// Rounds answer to 3 digits after decimal point.
function calculate() {
  let displayContent = document.getElementById("prob").textContent;
  try {
    document.getElementById("soln").textContent =
      Math.round(eval(displayContent) * 1000) / 1000;
  } catch (error) {
    alert("Invalid Expression");
  }
}
