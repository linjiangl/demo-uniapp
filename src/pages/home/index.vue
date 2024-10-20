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
  <view class="container">
    <wd-swiper :list="swiperList" autoplay v-model:current="current" @click="handleClick" @change="onChange"></wd-swiper>

    <view>首页</view>
    <wd-button @click="go">关于我们</wd-button>
    <wd-button @click="login">登录</wd-button>
  </view>
</template>

<script setup lang="ts">
  function go() {
    uni.navigateTo({
      url: "/pages/home/about"
    });
  }

  function login() {
    uni.navigateTo({ url: "/pages/authorize/login" });
  }

  const current = ref<number>(0);

  const swiperList = ref([
    "https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg",
    "https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg",
    "https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg",
    "https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg",
    "https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg"
  ]);
  function handleClick(e) {
    console.log(e);
  }
  function onChange(e) {
    console.log(e);
  }

  onMounted(() => {
    console.log("xxx");
  });
</script>
