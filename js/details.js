// <!-- function đổi hình sản phẩm theo màu sắc -->

function changeColor(color) {
    var mainImage = document.getElementById("main-image");
    var thumb1 = document.getElementById("thumb1");
    var thumb2 = document.getElementById("thumb2");
    var thumb3 = document.getElementById("thumb3");
    var thumb4 = document.getElementById("thumb4");

    if (color === "black") {
        // Change main image
        mainImage.src = "./images/AIR+MAX+270-black-right.png";

        // Change thumbnails
        thumb1.src = "./images/AIR+MAX+270black-left.jpg";
        thumb2.src = "./images/AIR+MAX+270behind.png";
        thumb3.src = "./images/AIR+MAX+270real.jpg";
        thumb4.src = "./images/AIR+MAX+270-black-top.png";
    } else if (color === "white") {
        // Change main image
        mainImage.src = "./images/AIR+MAX+270.png";

        // Change thumbnails
        thumb1.src = "./images/AIR+MAX+270(1).png";
        thumb2.src = "./images/AIR+MAX+270(2).png";
        thumb3.src = "./images/AIR+MAX+270(3).png";
        thumb4.src = "./images/AIR+MAX+270(4).png";
    }
}

$(document).ready(function() {
    $('.carousel-items').slick({
        slidesToShow: 4, // Default to 4
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3 // 3 items for medium screens
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2 // 2 items for small screens
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1 // 1 item for extra small screens
                }
            }
        ]
    });
});
