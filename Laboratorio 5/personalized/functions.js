//Sync red
var rR = document.getElementById('redR');
var fR = document.getElementById('redN');

rR.addEventListener('input', function (e) {
  fR.value = e.target.value;
  newColor();
});
fR.addEventListener('input', function (e) {
  rR.value = e.target.value;
  newColor();
});

//Sync green
var rG = document.getElementById('greenR');
var fG = document.getElementById('greenN');

rG.addEventListener('input', function (e) {
  fG.value = e.target.value;
  newColor();
});
fG.addEventListener('input', function (e) {
  rG.value = e.target.value;
  newColor();
});

//Sync blue
var rB = document.getElementById('blueR');
var fB = document.getElementById('blueN');

rB.addEventListener('input', function (e) {
  fB.value = e.target.value;
  newColor();
});
fB.addEventListener('input', function (e) {
  rB.value = e.target.value;
  newColor();
});

function newColor() {
	var r = document.querySelector('.red').value;
	var g = document.querySelector('.green').value;
	var b = document.querySelector('.blue').value;
	document.body.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
}