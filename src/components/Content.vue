<script setup>
import { ref } from 'vue';
import Expenditure from "./Expenditure.vue";

const expenditures = ref([]);

const addExpenditure = () => {
  expenditures.value.push({}); // Добавляем новый пустой объект в массив expenditures
};
</script>

<template>
    <div class="content">
        <div class="content-main">
            <div class="container" v-for="(expenditure, index) in expenditures" :key="index">
                <expenditure />
            </div>

            <button class="content__btn" @click="addExpenditure">
                <img src="/icons/plus.svg" alt="">
                <p>Добавить новый расход</p>
            </button>

        </div>
    </div>
</template>

<style>
.content {
    margin-left: 335px;
    top: 75px;
}

.content::before {
  content: '';
  top: 75px;
  left: 335px;
  right: 0;
  bottom: 0;
  z-index: 5;
  background-color: #f5f5f5;
  position: fixed;
}

.content-main {
    z-index: 10;
    top: 75px;
    position: relative;
    margin-top: 70px;
    padding-bottom: 90px;
}

.container {
  max-width: 1100px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ffffff;
}

.content__btn {
    margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;

  display: flex;
  column-gap: 20px;
  align-items: center;
  padding-left: 27px;
  padding-right: 27px;

  background-color: #FFF;

  border: solid 1px #A2ACBE;
  border-radius: 6px;
}

.content__btn p{
  color: #2E3146;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
}

@media (max-width: 1450px) {
  .container {
    max-width: 800px;
  }
}

@media (max-width: 1160px) {
  .content {
    margin-left: 0px;
  }

  .content::before {
    left: 0px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 550px;
  }

  .container__info {
    flex-direction: column;
  }

  .adaptive-img {
    margin-top: 15px;
    display: unset;

    width: 200px;
    height: 190px;
    border-radius: 8px;
  }

  .fullhd-img {
    display: none;
  }
}

@media (max-width: 550px) {
  .container {
    max-width: 355px;
  }

  .container__info p {
    font-size: 12px;
    line-height: 1.4;
  }

  .container__info h2 {
    font-size: 24px;
    line-height: 1.2;
  }

  .adaptive-img {
    width: 140px;
    height: 130px;
  }
}
</style>