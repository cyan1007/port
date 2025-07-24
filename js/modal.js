// modal.js

// 공통 모달 열기 함수 (버튼, 이미지 둘 다 처리)
export function initModal() {
  // 버튼 클릭으로 모달 열기
  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "block";
    });
  });

  // 이미지 클릭으로 모달 열기
  document.querySelectorAll(".open-modal-img").forEach((img) => {
    img.addEventListener("click", () => {
      const modalId = img.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "block";
    });
  });

  // 닫기 버튼 이벤트 (공통)
  document.querySelectorAll(".modal .close").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  // 모달 바깥 클릭 시 닫기
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
}

// 슬라이드 모달 별도 처리
export function initSlideModalEvents() {
  const modal = document.getElementById("slide-modal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".close-btn-slide");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
}

// DOMContentLoaded 에서 초기화 함수 호출
document.addEventListener("DOMContentLoaded", () => {
  initModal();
  initSlideModalEvents();
});
