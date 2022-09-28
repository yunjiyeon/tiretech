$('.navbar_gnb li, .sub_shadow').on('mouseenter mouseleave',function(aa){ // mouseover mouseout== mouseenter mouseleave
    if($(window).width() > 1169){ // pc(데스크탑) 상태였을 때 실행
        if(aa.type == 'mouseenter'){ // mouseenter 였을 때만 적용
            $('.sub').stop().slideDown(); // stop() 이벤트가 바뀌면 멈춤
            $('.sub_shadow').stop().fadeIn();
        } else {
            $('.sub').stop().slideUp(200, function(){
                $('.sub').removeAttr('style') /*콜백함수*/
            });
            $('.sub_shadow').stop().fadeOut(200, function(){ 
                $(this).removeAttr('style')
            }); // 지저분하게 있는 style 정리
        }
    }
});

/* 
mouseenter / mouseleave : 자식 요소가 있다면 해당 자식 요소 영역은 제외
mouseover / mouseout : 자식 요소가 있다면 해당 자식 요소까지 포함 (자식 요소를 더 확실하게 인식)
*/

// 모바일 - 메인 메뉴 클릭시 서브 메뉴 활성화

const $mainBtn = $('.navbar_gnb > li > a'); // 메인 메뉴 

$mainBtn.click(function(){
    if( $(window).width() < 1170) {     // 모바일 상태였을 때만
        if( !$(this).parents('li').hasClass('on')){ // 클릭한 a 의 부모 li 에 on 클래스가 없을 때
            $('.sub').slideUp(300); // sub 메뉴 누르면 이미 열려있는 메뉴는 닫히고 새로 선택한 메뉴만 오픈
            $('.navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown(500); // siblings 형제 요소만 적용
            $(this).parents('li').addClass('on'); // .parents() 나 자신보다 윗단계에 있는 모든 요소
        } else { // 클릭한 부분이 이미 열려 있는 상태 (on 이 이미 있는 상태)
            $('.sub').slideUp(300);
            $(this).parents('li').removeClass('on');
        }
    }
});


// 모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');
    
    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},400);
        $('header').animate({left:-250},400);
    } else {
        $('.gnb').animate({right:-250},200);
        $('header').animate({left:0},200);
    }
})

// 모바일 상태에서 서브 메뉴를 열고 데스크탑 상태로 바꾸면 서브가 그냥 보여지는 상태 (수정하기)


$(window).resize(function(){
    if($(window).width() > 1169){
        $('.sub').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
});