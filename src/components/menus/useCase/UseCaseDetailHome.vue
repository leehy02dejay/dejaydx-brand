<template>
	<div class="use_case_detail">
		<div class="sub42_con_title">
			<p class="sub42_text01">도입사례</p>
		</div>

		<div class="sub42_list_title">설비 관리 시스템 구축사례</div>
		<router-view></router-view>
		<div class="sub42_con03">
			<div class="sub42_con03_text">
				DEJAY DX에서 올바른 분석을 통한<br />
				<span style="font-weight: bold"
					>최적화된 스마트팩토리를 경험해 보세요.</span
				>
			</div>
			<div class="sub42_btn">
				<RouterLink to="/contact">문의하기</RouterLink>
			</div>
		</div>
		<AboutMoreBanner></AboutMoreBanner>
	</div>
</template>

<script setup>
import AboutMoreBanner from '@/components/menus/about/AboutMoreBanner.vue';
</script>

<style>
.sub42_con_title {
	width: 100%;
	text-align: center;
}

.sub42_text01 {
	margin-top: 180px;
	font-size: 60px;
	letter-spacing: -1px;
	font-weight: bold;
}

.sub42_text02 {
	font-size: 20px;
	color: #989898;
	font-weight: 200;
}

.sub42_list_title {
	width: 1400px;
	height: 86px;
	font-size: 22px;
	padding-top: 25px;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	margin: 0 auto;
	margin-top: 80px;
}

.sub42_con03 {
	width: 1400px;
	margin: 0 auto;
	margin-top: 60px;
	padding-top: 60px;
	border-top: 1px solid #ccc;
}

.sub42_con03_text {
	text-align: center;
	font-size: 42px;
	line-height: 56px;
}

.sub42_btn {
	width: 200px;
	margin: 0 auto;
	height: 54px;
	background: #004b96;
	color: #fff;
	text-align: center;
	padding-top: 12px;
	font-size: 24px;
	font-weight: bold;
	margin-top: 40px;
}

.sub42_btn a {
	display: block;
	color: #fff;
}
</style>
