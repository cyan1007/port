const cardList = document.querySelectorAll(".card");
const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal .text span");
// console.log(modalCloseBtn);

cardList.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
    // card.querySelector("video").play();
    // console.log("비디오 플레이!");
  });
  card.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
    // card.querySelector("video").pause();
    // console.log("비디오 일시정지!");
  });

  card.addEventListener("click", (e) => {
    let title = e.currentTarget.querySelector("h2").textContent;
    let desc = e.currentTarget.querySelector("p").textContent;
    let videoSrc = e.currentTarget.querySelector("video").getAttribute("src");
    // console.log(videoSrc);

    modal.querySelector("h1").textContent = title;
    modal.querySelector("p").textContent = desc;
    modal.querySelector("video").setAttribute("src", videoSrc);

    modal.querySelector("video").play();
    modal.classList.add("active");
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    // modal.querySelector("video").pause();
    modal.querySelector("video").src = "";
  });
});
