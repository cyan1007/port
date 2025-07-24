const frame = document.querySelector(".main");
const cardList = frame.querySelectorAll(".card");
// console.log(cardList);
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audioList = frame.querySelectorAll("audio");
const deg = 45;
const lastCardIndex = cardList.length - 1;
let currentDeg = 0;
let currentCardIndex = 0;

cardList.forEach((card, index) => {
  const pic = card.querySelector(".pic");

  card.style.transform = `rotate(${deg * index}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("assets/images/member${index + 1}.jpg")`;

  // play, pause, load
  const playBtn = card.querySelector(".play");
  const pauseBtn = card.querySelector(".pause");
  const loadBtn = card.querySelector(".load");

  // click play
  playBtn.addEventListener("click", (e) => {
    const currentTarget = e.currentTarget.closest(".card");
    let isOn = currentTarget.classList.contains("on");
    // console.log(isOn);

    if (!isOn) return;

    if (isOn) {
      currentTarget.querySelector(".pic").classList.add("on");
      currentTarget.querySelector("audio").play();
    }
    console.log(`${index}번 음악이 재생됩니다!`);
  });

  // click pause
  pauseBtn.addEventListener("click", (e) => {
    const currentTarget = e.currentTarget.closest(".card");
    let isOn = currentTarget.classList.contains("on");
    // console.log(isOn);

    if (!isOn) return;

    if (isOn) {
      currentTarget.querySelector(".pic").classList.remove("on");
      currentTarget.querySelector("audio").pause();
    }
    console.log(`${index}번 음악이 일시정지되었습니다!`);
  });

  // click load
  loadBtn.addEventListener("click", (e) => {
    const currentTarget = e.currentTarget.closest(".card");
    let isOn = currentTarget.classList.contains("on");
    // console.log(isOn);

    if (!isOn) return;

    if (isOn) {
      currentTarget.querySelector(".pic").classList.add("on");
      currentTarget.querySelector("audio").load();
      currentTarget.querySelector("audio").play();
    }
    console.log(`${index}번 음악이 다시 재생됩니다!`);
  });
});

// prev-btn click
prevBtn.addEventListener("click", () => {
  console.log("이전 버튼 클릭했습니다!");

  // frame을 시계방향으로(+) 45도씩 회전
  currentDeg++;
  // console.log(currentDeg);
  frame.style.transform = `rotate(${deg * currentDeg}deg)`;

  // 현재 보이는 카드 활성화
  // if (currentCardIndex === 0) {
  //  currentCardIndex = lastCardIndex;
  //  console.log("현재 카드 번호: ", currentCardIndex);
  // } else {
  //  currentCardIndex--;
  //  console.log("현재 카드 번호: ", currentCardIndex);
  // }
  currentCardIndex === 0
    ? (currentCardIndex = lastCardIndex)
    : currentCardIndex--;

  activeCard(currentCardIndex);
});

// next-btn click
nextBtn.addEventListener("click", () => {
  console.log("다음 버튼 클릭했습니다!");

  // frame을 시계 반대방향으로(-) -45도씩 회전
  currentDeg--;
  // console.log(currentDeg);
  frame.style.transform = `rotate(${deg * currentDeg}deg)`;

  // 현재 보이는 카드 활성화
  currentCardIndex === lastCardIndex
    ? (currentCardIndex = 0)
    : currentCardIndex++;

  activeCard(currentCardIndex);
});

// 모든 카드에 "on"클래스 제거하고 현재 카드에 "on" 클래스 추가하고
// audio, .pic 초기화하는 함수
function activeCard(currentCardIndex) {
  // 모든 카드 "on" 클래스 제거
  cardList.forEach((card) => {
    card.classList.remove("on");
    console.log("모든 카드의 on클래스 제거되었음");

    // 모든 CD회전,음악 재생 멈추고 현재 카드의 CD회전,음악 재생
    audioList.forEach((audio) => {
      // 오디오 일시정지 하고
      audio.pause();
      // 오디오 다시 로드
      audio.load();
      audio.closest(".card").querySelector(".pic").classList.remove("on");
    });
    // CD회전 정지
    card.querySelector(".pic").classList.remove("on");
  });

  // 현재 카드에 "on" 클래스 추가
  cardList[currentCardIndex].classList.add("on");
  console.log(`${currentCardIndex}번 카드에 on클래스 추가되었음`);
}
