function createDropdown(dropdownId, buttonId, items) {
  var dropdown = document.getElementById(dropdownId);
  var button = document.getElementById(buttonId);
  var isOpen = false;

  function toggleDropdown() {
    if (isOpen) {
      dropdown.style.display = "none";
      isOpen = false;
    } else {
      dropdown.innerHTML = '<ul>' + 
        items.map(item => '<li><a href="' + item.toLowerCase() + '.html">' + item + '</a></li>').join('') + 
        '</ul>';
      dropdown.style.display = "block";
      isOpen = true;
    }
  }
  

  button.addEventListener("click", toggleDropdown);
}
createDropdown('dropdown', 'Basic', ['Variables','Booleans','Operators','Strings']);
createDropdown('dropdown2', 'Basic2', ['Functions', 'Arrays', 'Objects', 'Conditionals']);
var navLinks = document.querySelectorAll('#navlist li a');
navLinks.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    link.style.fontSize = '20px';
  });
  link.addEventListener('mouseout', function() {
    link.style.fontSize = '18px';
  });
});

const consoleEl = document.getElementById('console');
const lines = ['Welcome to our site!', 'We offer courses for beginners to learn JavaScript Click on the Menus on the left to Acess the courses and challenges', 'Contact Us for more information or Quesitons.'];

const animateConsole = (lines, lineIndex = 0, charIndex = 0) => {
  if (lineIndex === lines.length) {
    consoleEl.classList.add('fade-out');
    setTimeout(() => {
      consoleEl.innerHTML = '';
      consoleEl.classList.remove('fade-out');
    }, 3000); 
    return;
  }
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
  setTimeout(() => animateConsole(lines, lineIndex, charIndex), 45);
};

animateConsole(lines);



