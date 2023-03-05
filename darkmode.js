document.getElementById('darkModeToggle').addEventListener('click', function() {
  const moon = this.querySelector('.fa-moon');
  const sun = this.querySelector('.fa-sun');
  const language = document.getElementById('language');
  const blogsIcon = document.getElementById('blogs-icon');
  if (moon.style.display === 'none') {
    sun.style.display = 'none';
    moon.style.display = 'inline-block';
    moon.style.color = "white";
    blogsIcon.style.color = "white";
    // store the state in localStorage
    document.querySelectorAll('.text-muted').forEach(el => el.classList.replace('text-muted', 'text-white'));
    //change navbar color
    if(document.getElementById("currentpagelink")){
      document.getElementById("currentpagelink").classList.replace('link-secondary', 'link-light')
    };
    document.getElementById("difpagelink").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink1").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink2").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink3").classList.replace('link-dark', 'link-secondary');
    if (document.getElementById("NOcurrentpagelink")) {
      document.getElementById("NOcurrentpagelink").classList.replace('link-dark', 'link-secondary');
    }
    language.style.color = "white";

    if (document.getElementById("invert-0")) { 
      document.getElementById("invert-0").style.filter = "invert(100%)";
      document.getElementById("invert-1").style.filter = "invert(100%)";
      document.getElementById("invert-2").style.filter = "invert(100%)";
      document.getElementById("invert-3").style.filter = "invert(100%)";
      document.getElementById("invert-4").style.filter = "invert(100%)";
      document.getElementById("invert-5").style.filter = "invert(100%)";
    }

    if (document.getElementById("custom-hero-bg")){
      document.querySelectorAll('.custom-bg-hero-light').forEach(el => el.classList.replace('custom-bg-hero-light', 'custom-bg-hero-dark'));
    };
    
    localStorage.setItem("darkMode", "on");
  } else {
    moon.style.display = 'none';
    sun.style.display = 'inline-block';
    sun.style.color = "black";
    // store the state in localStorage
    document.querySelectorAll('.text-white').forEach(el => el.classList.replace('text-white', 'text-muted'));

    if(document.getElementById("currentpagelink")){
      document.getElementById("currentpagelink").classList.replace('link-light', 'link-secondary')
    };
    document.getElementById("difpagelink").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink1").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink2").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink3").classList.replace('link-secondary', 'link-dark');
    if (document.getElementById("NOcurrentpagelink")) {
      document.getElementById("NOcurrentpagelink").classList.replace('link-secondary', 'link-dark');
    }
    language.style.color = "black";
    blogsIcon.style.color = "black";

    if (document.getElementById("invert-0")) { 
      document.getElementById("invert-0").style.filter = "invert(0)";
      document.getElementById("invert-1").style.filter = "invert(0)";
      document.getElementById("invert-2").style.filter = "invert(0)";
      document.getElementById("invert-3").style.filter = "invert(0)";
      document.getElementById("invert-4").style.filter = "invert(0)";
      document.getElementById("invert-5").style.filter = "invert(0)";
    }

    if (document.getElementById("custom-hero-bg")){
      document.querySelectorAll('.custom-bg-hero-dark').forEach(el => el.classList.replace('custom-bg-hero-dark','custom-bg-hero-light'));
    };

    localStorage.setItem("darkMode", "off");
  }
  // Toggle dark mode
  document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", function(){
  const moon = this.querySelector('.fa-moon');
  const sun = this.querySelector('.fa-sun');
  const language = document.getElementById('language');
  const blogsIcon = document.getElementById('blogs-icon');
  let darkMode = localStorage.getItem("darkMode");
  if(darkMode === "on"){
    document.body.classList.add("dark-mode");
    document.querySelector('.fa-moon').style.display = 'inline-block';
    document.querySelector('.fa-sun').style.display = 'none';
    document.querySelectorAll('.text-muted').forEach(el => el.classList.replace('text-muted', 'text-white'));
    if(document.getElementById("currentpagelink")){
      document.getElementById("currentpagelink").classList.replace('link-secondary', 'link-light')
    };
    document.getElementById("difpagelink").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink1").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink2").classList.replace('link-dark', 'link-secondary');
    document.getElementById("difpagelink3").classList.replace('link-dark', 'link-secondary');
    if (document.getElementById("NOcurrentpagelink")) {
      document.getElementById("NOcurrentpagelink").classList.replace('link-dark', 'link-secondary');
    }

    if (document.getElementById("invert-0")) { 
      document.getElementById("invert-0").style.filter = "invert(100%)";
      document.getElementById("invert-1").style.filter = "invert(100%)";
      document.getElementById("invert-2").style.filter = "invert(100%)";
      document.getElementById("invert-3").style.filter = "invert(100%)";
      document.getElementById("invert-4").style.filter = "invert(100%)";
      document.getElementById("invert-5").style.filter = "invert(100%)";
    }

    if (document.getElementById("custom-hero-bg")){
      document.querySelectorAll('.custom-bg-hero-light').forEach(el => el.classList.replace('custom-bg-hero-light', 'custom-bg-hero-dark'));
    };

    language.style.color = "white";
    moon.style.color = "white";
    blogsIcon.style.color = "white";

  }else{
    document.body.classList.remove("dark-mode");
    document.querySelector('.fa-moon').style.display = 'none';
    document.querySelector('.fa-sun').style.display = 'inline-block';
    document.querySelectorAll('.text-white').forEach(el => el.classList.replace('text-white', 'text-muted'));
    if (document.getElementById("currentpagelink")) {
      document.getElementById("currentpagelink").classList.replace('link-light', 'link-secondary');
    }
    document.getElementById("difpagelink").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink1").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink2").classList.replace('link-secondary', 'link-dark');
    document.getElementById("difpagelink3").classList.replace('link-secondary', 'link-dark');
    if (document.getElementById("NOcurrentpagelink")) {
      document.getElementById("NOcurrentpagelink").classList.replace('link-secondary', 'link-dark');
    }

    if (document.getElementById("invert-0")) { 
      document.getElementById("invert-0").style.filter = "invert(0)";
      document.getElementById("invert-1").style.filter = "invert(0)";
      document.getElementById("invert-2").style.filter = "invert(0)";
      document.getElementById("invert-3").style.filter = "invert(0)";
      document.getElementById("invert-4").style.filter = "invert(0)";
      document.getElementById("invert-5").style.filter = "invert(0)";
    }

    if (document.getElementById("custom-hero-bg")){
      document.querySelectorAll('.custom-bg-hero-dark').forEach(el => el.classList.replace('custom-bg-hero-dark','custom-bg-hero-light'));
    };
    
    language.style.color = "black";
    blogsIcon.style.color = "black";
    sun.style.color = "black";
  }
});
