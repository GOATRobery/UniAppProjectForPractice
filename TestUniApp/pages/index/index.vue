<template>
	<view class="Home">
		<!-- 首页-顶部-轮播图 -->
		<swiper class="homeSwiper" :indicator-dots="indicatorDots" :circular="circular" :autoplay="autoplay" :interval="interval">
			<swiper-item v-for="item in swiperData" :key="item.id">
				<image class="homeSwiperImage" :src="item.img"> </image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperData: [],
				indicatorDots: true,
				circular: true,
				autoplay: true,
				interval: 2800,
			}
		},
		onLoad() {
			this.requestSwipers();
		},
		methods: {
			async requestSwipers() {
				const res = await this.$reqeustDataMethod({
					url: '/api/getlunbo/'
				})
				console.log(res)
				this.swiperData = res.data.message
			},
		}
	}
</script>

<style >
	.homeSwiper {
		height: 380rpx;
		width: 750rpx;
	},
	.homeSwiperImage {
		height: 100%;
		width: 100%;
	}
</style>
