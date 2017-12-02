# HTML
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<title>bing search</title>
	<style type="text/css">
	body{background-color: #333;}
	.bg-div{position:relative;background-image: url(river.jpg);width:1228px;height:690px;margin: 0 auto;}
	.logo{background-image: url(logo.png);height:53px;width: 107px; float: left;margin: -4px 18px 0 0;}
	.search-form{float: left; background-color: #fff;padding:5px;}
	.search-text{height:25px;line-height: 25px;float: left;width: 350px;border: 0;outline: none;}
	.search-button{background-image: url(search-button.png);width:29px;height:29px;float: left;border: 0}
	.search-box{position:absolute;top:150px;left: 200px; }
	</style>
</head>

<body>
 <div class="bg-div">
 	<div class="search-box">
 	<div class="logo"></div>
 	
	 	<form class="search-form" action="https://cn.bing.com/search" target="_blank">
	 		<input type="text" class="search-text" name="q"/>
	 		<input type="submit" class="search-button" value=""/>
	 	</form>
 	</div>
 </div>
</body>
</html>
