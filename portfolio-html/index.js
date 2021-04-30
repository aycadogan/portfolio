$(function() {
    $('a[href^="#"]').click(function(){
    	// スクロールするスピード
    	var speed = 500;
    	// 遷移するリンク先取得
    	var href= $(this).attr("href");
    	// 空白or#のみだったらリンク先を「html」に設定
    	var target = $(href == "#" || href == "" ? 'html' : href);
    	// リンク先の座標を取得する
    	var position = target.offset().top;
    	// スムーズスクロールを実行
    	$("html, body").animate({scrollTop:position}, speed, "swing");
  	});
  	
});
