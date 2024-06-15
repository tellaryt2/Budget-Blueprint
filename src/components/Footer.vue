<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
    count.value++;
};

</script>

<template>
  <footer>
    <p>ДПО СибГМУ</p>
  </footer>
</template>

<style>
footer {
  z-index: 20;
  height: 60px;

  margin-left: 335px;

  background-color: #ffffff;
  position: relative;

  text-align: center;
}

footer p {
  padding-top: 20px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;

  color: #71809b;

  border-top: solid 1px #dadde5;
}

@media (max-width: 1160px) {
  footer {
    margin-left: 0px;
  }
}
</style>
