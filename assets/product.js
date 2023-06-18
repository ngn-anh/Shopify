document.addEventListener("DOMContentLoaded", function () {
  const description = document.querySelector(".description");
  const policy = document.querySelector(".policy");
  description.addEventListener("click", function () {
    description.classList.toggle("hidden");
    policy.classList.toggle("hidden");
  });
  policy.addEventListener("click", function () {
    description.classList.toggle("hidden");
    policy.classList.toggle("hidden");
  });
  const number = Number(document.getElementById(number).textContent);
  console.log(number);
  const plus = document.querySelector(".plus");
  const sub = document.querySelector(".subtract");
  plus.addEventListener("click", function () {
    number++;
    document.getElementById(number).textContent = number;
    consolelog(number);
  });
  sub.addEventListener("click", function () {
    number--;
    document.getElementById(number).textContent = number;
  });
  const size = document.getElementById("size");
  const size_guide = document.getElementById("guide");
  size.addEventListener("click", function () {
    size_guide.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let number = Number(document.getElementById("number").textContent);
  const plus = document.getElementById("plus");
  const sub = document.getElementById("subtract");
  console.log(typeof number);
  plus.addEventListener("click", function () {
    number++;
    document.getElementById("number").textContent = number;
  });
  sub.addEventListener("click", function () {
    number--;
    document.getElementById("number").textContent = number;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const size = document.getElementById("size");
  const size_guide = document.getElementById("guide");
  const modal = document.querySelector("body");
  size.addEventListener("click", function () {
    size_guide.classList.remove("hidden");
    modal.classList.add("overlay");
  });
  const close = document.getElementById("close");
  close.addEventListener("click", function () {
    size_guide.classList.add("hidden");
    modal.classList.remove("overlay");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let thumbnails = document.getElementsByClassName("thumbnail");

  let activeImages = document.getElementsByClassName("active");

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
      console.log(activeImages);

      if (activeImages.length > 0) {
        activeImages[0].classList.remove("active");
      }

      this.classList.add("active");
      document.getElementById("featured").src = this.src;
    });
  }

  let buttonRight = document.getElementById("slideRight");
  let buttonLeft = document.getElementById("slideLeft");

  buttonLeft.addEventListener("click", function () {
    document.getElementById("slider").scrollLeft -= 180;
  });

  buttonRight.addEventListener("click", function () {
    document.getElementById("slider").scrollLeft += 180;
  });
});
