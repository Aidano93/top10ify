<template>
  <div class="home">
    <h2>Want to know your top ten?</h2>
    <Button :text="'Log into Spotify'" @click="getSpotifyLogin" class="main-btn"></Button>
  </div>
</template>

<script>
import Button from '../components/Button'


export default {
  name: 'Home',
  components: {
    Button
  },
  data() {
    return {

    }
  },
  methods: {
    getSpotifyLogin() {
      function getRandomString(length) {
      let text = '';
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
      const stateKey = 'spotify_auth_state';
      const client_id = '3c52d1949a0e437daa93d109cb16d2e0';
      const redirect_uri = 'http://localhost:8080/callback';
      const state = getRandomString(16);
      localStorage.setItem(stateKey, state);
      const scope = 'user-top-read user-read-email user-read-private'
      let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&state=' + encodeURIComponent(state);
        url += '&show_dialog=true';
      window.location = url;
    }
    },
  }
</script>
<style scoped>
  h2 {
    text-align: center;
    margin: 5rem;
    font-size: 5rem;
  }
  .home {
    min-height: 75vh;
  }
  .main-btn {
    font-size: 1.2rem;
    display: block;
    margin: auto;
    width: 18rem;
  }
</style>