<template>
  <section class="section">
    <Card v-for="item in cardList" :key="item" :card-data="item.attributes" />
  </section>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
export default {
  name: "IndexPage",
  components: {
    Card,
  },
  data() {
    return {
      cardList: [],
    };
  },
  mounted() {
    this.fetchCardList();
  },
  methods: {
    async fetchCardList() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/produces?populate=img"
        );
        this.cardList = response?.data?.data || [];
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
.section {
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
