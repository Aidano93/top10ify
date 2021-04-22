<template>
  <footer>
    <p>Copyright &copy; Aidan O'Reilly 2021</p>
    <div class="container s-links">
      <a href="https://github.com/Aidano93"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/aidan-oreilly/"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
  p {
    text-align: center;
  }
  .s-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  i {
    font-size: clamp(30px, 3vw, 40px);
    margin: 0.2rem;
  }
  i:hover {
    color: #3B8EA5;
  }
</style>