document.querySelector(".header__burger").addEventListener("click", () => {
    document.querySelector(".header__burger-menu").classList.add("active__burger");
})

document.querySelector(".header__burger-close").addEventListener("click", () => {
    document.querySelector(".header__burger-menu").classList.remove("active__burger");
})