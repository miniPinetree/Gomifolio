const targetName = document.querySelector("#text > h3 > span");
const text = document.getElementById('text');
const dive = document.querySelector("#text > h2 > span");
const banner = document.querySelector(".banner");

window.onload = function() {
    targetName.classList.add("changeColor");
}
// banner parallax effect
window.addEventListener('scroll', function () {
    const value = window.scrollY;
    if (window.innerHeight > value) {
        text.style.marginBottom = value * 2 + 'px';
        banner.style.marginBottom = value * -0.5 + 'px';
    }
})
// ScrollReveal().reveal('.title', { duration: 800 });
// skills hover effect
const container = document.querySelector("body > section.skills > div");
container.addEventListener("mouseover", function (e) {
    if (e.target.getAttribute("class") === "skill") {
    }
    e.preventDefault();
})
const data = {
    labels: [
        'React',
        'Redux',
        'HTML',
        'CSS & 전처리기',
        'Python',
        'Git',
        'JavaScript'
    ],
    datasets: [{
        data: [8, 5, 6, 7, 6, 6, 8],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#085ac5',
        pointBackgroundColor: '#085ac5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#085ac5'
    }]
};
const config = {
    type: 'radar',
    data: data,
    options: {
        scales:{
            r:{
                angleLines: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: {
              display: false
            },
          },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
