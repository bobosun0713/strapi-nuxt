<template>
  <div class="card">
    <img
      :src="`http://localhost:1337${cardData.img.data.attributes.url}`"
      class="card-img"
    />
    <div class="card-header">
      <h2 class="card-title">{{ cardData.name }}</h2>
      <p class="card-price">${{ cardData.price }}</p>
    </div>

    <p class="card-description">{{ cardData.description }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.card {
  width: 180px;
  padding: 20px;
  margin: 0 15px;
  border-radius: 10px;
  box-shadow: 1px 0 10px 1px rgb(189, 186, 186);
}

.card-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-title {
  font-size: 18px;
  margin: 6px 0;
}
.card-description {
  font-size: 16px;
  color: rgb(142, 138, 138);
}
</style>
