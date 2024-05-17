<template>
	<div>
		<div class="sub51_con_title">
			<p class="sub51_text01">CONTACT</p>
			<p class="sub51_text02">
				문의를 남겨 주시면, 드제이DX 전문가가 <br />
				빠르고 정확한 답변을 드리겠습니다.
			</p>
		</div>

		<!-- 고객문의 페이지 첫번째 상단 영역 끝 -->

		<!-- 고객문의 페이지 두번째 상단 영역 시작 -->

		<div id="sub51_con01_warp">
			<div class="sub51_con01">
				<div class="sub51_con01_left">
					<div class="sub51_data01">
						<p class="sub51_text03">TEL.</p>
						<p class="sub51_text04">02-1234-1234</p>
					</div>
					<div class="sub51_data01">
						<p class="sub51_text03">E-MAIL.</p>
						<p class="sub51_text04">dejaydx@dejaydx.co.kr</p>
					</div>
					<div class="sub51_data01">
						<p class="sub51_text03">ADRESS.</p>
						<p class="sub51_text04">
							서울시 구로구 디지털로 300 , 12층 (1222호)
						</p>
					</div>
					<div class="sub51_data02"><KakaoMap></KakaoMap></div>
				</div>
				<div class="sub51_con01_right">
					<div class="sub51_con01_right01">
						<div class="sub51_con01_right01_left">
							<div class="sub51_text05">이름</div>
							<div class="sub51_text06">
								<input class="sub51_input01" name="name" />
							</div>
						</div>
						<div class="sub51_con01_right01_right">
							<div class="sub51_text05">소속</div>
							<div class="sub51_text06">
								<input class="sub51_input01" name="name" />
							</div>
						</div>
					</div>
					<div class="sub51_con01_right01-2">
						<div class="sub51_con01_right01_left">
							<div class="sub51_text05">연락처</div>
							<div class="sub51_text06">
								<input class="sub51_input01" name="name" />
							</div>
						</div>
						<div class="sub51_con01_right01_right">
							<div class="sub51_text05">이메일</div>
							<div class="sub51_text06">
								<input class="sub51_input01" name="name" />
							</div>
						</div>
					</div>
					<div class="sub51_con01_right02">
						<div class="sub51_con01_right02_left">문의분야</div>
						<div class="sub51_con01_right02_right">
							<ul>
								<li>
									<input type="radio" id="dewey" name="drone" value="dewey" />
									<label for="dewey">홈페이지</label>
								</li>
								<li>
									<input type="radio" id="dewey" name="drone" value="dewey" />
									<label for="dewey">어플리케이션</label>
								</li>
								<li>
									<input type="radio" id="dewey" name="drone" value="dewey" />
									<label for="dewey">유지보수</label>
								</li>
								<li>
									<input type="radio" id="dewey" name="drone" value="dewey" />
									<label for="dewey">기타</label>
								</li>
							</ul>
						</div>
					</div>
					<div class="sub51_con01_right03">
						<div class="sub51_con01_right03_left">문의사항</div>
						<div class="sub51_con01_right03_right">
							<textarea id="custom_textarea"></textarea>

							<div class="scr">
								<span
									style="
										font-size: 1.2em;
										letter-spacing: -1px;
										line-height: 1.4em;
									"
								>
									○ 개인정보 수집/이용 목적 : 홈페이지 상담에 대한 다양한 정보
									제공<br />
									○ 수집하는 개인정보의 항목 : 성명, 연락처<br /><br />

									※상담예약서비스 이용과정에서 아래와 같은 정보들이 생성되어
									수집될 수 있습니다. <br />
									&nbsp;&nbsp;&nbsp;&nbsp;- 서비스이용기록, 접속로그, 쿠키,
									접속IP정보<br /><br />

									○ 개인정보의 보유 및 이용기간<br />
									&nbsp;&nbsp;&nbsp;&nbsp;-보존기간은 1년이며, 정보 제공자가
									삭제를 요청할 경우 즉시 파기합니다.<br />
									&nbsp;&nbsp;&nbsp;&nbsp;-고객님의 정보는 개인정보 보호법에
									따라 보호되며 위의 이용목적 외에 별도로 사용하지 않을 것을
									약속드립니다.
								</span>
								<br /><br />
							</div>
						</div>
					</div>
					<div class="send">문의하기</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import KakaoMap from '@/components/atoms/KakaoMap.vue';
