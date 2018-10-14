/**/
 var total = 0;
 var count = 0;

  $(window).on('scroll', function(){
    if ($(window).scrollTop()) {
      $('header').addClass('black');
    }
    else {
      $('header').removeClass('black');
    }
  })


function addItem(price){
var a =parseInt(price)
total = total + a;
count++;
document.getElementById("carttotal").innerHTML="(Total Amount Rs "+total+" - items "+count+")";

}

function cartinfo(){
  alert("Total amount " +total+", " +count+" Items added");
}
