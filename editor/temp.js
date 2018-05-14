$id("temp4").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>私の自己紹介</title>
		<meta name="viewport" content="width=device-width">

	</head>
	<body>
		<div id="wrap">
			<header>
				<h1>私の自己紹介</h1>
			</header>
			<nav>
				<ul>
					<li><a href="index.html">ホーム</a></li>
					<li><a href="family.html">家族</a></li>
					<li><a href="contact.html">コンタクト</a></li>
				</ul>
			</nav>
			<main>
				<section>
					<h2>ご挨拶</h2>
					<p>こんにちは◯◯です。</p>
				</section>

				<section>
					<h2>仕事</h2>
					<p>私の仕事は◯◯です。</p>
				</section>

				<section>
					<h2>趣味</h2>
					<p>私の趣味は◯◯です。</p>
				</section>

			</main>
			<footer>
				<p><small>(C) Yashima</small></p>
			</footer>
		</div>
	</body>
</html>`;
});



$id("temp5").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>様々なHTML</title>
	</head>
	<body>
	
		

	</body>
</html>`;
});



$id("temp6-1").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSSセレクタ</title>
		<style>
			
		</style>
	</head>
	<body>
		<p>コンテンツAです。</p>
		<p class="class1" id="id1">コンテンツB</p>
		<p class="class1">コンテンツCです。</p>
		<p class="class1">コンテンツDです。</p>
		<p class="class1">コンテンツEです。</p>
	</body>
</html>`;
});



$id("temp6-2").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSSプロパティ</title>
		<style>
			
		</style>
	</head>
	<body>
		<p class="css1">文字の色が空色になります。</p>
		<p class="css2">背景が空色になります。</p>
		<p class="css3">文字の大きさが30pxになります。</p>
		<p class="css4">文字が太字になります。</p>
		<p class="css5">文字がセリフ(明朝)体になります。</p>
		<p class="css6">文字がサンセリフ(ゴシック)体になります。</p>
		<p class="css7">枠線を付けます。</p>
		<p class="css8 css7">要素の横幅、縦幅、外余白、内側余白を指定します。</p>
	</body>
</html>`;
});


$id("temp7").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>リッチなCSS</title>
		<style>
			div{
				width:200px;height:200px;
				margin:50px auto;
				line-height:200px;
				text-align:center;
				border:1px solid gray;
			}
		</style>
	</head>
	<body>
		<div id="box1">リッチなデザイン</div>
	</body>
</html>`;
});


$id("temp8").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>変形のCSS</title>
		<style>
			div{
				width:200px;height:200px;
				margin:50px auto;
				line-height:200px;
				text-align:center;
				border:1px solid gray;
			}
		</style>
	</head>
	<body>
		<div id="box1">変形のCSS</div>
	</body>
</html>`;
});

$id("temp9-1").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSSトランジション</title>
		<style>
			div{
				width:200px;height:200px;
				margin:50px auto;
				line-height:200px;
				text-align:center;
				border:1px solid gray;
			}
			
			
		</style>
	</head>
	<body>
		<div id="box1">CSSトランジション</div>
	</body>
</html>`;
});



$id("temp9-2").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSSアニメーション</title>
		<style>
			div{
				width:200px;height:200px;
				margin:50px auto;
				line-height:200px;
				text-align:center;
				border:1px solid gray;
			}
			
			
		</style>
	</head>
	<body>
		<div id="box1"></div>
	</body>
</html>`;
});



$id("temp10").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>擬似クラス</title>
		<style>

		</style>
	</head>
	<body>
		<ul>
			<li>項目1</li>
			<li>項目2</li>
			<li>項目3</li>
			<li>項目4</li>
			<li>項目5</li>
			<li>項目6</li>
			<li>項目7</li>
			<li>項目8</li>
			<li>項目9</li>
			<li>項目10</li>
		</ul>
	</body>
</html>`;
});



$id("temp11").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>JS</title>
	</head>
	<body>


	</body>
</html>`;
});


$id("temp12").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>JS</title>
	</head>
	<body>
		<p id="output1">ここが出力です</p>
	
		<script>
			var output1=document.getElementById("output1");
		</script>
	</body>
</html>`;
});


$id("temp13").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>JS</title>
		<style>
			div{
					width:200px;height:200px;
					margin:50px auto;
					line-height:200px;
					text-align:center;
					border:1px solid gray;
				}
		</style>
	</head>
	<body>
		<div id="box1">BOX1</div>
		<button onclick="btn1();">ボタン</button>
		
		<script>
			var box1 = document.getElementById("box1");
		
			function btn1(){
				
				
				
			}
		</script>
	</body>
</html>`;
});