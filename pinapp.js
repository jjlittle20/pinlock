var numEntered = [];
var pinCode = [7, 7, 7, 7];

function addNumToList(i) {
  if (numEntered.length == 4) return;
  numEntered.push(i);
  console.log(numEntered);
  console.log(pinCode);
  document.getElementById("code-num").innerHTML = numEntered.join("");
}
function removeLastNumInList() {
  numEntered.pop();
  console.log(numEntered);
  document.getElementById("code-num").innerHTML = numEntered.join("");
}
function unlockPinCode() {
  if (numEntered.length != pinCode.length) return changeBackgroundStyleFalse();
  else {
    for (var i = 0; i < pinCode.length; i++)
      if (numEntered[i] != pinCode[i]) return changeBackgroundStyleFalse();
    return changeBackgroundStyleTrue();
  }
}
function changeBackgroundStyleFalse() {
  document.getElementById("code-screen").style.background =
    "rgba( 255, 0, 0,0.2)";
  clearCodeScreen();
  setTimeout(returnBackgroundStyles, 500);
}
function changeBackgroundStyleTrue() {
  document.getElementById("code-screen").style.background =
    "rgba( 41, 115, 56, 0.2 ";
  clearCodeScreen();
  alert("You have unlocked your device");
  setTimeout(returnBackgroundStyles, 500);
}
function returnBackgroundStyles() {
  document.getElementById("code-screen").style = null;
}
function clearCodeScreen() {
  numEntered = [];
  document.getElementById("code-num").innerHTML = numEntered.join("");
}
