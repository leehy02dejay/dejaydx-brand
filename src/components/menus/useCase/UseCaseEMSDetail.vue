<template>
	<div>
		<!-- 도입사례 뷰페이지 두번째 상단 영역 시작 -->

		<div class="sub42_con01">
			<div class="sub42_stitle_btn">EMS</div>
			<div class="sub42_stitle">설비 관리 시스템 구축</div>
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
					<li>· 사용자 기준정보 관리 및 권한 관리</li>
					<li>· 단말기 관리 및 접속이력 추적</li>
					<li>· 사용자 작업시간 Tracking</li>
					<li>· 실시간 작업현황 및 사용자 작업상태 관리</li>
					<li>· W/O 생성 및 설비 점검내용 EMS 공유</li>
					<li>· 기간 / 공정 / 설비 별 통계 및 추이</li>
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

		<!-- 도입사례 뷰페이지 다섯번째 상단 영역 시작 -->
		<div class="sub42_con02">
			<div class="sub42_con02_stitle">
				<img :src="require('@/assets/image/sub21_con01_stitle.png')" /> 설비
				관리 시스템 Admin WEB 구축 / M-EMS
			</div>
			<div class="sub42_con02_list">
				<ul>
					<li>
						· 공정 / 부서 / 설비 별 PM, BM 점검 및 발생 현황을<span
							class="br_mobile"
						></span>
						WEB에서 그래프로 실시간 파악하여 빠른 대응작업 가능
					</li>
					<li>· 현재 작업자들의 접속상태, 실시간 작업상태 Tracking 가능</li>
					<li>
						· 사용자 별 작업 건 수 및 시간, 부하율 및 기여도 통계를
						제공하여<span class="br_mobile"></span> 작업자 별 성과분석 및 관리
						가능
					</li>
					<li>
						· 공장 별 제조 공정 및 환경에 따른 Customizing 설계 및 개발 구현
					</li>
				</ul>
			</div>
		</div>
		<!-- 도입사례 뷰페이지 다섯번째 상단 영역 끝 -->

		<!-- 도입사례 뷰페이지 여섯번째 상단 영역 시작 -->
		<div class="sub42_con02">
			<div class="sub42_con02_stitle">
				<img :src="require('@/assets/image/sub21_con01_stitle.png')" /> 설비
				관리 시스템 APP 구축 / M-EMS
			</div>
			<div class="sub42_con02_list">
				<ul>
					<li>
						· BM 발생, MES 설비 인터락, Warning 이력 알림 기능으로 설비이상 즉각
						감지 가능
					</li>
					<li>
						· 기존 설비점검을 위해 존재하던 점검항목 및 매뉴얼 데이터를 APP에서
						활용 가능하여,<span class="br_mobile"></span> 페이퍼워크 감소 및
						설비 관리 효율 증대
					</li>
					<li>
						· NFC 태깅을 통한 사용자 작업시간 및 품질관리 시간, 검증시간 관리
						가능
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
