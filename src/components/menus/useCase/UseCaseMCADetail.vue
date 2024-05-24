<template>
	<div>
		<!-- 도입사례 뷰페이지 두번째 상단 영역 시작 -->

		<div class="sub42_con01">
			<div class="sub42_stitle_btn">M-CA</div>
			<div class="sub42_stitle">컨퍼런스 콜 플랫폼 구축</div>
			<div class="sub42_img01">
				<img :src="require('@/assets/image/sub42-1.png')" />
			</div>
		</div>
		<!-- 도입사례 뷰페이지 두번째 상단 영역 끝 -->

		<!-- 도입사례 뷰페이지 세번째 상단 영역 시작 -->
		<div class="sub42_con02">
			<div class="sub42_con02_stitle">
				<img :src="require('@/assets/image/sub21_con01_stitle.png')" /> 구축
				정보
			</div>
			<div class="sub42_con02_list">
				<ul>
					<li>· 폐쇄망 내에서의 다자간 통화기능</li>
					<li>· 그룹생성 및 사용자 초대, 삭제 가능</li>
					<li>· 다자간 통화로 업무 효율성 증대</li>
					<li>· WebView를 활용하여 OS에 관계없이 탑재 가능</li>
					<li>· 자체 플랫폼을 구축하여 보안성 향상</li>
				</ul>
			</div>
		</div>
		<!-- 도입사례 뷰페이지 세번째 상단 영역 끝 -->

		<!-- 도입사례 뷰페이지 네번째 상단 영역 시작 -->
		<div class="sub42_con02">
			<div class="sub42_con02_stitle">
				<img :src="require('@/assets/image/sub21_con01_stitle.png')" /> 진행
				과정
				<span class="sub42_text02"
					>컨설팅 > 기획 > 디자인 > 개발 > 현지 셋업 ( 말레이시아, 천진, 서안,
					헝가리, 울산)</span
				>
			</div>
			<div class="sub42_con02_img">
				<img :src="require('@/assets/image/sub42-2.png')" />
			</div>
		</div>
		<!-- 도입사례 뷰페이지 네번째 상단 영역 끝 -->

		<div class="sub42_con02">
			<div class="sub42_con02_stitle">
				<img :src="require('@/assets/image/sub21_con01_stitle.png')" /> 설비
				관리 시스템 Admin WEB 구축 / M-EMS
			</div>
			<div class="sub42_con02_list">
				<ul>
					<li>· 폐쇄망 내에서의 다자간 통화기능 구현 및 현지 셋업 완료</li>
					<li>
						· 사용자 신규 그룹생성 및 초대, 삭제 가능, 다자간 통화로 업무 효율성
						증대 및 즉각적 상황공유 가능
					</li>
					<li>
						· Janus Gateway를 사용하여, ICE, DTLS, SRTP 서버 등의 구현 없이도
						WebRTC 를 구현하여
						<span class="br_mobile"></span>서버를 거치지 않는 이용자 간의
						다자통신 구현
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style>
.sub42_con01 {
	width: 1400px;
	margin: 0 auto;
	padding-top: 40px;
}

.sub42_stitle_btn {
	width: 100px;
	height: 36px;
	background: #004b96;
	color: #fff;
	text-align: center;
	font-size: 22px;
	font-weight: bold;
	padding-top: 4px;
}

.sub42_stitle {
	font-size: 40px;
	font-weight: bold;
	padding-top: 20px;
}

.sub42_img01 {
	width: 1400px;
	margin: 0 auto;
	padding-top: 40px;
}

.sub42_con02 {
	width: 1400px;
	margin: 0 auto;
	padding-top: 60px;
}

.sub42_con02_stitle {
	width: 1400px;
	margin: 0 auto;
	font-size: 30px;
	font-weight: bold;
}

.sub42_con02_list {
	font-size: 20px;
	line-height: 32px;
	padding-top: 20px;
}

.sub42_con02_img {
	padding-top: 40px;
}
</style>
