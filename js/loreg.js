$(function(){
	$('.login_container li a').click(function(){
		var index = $(this).parent().index();
		$(this).addClass('active').parent().siblings().find('a').removeClass('active')
		$('form').eq(index).css('display','block').siblings('form').css('display','none');
	})
	$('.login_container li:nth-child(2)').click(function(){
		$('.banner').css({'background':'url(img/register.jpg) no-repeat center','backgroundSize':'cover'})
	})
	$('.login_container li:nth-child(1)').click(function(){
		$('.banner').css({'background':'url(img/login.jpg) no-repeat center','backgroundSize':'cover'})
	})
	//注册
	$('.registerbtn').click(function(){
		var user = $('.register .username1').val();
		var pwd = $('.register .pwd1').val();
		var conPwd = $('.register .conPwd').val();
		if(!user || !pwd || !conPwd){
			alert('用户名或密码不能为空');
			return false
		};
		if(pwd!=conPwd){
			alert('两个密码不一致');
			return false
		};
		alert('用户注册成功！')
		
	})

	//登录
	$('.loginbtn').click(function(){
		
		var user = $('.login .username').val(); 
		var pwd = $('.login .pwd').val();

		if(!user || !pwd ){
			alert('用户名或密码不能为空')
			return
		}
		window.location.href = 'index.html'	
		
	})
})