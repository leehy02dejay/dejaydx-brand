<template>
	<div>
		<div class="sub41_con_title">
			<p class="sub41_text01">도입사례</p>
		</div>

		<div
			class="sub41_con01"
			@mouseover="changeHoveredState(0, true)"
			@mouseleave="changeHoveredState(0, false)"
		>
			<div class="sub41_con01_left">
				<img :src="require('@/assets/image/sub41-1.png')" />
			</div>
			<div :class="hoverStates[0] ? 'sub41_con01_right' : 'sub41_con02_right'">
				<div>
					<p :class="hoverStates[0] ? 'sub41_text02' : 'sub41_text06'">
						차세대 제조 관리 시스템 구축
					</p>
					<p :class="hoverStates[0] ? 'sub41_text03' : 'sub41_text07'">
						Next Generation Manufacturing Execution System
					</p>
				</div>
				<div :class="hoverStates[0] ? 'sub41_text04' : 'sub41_text08'">
					입고/출고/Kitting 등 자재 관리 <br />
					생산공정 모바일화 및 설비 제어 <br />
					공정 별 Batch 매칭 및 W/O 지정 <br />
					팔레트 및 박스 관리 및 Tracking <br />
					자재 바코드 및 Lot card 조회
				</div>
				<div :class="hoverStates[0] ? 'sub41_text05' : 'sub41_text09'">
					<router-link to="/useCaseDetail/nextmes">More view +</router-link>
				</div>
			</div>
		</div>

		<div style="clear: both"></div>

		<div
			class="sub41_con02"
			@mouseover="changeHoveredState(1, true)"
			@mouseleave="changeHoveredState(1, false)"
		>
			<div class="sub41_con02_left">
				<img :src="require('@/assets/image/sub41-2.png')" />
			</div>
			<div :class="hoverStates[1] ? 'sub41_con01_right' : 'sub41_con02_right'">
				<div>
					<p :class="hoverStates[1] ? 'sub41_text02' : 'sub41_text06'">
						설비 관리 시스템 구축
					</p>
					<p :class="hoverStates[1] ? 'sub41_text03' : 'sub41_text07'">
						Environmental Management System
					</p>
				</div>
				<div :class="hoverStates[1] ? 'sub41_text04' : 'sub41_text08'">
					입고/출고/Kitting 등 자재 관리 <br />
					생산공정 모바일화 및 설비 제어 <br />
					공정 별 Batch 매칭 및 W/O 지정 <br />
					팔레트 및 박스 관리 및 Tracking <br />
					자재 바코드 및 Lot card 조회 <br />
					<!-- 공간 차지로 UI 깨짐, 숨김처리 
						SQMS 생성 및 관리 <br />
					ECQ / ECQR 생성 및 관리 <br />
					Check Sheet 관리 및 점검사항 입력 <br />
					생산 제조 관리 공정 별 수치 모니터링 <br />
					공정, 설비, 라인 별 현황 관리 <br /> -->
				</div>
				<div :class="hoverStates[1] ? 'sub41_text05' : 'sub41_text09'">
					<RouterLink to="/useCaseDetail/ems">More view +</RouterLink>
				</div>
			</div>
		</div>

		<div style="clear: both"></div>

		<div
			class="sub41_con02"
			@mouseover="changeHoveredState(2, true)"
			@mouseleave="changeHoveredState(2, false)"
		>
			<div class="sub41_con02_left">
				<img :src="require('@/assets/image/sub41-3.png')" />
			</div>
			<div :class="hoverStates[2] ? 'sub41_con01_right' : 'sub41_con02_right'">
				<div>
					<p :class="hoverStates[2] ? 'sub41_text02' : 'sub41_text06'">
						생산 관리 시스템 구축
					</p>
					<p :class="hoverStates[2] ? 'sub41_text03' : 'sub41_text07'">
						Manufacturing Execution System
					</p>
				</div>
				<div :class="hoverStates[2] ? 'sub41_text04' : 'sub41_text08'">
					공정 / 부서 / 설비 별 점검 현황<br />
					점검 결재 현황 - 활성 / 비활성 시트 관리 <br />
					BATCH HISTORY 관리 <br />
					사전 비가동 예약기능 <br />
					이메일 발신 기능
				</div>
				<div :class="hoverStates[2] ? 'sub41_text05' : 'sub41_text09'">
					<RouterLink to="/useCaseDetail/mes">More view +</RouterLink>
				</div>
			</div>
		</div>

		<div style="clear: both"></div>

		<div
			class="sub41_con02"
			@mouseover="changeHoveredState(3, true)"
			@mouseleave="changeHoveredState(3, false)"
		>
			<div class="sub41_con02_left">
				<img :src="require('@/assets/image/sub41-4.png')" />
			</div>
			<div :class="hoverStates[3] ? 'sub41_con01_right' : 'sub41_con02_right'">
				<div>
					<p :class="hoverStates[3] ? 'sub41_text02' : 'sub41_text06'">
						모바일 제조 관리 시스템 구축
					</p>
					<p :class="hoverStates[3] ? 'sub41_text03' : 'sub41_text07'">
						Mobile Manufacturing Execution System
					</p>
				</div>
				<div :class="hoverStates[3] ? 'sub41_text04' : 'sub41_text08'">
					SQMS 생성 및 관리<br />
					ECQ / ECQR 생성 및 관리<br />
					CheckSheet 관리 및 점검사항 입력<br />
					생산 제조관리 공정 별 수치 관리<br />
					공정, 설비, 라인 별 현황 관리
				</div>
				<div :class="hoverStates[3] ? 'sub41_text05' : 'sub41_text09'">
					<RouterLink to="/useCaseDetail/mmes">More view +</RouterLink>
				</div>
			</div>
		</div>
		<div style="clear: both"></div>
		<div
			class="sub41_con02"
			@mouseover="changeHoveredState(4, true)"
			@mouseleave="changeHoveredState(4, false)"
		>
			<div class="sub41_con02_left">
				<img :src="require('@/assets/image/sub41-5.png')" />
			</div>
			<div :class="hoverStates[4] ? 'sub41_con01_right' : 'sub41_con02_right'">
				<div>
					<p :class="hoverStates[4] ? 'sub41_text02' : 'sub41_text06'">
						컨퍼런스 콜 플랫폼 구축
					</p>
					<p :class="hoverStates[4] ? 'sub41_text03' : 'sub41_text07'">
						Manufacturing Conference Call Platform
					</p>
				</div>
				<div :class="hoverStates[4] ? 'sub41_text04' : 'sub41_text08'">
					폐쇄망 내에서의 다자간 통화기능 <br />
					그룹생성 및 사용자 초대, 삭제 가능<br />
					다자간 통화로 업무 효율성 증대<br />
					WebView를 활용하여 OS에 관계없이 탑재 가능<br />
					자체 플랫폼을 구축하여 보안성 향상
				</div>
				<div :class="hoverStates[4] ? 'sub41_text05' : 'sub41_text09'">
					<RouterLink to="/useCaseDetail/mca">More view +</RouterLink>
				</div>
			</div>
		</div>

		<div style="clear: both"></div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const hoverStates = ref([false, false, false, false, false]);

