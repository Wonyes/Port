// 텍스트 버블효과
jQuery(document).ready(function($){
 
    var bArray = [];
    var sArray = [4,6,8,10];
 
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    setInterval(function(){
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
    }, 350);
 
    $(document).ready(function() {
        $(".bubbles").lettering();
    });
    $(document).ready(function() {
        animation();
      }, 1000);
      
      function animation() {
        var title1 = new TimelineMax();
        title1.to(".text-area", 0, {visibility: 'hidden', opacity: 0})
        title1.staggerFromTo(".title span", 0.5, 
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
        title1.to(".text-area", 0.2, {visibility: 'visible' ,opacity: 1})
      }
    //   커서포인트
      $(document).mousemove(function(e){
        $('.pointer').css({left:e.pageX, top:e.pageY});
    })
});