const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".smView");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    document.querySelector("nav").classList.toggle("navbg");
    document.querySelector("body").classList.toggle("overflow-hidden");
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let accordian = document.querySelectorAll(".full-part")
let img = document.querySelector(".accord-img");
let txt = document.querySelector(".accord-para");
img.style.transform = "rotate(180deg)";
txt.style.display = "block";
accordian.forEach(element => {
    let img = element.querySelector(".accord-img");
    let clicable = element.querySelector(".top-part");
    let txt = element.querySelector(".accord-para");
    clicable.addEventListener("click", () => {
        let disp_text = window.getComputedStyle(txt).display;
        accordian.forEach(otherelement => {
            if (otherelement !== element) {
                let txt = otherelement.querySelector(".accord-para");
                let img = otherelement.querySelector(".accord-img");
                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }
            if (disp_text === "none") {
                txt.style.display = "block";
                img.style.transform = "rotate(180deg)";
            } else {
                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }
        });
    });
});