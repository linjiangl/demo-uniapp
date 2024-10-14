<route lang="json5">
{
  style: {
    navigationBarTitleText: "关于"
  },
  layout: "tabbar"
}
</route>
<template>about</template>

<script setup lang="ts">
  onLoad(e => {
    console.log(e, "about");
  });
  onMounted(() => {
    console.log("about");
  });
</script>
