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
});

document.addEventListener("DOMContentLoaded", function () {
  let number = Number(document.querySelector(".number-result").value);
  const plus = document.getElementById("plus");
  const sub = document.getElementById("subtract");
  console.log(number);
  plus.addEventListener("click", function () {
    number++;
    document.querySelector(".number-result").value = number;
  });

  sub.addEventListener("click", function () {
    if (number > 1) number--;
    document.querySelector(".number-result").value = number;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  
  const close = document.getElementById("close");
  close.addEventListener("click", function () {
    size_guide.classList.add("hidden");
    modal.classList.remove("overlay");
    modal_size.classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const size = document.getElementById("size");
  const size_guide = document.getElementById("guide");
  const modal = document.getElementById("overlay");
  const modal_size = document.getElementById("modal-size");
  size.addEventListener("click", function () {
    size_guide.classList.remove("hidden");
    modal.classList.add("overlay");
    modal_size.classList.remove("hidden");
  });
  const close = document.getElementById("close");
  close.addEventListener("click", function () {
    size_guide.classList.add("hidden");
    modal.classList.remove("overlay");
    modal_size.classList.add("hidden");
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
