<route lang="json5">
{
  style: {
    navigationBarTitleText: "关于",
    navigationBarTextStyle: "black"
  },
  type: ""
}
</route>
<template>
  <view class="container">
    <view class="u-tips-color font-size-28rpx" @click="toCopy"> 微信号:uni-app </view>
  </view>
</template>

<script setup lang="ts">
  import { useClipboard } from "@/hooks";

  const { setClipboardData, getClipboardData } = useClipboard();

  // 复制
  const toCopy = async () => {
    await setClipboardData({ data: "1234567890" });
    const data = await getClipboardData();
    console.log("[ data ] >", data);
  };
</script>
