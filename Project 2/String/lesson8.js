window.onload = function() {
    document.body.style.backgroundColor = 'black';
  }
  
  function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
    var myButton = document.getElementById('myButton');
    myButton.style.display = 'none';
    changeButtonColor("lightblue");
    changeButtonColor1("lightgreen");
  
  
  }
  
  const consoleEl = document.getElementById('console');
  const lines = ['Welcome in this lesson you will learn about Strings','Click the button to start'];
  // Animate the console to print out the lines
  const animateConsole = (lines, lineIndex = 0, charIndex = 0) => {
    if (lineIndex === lines.length) return;
    const line = lines[lineIndex];
    if (charIndex === 0) {
      consoleEl.innerHTML += '<br/>';
    }
    consoleEl.innerHTML += line.charAt(charIndex);
    charIndex++;
    if (charIndex === line.length) {
      lineIndex++;
      charIndex = 0;
    }
    setTimeout(() => animateConsole(lines, lineIndex, charIndex), 50);
  };
  
  animateConsole(lines);
  
  const codeEl = document.getElementById("code");
      const exampleEl = document.getElementById("example");
      const startButtonEl = document.getElementById("startButton");
  
      startButtonEl.addEventListener("click", function() {
        codeEl.classList.add("hidden");
        exampleEl.classList.remove("hidden");
      });
      function changeButtonColor(color) {
        const startButton = document.getElementById("startButton");
        startButton.style.backgroundColor = color;
      }
  
      function changeButtonColor1(color) {
        const ee = document.getElementById("dd");
        ee.style.backgroundColor = color;
      }
      