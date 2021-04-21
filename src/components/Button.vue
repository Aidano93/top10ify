<template>
  <button class="btn btn-dark"><i class="fab fa-spotify"></i> {{text}}</button>
  
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  }
}
</script>

<style scoped>
  button {
    color: white;
    background: black;
    border: none;
    border-radius: 2rem;
    padding: .7rem 1.2rem;
    text-transform: uppercase;
    font-size: clamp(8px, 2vw, 16px);
    margin: 0.4rem;
    width: clamp(110px, 25vw, 210px);
  }
  i {
    color: #1DB954;
  }

</style>