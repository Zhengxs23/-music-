<template>
  <div class="hotsong">
    <div class="top_img">
      <div class="bg_img hot_icon"></div>
      <div class="hot_time">更新日期 : {{ Month }}月{{ Day }}日</div>
    </div>
    <HotMusicitem :newHotMusicitem = "newHotMusicitem"></HotMusicitem>
  </div>
</template>

<script>
import HotMusicitem from "../components/HotMusicitem.vue";
export default {
  components: {
    HotMusicitem,
  },
  data() {
    return {
      Month:'',
      Day:'',
      newHotMusicitem:[]
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm=>{
      vm.$http.get('/toplist/detail').then(data=>{
        // console.log(data.data.list[3].tracks);
        vm.newHotMusicitem = data.data.list[3].tracks;
        console.log(vm.newHotMusicitem);
        // console.log(2222222);
      })
    }));
  },
  mounted() {
    let d = new Date();
    this.Month = d.getMonth() + 1;
    this.Day = d.getDate().toString().padStart(2, "0");
  }
};
</script>

<style lang="less" scoped>
.hotsong {
  position: relative;
  padding-top: 38.9%;
  overflow: hidden;
  background-image: url("../assets/hot_music_bg_3x.jpg");
  background-size: contain;
  .top_img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    padding-left: 20px;
    box-sizing: border-box;
    .hot_icon {
      width: 142px;
      height: 67px;
      background-position: -24px -30px;
    }
    .bg_img {
      background-image: url("../assets/index_icon_2x.png");
      background-size: 166px 97px;
    }
    .hot_time {
      margin-top: 10px;
      color: hsla(0, 0%, 100%, 0.8);
      font-size: 12px;
      transform: scale(0.91);
      transform-origin: left top;
    }
  }
}
</style>