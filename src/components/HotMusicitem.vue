<template>
  <ul class="hotnewMusicList">
    <router-link v-for="item in newHotMusicitem" :key="item.id" tag="li" to="/">
      {{item.first}}
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "HotMusicItem",
  props: {
    newHotMusicitem: Array,
  },
  created(){
      console.log(111);
      console.log(this.newHotMusicitem);
  }
};
</script>
<style lang="less" scoped>
.hotnewMusicList {
  li {
    width: 100%;
    display: flex;
    margin-top: 10px;
    padding-left: 10px;
  }
}
</style>