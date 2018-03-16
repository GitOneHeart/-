/*动画循环*/
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function(callback) {
					window.setTimeout(callback, 1000 / 60);
			   };
})();

//总角度
var totalDeg = 360 * 3 + 0;
//
var steps = [];
//
var prizeDeg = [0,360,400,160,120,80,240,280,200,320];
//var prizeDeg = [0,340,380,140,100,60,220,260,180,300];
var now = 0;
var a = 0.14;
var outter, timer, running = false;
var i = 10;
function rotate(){
	//beforeSend
	running = true;
	timer = setInterval(fun1=function() {
		i += 10;
		outter.style.webkitTransform = 'rotate('+ (-i) + 'deg)';
		outter.style.MozTransform = 'rotate(' + (-i)+ 'deg)';
	}, 1);
	switch(Number(awardFlag)){
		case 0:start(prizeDeg[0]);break;
		case 1:start(prizeDeg[1]);break;
		case 2:start(prizeDeg[2]);break;
		case 3:start(prizeDeg[3]);break;
		case 4:start(prizeDeg[4]);break;
		case 5:start(prizeDeg[5]);break;
		case 6:start(prizeDeg[6]);break;
		case 7:start(prizeDeg[7]);break;
		case 8:start(prizeDeg[8]);break;
		case 9:start(prizeDeg[9]);break;
		default:start();
	}
		running = false;
};
function start(deg) {
	clearInterval(timer);
	totalDeg = 360 * 5 + deg;//
	steps = [];
	now = 0;
	countSteps();
	requestAnimFrame(step);
}

function countSteps() {
	var t = Math.sqrt(2 * totalDeg / a);
	var v = a * t;
	for ( var i = 0; i < t; i++) {
		steps.push((2 * v * i - a * i * i) / 2);
	}
	steps.push(totalDeg);
}
function step() {
	outter.style.webkitTransform = 'rotate('+(-steps[now++]) + 'deg)';
	outter.style.MozTransform = 'rotate('+(-steps[now++]) + 'deg)';
	if (now < steps.length) {
		requestAnimFrame(step);
	} else {//
		running = false;
		setTimeout(showResult, 200);
	}
}

function showResult(){
	if(times == 0){
		$("#img2").off("click",myFun);
		$('#img2').on('click',function(){
			alert("您本周的抽奖次数已用完，请下周再来!");
		});

		switch(Number(awardFlag)){
			case 1: $('.prizeb p span').html('华为BLA-TL00');$('.prizeb img').attr('src','./img3/24.png');$('.onPrize').show();$('.wangka').hide();break;
			case 2: $('.prizeb p span').html('30元电子券');$('.prizeb img').attr('src','./img3/22.png');$('.onPrize').show();$('.wangka').hide();break;
			case 3: $('.prizeb p span').html('VIVO X20手机');$('.prizeb img').attr('src','./img3/25.png');$('.onPrize').show();$('.wangka').hide();break;
			case 4: $('.prizeb p span').html('60元电子券');$('.prizeb img').attr('src','./img3/22.png');$('.onPrize').show();$('.wangka').hide();break;
			case 5: $('.prizeb p span').html('1GB省内流量');$('.prizeb img').attr('src','./img3/23.png');$('.onPrize').show();$('.wangka').hide();break;
			case 6: $('.prizeb p span').html('华为荣耀6A');$('.prizeb img').attr('src','./img3/26.png');$('.onPrize').show();$('.wangka').hide();break;
			case 7: $('.prizeb p span').html('200MB省内流量');$('.prizeb img').attr('src','./img3/23.png');$('.onPrize').show();$('.wangka').hide();break;
			case 8: $('.prizeb p span').html('5元电子券');$('.prizeb img').attr('src','./img3/22.png');$('.onPrize').show();$('.wangka').hide();break;
			case 9: $('.wangka').show();break;
		};
		return;
	}else{
		
	}
	$('section>p').html("您本周还有"+times+"次抽奖机会")
	$("#img2").on("click",myFun);
	
	

}