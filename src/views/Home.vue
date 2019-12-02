<template>
  <van-list v-model="loading" :finished="finished" finished-text @load="onLoad">
    <van-cell
      class="cell-card"
      v-for="(item, index) in list"
      :key="index"
      :to="{name:'CartoonInfo', params:{name:item.cartoonName}}"
    >
      <div class="cell-content">
        <div class="aspectration">
          <img id="cell_content_img" v-lazy="item.coverUrl" />
        </div>
        <p>{{item.cartoonName}}</p>
      </div>
    </van-cell>
  </van-list>
</template>

<script>
// @ is an alias to /src
import cartoonApi from "@/api/cartoon";

export default {
  name: "home",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      imgHeight: 80
    };
  },
  components: {
    
  },
  methods: {
    async onLoad() {
      // 异步更新数据
      try {
        let result = await cartoonApi.getCarttonList();
        // debugger
        this.list.push(...result.cartoons);

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
.cell-card {
  padding: 16px;

  background: green;

  text-align: center;

  .cell-content {
    // text-align: center;
    margin: 0 auto;
    background: red;
    // max-width: 400px;

    .aspectration {
      @include aspectration(0.55);
      img {
        width: 100%;
        background: grey;
        object-fit: cover;
      }
    }

    p {
      font-size: 15px;
      height: 30px;
      line-height: 30px;
      text-align: left;
      overflow: hidden;
    }
  }
}
</style>
