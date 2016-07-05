
// 탭리사이징 * 적용하려면 jquery.cs_tab.js 필요
function resetTabSize(){
	var tabLimit = 4;
	try{
		if(_thisPage_cfg.tab_line_limit!=undefined && _thisPage_cfg.tab_line_limit) tabLimit = _thisPage_cfg.tab_line_limit;
	}catch(e){}

	if($(".c-tab01").not(".wfull").not(".noAutoTab").length>0){
		$(".c-tab01").not(".wfull").not(".noAutoTab").rspnsvTab_fwidth({height:50,showCtrlBtns:true,line_limit: tabLimit});
	}

	//setContToggleViewTab();
	if($(".b-tab01").not(".noAutoTab").length>0){
		$(".b-tab01").not(".noAutoTab").rspnsvTab_auto({height:50,showCtrlBtns:true,ctrlBtnWidth:51,line_limit: 4});
	}
}

// 단일폴딩
function viewFolingItem(id,h){
	
	if($('#'+id).hasClass("isOpen")){
		$('#'+id).stop().animate({"height":0},400);
		$('#'+id).removeClass("isOpen");
		$("#"+id+"-tit a").removeClass("over");
	}else{
		$('#'+id).stop().animate({"height":h},400);
		$('#'+id).addClass("isOpen");
		$("#"+id+"-tit a").addClass("over");
	}

}
//다중폴딩
function viewFolingListItem(idx){
	var obj = $(".foldings-list #foldings-data"+idx);
	var obj_other = $(".foldings-list li").not("#foldings-data"+idx);
	
	$(".foldings-in-cont",$(obj_other)).slideUp("fast");
	$(obj_other).removeClass("over");			

	if(obj.hasClass("over")){
		$(".foldings-in-cont",$(obj)).slideUp("fast");
		$(obj).removeClass("over");
	}else{
		$(".foldings-in-cont",$(obj)).slideDown("fast");
		$(obj).addClass("over");
	}

}



// 상단으로 이동 버튼 효과
$(window).scroll(function () {
	if ($(this).scrollTop() > $(window).height() * 1) {  // 나타나는 위치값
		$('.topBt').fadeIn();
	} else {
		$('.topBt').fadeOut();
	}
});

$('.topBt').click(function () {
	$('html, body').animate({ scrollTop: 0 }, 300);  // top 위치 및 속도
	return false;
});