function changeHoveredState(index, isHovered) {
	hoverStates.value[index] = isHovered;
}
</script>

<style>
.sub41_con_title {
	width: 100%;
	text-align: center;
}

.sub41_text01 {
	margin-top: 180px;
	font-size: 60px;
	letter-spacing: -1px;
	font-weight: bold;
}

.sub41_text02 {
	padding-top: 50px;
	font-size: 34px;
	font-weight: bold;
	color: #fff;
}

.sub41_text03 {
	padding-top: 10px;
	font-size: 15px;
	color: #fff;
}

.sub41_text04 {
	width: 65%;
	margin: 0 auto;
	padding-top: 30px;
	margin-top: 30px;
	font-size: 16px;
	line-height: 30px;
	border-top: 1px solid #dcdcdc;
	color: #fff;
}

.sub41_text05 {
	width: 168px;
	height: 38px;
	margin: 0 auto;
	border-radius: 30px;
	background: #fff;
	color: #004b96;
	font-size: 14px;
	font-weight: bold;
	padding-top: 8px;
	margin-top: 30px;
}

.sub41_text05 a {
	display: block;
	color: #004b96;
}

.sub41_text06 {
	padding-top: 50px;
	font-size: 34px;
	font-weight: bold;
}

.sub41_text07 {
	padding-top: 10px;
	font-size: 15px;
}

.sub41_text08 {
	width: 65%;
	margin: 0 auto;
	padding-top: 30px;
	margin-top: 30px;
	font-size: 16px;
	line-height: 30px;
	border-top: 1px solid #dcdcdc;
}

.sub41_text09 {
	width: 168px;
	height: 38px;
	margin: 0 auto;
	border-radius: 30px;
	background: #e9e9e9;
	color: #004b96;
	font-size: 14px;
	font-weight: bold;
	padding-top: 8px;
	margin-top: 30px;
}

.sub41_text09 a {
	display: block;
	color: #000;
}

.sub41_con01 {
	width: 1200px;
	margin: 0 auto;
	margin-top: 80px;
}

.sub41_con01_left {
	width: 700px;
	height: 464px;
	float: left;
}

.sub41_con01_right {
	width: 500px;
	height: 464px;
	float: left;
	border: 0 1px 1px 1px solid #ebebeb;
	background: #004b96;
	text-align: center;
}

.sub41_con02 {
	width: 1200px;
	margin: 0 auto;
	margin-top: 40px;
}

.sub41_con02_left {
	width: 700px;
	height: 464px;
	float: left;
}

.sub41_con02_right {
	width: 500px;
	height: 464px;
	float: left;
	border: 0 1px 1px 1px solid #ebebeb;
	background: #fafafa;
	text-align: center;
}
</style>
