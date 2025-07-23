export function initProcessHover() {
  const steps = document.querySelectorAll(".process-ul li");
  const details = document.querySelectorAll(".step-detail");

  // 초기 활성화
  steps[0]?.classList.add("active");
  details[0]?.classList.add("active");

  steps.forEach((step) => {
    step.addEventListener("mouseenter", () => {
      const stepId = step.getAttribute("data-step");
      const currentActive = document.querySelector(".step-detail.active");

      if (currentActive?.getAttribute("data-step") === stepId) return;

      currentActive?.classList.remove("active");

      setTimeout(() => {
        details.forEach((detail) => {
          if (detail.getAttribute("data-step") === stepId) {
            detail.classList.add("active");
          } else {
            detail.classList.remove("active");
          }
        });
      }, 150);

      document
        .querySelector(".process-ul li.active")
        ?.classList.remove("active");
      step.classList.add("active");

      // 비디오 재생
      const targetDetail = document.querySelector(
        `.step-detail[data-step="${stepId}"]`
      );
      const video = targetDetail?.querySelector("video");
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    });

    step.addEventListener("mouseleave", () => {
      const stepId = step.getAttribute("data-step");
      const targetDetail = document.querySelector(
        `.step-detail[data-step="${stepId}"]`
      );
      const video = targetDetail?.querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });
}
