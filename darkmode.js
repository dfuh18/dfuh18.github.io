document.getElementById('darkModeToggle').addEventListener('click', function() {
  const moon = this.querySelector('.fa-moon');
  const sun = this.querySelector('.fa-sun');
  if (moon.style.display === 'none') {
    moon.style.display = 'inline-block';
    sun.style.display = 'none';
    // store the state in localStorage
    localStorage.setItem("darkMode", "on");
  } else {
    moon.style.display = 'none';
    sun.style.display = 'inline-block';
    // store the state in localStorage
    localStorage.setItem("darkMode", "off");
  }
  // Toggle dark mode
  document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", function(){
  let darkMode = localStorage.getItem("darkMode");
  if(darkMode === "on"){
    document.body.classList.add("dark-mode");
    document.querySelector('.fa-moon').style.display = 'inline-block';
    document.querySelector('.fa-sun').style.display = 'none';
  }else{
    document.body.classList.remove("dark-mode");
    document.querySelector('.fa-moon').style.display = 'none';
    document.querySelector('.fa-sun').style.display = 'inline-block';
  }
});