// import { onMounted, ref } from 'vue';
// const mapContainer = ref(null);
// const mapHeight = window.matchMedia('screen and (min-width: 1024px)').matches
// 	? 360
// 	: 300;

// function loadKakaoMap() {
// 	const script = document.createElement('script');
// 	script.onload = () => {
// 		// Ensure `daum` is defined after script is loaded
// 		if (typeof daum !== 'undefined') {
// 			new daum.roughmap.Lander({
// 				timestamp: '1714566745452',
// 				key: '2j7xc',
// 				mapHeight: mapHeight,
// 			}).render(mapContainer.value);
// 		}
// 	};
// 	script.src =
// 		'//dapi.kakao.com/v2/maps/sdk.js?appkey=879dd00f047cbfa7e9da9f5fe3ff49a8';
// 	document.head.appendChild(script);
// }

// onMounted(() => {
// 	loadKakaoMap();
// });
</script>

<style>
.sub51_con_title {
	width: 100%;
	text-align: center;
}

.sub51_text01 {
	margin-top: 180px;
	font-size: 60px;
	letter-spacing: -1px;
	font-weight: bold;
}

.sub51_text02 {
	font-size: 22px;
	line-height: 30px;
	padding-top: 20px;
}

.sub51_text03 {
	font-size: 24px;
	font-weight: bold;
	padding-top: 20px;
}

.sub51_text04 {
	font-size: 20px;
	padding-top: 10px;
}

.sub51_text05 {
	width: 74px;
	text-align: right;
	font-size: 20px;
	font-weight: bold;
	padding-top: 4px;
	float: left;
}

.sub51_text06 {
	padding-left: 10px;
}

#sub51_con01_warp {
	width: 1400px;
	margin: 0 auto;
	margin-top: 40px;
}

.sub51_con01 {
	width: 100%;
	padding-top: 20px;
}

.sub51_con01_left {
	width: 700px;
	float: left;
}

.sub51_con01_right {
	width: 700px;
	float: left;
}

.sub51_data01 {
	width: 100%;
	padding-top: 20px;
}

.sub51_data02 {
	width: 100%;
	padding-top: 50px;
}

.sub51_con01_right01 {
	clear: both;
	width: 100%;
	padding-top: 30px;
	padding-left: 20px;
}

.sub51_con01_right01-2 {
	clear: both;
	width: 100%;
	padding-top: 50px;
	padding-left: 20px;
}

.sub51_con01_right01_left {
	width: 45%;
	float: left;
}

.sub51_con01_right01_right {
	width: 45%;
	float: left;
}

.sub51_con01_right02 {
	clear: both;
	width: 100%;
	padding-top: 50px;
	padding-left: 20px;
}

.sub51_con01_right02_left {
	width: 74px;
	float: left;
	text-align: right;
	font-size: 20px;
	font-weight: bold;
	padding-top: 4px;
}

.sub51_con01_right02_right {
	width: 600px;
	float: left;
}

.sub51_con01_right02_right ul li {
	float: left;
	font-size: 18px;
	padding: 4px 20px 0 0;
	margin-left: 10px;
}

.sub51_con01_right03 {
	clear: both;
	width: 100%;
	padding-top: 50px;
	padding-left: 20px;
}

.sub51_con01_right03_left {
	width: 74px;
	float: left;
	text-align: right;
	font-size: 20px;
	font-weight: bold;
	padding-top: 4px;
}

.sub51_con01_right03_right {
	width: 600px;
	float: left;
}

.sub51_input01 {
	position: relative;
	width: 220px;
	height: 30px;
	border: 0px;
	font-size: 17px !important;
	padding: 14px 24px;
	border-bottom: 1px solid #bbb;
	background: none;
	margin-top: 0px;
	color: #000;
}

#custom_textarea {
	width: 535px;
	height: 230px;
	font-size: 18px;
	background-color: #fff;
	resize: none;
	color: black;
	border: none;
	outline: none;
	margin-left: 10px;
	border: 1px solid #ccc;
}

.scr {
	width: 535px;
	overflow-y: scroll;
	color: #777;
	padding: 10px;
	border: 1px solid #ccc;
	height: 220px;
	text-align: left;
	margin-left: 10px;
	margin-top: 10px;
}

.send {
	clear: both;
	width: 150px;
	font-size: 20px;
	height: 42px;
	background: #000;
	color: #fff;
	text-align: center;
	padding-top: 8px;
	margin-left: 320px;
	margin-top: 500px;
}
</style>
