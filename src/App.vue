<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
  
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
    }
  },
  methods: {
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');

* {
  font-family: 'Lato', sans-serif;
  color: #272727;
}
body {
  background-color: #FFA69E;
}
</style>