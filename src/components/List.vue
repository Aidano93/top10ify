<template >
  <div class="list-container">
    <ol class="">
      <li id="title">{{topTitle}}</li>
      <li>{{topList.one}}</li>
      <li>{{topList.two}}</li>
      <li>{{topList.three}}</li>
      <li>{{topList.four}}</li>
      <li>{{topList.five}}</li>
      <li>{{topList.six}}</li>
      <li>{{topList.seven}}</li>
      <li>{{topList.eight}}</li>
      <li>{{topList.nine}}</li>
      <li>{{topList.ten}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    topList: Object,
    topTitle: String,
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  ol {
text-align: left;
}

li {
display: block;
font-size: clamp(12px, 3vw, 24px);
min-width: 30ch;
}
#title {
  font-weight: bold;
}
</style>