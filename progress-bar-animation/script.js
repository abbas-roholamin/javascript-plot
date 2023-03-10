/** @format */

const progressBar = document.querySelector("#progress_bar");
const article = document.querySelector(".article");

const handelProgressBar = function (e) {
  const articelDistance = article.getBoundingClientRect();
  const srcrollDistance = -articelDistance.top;
  let progressWidth =
    (srcrollDistance /
      (articelDistance.height - document.documentElement.clientHeight)) *
    100;

  const value = Math.floor(progressWidth);
  progressBar.style.width = `${value}%`;
};

window.addEventListener("scroll", handelProgressBar);
