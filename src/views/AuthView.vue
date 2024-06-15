<script>
  import Header from "../components/Header.vue";
  import Authorization from '../components/Authorization.vue';


  export default {
    data() {
      return {

      };
    },
    components: {
      Header,
      Authorization
    },
    methods: {
      
    }
  };
  </script>

<template>
    <div class="auth-wrapper">
      <Header @variableChanged="handleVariableChange" />

      <Authorization />
    </div>
</template>
  
<style >
.auth-wrapper {
  min-height: 100vh;
  background-color: #f5f5f5;
}

</style>