<template>
  <div class="container">
    <figure>
      <img class="img-fluid" :src="topImg" :alt="topImgInfo">
      <figcaption>{{topImgInfo}}</figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  name: 'Figure',
  props: {
    topImg: String,
    topImgInfo: String,

  },
}
</script>
<style scoped>
  figure {
    max-width: clamp(180px, 45vw, 360px);
  }
  figcaption {
    font-size: clamp(12px, 2vw, 16px);
  }
</style>