<template>
   <div>
       <div class="App">
           <img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" alt="vue">
           <img src="5.jpg" alt="jpg">
           Hello {{msg}}
       </div>
       <div>
           <router-link to="/page1">go page1</router-link>
           <router-link to="/page2">go page2</router-link>
       </div>
       <div>
           <router-view></router-view>
       </div>
   </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: 'gVue',
                imgUrl1: require('../5.jpg')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .App{
        color: red;
    }
</style>