const slider = document.getElementById("myRange");
const valueOutput = document.getElementById("demo");

// Set the default slider values
let min = 1;
let max = 100;
let value = 50;

// Update the money value based on the default slider value
valueOutput.innerHTML = "$" + (value * 100).toFixed(2);

// Create the slider and listen for changes to the slider value
slider.addEventListener("input", function (event) {
  // Update the money value based on the current slider value
  const currentValue = event.target.value;
  const price = currentValue * 20;
  valueOutput.innerHTML = "$" + price.toFixed(2);
});


// reusable footer

const footer = document.getElementById(".footer");
const xhr = new XMLHttpRequest();
xhr.open("GET", "/footer.html");
xhr.onload = function () {
  footer.innerHTML = xhr.responseText;
};
xhr.send();
