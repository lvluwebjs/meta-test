import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
  //meta字段可以给当前路由添加路由信息
  routes: [
    //路由重定向到login页面
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/login.vue"),
    },
    {
      path: "/music",
      name: "music",
      component: () => import("@/views/Music/music.vue"),
      meta: {
        requiresAuth: false,
        title: "音乐版块",
      },
      children: [
        {
          path: "Dload",
          name: "dload",
          component: () => import("@/views/Music/dload.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "share",
          name: "share",
          component: () => import("@/views/Music/share.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "buy",
          name: "buy",
          component: () => import("@/views/Music/buy.vue"),
          meta: {
            requiresAuth: true,
          },
        },

        {
          path: "listen",
          name: "listen",
          component: () => import("@/views/Music/listen.vue"),
        },
        {
          path: "detail",
          name: "detail",
          component: () => import("@/views/Music/detail.vue"),
        },
      ],
    },
  ],
});
// router.beforeEach((to, from ,next) => {
//   const token = store.getters.userInfo
//   if(to.matched.some(record => record.meta.requireAuth)){
//       next()//如果路由中有meta的requireAuth，且为true，就不进行登录验证，否则进行登录验证
//   }else{
//       if(token){
//           next()
//       }else{
//           if(to.path==="/login"){
//               next()
//           }else{
//               next({path:'/login'})
//           }
//       }
//   }
//   return
// })

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(function (item) {
      //当meta字段下面requiresAuth(字面意思为需要授权)属性值为true的时候，该页面是没有访问权限的，会自动跳转到'/login'登录页面
      return item.meta.requiresAuth;
    })
  ) {
    next("/login");
  } else {
    next(); //这一行next必须写
  }
});

export default router;
