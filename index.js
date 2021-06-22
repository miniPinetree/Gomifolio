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

window.addEventListener("resize", () => {
  if (window.innerWidth < 700) {
    Swal.fire({
      text: '이 사이트는 PC 접속에 최적화되어 있습니다. 😀',
      confirmButtonText: 'OK',
      icon: 'warning'
    })
  }
});
// if (window.innerWidth < 700)
// nav bar click event
// const ul = document.querySelector("body > nav > ul");
// const sections = document.querySelectorAll("body > section");
// ul.addEventListener("click", function(e) {
//   const category = e.currentTarget.children;
//     const idx = [...category].findIndex(elem=>elem === e.target);
//       sections[idx].scrollIntoView({behavior:'smooth'});
//   })
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
        content = `<span>적용 우선순위</span>을 고려할 줄 압니다. CSS in JS를 주로 사용하였으나 pure CSS 연습을 위해 <span>포트폴리오 사이트는 pure CSS로 구현</span>했습니다.`;
        break;
      case "Styled Components":
        content = `React 컴포넌트와 함께 <span>오버라이딩, props를 통한 조건부 적용</span>을 구현할 수 있습니다. <span>5차례의 프로젝트</span>에 사용했습니다.`;
        break;
      case "SCSS":
        content = `css-sass-scss 코드를 구분할 수 있습니다. 특히 <span>Variables, Nesting</span>의 편리함에 공감하고 사용할 수 있습니다.`;
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
            content = `개인 소스코드 관리 및 <span>Git을 이용한 협업을 3차례</span> 진행했고 커밋메시지 컨벤션을 정해 사용해보았습니다. `;
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


//send email
const sendMessage = document.querySelector("#CONTACT > div > div > div.email.flex > button");
sendMessage.addEventListener("click", function(){
const name = document.getElementById("inputName").value;
const email = document.getElementById("inputEmail").value;
const message = document.getElementById("inputMessage").value;
if(name.trim() && email.trim() && message.trim()){
  const regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
  if(email.match(regExp)){
    emailjs.send("service_9yyi6ph","template_hvxrza2",{
      from_name: name,
      email: email,
      message: message,
      }).then(
        function (response) {
          Swal.fire({
            title: '전송완료!',
            text: '빠른 시일 내 답장드리겠습니다 :)',
            confirmButtonText: 'OK',
            backdrop: `
          rgba(0,0,123,0.4)
          url("images/cat.gif")
          left center
          no-repeat
        `
          })
        },
        function (error) {
          Swal.fire({
            icon: 'error',
            text: '전송에 실패하였습니다.',
            footer: '<a href="mailto:mygomi05@gmail.com">직접 전송하기</a>'
          })
        }
      )
    
  }else{
    Swal.fire({
      icon: 'error',
      text: '이메일 형식을 확인해주세요!',
      footer: '<a href="mailto:mygomi05@gmail.com">직접 전송하기</a>'
    })
  }
}else{
  Swal.fire({
    icon: 'error',
    text: '정보를 모두 입력해주세요!',
  })
}


})


// page up
const upBtn = document.getElementById("upArrow");
upBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})