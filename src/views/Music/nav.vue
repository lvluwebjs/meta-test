<template>
  <div>
    <ul>
        <!-- 声明式导航 -->
      <router-link to="/music/dload" tag="li" activeClass="active"
        >dload嵌套路由跳转</router-link
      >
      <router-link to="/music/share" tag="li" activeClass="active"
        >share嵌套路由跳转</router-link
      >
      <router-link to="/music/buy" tag="li" activeClass="active"
        >buy嵌套路由跳转</router-link
      >
      <router-link to="/music/listen" tag="li" activeClass="active"
        >listen嵌套路由跳转</router-link
      >
      <router-link to="/music/detail" tag="li" activeClass="active"
        >detail嵌套路由跳转</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
}
li {
  list-style: none;
  margin-left: 10px;
  color:orange
}
.active {
  border-bottom: 5px solid red;
}
</style>
