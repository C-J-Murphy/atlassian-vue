<template>
  <div class="hello">
    <h3>JWT Token:</h3> <small>{{ msg }}</small>
    <h3>Decoded:</h3>
    <h1>exp:</h1> {{decoded.exp}}
    <h1>iat:</h1> {{decoded.iat}}
    <h1>iss</h1> {{decoded.iss}}
    <h1>qsh</h1> {{decoded.qsh}}
  </div>
</template>

<script>
import { createJwtToken, decodeJwtToken } from '../jwtToken';

const jwtToken = createJwtToken('Hello', 'XXX');

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: jwtToken,
      decoded: this.decode(),
    };
  },
  methods: {
    decode: () => decodeJwtToken(jwtToken),
  },
  mounted() {
    this.decode();
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
