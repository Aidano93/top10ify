<template>
  <div class="nf-container">
    <h2>404!</h2>
    <p>Uh oh.. we can't  find what you are looking for.</p>
    <router-link class="r-link" to="/">Take me home please!</router-link>
  </div>
</template>
<script>
export default {
  name: 'Notfound'
}
</script>
<style scoped>
  .nf-container {
    margin-top: 5rem;
    text-align: center;
    min-height: 80vh;
  }
  h2 {
    font-size: clamp(100px, 5vw, 500px);
    color: white;
    text-shadow: 2px 2px black;
  }
  p {
    font-size: clamp(12px, 3vw, 24px);
  }
  .r-link {
    color: black;
  }
  .r-link:hover {
  color: #3B8EA5;
}
</style>