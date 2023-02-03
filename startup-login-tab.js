document.getElementById("scroll-to-getstarted").addEventListener("click", function() {
    window.scroll({
      top: document.getElementById("howto").offsetTop, 
      left: 0, 
      behavior: 'smooth' 
    });
  });