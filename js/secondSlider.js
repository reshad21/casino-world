var swiper = new Swiper(".mySwiper", {
    // loop: true,
    slidesPerView: 7,
    spaceBetween: 5,
    slidesOffsetAfter: 34,
    // Way to add offset on first slide
    // slidesOffsetBefore: 0,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 'auto',
    },
});