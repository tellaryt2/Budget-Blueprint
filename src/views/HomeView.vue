<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
import Content from "../components/Content.vue";

export default {
  data() {
    return {
      isSidebar: !window.matchMedia("(max-width: 1160px)").matches
    };
  },
  components: {
    Header,
    Sidebar,
    Footer,
    Content,
  },
  methods: {
    handleVariableChange(newVariable) {
      this.isSidebar = newVariable;
    }
  },
  mounted() {
    window.matchMedia("(max-width: 1160px)").addEventListener("change", (e) => {
      this.isSidebar = !e.matches;
    });
  },
};
</script>

<template>
  <div class="wrapper">
    <Header @variableChanged="handleVariableChange" />
    
    <Sidebar v-if="isSidebar"/>

    <Content />
  </div>
  <Footer />
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
}
</style>
