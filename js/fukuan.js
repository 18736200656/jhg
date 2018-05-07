$(document).ready(function(){

//收货地址
	$('.add_address').click(function(){
		$('.dialog').show()
	})

	$('.close').click(function(){
		$('.dialog').hide()
	})


	$('.sure').click(function(e){
		e.stopPropagation()
		
		var name = $('.name').val();
		var phone = $('.phone').val();
		var address = $('.add_write').val();
		var province=$('.province').find('option:selected').val();
		var city = $('.city').find('option:selected').val();
		var district = $('.district').find('option:selected').val();
		var code = $('.sendcode').val();
		var addressmark = $('.addressmark').val();
		var iphone = phone.replace(phone.substr(3,4),'****');
		var res = {name,phone,province,city,district,address,code,addressmark,iphone};
		
		if(!name || !phone || !address){
			alert('姓名、电话、地址必须要填写');
			return;
		}
		$(this).parents('.dialog').hide();
	
		var  html='<div class="address_content">'+
					'<h3>'+ res.name+'</h3>'+
					'<p class="iphone">'+ res['iphone']+'</p>'+
					'<p class="detail_address">'+
						'<span class="pro">'+ res['province']+'</span>&nbsp;'+
						'<span class="address_city">'+ res['city']+'</span>&nbsp;'+
						'<span class="address_district">'+ res['district']+'</span>&nbsp;'+
						'<span class="addess_jiedao">'+ res['address']+'</span>&nbsp;'+
						'<span class="addess_code">'+ res['code']+'</span>&nbsp;'+
						'<span class="addess_mark">'+ res['addressmark']+'</span>&nbsp;'+
					'</p>'+
					'<span style="color: #ff6700;position: absolute;right: 20px;'+
					'bottom:20px;font-size:16px;cursor:pointer;display: none; " class="xiugai">修改</span>'+
				'</div>'
		$('.address').append(html);
	})
	// $('.addClass .address_content').find('h3').html(res['name']);
	// $('.addClass .address_content').find('.iphone').html(res['iphone']);
	// $('.addClass .address_content').find('.pro').html(res['province']);
	// $('.addClass .address_content').find('.address_city').html(res['city']);
	// $('.addClass .address_content').find('.address_district').html(res['district']);
	// $('.addClass .address_content').find('.address_jiedao').html(res['address']);
	// $('.addClass .address_content').find('.addess_code').html(res['code']);
	// $('.addClass .address_content').find('.addess_mark').html(res['addressmark']);


	$('.address').on('click','.address_content',function(){
		$(this).find('.xiugai').show().end().siblings(':not(.lab)').find('.xiugai').hide();
		$(this).css({border:'1px solid #ff6700'}).siblings().css({border:'1px solid #e0e0e0'})
	})
	$('.address').on('click',' .address_content .xiugai',function(){
		//console.log(1)
		$('.dialog').show()
	})

	$('.send_time li:not(.lab)').css({
		height:40,
		width:240,
		marginRight:30,
	})
	$('.time li:not(.lab)').click(function(){
		//$(this).css({border:'1px solid #ff6700'}).siblings().css({border:'1px solid #e0e0e0'})
		$(this).addClass('orange').find('span').addClass('orange').end().siblings().removeClass('orange').find('span').removeClass('orange')
	})

	//购物列表
	var srcStr = localStorage.getItem('src') ? localStorage.getItem('src') : "";
	var srcObj = JSON.parse(srcStr);
	$('.goods_name img').attr('src',srcObj);

	var cartStr = window.localStorage.getItem('cart_total') ?  window.localStorage.getItem('cart_total') :'{}'
	var cartObj = JSON.parse(cartStr);
	console.log(cartStr)
	$('.goods .goods_num .goods_price').html(cartObj['price']);
	$('.goods .goods_num .num').html(cartObj['num'])
	$('.goods .price').find('span').html(cartObj['total'])

	$('.taotal_price .toatl_num').html(cartObj['num'])
	$('.taotal_price .toatl_sum').html(cartObj['total'])
	$('.taotal_price .total_toatl').html(cartObj['total'])

//结算页面
	$('.payBtn').click(function(){
		var address = $('.address .address_content').html()
		if(!address){
			alert('请选择收货地址！')
			return;
		}
	})

})