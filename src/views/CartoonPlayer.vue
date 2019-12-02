<template>
  <van-list v-model="loading" :finished="finished" finished-text @load="onLoad">
    <van-cell class="image-cell" v-for="(item, index) in list" :key="index">
      <img class="cartoon-image" v-lazy="item.url"/>
    </van-cell>
  </van-list>
</template>

<script>
// @ is an alias to /src
import cartoonApi from "@/api/cartoon";

export default {
  name: "CartoonPlayer",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      imgHeight: 80
    };
  },
  components: {},
  methods: {
    async onLoad() {
      // 异步更新数据
      try {
        let name = this.$route.params.name;
        let chapter = this.$route.params.chapter;
        let result = await cartoonApi.getCarttonChapter(name, chapter);
        // debugger
        console.log(result);
        
        this.list.push(...result.images);

        // 加载状态结束
        this.loading = false;
        this.finished = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {},
  mounted() {
    // this.imgHeight =
    //   document.getElementById("cell_content_img").clientWidth * 0.5;

    console.log("this.imgHeight" + this.imgHeight);
  }
};
</script>

<style lang="scss" scoped>

.cartoon-image{
    width: 100%;
}
</style>
