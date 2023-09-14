const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, // по кругу
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  

    mousewhell: true,
    keyboard: true,
    // And if we need scrollbar
 
  });




  const swiper1 = new Swiper('.featured', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    slidesPerGroup: 2,
    direction: 'horizontal',
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // freeMode:false,
  
  
    mousewhell: true,
    // keyboard: true,
    // And if we need scrollbar
 
  });

