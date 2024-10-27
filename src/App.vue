<script setup lang="ts">
  import { onLaunch } from "@dcloudio/uni-app";

  onLaunch(() => {
    uni.onTabBarMidButtonTap(() => {
      console.log("中间按钮点击回调");
    });
  });
</script>

<style></style>
