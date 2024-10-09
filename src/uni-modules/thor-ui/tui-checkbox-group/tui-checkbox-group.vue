<template>
	<!-- #ifdef APP-PLUS || H5 || MP-ALIPAY || MP-TOUTIAO ||  MP-LARK || MP-JD || MP-360 -->
	<checkbox-group :name="name">
		<slot></slot>
	</checkbox-group>
	<!-- #endif -->

	<!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ -->
	<tui-form-field :name="name" v-model="vals">
		<slot></slot>
	</tui-form-field>
	<!-- #endif -->
</template>

<script>
	export default {
		name: "tui-checkbox-group",
		emits: ['change', 'input', 'update:modelValue'],
		// #ifdef MP-WEIXIN
		behaviors: ['wx://form-field-group'],
		// #endif
		// #ifdef MP-BAIDU
		behaviors: ['swan://form-field'],
		// #endif
		// #ifdef MP-QQ
		behaviors: ['qq://form-field'],
		// #endif
		// #ifdef H5
		behaviors: ['uni://form-field'],
		// #endif
		props: {
			name: {
				type: String,
				default: ''
			},
			// #ifdef VUE3
			modelValue: {
				type: Array,
				default () {
					return []
				}
			},
			// #endif
			value: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				vals: ''
			};
		},
		watch: {
			// #ifdef VUE3
			modelValue(vals) {
				this.modelChange(vals)
			},
			// #endif
			value(vals) {
				this.modelChange(vals)
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			checkboxChange(e) {
				this.$emit('change', e)
				this.$emit('input', e.detail.value)
				// #ifdef VUE3
				this.$emit("update:modelValue", e.detail.value);
				// #endif
			},
			changeValue(checked, target) {
				let vals = []
				this.childrens.forEach(item => {
					if (item.val) {
						vals.push(item.value);
					}
				})
				this.vals = vals;
				let e = {
					detail: {
						value: vals
					}
				}
				this.checkboxChange(e)
			},
			modelChange(vals) {
				this.childrens.forEach(item => {
					if (vals.includes(item.value)) {
						item.val = true;
					} else {
						item.val = false
					}
				})
			}
		}
	}
</script>

<style></style>
