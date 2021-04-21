<template >
  <div class="list-container">
    <ol class="">
      <li class="">{{topList.one}}</li>
      <li class="">{{topList.two}}</li>
      <li class="">{{topList.three}}</li>
      <li class="">{{topList.four}}</li>
      <li class="">{{topList.five}}</li>
      <li class="">{{topList.six}}</li>
      <li class="">{{topList.seven}}</li>
      <li class="">{{topList.eight}}</li>
      <li class="">{{topList.nine}}</li>
      <li class="">{{topList.ten}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    topList: Object
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
min-width: 19ch;
}
</style>