<template>
  <van-grid>
    <van-grid-item
      v-for="(item,index) in list"
      :key="index"
      :text="item"
      :to="{name:'CartoonPlayer', params:{name:name, chapter:item}}"
    />
  </van-grid>
</template>

<script>
import cartoonApi from "@/api/cartoon";
export default {
  name: "CartoonInfo",
  data() {
    return {
      list: [],
      name: ""
    };
  },
  async created() {
    let name = this.$route.params.name;
    this.name = name;
    console.log(name);
    try {
      let result = await cartoonApi.getCartton(name);
      console.log(result);
      this.list.push(...result.chapters);
    } catch (error) {}
  }
};
</script>

