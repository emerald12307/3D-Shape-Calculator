//Sphere
document.getElementById("sphere-btn").addEventListener("click", sphereInputs);

function sphereInputs() {
  document.getElementById("base").innerHTML = "";
  document.getElementById("height").innerHTML = "";
  document.getElementById("length").innerHTML = "";
  document.getElementById("width").innerHTML = "";
  document.getElementById("sh").innerHTML = "";
  document.getElementById("calc-cube").innerHTML = "";
  document.getElementById("calc-rect-pri").innerHTML = "";
  document.getElementById("calc-squ-pyr").innerHTML = "";
  document.getElementById("img").src =
    "images/main-qimg-bc4c8f9aa81ad553b2921b79de60a08d.webp";
}

document.getElementById("calc-sph-btn").addEventListener("click", sphereCalc);

function sphereCalc() {
  //Input
  var r = +document.getElementById("rad").value;

  //Process
  let sa = +(4 * Math.PI * r ** 2).toFixed(2);
  let v = +((4 * Math.PI * r ** 3) / 3).toFixed(2);

  //Output
  document.getElementById("surface-area").innerHTML = sa;
  document.getElementById("volume").innerHTML = v;
}

//Cube
document.getElementById("cube-btn").addEventListener("click", cubeInputs);

function cubeInputs() {
  document.getElementById("calc-sphere").innerHTML = "";
  document.getElementById("calc-rect-pri").innerHTML = "";
  document.getElementById("calc-squ-pyr").innerHTML = "";
  document.getElementById("base").innerHTML = "";
  document.getElementById("radius").innerHTML = "";
  document.getElementById("width").innerHTML = "";
  document.getElementById("height").innerHTML = "";
  document.getElementById("sh").innerHTML = "";
  document.getElementById("img").src = "images/download.png";
}

document.getElementById("calc-cu-btn").addEventListener("click", cubeCalc);

function cubeCalc() {
  //input
  var l = +document.getElementById("len").value;

  //process
  let sa = 6 * l ** 2;
  let v = l ** 3;

  //Output
  document.getElementById("surface-area").innerHTML = sa;
  document.getElementById("volume").innerHTML = v;
}

// Rectangular Prism
document.getElementById("rect-prismBtn").addEventListener("click", rectInputs);

function rectInputs() {
  document.getElementById("base").innerHTML = "";
  document.getElementById("radius").innerHTML = "";
  document.getElementById("sh").innerHTML = "";
  document.getElementById("calc-cube").innerHTML = "";
  document.getElementById("calc-sphere").innerHTML = "";
  document.getElementById("calc-squ-pyr").innerHTML = "";
  document.getElementById("img").src = "images/RectPrism03.gif";
}

document.getElementById("calc-rp-btn").addEventListener("click", rectCalc);

function rectCalc() {
  //input
  var h = +document.getElementById("hei").value;
  var l = +document.getElementById("len").value;
  var w = +document.getElementById("wid").value;

  //Process
  let sa = 2 * (l * w + l * h + h * w);
  let v = l * w * h;

  //Output
  document.getElementById("surface-area").innerHTML = sa;
  document.getElementById("volume").innerHTML = v;
}

// Square Pyramid
document.getElementById("squ-pyramidBtn").addEventListener("click", triInputs);

function triInputs() {
  document.getElementById("radius").innerHTML = "";
  document.getElementById("length").innerHTML = "";
  document.getElementById("width").innerHTML = "";
  document.getElementById("calc-cube").innerHTML = "";
  document.getElementById("calc-rect-pri").innerHTML = "";
  document.getElementById("calc-sphere").innerHTML = "";
  document.getElementById("img").src =
    "images/surface-area-5-589ddb0a3df78c47588abad2.jpg";
}

document.getElementById("calc-sp-btn").addEventListener("click", squPyrCalc);

function squPyrCalc() {
  //input
  var b = +document.getElementById("bas").value;
  var h = +document.getElementById("hei").value;
  var sh = +document.getElementById("slant-height").value;

  //process
  let sa = (b ** 2 + 2 * b * sh).toFixed(2);
  let v = ((b ** 2 * h) / 3).toFixed(2);

  //Output
  document.getElementById("surface-area").innerHTML = sa;
  document.getElementById("volume").innerHTML = v;
}
// Clear Button
document.getElementById("reset-btn").addEventListener("click", reloadPage);

function reloadPage() {
  location.reload();
}
