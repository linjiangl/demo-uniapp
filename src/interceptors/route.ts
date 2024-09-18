import { useUserStore } from '@/store'
// import { getNeedLoginPages, needLoginPages as _needLoginPages } from '@/utils'

// TODO Check
const loginRoute = '/pages/login/index'

const isLogined = () => {
  // const userStore = useUserStore()
  // return userStore.isLogined

  return true;
}


const navigateToInterceptor = {
  invoke({ url }: { url: string }) {
    const path = url.split('?')[0]
    const needLoginPages: string[] = ['/pages/about']
    const isNeedLogin = needLoginPages.includes(path)

    if (!isNeedLogin) {
      return true
    }
    const hasLogin = isLogined()
    if (hasLogin) {
      return true
    }
    const redirectRoute = `${loginRoute}?redirect=${encodeURIComponent(url)}`
    uni.navigateTo({ url: redirectRoute })
    return false
  },
}

export const routeInterceptor = {
  install() {
    uni.addInterceptor('navigateTo', navigateToInterceptor)
    uni.addInterceptor('reLaunch', navigateToInterceptor)
    uni.addInterceptor('redirectTo', navigateToInterceptor)
  },
}
