<template>
	<div class="header_m">
		<div class="menu_logo">
			<a href="/"><img src="../assets/image/m_logo.png" /></a>
		</div>
		<div class="menu_btn">
			<a href="/">
				<img src="../assets/image/m_menu.png" />
			</a>
		</div>
	</div>
	<div class="menu_bg"></div>
	<div class="sidebar_menu">
		<div class="close_btn">
			<a href="#">
				<img src="../assets/image/m_close.png" />
			</a>
		</div>
		<ul class="menu_wrap">
			<li><a href="/">ABOUT US</a></li>
			<li><a href="/">SMART FACTORY</a></li>
			<li><a href="/">USE CASE</a></li>
			<li><a href="/">CONTACT</a></li>
		</ul>
	</div>
</template>

<script setup></script>

<style>
.header_m {
	display: none;
	position: fixed;
	width: 100%;
	height: 50px;
	background: #000;
	z-index: 999999999;
	padding-top: 5px;
}
.menu_logo {
	width: 130px;
	padding-left: 10px;
	padding-top: 8px;
	float: left;
}

.menu_logo img {
	width: 100%;
}
.menu_btn {
	float: right;
	width: 40px;
	text-align: right;
	padding: 8px;
	margin-right: 10px;
}

.menu_btn img {
	width: 100%;
}

.menu_bg {
	width: 100%;
	height: 100%;

	position: absolute;
	top: 0;
	display: none;
}
.sidebar_menu {
	display: none;
	width: 70%;
	height: 100%;
	background: #000;
	position: absolute;
	top: 0;
	right: -70%;
	z-index: 999999999;
}
.close_btn {
	width: 25px;
	height: 25px;
	margin: 14px;
}

.close_btn img {
	width: 100%;
}

.close_btn > a {
	display: block;
	width: 100%;
	height: 100%;
}
.menu_wrap {
	list-style: none;
	padding: 20px 20px;
}
.menu_wrap li {
	padding: 15px 0;
}
.menu_wrap li a {
	font-family: 'GmarketSansMedium', dotum, sans-serif;
	font-size: 20px;
	color: #fff;
	font-weight: bold;
	text-decoration: none;
}

@media screen and (max-width: 768px) {
	.header_m {
		display: block;
	}
}
</style>
