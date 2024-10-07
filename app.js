document.addEventListener('DOMContentLoaded', (event) => {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
  
    function updateBackgroundColor() {
      const red = redSlider.value;
      const green = greenSlider.value;
      const blue = blueSlider.value;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
  
    redSlider.addEventListener('input', updateBackgroundColor);
    greenSlider.addEventListener('input', updateBackgroundColor);
    blueSlider.addEventListener('input', updateBackgroundColor);
  });
  