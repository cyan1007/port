export function initModal() {
  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal && modal.classList.contains("modal-cont3")) {
        modal.style.display = "block";
      }
    });
  });

  document.querySelectorAll(".open-modal-img").forEach((img) => {
    img.addEventListener("click", () => {
      const modalId = img.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal && modal.classList.contains("modal-cont3")) {
        modal.style.display = "block";
      }
    });
  });

  document.querySelectorAll(".modal-cont3-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal-cont3").style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal-cont3").forEach((modal) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
}

// 자동 실행
initModal();

export function initSlideModal() {
  document.querySelectorAll(".open-modal-slide").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.dataset.modal || "modal-cont4-slide";
      const modal = document.getElementById(modalId);
      if (modal && modal.classList.contains("modal-cont4")) {
        const modalBody = modal.querySelector(".modal-cont4-body");
        const content = trigger.dataset.modalContent || "";
        if (modalBody) modalBody.innerHTML = content;
        modal.style.display = "block";
      }
    });
  });

  document.querySelectorAll(".modal-cont4-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-cont4");
      if (modal) modal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal-cont4").forEach((modal) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
}

// 자동 실행
initSlideModal();
