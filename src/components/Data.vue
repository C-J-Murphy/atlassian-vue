<template>
  <div class="Api">
    <div class="post">
        <div class="loading" v-if="loading">
        <center><ring-loader :loading="loading" :color="color" :size="size"></ring-loader></center>
        <br/>
        Loading...
        </div>

        <div v-if="error" class="error">
        {{ error }}
        </div>

        <div v-if="post" class="content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader';

export default {
  name: 'Api',
  components: { 'ring-loader': RingLoader },
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.error = null;
      this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      this.post = fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((json) => {
          this.loading = false;
          this.post = json;
        }); // eslint-disable-line no-console
    },
  },
}; /* eslint-disable-line comma-dangle */
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
