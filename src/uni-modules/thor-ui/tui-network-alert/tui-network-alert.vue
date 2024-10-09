<template>
	<view class="tui-network__alert"
		:style="{padding:padding,background:background,marginTop:marginTop+'rpx',marginBottom:marginBottom+'rpx'}"
		v-if="!isConnected && visible" @tap.stop="onTap">
		<slot></slot>
		<text class="tui-network__text" :style="{color:color,fontSize:size+'rpx'}">{{text}}</text>
		<slot name="right"></slot>
	</view>
</template>

<script>
	let listener;
	export default {
		name: "tui-network-alert",
		emits: ['click', 'change'],
		props: {
			text: {
				type: String,
				default: '当前网络不可用，请检查你的网络设置'
			},
			background: {
				type: String,
				default: '#fee3e6'
			},
			size: {
				type: [Number, String],
				default: 28
			},
			color: {
				type: String,
				default: '#f74d54'
			},
			padding: {
				type: String,
				default: '24rpx 30rpx'
			},
			visible: {
				type: Boolean,
				default: true
			},
			marginTop: {
				type: [Number, String],
				default: 0
			},
			marginBottom: {
				type: [Number, String],
				default: 0
			}

		},
		data() {
			return {
				isConnected: true,
				networkType: ''
			};
		},
		watch: {
			networkType(newValue, oldValue) {
				this.$emit('change', {
					isConnected: newValue,
					networkType: this.networkType
				})
			}
		},
		created() {
			listener = (res) => {
				this.networkType = res.networkType;
				// #ifdef MP-TOUTIAO
				this.isConnected = res.networkType != 'none'
				// #endif

				// #ifndef MP-TOUTIAO
				this.isConnected = res.isConnected;
				// #endif
			}
			listener && uni.onNetworkStatusChange(listener);
		},
		mounted() {
			uni.getNetworkType({
				success: (res) => {
					// console.log(res)
					this.networkType = res.networkType;
					this.isConnected = res.networkType != 'none'
				}
			})
		},
		// #ifndef VUE3
		beforeDestroy() {
			// #ifdef APP || MP-WEIXIN || H5 || MP-KUAISHOU
			listener && uni.offNetworkStatusChange(listener)
			// #endif
		},
		// #endif
		// #ifdef VUE3
		beforeUnmount() {
			// #ifdef APP || MP-WEIXIN || H5 || MP-KUAISHOU
			listener && uni.offNetworkStatusChange(listener)
			// #endif
		},
		// #endif
		methods: {
			onTap() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	.tui-network__alert {
		/* #ifndef APP-NVUE */
		width: 100%;
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	.tui-network__text {
		flex: 1;
		/* #ifndef APP-NVUE */
		word-break: break-word;
		box-sizing: border-box;
		/* #endif */
	}
</style>