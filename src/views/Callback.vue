<template>
  <div class="container-fluid">
    <UserInfo :userImg="userImg" :userName="userName"/>
    <div class="row justify-content-center">
      <div class="col-sm align-self-center">
        <h1>Check your <strong>Top 10</strong></h1>
        <h3>Artists</h3>
        <div class="btn-container">
          <Button :text="'All time'" @click="getTopData('artists', 'long'), showDownLoadBtn()" ></Button>
          <Button :text="'Past 6 months'" @click="getTopData('artists', 'medium'), showDownLoadBtn()"></Button>
          <Button :text="'Past month'" @click="getTopData('artists', 'short'), showDownLoadBtn()"></Button>
        </div>
        <h3>Tracks</h3>
        <div class="btn-container">  
          <Button :text="'All time'" @click="getTopData('tracks', 'long'), showDownLoadBtn()"></Button>
          <Button :text="'Past 6 months'" @click="getTopData('tracks', 'medium'), showDownLoadBtn()"></Button>
          <Button :text="'Past Month'" @click="getTopData('tracks', 'short'), showDownLoadBtn()"></Button>
        </div>
      </div>
      <div class="col-sm align-self-center list-container" style="background-color:#FFA69E;">
         <List :listItems="listItems" :topTitle="topTitle" class="list"/>
      </div> 
      <div class="col-sm align-self-center media-col">
        <a class="figure-link" :href="topLink" target="_blank"><Figure :topImg="topImg" :topImgInfo="topImgInfo"/></a>
        <iframe class="iframe" :src="frameSrc" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
    <div class="btn-container">
      <Button id="dlist-btn" class="dlist-btn" :text="'Download'" @click="downloadList()"/>
    </div>
    <div class="go-container">
      <router-link class="r-link" to="/">Go Back</router-link>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import List from '../components/List'
import UserInfo from '../components/UserInfo'
import Figure from '../components/Figure'
import html2canvas from 'html2canvas'

export default {
  name: 'Callback',
  components: {
    Button,
    List,
    UserInfo,
    Figure
  },
  data() {
    return {
      listItems: [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
      ],
      access_token: '',
      userImg: '',
      userName: '',
      topImg: '',
      topImgInfo: '',
      topTitle: '',
      topLink: '',
      frameSrc: '',
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

        let topTime = '';
        if (time == 'long') {
          topTime = 'of All-Time'
        } else if(time == 'medium') {
          topTime = 'of the Past 6 Months'
        } else {
          topTime = 'of Last Month'
        };

        if (type == 'artists') {
          this.topTitle = `Top Artists ${topTime}:`
          this.topLink = data.items[0].external_urls.spotify
          this.frameSrc = `https://open.spotify.com/embed/artist/${data.items[0].uri.slice(15)}`
          this.listItems[0].name = data.items[0].name
          this.listItems[1].name = data.items[1].name
          this.listItems[2].name = data.items[2].name
          this.listItems[3].name = data.items[3].name
          this.listItems[4].name = data.items[4].name
          this.listItems[5].name = data.items[5].name
          this.listItems[6].name = data.items[6].name
          this.listItems[7].name = data.items[7].name
          this.listItems[8].name = data.items[8].name
          this.listItems[9].name = data.items[9].name
          this.topImg = data.items[0].images[1].url
          this.topImgInfo = data.items[0].name
        } else {
          this.topTitle = `Top Tracks ${topTime}:`
          this.topLink = data.items[0].external_urls.spotify
          this.frameSrc = `https://open.spotify.com/embed/track/${data.items[0].uri.slice(14)}`
          this.listItems[0].name = `${data.items[0].name} (${data.items[0].artists[0].name})`
          this.listItems[1].name = `${data.items[1].name} (${data.items[1].artists[0].name})`
          this.listItems[2].name = `${data.items[2].name} (${data.items[2].artists[0].name})`
          this.listItems[3].name = `${data.items[3].name} (${data.items[3].artists[0].name})`
          this.listItems[4].name = `${data.items[4].name} (${data.items[4].artists[0].name})`
          this.listItems[5].name = `${data.items[5].name} (${data.items[5].artists[0].name})`
          this.listItems[6].name = `${data.items[6].name} (${data.items[6].artists[0].name})`
          this.listItems[7].name = `${data.items[7].name} (${data.items[7].artists[0].name})`
          this.listItems[8].name = `${data.items[8].name} (${data.items[8].artists[0].name})`
          this.listItems[9].name = `${data.items[9].name} (${data.items[9].artists[0].name})`
          this.topImg = data.items[0].album.images[1].url
          this.topImgInfo = data.items[0].album.name 
        }
      })
      .catch(function(error){
        console.log(error);
      });

    },
    async downloadList() {
      const printCanvas = await html2canvas(document.querySelector(".list-container"), {scrollY: -window.scrollY});

      const link = document.createElement("a");
      link.setAttribute("download", "top10ify-top.png");
      link.setAttribute(
        "href",
        printCanvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      link.click();
    },
    showDownLoadBtn() {
      document.getElementById("dlist-btn").classList.add("dlist-btn-show")
    },
  }
}
</script>

<style scoped>
h1, h3 {
  text-align: center;
}
h1 {
  font-size: clamp(16px, 4vw, 32px);
}
h3 {
  font-size: clamp(12px, 3vw, 24px);
}
.row {
  min-height: 60vh;
  margin-top: 0.1rem;
}
.btn-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.list-container {
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
}
.media-col {
  margin-top: 1rem;
}
.figure-link {
  text-decoration: none;
}
.iframe {
  width: 21.5rem;
  height: 5rem;
  display: block;
}
.dlist-container {
  text-align: center;

}
.dlist-btn {
  visibility: hidden;
}
.dlist-btn-show {
  visibility: visible;
}
.go-container {
  text-align: center;
  margin-top: 1rem;
}
.r-link {
  color: black;
}
.r-link:hover {
  color: #3B8EA5;
}
</style>
