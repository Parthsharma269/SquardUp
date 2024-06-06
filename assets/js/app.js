const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".smView");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    document.querySelector("nav").classList.toggle("navbg");
    document.querySelector("body").classList.toggle("overflow-hidden");
});

$('.slick_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    dots: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

let accItm = document.querySelectorAll(".accrodain_itm");
accItm.forEach(e => {
    let clickPart = e.querySelector(".clickable_part");
    let img = e.querySelector(".accordian_img");
    let accHeading = e.querySelector(".accordian-heading");
    let num = e.querySelector(".acc_num_box");
    let hiddenTxt = e.querySelector(".hidden_txt");
    hiddenTxt.style.display = "block";
    num.style.color = "#9EFF00";
    img.style.transform = "rotate(45deg)";
    img.classList.add("svg_green_color");
    accHeading.style.color = "#9EFF00";
    clickPart.addEventListener("click", () => {
        let txtDisplay = window.getComputedStyle(hiddenTxt).display;
        accItm.forEach(j => {
            let clickPartJ = j.querySelector(".clickable_part");
            let imgJ = j.querySelector(".accordian_img");
            let accHeadingJ = j.querySelector(".accordian-heading");
            let numJ = j.querySelector(".acc_num_box");
            let hiddenTxtJ = j.querySelector(".hidden_txt");
            if (e !== j) {
                hiddenTxtJ.style.display = "none";
                numJ.style.color = "#ffffff";
                imgJ.style.transform = "rotate(0deg)";
                imgJ.classList.remove("svg_green_color");
                accHeadingJ.style.color = "#ffffff";
            }
        });

        if (txtDisplay === "none") {
            hiddenTxt.style.display = "block";
            num.style.color = "#9EFF00";
            img.style.transform = "rotate(45deg)";
            img.classList.add("svg_green_color");
            accHeading.style.color = "#9EFF00";
        } else {
            hiddenTxt.style.display = "none";
            num.style.color = "#ffffff";
            img.style.transform = "rotate(0deg)";
            img.classList.remove("svg_green_color");
            accHeading.style.color = "#ffffff";
        }
    });
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}