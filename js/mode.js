const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.className = "theme-toggle";
toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
document.body.appendChild(toggleThemeBtn);

// 현재 모드 저장
let isLightMode = false;

// ✅ 이벤트 리스너 하나로 통합!
toggleThemeBtn.addEventListener("click", () => {
  isLightMode = !isLightMode;

  document.body.classList.toggle("light-mode", isLightMode);
  toggleThemeBtn.innerHTML = isLightMode
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  // 영상 전환
  const heroVideo = document.querySelector(".hero-video source");
  heroVideo.src = isLightMode ? "video/hero-light.mp4" : "video/hero.mp4";
  document.querySelector(".hero-video").load();

  // 로고 전환 (logo는 이미 위에서 선언된 걸 사용)
  const logo = document.getElementById("logo");
  logo.src = isLightMode ? "images/logo.svg" : "images/logo-gray.svg";
});

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
