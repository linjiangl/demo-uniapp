<route lang="json5">
{
  style: {
    navigationStyle: "custom",
    navigationBarTitleText: "我的"
  }
}
</route>
<template>
  <wd-navbar title="我的" fixed></wd-navbar>

  <view class="custom-header">
    <image src="/static/images/public/my/img_bg_3x.png" class="header-bg" mode="widthFix" />
    <view class="header-center">
      <image src="/static/images/public/avatar/default.jpg" class="avatar" />
      <view class="info">
        <view class="nickname">
          呼噜猪zzZ
          <image src="/static/images/public/vip/level-1.png" class="img-vip" />
        </view>
        <view class="explain">这家伙很懒…</view>
      </view>
      <view class="btn-edit">
        <view class="btn">编辑</view>
      </view>
    </view>
    <view class="header-btm">
      <view class="btm-item">
        <view class="btm-num">25</view>
        <view class="btm-text">收藏夹</view>
      </view>
      <view class="btm-item">
        <view class="btm-num">22</view>
        <view class="btm-text">店铺关注</view>
      </view>
      <view class="btm-item">
        <view class="btm-num">3</view>
        <view class="btm-text">喜欢的内容</view>
      </view>
      <view class="btm-item">
        <view class="btm-num">44</view>
        <view class="btm-text">足迹</view>
      </view>
    </view>
  </view>

  <view class="container">
    <wd-cell-group>
      <wd-cell title="标题文字" label="描述文字" size="large" is-link center>
        <template #icon>
          <view class="cell-vip-icon"></view>
        </template>
      </wd-cell>
    </wd-cell-group>

    <wd-gap />

    <wd-grid>
      <wd-grid-item icon="picture" text="文字" />
      <wd-grid-item icon="picture" text="文字" />
      <wd-grid-item icon="picture" text="文字" />
      <wd-grid-item icon="picture" text="文字" />
    </wd-grid>

    <wd-gap />

    <wd-cell-group border>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item cell-item-right" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
        <view class="custom-text"> 高风险 </view>
      </wd-cell>
    </wd-cell-group>

    <wd-gap />

    <wd-cell-group border>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" color="red" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
      <wd-cell class="cell-item" title="标题文字" size="large" is-link center>
        <template #icon>
          <wd-icon name="setting" size="36rpx" class="cell-item-icon" />
        </template>
      </wd-cell>
    </wd-cell-group>
  </view>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { onPageScroll } from "@dcloudio/uni-app";

  const scrollTop = ref<number>(0);

  onPageScroll(e => {
    scrollTop.value = e.scrollTop;
  });

  onMounted(() => {
    console.log("xxx");
  });
</script>

<style lang="scss" scoped>
  .custom-header {
    width: 100%;
    height: 464rpx;
    position: relative;

    .header-bg {
      width: 100%;
      height: 464rpx;
      display: block;
    }

    .header-center {
      position: absolute;
      width: 100%;
      height: 128rpx;
      left: 0;
      top: 120rpx;
      padding: 0 30rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;

      .avatar {
        flex-shrink: 0;
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
        display: block;
      }
      .info {
        width: 60%;
        padding-left: 30rpx;

        .nickname {
          font-size: 30rpx;
          font-weight: 500;
          color: #fff;
          display: flex;
          align-items: center;
        }

        .img-vip {
          width: 56rpx;
          height: 24rpx;
          margin-left: 18rpx;
        }

        .explain {
          width: 80%;
          font-size: 24rpx;
          font-weight: 400;
          color: #fff;
          opacity: 0.75;
          padding-top: 8rpx;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .btn-edit {
        flex-shrink: 0;
        padding-right: 22rpx;

        .btn {
          height: 48rpx;
          line-height: 48rpx;
          border-radius: 48rpx;
          border: 1px solid #e7e7e7;
          padding: 0 30rpx;
          background-color: #fff;
          font-size: 28rpx;
        }
      }
    }

    .header-btm {
      width: 100%;
      padding: 0 30rpx;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 280rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;

      .btm-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .btm-num {
          font-size: 32rpx;
          font-weight: 600;
          position: relative;
        }

        .btm-text {
          font-size: 24rpx;
          opacity: 0.85;
          padding-top: 4rpx;
        }
      }
    }
  }

  .container {
    width: 100%;
    padding: 0 20rpx;
    box-sizing: border-box;
    position: relative;
    top: -102rpx;
    z-index: 10;
    .cell-vip-icon {
      display: block;
      box-sizing: border-box;
      width: 48rpx;
      height: 48rpx;
      margin-right: 20rpx;
      margin-top: 18rpx;
      background: url("https://img10.360buyimg.com/jmadvertisement/jfs/t1/71075/7/3762/1820/5d1f26d1E0d600b9e/a264c901943080ac.png")
        no-repeat;
      background-size: cover;
    }

    .cell-item {
      line-height: 68rpx;
    }

    .cell-item-icon {
      line-height: 68rpx;
      padding-right: 20rpx;
    }

    .cell-item-right {
      :deep(.wd-icon-arrow-right) {
        line-height: 68rpx;
      }
      .custom-text {
        font-size: 30rpx;
        color: red;
      }
    }
  }
</style>
