// Put your application javascript here
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const show = document.getElementById("show");

  btn.addEventListener("click", function () {
    if (show.style.display == "none") {
      show.style.display = "flex";
      btn.classList.add("transform-rotate");
    } else {
      show.style.display = "none";
      btn.classList.remove("transform-rotate");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn1");
  const show = document.getElementById("show1");

  btn.addEventListener("click", function () {
    if (show.style.display == "none") {
      show.style.display = "flex";
      btn.classList.add("transform-rotate");
    } else {
      show.style.display = "none";
      btn.classList.remove("transform-rotate");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn2");
  const show = document.getElementById("show2");

  btn.addEventListener("click", function () {
    if (show.style.display == "none") {
      show.style.display = "flex";
      btn.classList.add("transform-rotate");
    } else {
      show.style.display = "none";
      btn.classList.remove("transform-rotate");
    }
  });
});

// Put your application javascript here

document.addEventListener("DOMContentLoaded", function () {
  const btn_down = document.getElementById("btn-down");
  const btn_up = document.getElementById("btn-up");
  const btn_sort_down = document.getElementById("btn-sort-down");
  const btn_sort_up = document.getElementById("btn-sort-up");

  const down = document.getElementById("down");
  const up = document.getElementById("up");
  const sort_down = document.getElementById("sort-down");
  const sort_up = document.getElementById("sort-up");

  const container_box = document.getElementById("container-box");
  const container_sort = document.getElementById("container-sort");

  const sort = document.getElementById("sort");

  const box_show_off = function () {
    container_box.classList.add("hidden");
    sort.classList.add("hidden");
  };
  const box_show_on = function () {
    container_box.classList.remove("hidden");
  };
  const change_box_size = function () {
    container_sort.classList.toggle("container-sort-max");
    container_sort.classList.toggle("container-sort");
  };
  sort.addEventListener("click", function () {
    container_box.classList.toggle("hidden");
  });

  btn_down.addEventListener("click", function () {
    down.classList.remove("hidden");
    box_show_off();
    change_box_size();
  });
  btn_up.addEventListener("click", function () {
    up.classList.remove("hidden");
    box_show_off();
    change_box_size();
  });
  btn_sort_down.addEventListener("click", function () {
    sort_down.classList.remove("hidden");
    box_show_off();
    change_box_size();
  });
  btn_sort_up.addEventListener("click", function () {
    sort_up.classList.remove("hidden");
    box_show_off();
    change_box_size();
  });
  down.addEventListener("click", function () {
    box_show_on();
    down.classList.add("hidden");
    sort.classList.remove("hidden");
    change_box_size();
  });
  up.addEventListener("click", function () {
    box_show_on();
    up.classList.add("hidden");
    sort.classList.remove("hidden");
    change_box_size();
  });
  sort_down.addEventListener("click", function () {
    box_show_on();
    sort_down.classList.add("hidden");
    sort.classList.remove("hidden");
    change_box_size();
  });
  sort_up.addEventListener("click", function () {
    box_show_on();
    sort_up.classList.add("hidden");
    sort.classList.remove("hidden");
    change_box_size();
  });
});
