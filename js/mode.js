// 기존 버튼 선택
const toggleThemeBtn = document.getElementById("themeToggle");

// 라이트 모드 상태 변수
let isLightMode = false;

toggleThemeBtn.addEventListener("click", () => {
  isLightMode = !isLightMode;

  // body에 light-mode 클래스 토글
  document.body.classList.toggle("light-mode", isLightMode);

  // 버튼 아이콘 변경 (해 / 달)
  toggleThemeBtn.innerHTML = isLightMode
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  // 히어로 영상 변경
  const heroVideoSource = document.querySelector(".hero-video source");
  heroVideoSource.src = isLightMode ? "video/hero-light.mp4" : "video/hero.mp4";
  document.querySelector(".hero-video").load();

  // 로고 이미지 변경
  const logo = document.getElementById("logo");
  logo.src = isLightMode ? "images/logo.svg" : "images/logo-gray.svg";
});

// 스크롤 탑 버튼 (기존 유지)
const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
