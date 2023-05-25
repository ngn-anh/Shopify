// Put your application javascript here

//  Dropdown JS
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const show = document.getElementById("show");

  btn.addEventListener("click", function () {
    if (show.style.display == "none") {
      show.style.display = "flex";
      btn.classList.remove("transform-rotate");
    } else {
      show.style.display = "none";
      btn.classList.add("transform-rotate");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn1");
  const show = document.getElementById("show1");

  btn.addEventListener("click", function () {
    if (show.style.display == "none") {
      show.style.display = "flex";
      btn.classList.remove("transform-rotate");
    } else {
      show.style.display = "none";
      btn.classList.add("transform-rotate");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn2");
  const show = document.getElementById("show2");

  btn.addEventListener("click", function () {
    if (show.style.display == "none") {
      show.style.display = "flex";
      btn.classList.remove("transform-rotate");
    } else {
      show.style.display = "none";
      btn.classList.add("transform-rotate");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn_show");
  const show = document.getElementById("show_profile");

  btn.addEventListener("click", function () {
    if (show.style.display == "none") {
      show.style.display = "flex";
    } else {
      show.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("show_sidebar");
  const hidden = document.getElementById("hidden_sidebar");
  const sidebar = document.getElementById("sidebar")

  btn.addEventListener("click", function () {
      sidebar.style.display = "block"
  })

  hidden.addEventListener("click", function () {
    sidebar.style.display = "none"
  })
});
// End Dropdown js