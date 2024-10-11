<template>
  <wd-config-provider :themeVars="themeVars">
    <slot />
    <wd-toast />
    <wd-message-box />
    <wd-tabbar
      v-model="tabBarIndex"
      fixed
      active-color="#ee0a24"
      inactive-color="#7d7e80"
    >
      <wd-tabbar-item
        is-dot
        :value="2"
        title="点状"
        icon="home"
      ></wd-tabbar-item>
      <wd-tabbar-item :value="2" icon="cart" title="分类"></wd-tabbar-item>
      <wd-tabbar-item :value="30" title="我的" icon="user"></wd-tabbar-item>
      <wd-tabbar-item :value="200" title="最大值" icon="photo"></wd-tabbar-item>
      <wd-tabbar-item :value="10" title="客服" icon="chat"></wd-tabbar-item>
    </wd-tabbar>
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from "wot-design-uni";
import { ref } from "vue";

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: "red",
  // buttonPrimaryBgColor: "#07c160",
  // buttonPrimaryColor: "#07c160",
};

const tabBarIndex = ref<number>(0);
</script>
