<template>
	<div class="kakaoMap_object">
		<KakaoMap
			id="kakaoMap_object"
			:lat="coordinate.lat"
			:lng="coordinate.lng"
			:draggable="true"
		>
			<KakaoMapMarker
				:lat="coordinate.lat"
				:lng="coordinate.lng"
			></KakaoMapMarker>
		</KakaoMap>
	</div>
</template>

<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';

const coordinate = {
	lat: 37.4850307,
	lng: 126.8966116,
};
</script>

<style>
.kakaoMap_object {
	width: 700px;
	height: 440px;
}
</style>
