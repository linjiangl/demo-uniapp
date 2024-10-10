<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import AppLogos from '@/components/AppLogos.vue'
import InputEntry from '@/components/InputEntry.vue'



const aa = 1;

const current = ref<number>(0);
const tabBar = [
  {
    pagePath: '/pages/index',
    text: 'code',
    iconPath: '/static/images/tabbar/home.png',
    selectedIconPath: '/static/images/tabbar/home-active.png'
  },
  {
    pagePath: '/pages/about',
    text: 'extend',
    iconPath: '/static/images/tabbar/writing.png',
    selectedIconPath: '/static/images/tabbar/writing-active.png'
  },
  {
    pagePath: '/pages/login/index',
    text: 'thor',
    iconPath: '/static/images/tabbar/user.png',
    selectedIconPath: '/static/images/tabbar/user-active.png',
    num: 2,
    isDot: true,
    verify: true
  }
]

function tabbarSwitch(e) {
  current.value = e.index;

  // uni.navigateTo({
  //   url: tabBar[current.value]['pagePath'],
  // })
}
</script>

<template>
  <view px-10 py-20 text-center>
    <AppLogos />
    <InputEntry />
    <AppFooter />
    <tui-tabbar :current="current"  backdropFilter backgroundColor="#f8f8f8" :tabBar="tabBar" color="#777" selectedColor="#AC9157" @click="tabbarSwitch"></tui-tabbar>
  </view>
</template>
