// #ifndef APP-PLUS|| MP-WEIXIN || H5

const MIN_DISTANCE = 10;
export default {
	data() {
		return {
			left: 0,
			isShow: false,
			ani: false,
			moveLeft: '',
			moveRight: '',
			threshold: 30,
			open: false,
			rightWidth: 0
		}
	},
	watch: {
		shown(newVal) {
			this.openState(newVal)
		},
		left() {
			this.moveLeft = `translateX(${this.left}px)`
			this.moveRight = `translateX(${this.left+this.rightWidth}px)`
		},
		isShow(newVal) {
			this.openState(newVal)
		},
		buttons() {
			this.init()
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.init()
		})
	},
	methods: {
		init() {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				this.getSelectorQuery()
			}, 100)
			this.left = 0
			this.x = 0
		},
		closeSwipe(e) {
			if (!this.autoClose) return
			this.left = 0;
		},
		touchstart(e) {
			if (this.disabled) return
			this.ani = false
			this.x = this.left || 0
			this.stopTouchStart(e)
			// this.autoClose && this.closeSwipe()
		},
		touchmove(e) {
			if (this.disabled) return
			// 是否可以滑动页面
			this.stopTouchMove(e);
			if (this.direction !== 'horizontal') {
				return;
			}
			this.move(this.x + this.deltaX)
			return false
		},
		touchend() {
			if (this.disabled) return
			this.moveDirection(this.left)
		},
		move(value) {
			value = value || 0
			const rightWidth = this.rightWidth
			this.left = Math.min(Math.max(value, -rightWidth), 0);
		},
		moveDirection(left) {
			const threshold = this.threshold
			const open = this.open || false
			const rightWidth = this.rightWidth
			if (this.deltaX === 0 || left > 0) {
				this.openState(false)
				return
			}
			if ((!open && rightWidth > 0 && -left > threshold) || (open && rightWidth > 0 && rightWidth + left <
					threshold)) {
				this.openState(true)
			} else {
				this.openState(false)
			}
		},
		openState(type) {
			const rightWidth = this.rightWidth
			let left = ''
			this.open = this.open ? this.open : false
			if (type) {
				left = -rightWidth
			} else {
				left = 0
			}
			if (type) {
				this.showButton()
			} else {
				this.hideButton()
			}
			this.open = type
			// 添加动画类
			this.ani = true
			this.$nextTick(() => {
				this.move(left)
			})
		},
		close() {
			this.openState(false)
		},
		getDirection(x, y) {
			if (x > y && x > MIN_DISTANCE) {
				return 'horizontal';
			}
			if (y > x && y > MIN_DISTANCE) {
				return 'vertical';
			}
			return '';
		},
		resetTouchStatus() {
			this.direction = '';
			this.deltaX = 0;
			this.deltaY = 0;
			this.offsetX = 0;
			this.offsetY = 0;
		},
		stopTouchStart(event) {
			this.resetTouchStatus();
			const touch = event.touches[0];
			this.startX = touch.clientX;
			this.startY = touch.clientY;
		},
		stopTouchMove(event) {
			const touch = event.touches[0];
			this.deltaX = touch.clientX - this.startX;
			this.deltaY = touch.clientY - this.startY;
			this.offsetX = Math.abs(this.deltaX);
			this.offsetY = Math.abs(this.deltaY);
			this.direction = this.direction || this.getDirection(this.offsetX, this.offsetY);
		},

		getSelectorQuery() {
			uni.createSelectorQuery()
				// #ifndef MP-ALIPAY
				.in(this)
				// #endif
				.select('.' + this.elClass)
				.boundingClientRect(data => {
					if (data.length === 0) return
					this.rightWidth = data.width || 0
					this.isShow = this.shown
				})
				.exec()
		},
		onBtnClick(index, data) {
			this.closeSwipe()
			this.buttonTapByWxs({
				index: index,
				data: data
			})
		}
	}
}

// #endif

// #ifdef APP-PLUS|| MP-WEIXIN  || H5
export default {}
// #endif