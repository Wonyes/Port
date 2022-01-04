$(document).ready(function(){
    var pager = $(".gnb ul li");
    var contents = $(".content");

    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        // console.log('scroll',sct);
        contents.each(function(){
            var tg = $(this);
            var i = tg.index();
            // console.log(tg + '----' +  i)

            // console.log('offset.top: ' + $(this).offset().top);

            if(tg.offset().top <= sct) {
                console.log('000');
                console.log('영역' + i + '입니다');
                pager.removeClass('active');
                pager.eq(i).addClass('active');
            }
        })

    })

})