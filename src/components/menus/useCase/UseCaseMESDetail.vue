<template>
	<div>
		<!-- 도입사례 뷰페이지 두번째 상단 영역 시작 -->

		<div class="sub42_con01">
			<div class="sub42_stitle_btn">MES</div>
			<div class="sub42_stitle">생산 관리 시스템 구축</div>
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
					<li>· 공정 / 부서 / 설비 별 점검 현황</li>
					<li>· 점검 결재 현황 - 활성 / 비활성 시트 관리</li>
					<li>· BATCH HISTORY 관리</li>
					<li>· 사전 비가동 예약기능</li>
					<li>· 이메일 발신 기능</li>
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

		<!-- 도입사례 뷰페이지 여섯번째 상단 영역 시작 -->
		<div class="sub42_con02">
			<div class="sub42_con02_stitle">
				<img :src="require('@/assets/image/sub21_con01_stitle.png')" /> 구축
				결과
			</div>
			<div class="sub42_con02_list">
				<ul>
					<li>
						· 공정 / 부서 / 설비 별 점검 현황을 시스템에서 관리 및 기록, 점검
						가능
					</li>
					<li>· 현황을 그래프로 표현하여 즉각적인 시각적 인식 가능</li>
					<li>
						· 점검항목 결재기능 및 긴급상황 발생 시 E-mail 발송 기능을 두어
						점검항목 작성여부 및 내용을
						<span class="br_mobile"></span> 관리자가 시스템으로 확인할 수 있으며
						긴급 상황도 이메일 확인 가능
					</li>
				</ul>
			</div>
		</div>
		<!-- 도입사례 뷰페이지 여섯번째 상단 영역 끝 -->
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
