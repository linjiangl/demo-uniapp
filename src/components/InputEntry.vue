<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const popup = ref()

function handleClick() {
  popup.value.open('top')
}
</script>

<template>
  <view class="input-box">
    <input
      v-model="name"
      placeholder="What's your name?"
    >
  </view>
  <view>
    <button :disabled="!name" @click="handleClick">
      Hello
    </button>
  </view>

  <uni-popup ref="popup" type="bottom">
    <text class="popup_label">
      Hello{{ `  ${name}` }} 👏
    </text>
  </uni-popup>

  <tui-rate :current="2" ></tui-rate>
  <view>
    <wd-text type="primary" text="主色"></wd-text>
    <wd-text type="error" text="错误"></wd-text>
    <wd-text type="success" text="成功"></wd-text>
    <wd-text type="warning" text="警告"></wd-text>
    <wd-text text="默认"></wd-text>
  </view>
</template>

<style scoped lang="scss">
.input-box {
  margin: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid gray;
}
.popup_label {
  padding: 0.5rem 2rem;
  background: gray;
  border-radius: 8px;
}
</style>
