
new Glide(".images",{
  type: 'carousel',
  perView: 1,
  focusAt: 'center',
  gap: 40,
  breakpoints: {
    1200:{
      perView: 1
    },
    800:{
      perView: 2
    }
  }
}).mount();


let offset = 0;
const caruselSlider = document.querySelector('.carusel-slide');

document.querySelector('.btn-join-prev').addEventListener('click', function(){
  offset = offset + 216;
  if(offset > 874){
    offset = 0;
  }
  caruselSlider.style.left = -offset + 'px';
});
document.querySelector('.btn-join-next').addEventListener('click', function(){
  offset = offset - 216;
  if(offset < 0 ){
    offset = 874;
  }
  caruselSlider.style.left = -offset + 'px';
});
