import { initCursor } from "./cursor.js";
import { initProcessHover } from "./processHover.js";
import { initModal } from "./modal.js";

// 타이핑 애니메이션 함수
function initTyping() {
  const typedText = document.getElementById("typed-text");
  if (!typedText) return;

  const isMobileText = window.innerWidth <= 430;
  const text = isMobileText ? "Welcome to\nYR Studio" : "Welcome to YR Studio";
  let index = 0;

  function type() {
    if (index < text.length) {
      typedText.innerHTML += text[index] === "\n" ? "<br>" : text[index];
      index++;
      setTimeout(type, 120);
    }
  }
  type();
}

// 메뉴 열고 닫기 함수
function initMenuToggle() {
  const toggleBtn = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  toggleBtn?.addEventListener("click", () => {
    mobileNav?.classList.add("active");
    overlay?.classList.add("active");
  });
  closeBtn?.addEventListener("click", () => {
    mobileNav?.classList.remove("active");
    overlay?.classList.remove("active");
  });
  overlay?.addEventListener("click", () => {
    mobileNav?.classList.remove("active");
    overlay?.classList.remove("active");
  });
}

// 섹션 스크롤 애니메이션 함수
function initSectionAnimation() {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".section.scroll-animate")
    .forEach((section) => sectionObserver.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  initTyping();
  initMenuToggle();
  initSectionAnimation();

  initCursor();
  initProcessHover();
  initModal();
});
