import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/app-global.scss";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import "@/permission"; // permission control

import * as filters from "@/filters"; // global filters

// 配置插件结束
import {
  Button,
  Field,
  Uploader,
  Divider,
  Picker,
  Popup,
  Toast,
  ImagePreview,
  Tab,
  Tabs,
  List,
  PullRefresh,
  CountDown,
  Dialog,
  CellGroup,
  Cell,
  Switch,
  Row,
  Col,
  Image,
  Grid,
  GridItem,
  Lazyload
} from "vant";
import "@/styles/custom-vant/custom-vant-style.scss";

Vue.use(Button);
Vue.use(Uploader);
Vue.use(Field);
Vue.use(Divider);
Vue.use(Picker);
Vue.use(Toast);
window.Toast = Toast;
Vue.use(Popup);
Vue.use(ImagePreview);
Vue.use(Tab).use(Tabs);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(CountDown);
Vue.use(Dialog);
Vue.use(CellGroup);
Vue.use(Cell);
Vue.use(Switch);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Grid).use(GridItem);
Vue.use(Lazyload);
// 配置插件结束

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
