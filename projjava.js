  $(document).ready(() => {
    setTimeout(function(){
      $('body').addClass('loaded');
    }, 1500);
  })

//loader^

function findFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchDataList");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function insideFunction() {
  var element = document.getElementById("myUL");
  element.classList.add("searchlist");
}

function outsideFunction() {
  var element = document.getElementById("myUL");
  element.classList.remove("searchlist");
}
// search^


// When the user scrolls down shows the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// scroll to top
mybutton.addEventListener("click", backToTop);

function backtotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//back to top^

/*
function counter() {
// date
var countDownDate = new Date("aug 9, 2022 17:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  //current date and time
  var now = new Date().getTime();

  // distance between dates
  var distance = countDownDate - now;

  // Time calculations
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output
  document.getElementById("helpme").innerHTML = "<br><br>" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // when count down is over, pending
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("helpme").innerHTML = "EXPIRED";
  }
}, 1000);
}
//countdown^ */


function outFunction() {
  var element = document.getElementById("cover");
  element.classList.add("coverout");
} 

//map^