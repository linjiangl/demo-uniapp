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
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "static/images/tabbar/home.png",
        selectedIconPath: "static/images/tabbar/home-active.png"
      },
      {
        pagePath: "pages/calculator/index",
        text: "工具",
        iconPath: "static/images/tabbar/calculator.png",
        selectedIconPath: "static/images/tabbar/calculator-active.png"
      },
      {
        pagePath: "pages/ledger/index",
        text: "记账",
        iconPath: "static/images/tabbar/writing.png",
        selectedIconPath: "static/images/tabbar/writing-active.png"
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "static/images/tabbar/user.png",
        selectedIconPath: "static/images/tabbar/user-active.png"
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
