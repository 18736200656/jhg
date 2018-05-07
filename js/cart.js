$(function(){

	// 获取index的src
	var srcStr = localStorage.getItem('src') ? localStorage.getItem('src') : "";
	var srcObj = JSON.parse(srcStr);
	$('.img_container .simg').attr('src',srcObj)

	// 放大镜的功能
	$('.img_list li').find('img').mouseenter(function(){
		var src = $(this).attr('src');
		$(this).parents('.img_list').siblings('.img_container').find('img').attr('src',src)
	})
	$('.img_container').mouseenter(function(e){
		var src = $(this).find('img').attr('src');
		//console.log(src)
		$('.bigImg').find('img').attr('src',src)
		
	})
	$('.img_container').mouseover(function(){
		$('.move').css('display','block');  //正常图片容器
		$('.bigImg').css('display','block'); //放大镜图片

		$('.img_container').mousemove(function(e){
			var e = e || window.event();
			
			var ix = e.clientX - $(this).offset().left - $('.move').width()/2,
				iy = e.clientY - $(this).offset().top -$('.move').height()/2,
				maxX = $(this).width()-$('.move').width(),
				maxY = $(this).height()-$('.move').height();

				if(ix<0){
					ix=0
				}else if(ix>maxX){
					ix=maxX
				};
				if(iy<0){
					iy=0
				}else if(iy>maxY){
					iy=maxY
				};

				var scaleX = $('.bigImg').width() / $('.move').width(),
				    scaleY = $('.bigImg').height() / $('.move').height();

				$('.move').css({left:ix,top:iy});
				$('.bigImg').find('img').css({left:-scaleX*ix,top:-scaleY*iy})
		})
		$('.img_container').mouseout(function(){
			$('.move').css('display','none'); //正常图片容器
			$('.bigImg').css('display','none'); //放大镜图片
		})
	})
	



	// 商品数量的加减
	var $val = parseInt($('input[name="num"]').val());
	$('.num_wrapper .minus').click(function(){
		//console.log(1)
		var val = --$val < 1 ? 1 : $val;
        var sum = parseFloat(val*$('.price').html().substring(1)).toFixed(2)
		    $('.total_shop strong').html(sum)
		return $('input[name="num"]').val(val);

		$.cookie('sum',sum,{expires:15,path:'/'})

	})
	$('.num_wrapper .plus').click(function(){
		
		var val = ++$val > 99 ? 99 : ($val < 1 ? 1 : $val);
		var sum = parseFloat(val*$('.price').html().substring(1)).toFixed(2)
		    $('.total_shop strong').html(sum)
		return $('input[name="num"]').val(val)
	})

	//点击购买
	$('.goShop').click(function(){
		var total =  $('.total_shop strong').html();
		var num = $('.num_wrapper').find('input').val();
		var price = $('.price').html().substring(1)
		var sum={
			total,
			num,
			price
		}
		window.localStorage.setItem('cart_total',JSON.stringify(sum))
		window.location.href="fukuan.html"
	})

})