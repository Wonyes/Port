// 텍스트 버블효과
$(document).ready(function() {
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
            'bottom': '80%',
            'opacity' : '-=0.5'
        }, 3000, function(){
            $(this).remove()
        }
        );
    }, 350);
    //   커서포인트
    $(document).mousemove(function(e){
        $('.pointer').css({left:e.pageX, top:e.pageY});
    })

    // [TODO] javascript 코딩 컨벤션, html 코딩컨벤션, css 코딩컨벤션 확인해보기~(다른사람들은 어떻게 작업을 하고있는지 어떤 규칙을 가지고 작업을 하고 있는지)
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    var $html = $("html");
    var page = 1;
    var lastPage = $(".container").length;
    
    $html.animate({scrollTop:0},10);

    $(window).on("wheel", function(e){
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
            page--;
        }
        var posTop = (page-1) * $(window).height();
     
        $html.animate({scrollTop : posTop});
    });
    $(document).on("click","img",function(){
        var path = $(this).attr('src')
        showImage(path);
    });//end click event

    // 	이미지 클릭시 해당 이미지 모달
	$(".modal-click").click(function(){
		$(".modal").show();
		// 해당 이미지 가겨오기
		var imgSrc = $(this).children("img").attr("src");
		var imgAlt = $(this).children("img").attr("alt");
		$(".modal_content img").attr("src", imgSrc);
		$(".modal_content img").attr("alt", imgAlt);
    });
    //.modal안에 button을 클릭하면 .modal닫기
	$(".modal button").click(function(){
		$(".modal").hide();
	});
    // 모달 밖 클릭시 닫힘
    $(".modal").click(function (e) {
        if (e.target.className != "modal") {
          return false;
        } else {
          $(".modal").hide();
        }
    });
    //  gnb메뉴 액티브 효과
    var pager = $(".scroll .sc-gnb li");
    var contents = $(".container");

    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        contents.each(function(){
            var tg = $(this);
            var i = tg.index();

            if(tg.offset().top <= sct) {
                pager.removeClass('active');
                pager.eq(i).addClass('active');
            }
        })
    })
    let toggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    toggle.onclick = function(){
        menu.classList.toggle('active')
    }
    function bubbles(){
        let count = 200;
        let section = document.querySelector('#about');
        let i = 0;
        while (i < count){
          let bubble = document.createElement('i');
          let x = Math.floor(Math.random() * window.innerWidth);
          let y = Math.floor(Math.random() * window.innerHeight);
          let size = Math.random() * 10;
          bubble.style.left = x+'px';
          bubble.style.top = y+'px';
          bubble.style.width = 1+size+'px';
          bubble.style.height = 1+size+'px';

          bubble.style.animationDuration = 5+size+'s';
          bubble.style.animationDelay = 5+size+'s';

          section.appendChild(bubble);
          i++
        } 
    }
    bubbles();

    const menuToggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.mobilenav');
    menuToggle.onclick = function(){
        navigation.classList.toggle('open')
    }
})
