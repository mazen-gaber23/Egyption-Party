function showSinger(){
    $('.singer1').click(function () {
    $('.section2 .p1').slideToggle(500);
    $('.section2 .p2').slideUp(500);
    $('.section2 .p3').slideUp(500);
    $('.section2 .p4').slideUp(500);
})
$('.singer2').click(function () {
    $('.section2 .p1').slideUp(500);
    $('.section2 .p2').slideToggle(500);
    $('.section2 .p3').slideUp(500);
    $('.section2 .p4').slideUp(500);})
$('.singer3').click(function () {
    $('.section2 .p1').slideUp(500);
    $('.section2 .p2').slideUp(500);
    $('.section2 .p3').slideToggle(500);
    $('.section2 .p4').slideUp(500);})
$('.singer4').click(function () {
    $('.section2 .p1').slideUp(500);
    $('.section2 .p2').slideUp(500);
    $('.section2 .p3').slideUp(500);
    $('.section2 .p4').slideToggle(500);})
}
showSinger();
function showNav(){
    $('.open').click(function(){
    $('.n').css({left:'0px',transition:'left 1s'})
    $('.open').css({left:'220px',transition:'left 1s'})
})
}
showNav();
function closeNav(){
    $('.btn-close').click(function(){
        $('.n').css({left:'-220px',transition:'left 1s'})
        $('.open').css({left:'0px',transition:'left 1s'})
    })
}
closeNav();
function clickLinks(){
   $('.links').click(function(){
     let sectionId=$(this).attr('href')       //this=e.target
     let sectionTop=$(sectionId).offset().top;
    $('html,body').animate({scrollTop:sectionTop},2000)

   })
}
clickLinks();
function countDown() {
    var countDownDate = new Date("Jul 10, 2025 00:00:00").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days + "D");
        $("#hours").text(hours + "h");
        $("#minutes").text(minutes + "m");
        $("#seconds").text(seconds + "s");

        if (distance < 0) {
            clearInterval(x);
            $("#days").text("0D");
            $("#hours").text("0h");
            $("#minutes").text("0m");
            $("#seconds").text("0s");
        }
    }, );
}
    countDown();
    let input = [];
    function textCountDown() {
      let textareaValue = $('textarea').val();
      input = textareaValue
      let count = $('.count').text();
      if (input.length <= 100) {
        $('.count').text(100 - input.length);
      } else {
        $('.count').text('Your available characters are finished');
      }
    }
    $('textarea').keyup(function(event) {
      textCountDown();
    });




