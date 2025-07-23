export function initModal() {
  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "block";
    });
  });

  document.querySelectorAll(".modal .close").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
}

function openSlideModal(content) {
  const modal = document.getElementById("slide-modal");
  const body = modal.querySelector(".modal-body");
  body.innerHTML = content;
  modal.style.display = "block";
}

function initSlideModalEvents() {
  const modal = document.getElementById("slide-modal");

  // 닫기 버튼
  modal.querySelector(".close-btn-slide").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 바깥 영역 클릭 시 닫기
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // ESC 눌러 닫기 (옵션)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSlideModalEvents();
});
