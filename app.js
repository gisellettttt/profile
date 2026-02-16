// SUPER SIMPLE - night mode that stays on all pages
document.addEventListener('DOMContentLoaded', function() {
  
  // get all night mode buttons
  let nightButtons = document.querySelectorAll('.night-btn');
  
  // check if night mode was on before
  if(localStorage.getItem('nightMode') === 'yes') {
    document.body.classList.add('night-mode');
  }
  
  // when any night button is clicked
  for(let i = 0; i < nightButtons.length; i++) {
    nightButtons[i].addEventListener('click', function() {
      // switch mode
      document.body.classList.toggle('night-mode');
      
      // remember the choice
      if(document.body.classList.contains('night-mode')) {
        localStorage.setItem('nightMode', 'yes');
        // change all buttons to say "Day Mode"
        for(let j = 0; j < nightButtons.length; j++) {
          nightButtons[j].textContent = 'Day Mode';
        }
      } else {
        localStorage.setItem('nightMode', 'no');
        // change all buttons to say "Night Mode"
        for(let j = 0; j < nightButtons.length; j++) {
          nightButtons[j].textContent = 'Night Mode';
        }
      }
    });
  }

  // MOBILE MENU (keep your existing code)
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  
  if(menuBtn) {
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('show');
      
      let lines = document.querySelectorAll('.line');
      menuBtn.classList.toggle('active');
      
      if(menuBtn.classList.contains('active')) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
      }
    });
  }
});