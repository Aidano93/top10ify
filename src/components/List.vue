<template >
  <div class="list-container">
    <ol class="">
      <li id="title">{{topTitle}}</li>
      <li v-for="listItem in listItems" :key='listItem.name'>
        {{listItem.name}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    listItems: Array,
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