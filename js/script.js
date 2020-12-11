//스와이프 슬라이드
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  slidesPerView: 3,

});

//로그인, 장바구니
var login = document.getElementById('join'),
    openLogin = document.getElementById('openLog'),
    cancel = document.getElementById('logCant'),
    shoping = document.getElementById('openNone'),
    search = document.getElementById('openShr'),
    searchBox = document.getElementById('searchs'),
    shrCant = document.getElementById('shrCant'),

    i = 0;

openLogin.addEventListener('click',function(){
  if(i != openLogin){
    console.log('로그인창을 열었습니다.');
    login.style.display = "block";
  }
});
cancel.addEventListener('click',function(){
  if(i != cancel){
    console.log('로그인창을 닫았습니다.');
    login.style.display = "none";
  }
});

search.addEventListener('click',function(){
  if(i != openLogin){
    console.log('로그인창을 열었습니다.');
    searchBox.style.display = "block";
  }
});
shrCant.addEventListener('click',function(){
  if(i != cancel){
    console.log('로그인창을 닫았습니다.');
    searchBox.style.display = "none";
  }
});
shoping.addEventListener('click',function(){
  alert('장바구니가 비어있습니다.');
});


//스크롤 이벤트
var doc = document.documentElement,
    scrolls,
    a = document.getElementById('aniA'),
    b = document.getElementById('aniB'),
    v = document.getElementById('view'),
    mainImgOne = document.getElementById('mainImage1'),
    mainImgTow = document.getElementById('mainImage2'),
    mainImgThr = document.getElementById('mainImage3');


window.addEventListener('scroll',function(){
  scrolls = doc.scrollTop;
  //console.log(scrolls);
  if(scrolls > 400 && scrolls < 800){
    a.classList.add('animated');
  }else if(scrolls > 900 && scrolls < 1090){
    b.classList.add('animated');
  }else if(scrolls > 1200 && scrolls < 1250){
    v.classList.add('animated');
  }
});



