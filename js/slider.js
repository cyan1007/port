let currentIndex = 0;
let mobileIndex = 0;
let slides = [];
let mobileSlides = [];

const slideSets = {
  set1: [
    {
      title: "이음누리 도서관",
      desc: "연재플랫폼 브랜드 기획 발표",
      img: "https://unsplash.it/600/400?random=11",
      type: "modal",
      content: `<h3>브랜드 기획 발표내용</h3><p>이음누리 도서관 어플을 기획하면서 한 발표 내용입니다.</p>`,
    },
    {
      title: "앱 디자인 1",
      desc: "밥플릭스 어플 기획 팀 프로젝트",
      img: "https://unsplash.it/600/400?random=12",
      type: "modal",
      content: `<h3>밥플릭스</h3><p>팀프로젝트 어플 기획 내용입니다.</p>`,
    },
    {
      title: "앱 디자인 2",
      desc: "개인 어플 제작 기획(추가예정)",
      img: "https://unsplash.it/600/400?random=13",
      type: "modal",
      content: `<h3>개인적으로</h3><p>어플을 제작 기획한 내용입니다.</p>`,
    },
    {
      title: "협업 리디자인 계획",
      desc: "협업한 리디자인 프로세스 입니다.",
      img: "https://unsplash.it/600/400?random=14",
      type: "modal",
      content: `<h3>웹 사이트를</h3><p>협업해서 리디자인 하고자 한 기획입니다.</p>`,
    },
    {
      title: "추가예정",
      desc: "작품이 추가되는대로 추가 하겠습니다.",
      img: "https://unsplash.it/600/400?random=14",
    },
  ],
  set2: [
    {
      title: "웹 디자인 1",
      desc: "애니메이션 웹사이트 입니다.",
      img: "https://unsplash.it/600/400?random=21",
      type: "link",
      url: "https://example.com/project1",
    },
    {
      title: "웹 디자인 2",
      desc: "음악 플레이어 재생이 가능한 웹사이트 입니다.",
      img: "https://unsplash.it/600/400?random=22",
      type: "link",
      url: "https://example.com/project1",
    },
    {
      title: "웹 디자인 3",
      desc: "비디오를 재생가능한 웹사이트 입니다.",
      img: "https://unsplash.it/600/400?random=23",
      type: "link",
      url: "https://example.com/project1",
    },
    {
      title: "웹 디자인 4",
      desc: "반응형 포트폴리오용 웹사이트 입니다.",
      img: "https://unsplash.it/600/400?random=24",
      type: "link",
      url: "https://pot-liblary-ffj7gf0a6-miko1024s-projects.vercel.app/",
    },
    {
      title: "추가예정",
      desc: "더 만들어지면 추후 추가 하겠습니다.",
      img: "https://unsplash.it/600/400?random=25",
      type: "link",
      url: "https://example.com/project1",
    },
  ],
  set3: [
    {
      title: "그래픽 디자인 1",
      desc: "sns 카드뉴스 입니다.",
      img: "https://unsplash.it/600/400?random=31",
    },
    {
      title: "그래픽 디자인 2",
      desc: "sns 카드뉴스 입니다.",
      img: "https://unsplash.it/600/400?random=32",
    },
    {
      title: "그래픽 디자인 3",
      desc: "상세페이지 입니다.",
      img: "https://unsplash.it/600/400?random=33",
    },
    {
      title: "그래픽 디자인 4",
      desc: "상세페이지 입니다.",
      img: "https://unsplash.it/600/400?random=34",
    },
    {
      title: "그래픽 디자인 5",
      desc: "제품포스터 입니다.",
      img: "https://unsplash.it/600/400?random=35",
    },
    {
      title: "그래픽 디자인 6",
      desc: "추후 작품이 더 나오면 추가 예정입니다.",
      img: "https://unsplash.it/600/400?random=35",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const mobileSlider = document.getElementById("mobileSlider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const container = document.querySelector(".cont3");

  function updateMode() {
    const isMobile = window.innerWidth <= 700;
    container.classList.remove("desktop-active", "mobile-active");
    container.classList.add(isMobile ? "mobile-active" : "desktop-active");
  }

  function renderSlides(setKey) {
    const slideData = slideSets[setKey];
    slider.innerHTML = "";
    mobileSlider.innerHTML = "";
    slides = [];
    mobileSlides = [];

    updateMode();
    // 데스크탑 슬라이드 생성
    slideData.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("slide");

      div.innerHTML = `
        <div class="slide-overlay">
          <button class="view-more">자세히 보기</button>
        </div>
        <div class="portfolio-info">
          <img src="${item.img}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;

      // 슬라이드 전용 "자세히 보기" 이벤트: 기존 모달(initModal)과는 별도
      div.querySelector(".view-more").addEventListener("click", () => {
        if (item.type === "modal") {
          openSlideModal(item.content || "내용 없음");
        } else if (item.type === "link") {
          window.open(item.url, "_blank");
        }
      });

      slider.appendChild(div);
      slides.push(div);
    });

    // 모바일 슬라이드 생성
    slideData.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("mobile-slide");

      div.innerHTML = `
        <div class="slide-overlay">
          <button class="view-more">자세히 보기</button>
        </div>
        <div class="portfolio-info">
          <img src="${item.img}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;

      // 모바일 슬라이드 "자세히 보기" 이벤트
      div.querySelector(".view-more").addEventListener("click", () => {
        if (item.type === "modal") {
          openSlideModal(item.content || "내용 없음");
        } else if (item.type === "link") {
          window.open(item.url, "_blank");
        }
      });

      mobileSlider.appendChild(div);
      mobileSlides.push(div);
    });

    currentIndex = 0;
    mobileIndex = 0;
    updateDesktopSlides();
    updateMobileSlides();
  }

  function updateDesktopSlides() {
    const total = slides.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    slides.forEach((slide, i) => {
      slide.classList.remove("prev", "active", "next", "inactive");
      if (i === currentIndex) slide.classList.add("active");
      else if (i === prevIndex) slide.classList.add("prev");
      else if (i === nextIndex) slide.classList.add("next");
      else slide.classList.add("inactive");
    });
  }

  function updateMobileSlides() {
    mobileSlider.style.transform = `translateX(-${mobileIndex * 100}%)`;
  }

  function shiftSlide(dir) {
    const isMobile = window.innerWidth <= 700;
    if (isMobile) {
      mobileIndex =
        dir === "next"
          ? (mobileIndex + 1) % mobileSlides.length
          : (mobileIndex - 1 + mobileSlides.length) % mobileSlides.length;
      updateMobileSlides();
    } else {
      currentIndex =
        dir === "next"
          ? (currentIndex + 1) % slides.length
          : (currentIndex - 1 + slides.length) % slides.length;
      updateDesktopSlides();
    }
  }

  prevBtn.addEventListener("click", () => shiftSlide("prev"));
  nextBtn.addEventListener("click", () => shiftSlide("next"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") shiftSlide("prev");
    if (e.key === "ArrowRight") shiftSlide("next");
  });

  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSlides(btn.dataset.tab);
    });
  });

  // 터치 스와이프 기능 (모바일)
  let touchStartX = 0;
  let touchEndX = 0;

  mobileSlider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  mobileSlider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      diff > 0 ? shiftSlide("prev") : shiftSlide("next");
    }
  });

  renderSlides("set1");
  // 슬라이드용 모달 이벤트 초기화 (기존 initModal과 별도)
  initSlideModalEvents();
});

// 슬라이드 전용 모달 함수 (기존 모달 시스템과 충돌없이 별도 관리)
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

  // ESC 키 누르면 닫기
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
}
