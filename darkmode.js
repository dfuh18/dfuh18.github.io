document.getElementById('darkModeToggle').addEventListener('click', function() {
  const moon = this.querySelector('.fa-moon');
  const sun = this.querySelector('.fa-sun');
  const language = document.getElementById('language');
  if (moon.style.display === 'none') {
    sun.style.display = 'none';
    moon.style.display = 'inline-block';
    moon.style.color = "white";
    // store the state in localStorage
    document.querySelectorAll('.text-muted').forEach(el => el.classList.replace('text-muted', 'text-white'));
    //change navbar color
    document.getElementById("currentpagelink").classList.replace('link-secondary', 'link-light');
    document.getElementById("difpagelink").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink1").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink2").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink3").classList.replace('link-dark', 'link-secondary');
    language.style.color = "white";

    if (document.getElementById("download") != null) document.getElementById("download").style.backgroundColor = "lightslategrey";
    localStorage.setItem("darkMode", "on");
  } else {
    moon.style.display = 'none';
    sun.style.display = 'inline-block';
    sun.style.color = "black";
    // store the state in localStorage
    document.querySelectorAll('.text-white').forEach(el => el.classList.replace('text-white', 'text-muted'));

    document.getElementById("currentpagelink").classList.replace('link-light', 'link-secondary');
    document.getElementById("difpagelink").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink1").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink2").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink3").classList.replace('link-secondary', 'link-dark');
    language.style.color = "black";

    if (document.getElementById("download") != null)  document.getElementById("download").style.backgroundColor = "#edf5ff";
    localStorage.setItem("darkMode", "off");
  }
  // Toggle dark mode
  document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", function(){
  const moon = this.querySelector('.fa-moon');
  const sun = this.querySelector('.fa-sun');
  const language = document.getElementById('language');
  let darkMode = localStorage.getItem("darkMode");
  if(darkMode === "on"){
    document.body.classList.add("dark-mode");
    document.querySelector('.fa-moon').style.display = 'inline-block';
    document.querySelector('.fa-sun').style.display = 'none';
    document.querySelectorAll('.text-muted').forEach(el => el.classList.replace('text-muted', 'text-white'));
    document.getElementById("currentpagelink").classList.replace('link-secondary', 'link-light');
    document.getElementById("difpagelink").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink1").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink2").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink3").classList.replace('link-dark', 'link-secondary');

    if (document.getElementById("download") != null) document.getElementById("download").style.backgroundColor = "#lightslategrey";
    language.style.color = "white";
    moon.style.color = "white";

  }else{
    document.body.classList.remove("dark-mode");
    document.querySelector('.fa-moon').style.display = 'none';
    document.querySelector('.fa-sun').style.display = 'inline-block';
    document.querySelectorAll('.text-white').forEach(el => el.classList.replace('text-white', 'text-muted'));
    document.getElementById("currentpagelink").classList.replace('link-light', 'link-secondary');
    document.getElementById("difpagelink").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink1").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink2").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink3").classList.replace('link-secondary', 'link-dark');


    if (document.getElementById("download") != null)  document.getElementById("download").style.backgroundColor = "#edf5ff";
    language.style.color = "black";
    sun.style.color = "black";
  }
});
