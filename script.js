document.addEventListener("DOMContentLoaded", function () {

  console.log("Carousel");
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
  });   // all your code will go here
}); //end of doc ready



