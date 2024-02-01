// Burger menu
document.querySelector(".header__burger").addEventListener("click", () => {
    document.querySelector(".header__burger-menu").classList.add("active__burger");
});

document.querySelector(".header__burger-close").addEventListener("click", () => {
    document.querySelector(".header__burger-menu").classList.remove("active__burger");
});
// 


// Active Reprod Buttons

const reprodButton = document.querySelectorAll(".reprod__button");

reprodButton.forEach((button) => {
    button.addEventListener("click", () => {

        reprodButton.forEach((element) => {
            element.classList.remove("active-reprod")
        })
        button.classList.add("active-reprod")
    })
})


// Tabs

document.querySelectorAll(".how-we-work__btn").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function(tabContent) {
        tabContent.classList.remove("tab-content-active");
      });
      document.querySelector(`[data-target=${path}]`).classList.add("tab-content-active");
    })
  })

document.querySelectorAll(".reprod__button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonPath = event.currentTarget.dataset.path;
        document.querySelectorAll(".reprod__tab").forEach((tab) => {
            tab.classList.remove("active-tab");
        });
        document.querySelector(`[data-target="${buttonPath}"]`).classList.add("active-tab");
    })
})



var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__burger-menu');

document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove("active__burger");
  }
});
