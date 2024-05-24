<template>
	<div>
		<!-- 도입사례 뷰페이지 두번째 상단 영역 시작 -->

		<div class="sub42_con01">
			<div class="sub42_stitle_btn">MES</div>
			<div class="sub42_stitle">차세대 제조 관리 시스템 구축</div>
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
					<li>· 입고/출고/Kitting 등 자재 관리</li>
					<li>· 생산공정 모바일화 및 설비 제어</li>
					<li>· 공정 별 Batch 매칭 및 W/O 지정</li>
					<li>· 팔레트 및 박스 관리 및 Tracking</li>
					<li>· 자재 바코드 및 Lot card 조회</li>
					<li>. SQMS 생성 및 관리</li>
					<li>. ECQ / ECQR 생성 및 관리</li>
					<li>. Check Sheet 관리 및 점검사항 입력</li>
					<li>. 생산 제조 관리 공정 별 수치 모니터링</li>
					<li>. 공정, 설비, 라인 별 현황 관리</li>
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
						· MES에서 공장 라인에서 사용자가 직접 디바이스로 입력이 필요한
						기능들을 플랫폼으로 구축
					</li>
					<li>
						· - MES &lt;-&gt; m-MES 간 I/F 검증 및 데이터, 쿼리를 활용하여
						현장의 데이터를 APP을 활용 하여
						<span class="br_mobile"></span> 즉각 입력 가능하며 PC Service로 전달
						및 공유
					</li>
					<li>
						· 기존 현장에서 체크한 후 데스크탑 PC에 돌아와서 입력하여야 했던
						사용자 동선 개선
					</li>
					<li>
						· 공장 별 제조 공정 및 환경에 따른 Customizing 설계 및 개발 구현
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
