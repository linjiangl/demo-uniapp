import { defineUniPages } from "@uni-helper/vite-plugin-uni-pages";

export default defineUniPages({
  pages: [],
  subPackages: [],
  globalStyle: {
    navigationStyle: "default",
    navigationBarTitleText: "uni base template",
    navigationBarBackgroundColor: "#f8f8f8",
    navigationBarTextStyle: "black",
    backgroundColor: "#FFFFFF"
  },
  tabBar: {
    color: "#bfbfbf",
    selectedColor: "#01beff",
    backgroundColor: "#FFFFFF",
    borderStyle: "white",
    spacing: "8rpx",
    height: "110rpx",
    fontSize: "21rpx",
    midButton: {
      width: "110rpx",
      height: "165rpx",
      text: "记账",
      iconWidth: "110rpx",
      iconPath: "/static/images/tabbar/center.png"
    },
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "static/images/tabbar/home.png",
        selectedIconPath: "static/images/tabbar/home-full.png"
      },
      {
        pagePath: "pages/calculator/index",
        text: "计算",
        iconPath: "/static/images/tabbar/calc.png",
        selectedIconPath: "/static/images/tabbar/calc-full.png"
      },
      {
        pagePath: "pages/ledger/index",
        text: "账单",
        iconPath: "/static/images/tabbar/ledger.png",
        selectedIconPath: "/static/images/tabbar/ledger-full.png"
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "/static/images/tabbar/user.png",
        selectedIconPath: "/static/images/tabbar/user-full.png"
      }
    ]
  },
  easycom: {
    autoscan: true,
    custom: {
      "^wd-(.*)": "wot-design-uni/components/wd-$1/wd-$1.vue"
    }
  }
});
