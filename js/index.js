$(function(){
	//头部导航
	$('.content a').find('img').click(function(){
		var src = $(this).attr('src');
		window.localStorage.setItem('src',JSON.stringify(src));
		window.location.href='cart.html'
	})
	
	/*var username = $.cookie('loginUser')
	if(username){
		$('.top_right .userLogin').css('display','none')
		$('.top_right .username').css('display','block').find('b').html(username);
	}else{
		$('.top_right .userLogin').css('display','block')
		$('.top_right .username').css('display','none')
	}*/

})