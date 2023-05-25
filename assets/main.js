// Put your application javascript here
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("btn")
    const show = document.getElementById("show")
    
    btn.addEventListener("click", function() {
      if (show.style.display == "none") {
        show.style.display = "flex"
        btn.classList.add("transform-rotate")
      } else {
        show.style.display = "none"
        btn.classList.remove("transform-rotate")
      }
    })
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("btn1")
    const show = document.getElementById("show1")
    
    btn.addEventListener("click", function() {
      if (show.style.display == "none") {
        show.style.display = "flex"
        btn.classList.add("transform-rotate")
      } else {
        show.style.display = "none"
        btn.classList.remove("transform-rotate")
      }
    })
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("btn2")
    const show = document.getElementById("show2")
  
    
    btn.addEventListener("click", function() {
      if (show.style.display == "none") {
        show.style.display = "flex"
        btn.classList.add("transform-rotate")
      } else {
        show.style.display = "none"
        btn.classList.remove("transform-rotate")
      }
    })
  });