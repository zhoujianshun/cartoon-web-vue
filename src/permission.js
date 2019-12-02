import router from "./router";
// import store from "./store";
import { Notify, Toast } from "vant";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
// import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
// import { isUndefined } from "util";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // const isWeChat = to.meta.wechat
  // if (isWeChat) {

  //   // set page title

  //   next()
  //   NProgress.done()
  //   return
  // }
  // set page title
  document.title = getPageTitle(to.meta.title);

  let hasToken = true;
  // const token = to.query.token;
  // if (isUndefined(token) || token.length === 0) {
  //   hasToken = getToken();
  // } else {
  //   hasToken = true;
  //   store.dispatch("user/updateToken", token);
  // }

  if (hasToken) {
    next();
    NProgress.done();
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
      NProgress.done();
    } else {
      Toast.fail({ message: "抱歉，帐号未授权！", forbidClick: true });
      NProgress.done();
    }
  }
  // const token = to.query.token

  // determine whether the user has logged in
  // const hasToken = getToken()

  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         await store.dispatch('user/getInfo')

  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Notify({ type: 'danger', message: error || 'Has Error' })
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/

  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
