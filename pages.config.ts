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
    spacing: "3px",
    height: "50px",
    fontSize: "10px",
    midButton: {
      width: "50px",
      height: "70px",
      text: "记账",
      iconWidth: "42px",
      iconPath: "/static/images/tabbar/center.png"
    },
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "static/images/tabbar/home.png",
        selectedIconPath: "static/images/tabbar/home-full.png",
        visible: true
      },
      {
        pagePath: "pages/calculator/index",
        text: "计算",
        iconPath: "/static/images/tabbar/calc.png",
        selectedIconPath: "/static/images/tabbar/calc-full.png",
        visible: false
      },
      {
        pagePath: "pages/ledger/index",
        text: "账单",
        iconPath: "/static/images/tabbar/ledger.png",
        selectedIconPath: "/static/images/tabbar/ledger-full.png",
        visible: false
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "/static/images/tabbar/user.png",
        selectedIconPath: "/static/images/tabbar/user-full.png",
        visible: false
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
