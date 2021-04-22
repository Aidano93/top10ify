<template>
  <div class="container">
    <img :src="userImg" :alt="userName" class="img-fluid">
    <h2>Hey {{userName}}! </h2>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  props: {
    userName: String,
    userImg: String,
  },
}
</script>
<style scoped>
  .container {
    display: flex;
    justify-content: left;
  }
  h2 {
    align-self: center;
    margin-left: 1rem;
    font-size: clamp(12px, 3vw, 24px);
  }
  img {
    margin-top: 1rem;
    border-radius: 50%;
    /* border: 3px white solid; */
    max-width: clamp(60px, 15vw, 120px);
    
  }
</style>