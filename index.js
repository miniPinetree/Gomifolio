const targetName = document.querySelector("#text > p > span");
const text = document.getElementById("text");
const dive = document.querySelector("#text > h2 > span");
const banner = document.querySelector(".banner");

window.onload = function () {
  targetName.classList.add("changeColor");
};
// banner parallax effect
window.addEventListener("scroll", function () {
  const value = window.scrollY;
  if (window.innerHeight > value) {
    text.style.marginBottom = value * 2 + "px";
    banner.style.marginBottom = value * -0.5 + "px";
  }
});
// category click event
const category = document.getElementsByTagName("h2");
const ul = document.querySelector("body > nav > ul");
ul.addEventListener("click", function(e) {
    const idx = e.currentTarget.indexOf(e.target);
    console.log(e.target.parentNode);
    console.log(idx);
})
// skills hover effect
const container = document.getElementById("skillsWrap");
const desc = document.getElementsByClassName("detailDesc");
container.addEventListener("mouseover", function (e) {
  if (e.target.getAttribute("class") === "skill") {
    const keyword = e.target.innerText;
    desc[0].classList.add("visible");
    desc[0].firstElementChild.innerHTML = keyword;
    let content = null;
    switch (keyword) {
      case "JS":
        content = `<span>포트폴리오 사이트</span>를 구현했습니다. vanilla JS <span>동작 원리</span>를 꾸준히 공부하고 있습니다. `;
        break;
      case "React":
        content = `<span>3차례 팀프로젝트</span>를 진행했습니다. React가 주는 이점과 단점을 알고 있으며 <span>재사용 가능한 컴포넌트와 리렌더링 최적화</span>를 고려할 수 있습니다. `;
        break;
      case "Redux":
        content = `전역 상태관리의 필요성을 알고 있으며 Redux와 미들웨어를 사용해 <span>총 5차례 프로젝트</span>를 진행한 경험이 있습니다. `;
        break;
      case "HTML":
        content = `Semantic HTML 필요성에 공감하며 태그에 의미를 담아 작성하려 합니다. UI구현에 필요한 영역 구분을 빠르게 해낼 수 있습니다.`;
        break;
      case "CSS":
        content = `<span>부모-자식 요소간 영향</span>을 고려할 줄 압니다. CSS in JS를 주로 사용하였으나 pure CSS 연습을 위해 <span>포트폴리오 사이트는 pure CSS로 구현</span>했습니다.`;
        break;
      case "Styled Components":
        content = `React 컴포넌트와 함께 <span>오버라이딩, props를 통한 조건부 적용</span>을 구현할 수 있습니다. <span>5차례의 프로젝트</span>에 사용했습니다.`;
        break;
      case "SCSS":
        content = `css-sass-scss를 구분할 수 있습니다. 특히 <span>Variables, Nesting</span>의 편리함에 공감하고 사용할 수 있습니다.`;
        break;
        case "Python":
            content = `<span>70여개의 알고리즘</span> 문제를 풀며 Python문법을 익혔습니다. <span>웹 스크래핑 및 ajax</span>를 이용해 통신하는 서버를 구축한 적이 있습니다.`;
        break;
        case "AWS":
            content = `AWS S3, Route 53를 이용하여 프론트단의 코드를 <span>배포한 경험이 4회</span> 있습니다.`;
        break;
        case "Firebase":
            content = `Realtime DB, Cloud storage, Authentication를 이용하여 <span>BaaS 프로젝트를 2회</span> 진행했습니다.`;
        break;
        case "Git":
            content = `3차례의 팀프로젝트 과정에서 <span>git을 이용하여 협업</span>을 진행했고 가장 최근에는 커밋메시지 컨벤션을 정해 사용하기도 했습니다. `;
        break;
      default:
        break;
    }
    desc[0].lastElementChild.firstElementChild.innerHTML = content;
  }
  e.preventDefault();
});
container.addEventListener("mouseleave", function (e) {
  if (e.target.getAttribute("class") !== "skill") {
    desc[0].classList.remove("visible");
  }
  e.preventDefault();
});

// Radar Chart
const data = {
  labels: [
    "React",
    "Redux",
    "HTML",
    "CSS & 전처리기",
    "Python",
    "Git",
    "JavaScript",
  ],
  datasets: [
    {
      data: [8, 5, 6, 7, 6, 6, 8],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "#085ac5",
      pointBackgroundColor: "#085ac5",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#085ac5",
    },
  ],
};
const config = {
  type: "radar",
  data: data,
  options: {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);

// page up
const upBtn = document.getElementById("upArrow");
upBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})