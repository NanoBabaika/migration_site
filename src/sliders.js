console.log('slider script added!');

const slider1 = $('.bxslider').bxSlider({
      slideWidth: 1305,
      minSlides: 1,
      maxSlides: 1,
      slideMargin: 5,
      controls: false,
      pager:false,
      adaptiveHeight:true
});

 
// Поискать как включить опцю автослайд
const sliderPosters =  $('.slider__posters').bxSlider({
    slideWidth: 236,
    maxSlides: 5,
    slideMargin: 24,
    infiniteLoop:true,
    controls: false,
    pager:false,
    adaptiveHeight:true
  });


  $("#podstersleft").click(e => {
    e.preventDefault();

    sliderPosters.goToPrevSlide();
})


$("#podstersright").click(e => {
    e.preventDefault();
    sliderPosters.goToNextSlide();
})



// Слайдер секции недвижимость

const sliderRealestate =  $('.slider__realestate').bxSlider({
  slideWidth: 300,
  maxSlides: 5,
  slideMargin: 25,
  infiniteLoop:true,
  controls: false,
  pager:false,
  adaptiveHeight:true
});


$("#realestate_left").click(e => {
  e.preventDefault();

  sliderRealestate.goToPrevSlide();
})


$("#realestate_right").click(e => {
  e.preventDefault();
  sliderRealestate.goToNextSlide();
})


const sliderNews =  $('.slider__news').bxSlider({
  slideWidth: 300,
  maxSlides: 5,
  slideMargin: 25,
  infiniteLoop:true,
  controls: false,
  pager:false,
  adaptiveHeight:true
});


$("#news_left").click(e => {
  e.preventDefault();

  sliderNews.goToPrevSlide();
})


$("#news_right").click(e => {
  e.preventDefault();
  sliderNews.goToNextSlide();
})

// Слайдер авто и мото

const sliderMoto =  $('.slider__moto').bxSlider({
  slideWidth: 300,
  maxSlides: 5,
  slideMargin: 30,
  infiniteLoop:true,
  controls: false,
  pager:false,
  adaptiveHeight:true
});


$("#moto_left").click(e => {
  e.preventDefault();

  sliderMoto.goToPrevSlide();
})


$("#moto_right").click(e => {
  e.preventDefault();
  sliderMoto.goToNextSlide();
})


const sliderArticles =  $('.slider__articles').bxSlider({
  slideWidth: 300,
  maxSlides: 5,
  slideMargin: 30,
  infiniteLoop:true,
  controls: false,
  pager:false,
  adaptiveHeight:true
});


$("#articles_left").click(e => {
  e.preventDefault();

  sliderArticles.goToPrevSlide();
})


$("#articles_right").click(e => {
  e.preventDefault();
  sliderArticles.goToNextSlide();
})
