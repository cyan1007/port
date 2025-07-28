let currentIndex = 0;
let mobileIndex = 0;
let slides = [];
let mobileSlides = [];
function updateMode() {
  const container = document.querySelector(".cont4");
  if (!container) return;
  const isMobile = window.innerWidth <= 700;
  container.classList.remove("desktop-active", "mobile-active");
  container.classList.add(isMobile ? "mobile-active" : "desktop-active");
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

const slideSets = {
  set1: [
    {
      title: "이음누리 도서관",
      desc: "연재플랫폼 브랜드 기획 발표",
      img: "images/cont4/nuri.jpg",
      type: "modal",
      content: `<h3>브랜드 기획 발표내용</h3>  
      <img src="/images/cont4/eumnuri.jpg">
      <p>이음누리 도서관 어플을 기획하면서 한 발표 내용입니다.</p>`,
    },
    {
      title: "앱 디자인 1",
      desc: "밥플릭스 어플 기획 팀 프로젝트",
      img: "images/cont4/intro.png",
      type: "modal",
      content: `<img src="/images/cont4/process.png">
      <h3>밥플릭스</h3><p>팀프로젝트 어플 기획 내용입니다.</p>`,
    },
    {
      title: "앱 디자인 2",
      desc: "개인 어플 제작 기획(추가예정)",
      img: "images/cont4/coming.jpg",
      type: "modal",
      content: `<h3>개인적으로</h3><p>어플을 제작 기획한 내용입니다.</p>`,
    },
    {
      title: "협업 리디자인 계획",
      desc: "협업한 리디자인 프로세스 입니다.",
      img: "images/cont4/sreader.png",
      type: "modal",
      content: `<img src="/images/cont4/ppt.jpg">
      <img src="/images/cont4/s-process.jpg">
      <h3>웹 사이트를</h3><p>협업해서 리디자인 하고자 한 기획입니다.</p>`,
    },
    {
      title: "추가예정",
      desc: "작품이 추가되는대로 추가 하겠습니다.",
      img: "images/cont4/coming.jpg",
      type: "modal",
      content: `<h3>개인적으로</h3><p>어플을 제작 기획한 내용입니다.</p>`,
    },
    {
      title: "추가예정",
      desc: "작품이 추가되는대로 추가 하겠습니다.",
      img: "images/cont4/coming.jpg",
      type: "modal",
      content: `<h3>개인적으로</h3><p>어플을 제작 기획한 내용입니다.</p>`,
    },
  ],
  set2: [
    {
      title: "웹 디자인 1",
      desc: "애니메이션 웹사이트 입니다.",
      img: "images/cont4/ani.png",
      type: "link",
      url: "ani.html",
    },
    {
      title: "웹 디자인 2",
      desc: "음악 플레이어 재생이 가능한 웹사이트 입니다.",
      img: "images/cont4/music.png",
      type: "link",
      url: "music.html",
    },
    {
      title: "웹 디자인 3",
      desc: "비디오를 재생가능한 웹사이트 입니다.",
      img: "images/cont4/flex.png",
      type: "link",
      url: "videoflex.html",
    },
    {
      title: "웹 디자인 4",
      desc: "반응형 포트폴리오용 웹사이트 입니다.",
      img: "images/cont4/pot.png",
      type: "link",
      url: "pot.html",
    },
    {
      title: "추가예정",
      desc: "작품이 추가되는대로 추가 하겠습니다.",
      img: "images/cont4/coming.jpg",
      type: "modal",
      url: "https://example.com/project1",
    },
  ],
  set3: [
    {
      title: "그래픽 디자인 1",
      desc: "sns 카드뉴스 입니다.",
      img: "images/cont4/card-sum.png",
      type: "modal",
      content: `<h3>sns 카드뉴스</h3>  
      <img src="/images/cont4/card.jpg">
      <p>리뷰 이벤트 안내 카드뉴스 입니다.</p>`,
    },
    {
      title: "그래픽 디자인 2",
      desc: "sns 카드뉴스 입니다.",
      img: "images/cont4/card2-sum.png",
      type: "modal",
      content: `<h3>복고시장 sns 카드뉴스</h3>  
      <img src="/images/cont4/card2.jpg">
      <p>복고시장 안내 카드뉴스 입니다.</p>`,
    },
    {
      title: "그래픽 디자인 3",
      desc: "sns 배너 입니다.",
      img: "images/cont4/sns.png",
      type: "modal",
      content: `<h3>sns 배너</h3>  
      <img src="/images/cont4/sns-ba.jpg">
      <p>잔반제로 캠페인 sns 배너입니다.</p>`,
    },
    {
      title: "그래픽 디자인 4",
      desc: "아이리버 헤드셋 상세페이지 입니다.",
      img: "images/cont4/head-sum.png",
      type: "modal",
      content: `<h3>아이리버 헤드셋</h3>  
      <img src="/images/cont4/head.jpg">
      <p>아이리버 헤드셋 상세페이지를 작업한 내용입니다.</p>`,
    },
    {
      title: "그래픽 디자인 5",
      desc: "한율 어린싹 수분진정 크림 상세페이지 입니다.",
      img: "images/cont4/han-sum.png",
      type: "modal",
      content: `<h3>한율 어린싹 수분진정 크림</h3>  
      <img src="/images/cont4/han.jpg">
      <p>한율 어린싹 수분진정 크림 상세페이지를 작업한 내용입니다.</p>`,
    },
    {
      title: "그래픽 디자인 6",
      desc: "각질제거 필링 젤 제품 포스터 입니다.",
      img: "images/cont4/gel-sum.jpg",
      type: "modal",
      content: `<h3>저자극 각질제거 필링 젤</h3>  
      <img src="/images/cont4/gel.jpg">
      <p>각질제거 필링 젤 제품 포스터를 작업한 내용입니다.</p>`,
    },
    {
      title: "그래픽 디자인 7",
      desc: "히비스커스 에이드 제품포스터 입니다.",
      img: "images/cont4/edit.png",
      type: "modal",
      content: `<h3>히비스커스 에이드</h3>  
      <img src="/images/cont4/editorial.jpg">
      <p>히비스커스 에이드 제품 포스터를 작업한 내용입니다.</p>`,
    },
    {
      title: "그래픽 디자인 8",
      desc: "롯데리아 버거 제품포스터 입니다.",
      img: "images/cont4/poster-sum.png",
      type: "modal",
      content: `<h3>2025 신상버거</h3>  
      <img src="/images/cont4/poster.jpg">
      <p>롯데리아 버거제품을 작업한 내용입니다.</p>`,
    },
    {
      title: "그래픽 디자인 9",
      desc: "코믹월드 랜딩페이지 입니다.",
      img: "images/cont4/randing-sum.png",
      type: "modal",
      content: `<h3>2025 신상버거</h3>  
      <img src="/images/cont4/randing.png">
      <p>랜딩페이지를 작업한 내용입니다.</p>`,
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const mobileSlider = document.getElementById("mobileSlider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const container = document.querySelector(".cont4");

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
      div.querySelector(".portfolio-info img").addEventListener("click", () => {
        if (item.type === "modal") {
          openSlideModal(item.content || "내용 없음");
        } else if (item.type === "link") {
          window.location.href = item.url;
        }
      });
      // 모바일 슬라이드 "자세히 보기" 이벤트
      div.querySelector(".view-more").addEventListener("click", () => {
        if (item.type === "modal") {
          openSlideModal(item.content || "내용 없음");
        } else if (item.type === "link") {
          window.location.href = item.url; // 현재 탭에서 열기
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

  function updateMobileSlides() {
    console.log(
      "mobileIndex:",
      mobileIndex,
      "mobileSlides.length:",
      mobileSlides.length
    );

    if (mobileSlides.length > 0) {
      const sliderWidth = 100 * mobileSlides.length; // % 단위
      mobileSlider.style.width = `${sliderWidth}vw`; // 5개면 500vw

      // 이동
      mobileSlider.style.transform = `translateX(-${mobileIndex * 100}vw)`;
    }
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
  const modal = document.getElementById("modal-cont4-slide");
  const body = modal.querySelector(".modal-cont4-body");
  body.innerHTML = content;
  modal.style.display = "block";
}

function initSlideModalEvents() {
  const modal = document.getElementById("modal-cont4-slide");

  // 닫기 버튼
  modal.querySelector(".modal-cont4-close").addEventListener("click", () => {
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

window.addEventListener("resize", () => {
  updateMode();

  // 인덱스 초기화
  currentIndex = 0;
  mobileIndex = 0;

  // 슬라이드 상태 갱신
  updateDesktopSlides();
  updateMobileSlides();
});
