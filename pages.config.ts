import { defineUniPages } from "@uni-helper/vite-plugin-uni-pages";

export default defineUniPages({
  easycom: {
    autoscan: true,
    custom: {
      "^wd-(.*)": "wot-design-uni/components/wd-$1/wd-$1.vue"
    }
  },
  pages: [],
  subPackages: [],
  tabBar: {
    color: "#bfbfbf",
    selectedColor: "#01beff",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/index",
        text: "首页",
        iconPath: "static/images/tabbar/home.png",
        selectedIconPath: "static/images/tabbar/home-active.png"
      },
      {
        pagePath: "pages/about",
        text: "工具",
        iconPath: "static/images/tabbar/calculator.png",
        selectedIconPath: "static/images/tabbar/calculator-active.png"
      },
      {
        pagePath: "pages/about",
        text: "账本",
        iconPath: "static/images/tabbar/writing.png",
        selectedIconPath: "static/images/tabbar/writing-active.png"
      },
      {
        pagePath: "pages/about",
        text: "我的",
        iconPath: "static/images/tabbar/user.png",
        selectedIconPath: "static/images/tabbar/user-active.png"
      }
    ]
  },
  globalStyle: {
    backgroundColor: "@bgColor",
    backgroundColorBottom: "@bgColorBottom",
    backgroundColorTop: "@bgColorTop",
    backgroundTextStyle: "@bgTxtStyle",
    navigationBarBackgroundColor: "#000000",
    navigationBarTextStyle: "@navTxtStyle",
    navigationBarTitleText: "Uni Creator",
    navigationStyle: "custom"
  }
});
