  const greetings = ["Vanakkam!", "Welcome!", "Namaskaram!", "Namaskara!", "Namaste!"];
  const rotatingText = document.getElementById("rotating-text");
  let index = 0;

  setInterval(() => {
    rotatingText.style.opacity = 0; // fade out
    setTimeout(() => {
      index = (index + 1) % greetings.length;
      rotatingText.textContent = greetings[index];
      rotatingText.style.opacity = 1; // fade in
    }, 500);
  }, 3000); // change every 3 seconds