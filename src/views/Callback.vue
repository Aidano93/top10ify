<template>
  <div class="container-fluid">
    <UserInfo :userImg="userImg" :userName="userName"/>
    <div class="row">
      <div class="col-4">
        <h2>Check your <strong>Top 10</strong></h2>
        <h3>Artists</h3>
        <div class="btn-container">
          <Button :text="'All time'" @click="getTopData('artists', 'long')"></Button>
          <Button :text="'Past 6 months'" @click="getTopData('artists', 'medium')"></Button>
          <Button :text="'Past month'" @click="getTopData('artists', 'short')"></Button>
        </div>
        <h3>Tracks</h3>
        <div class="btn-container">  
          <Button :text="'All time'" @click="getTopData('tracks', 'long')"></Button>
          <Button :text="'Past 6 months'" @click="getTopData('tracks', 'medium')"></Button>
          <Button :text="'Past Month'" @click="getTopData('tracks', 'short')"></Button>
        </div>
      </div>
      <div class="col-5">
         <List :topList="topList" class="list"/>
      </div> 
      <div class="col-3">
        <figure>
          <img :src="topImg" :alt="topImgInfo">
          <figcaption>{{topImgInfo}}</figcaption>
        </figure>
        
      </div>
    </div>
    <div class="go-container">
      <router-link to="/">Go Back</router-link>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import List from '../components/List'
import UserInfo from '../components/UserInfo'

export default {
  name: 'Callback',
  components: {
    Button,
    List,
    UserInfo
  },
  data() {
    return {
      topList: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '',
        ten: '',
      },
      access_token: '',
      userImg: '',
      userName: '',
      topImg: '',
      topImgInfo: '',
    }
  },
  mounted() {
    function getHashParams() {
      let hashParams = {};
      let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
    }
    const params = getHashParams()
    this.access_token = params.access_token

    fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${this.access_token}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong')
        return res.json();
      })
      .then((data) => {
        this.userImg = data.images[0].url
        this.userName = `${data.display_name}`
        
      })
      .catch(function(error){
        console.log(error);
      });

  }, 
  methods: {
    getTopData(type, time) {

    fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${time}_term&limit=10`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${this.access_token}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong')
    
        return res.json();
      })
      .then((data) => {
        if (type == 'artists') {
          this.topList.one = data.items[0].name
          this.topList.two = data.items[1].name
          this.topList.three = data.items[2].name
          this.topList.four = data.items[3].name
          this.topList.five = data.items[4].name
          this.topList.six = data.items[5].name
          this.topList.seven = data.items[6].name
          this.topList.eight = data.items[7].name
          this.topList.nine = data.items[8].name
          this.topList.ten = data.items[9].name
          console.log(data.items[0])
          this.topImg = data.items[0].images[1].url
          this.topImgInfo = data.items[0].name
        } else {
          this.topList.one = `${data.items[0].name} - ${data.items[0].artists[0].name}`
          this.topList.two = `${data.items[1].name} - ${data.items[1].artists[0].name}`
          this.topList.three = `${data.items[2].name} - ${data.items[2].artists[0].name}`
          this.topList.four = `${data.items[3].name} - ${data.items[3].artists[0].name}`
          this.topList.five = `${data.items[4].name} - ${data.items[4].artists[0].name}`
          this.topList.six = `${data.items[5].name} - ${data.items[5].artists[0].name}`
          this.topList.seven = `${data.items[6].name} - ${data.items[6].artists[0].name}`
          this.topList.eight = `${data.items[7].name} - ${data.items[7].artists[0].name}`
          this.topList.nine = `${data.items[8].name} - ${data.items[8].artists[0].name}`
          this.topList.ten = `${data.items[9].name} - ${data.items[9].artists[0].name}`
          console.log(data.items[0])
          this.topImg = data.items[0].album.images[1].url
          this.topImgInfo = data.items[0].album.name
        }
        
      })
      .catch(function(error){
        console.log(error);
      });

    }
  }
}
</script>

<style scoped>
h2, h3 {
  text-align: center;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.8rem;
}
.row {
  margin-top: 1rem;
  min-height: 65vh
}
.btn-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.go-container {
  text-align: center;
}
</style>
