export function initModal() {
  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal && modal.classList.contains("modal-cont3")) {
        modal.style.display = "flex"; // flex → 중앙 정렬
        openModal(modal);
      }
    });
  });

  document.querySelectorAll(".open-modal-img").forEach((img) => {
    img.addEventListener("click", () => {
      const modalId = img.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal && modal.classList.contains("modal-cont3")) {
        modal.style.display = "flex";
      }
    });
  });

  document.querySelectorAll(".modal-cont3-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-cont3");
      closeModal(modal);
    });
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal-cont3").forEach((modal) => {
      if (e.target === modal) closeModal(modal);
    });
  });
}

// 자동 실행
initModal();

function openModal(modal) {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  centerModal(modal); // 중앙 정렬 유지
}

function closeModal(modal) {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}
