const getLastPage = () => {
  // getCurrentPages() 至少有1个元素，所以不再额外判断
  // const lastPage = getCurrentPages().at(-1)
  // 上面那个在低版本安卓中打包回报错，所以改用下面这个【虽然我加了src/interceptions/prototype.ts，但依然报错】
  const pages = getCurrentPages();
  return pages[pages.length - 1];
};

/**
 * 获取当前页面路由的 path 路径和 redirectPath 路径
 * path 如 ‘/pages/login/index’
 * redirectPath 如 ‘/pages/demo/base/route-interceptor’
 */
export const currRoute = () => {
  const lastPage = getLastPage();
  const currRoute = (lastPage as any).$page;

  const { fullPath } = currRoute as { fullPath: string };

  return getUrlObj(fullPath);
};

const ensureDecodeURIComponent = (url: string): string => {
  if (url.startsWith("%")) {
    return ensureDecodeURIComponent(decodeURIComponent(url));
  }
  return url;
};

/**
 * 解析 url 得到 path 和 query
 * 比如输入url: /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor
 * 输出: {path: /pages/login/index, query: {redirect: /pages/demo/base/route-interceptor}}
 */
const getUrlObj = (url: string) => {
  const [path, queryStr] = url.split("?");
  // console.log(path, queryStr)

  if (!queryStr) {
    return {
      path,
      query: {},
    };
  }
  const query: Record<string, string> = {};
  queryStr.split("&").forEach((item) => {
    const [key, value] = item.split("=");
    // console.log(key, value)
    query[key] = ensureDecodeURIComponent(value); // 这里需要统一 decodeURIComponent 一下，可以兼容h5和微信y
  });
  return { path, query };
};
