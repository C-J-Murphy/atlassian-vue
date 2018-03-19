<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <center><ring-loader :loading="loading" :color="color" :size="size"></ring-loader></center>
  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader';

export default {
  name: 'HelloWorld',
  components: { 'ring-loader': RingLoader },
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
