<route lang="json5">
{
  style: {
    navigationStyle: "custom",
    navigationBarTitleText: "首页"
  },
  type: "home"
}
</route>
<template>
  <view>首页</view>
  <wd-button @click="go">关于我们</wd-button>
</template>

<script setup lang="ts">
  function go() {
    uni.navigateTo({
      url: "/pages/home/about"
    });
  }

  onMounted(() => {
    console.log("xxx");
  });
</script>
