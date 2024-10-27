<route lang="json5">
{
  style: {
    navigationStyle: "custom",
    navigationBarTitleText: "优记账",
    onReachBottomDistance: 120,
    enablePullDownRefresh: true
  }
}
</route>
<template>
  <wd-navbar title="标题">
    <template #right>
      <wd-picker :columns="statTypeColumns" v-model="statType" />
    </template>
  </wd-navbar>

  <wd-tabs v-model="tab" swipeable sticky :lineWidth="50">
    <block v-for="(item, index) in tabOptions" :key="index">
      <wd-tab :title="item">
        <wd-gap bg-color="#f8f8f8"></wd-gap>

        <wd-calendar v-model="date" label="日期选择" />

        <wd-card title="经营分析">
          一般的，检举内容由承办的党的委员会或纪律检查委员会将处理意见或复议、复查结论同申诉人见面，听取其意见。复议、复查的结论和决定，应交给申诉人一份。
          <template #footer>
            <wd-button size="small" plain>查看详情</wd-button>
          </template>
        </wd-card>
      </wd-tab>
    </block>
  </wd-tabs>

  <wd-gap></wd-gap>

  <wd-card title="经营分析">
    一般的，检举内容由承办的党的委员会或纪律检查委员会将处理意见或复议、复查结论同申诉人见面，听取其意见。复议、复查的结论和决定，应交给申诉人一份。
    <template #footer>
      <wd-button size="small" plain>查看详情</wd-button>
    </template>
  </wd-card>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { onReachBottom, onPullDownRefresh } from "@dcloudio/uni-app";

  const tabOptions = ["日明细", "周统计", "月统计", "年统计"];

  const tab = ref<number>(0);

  const statTypeColumns = ref<Record<string, any>>([
    {
      value: "expenses",
      label: "支出"
    },
    {
      value: "income",
      label: "收入"
    }
  ]);
  const statType = ref<string[]>(["expenses"]);

  const date = ref(Date.now());

  onPullDownRefresh(() => {
    console.log("下拉刷新");
    uni.stopPullDownRefresh();
  });

  onReachBottom(() => {
    console.log("上拉到底时触发");
  });

  onMounted(() => {
    console.log("xxx");
  });
</script>

<style lang="scss" scoped>
  // .container {
  //   margin-top: 20rpx;
  //   padding: 0 20rpx;
  //   box-sizing: border-box;
  // }
</style>
