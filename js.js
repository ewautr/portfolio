window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollAppear(){
    var scroller = document.querySelector('.scroller');
    var scrollerPosition = scroller.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(scrollerPosition < screenPosition){
        scroller.classList.add('scrollerappear');
    }
}

window.addEventListener('scroll', scrollAppear)
