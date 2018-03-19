/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MyPage from '@/components/MyPage';
import Data from '@/components/Data';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage,
    },
    {
      path: '/data',
      name: 'Data',
      component: Data,
    }
  ],
});
