<script>
import BudgetsList from './BudgetsList.vue';
import Statistick from './Statistick.vue'

export default {
  data() {
    return {
      showModal: false
    };
  },
  components: {
    BudgetsList,
    Statistick,
  },
  methods: {
    showStatisticsModal(event){
      event.preventDefault(); // Предотвращаем действие по умолчанию для ссылки
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    }
  }
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__info">
      <p>Список бюджетов:</p>
    </div>

    <BudgetsList />

    <button class="sidebar__btn">
      <img src="/icons/plus.svg" alt="" />
      <p>Добавить новый бюджет</p>
    </button>

    <div class="sidebar__links">
      <div class="sidebar__link">
        <img src="/icons/statistics.svg" alt="" />
        <a href="" @click="showStatisticsModal($event)">Статистика</a>
      </div>
      <div class="sidebar__link">
        <img src="/icons/graphs.svg" alt="" />
        <a href="">Прогноз</a>
      </div>

      <Statistick :showModal="showModal" @close="closeModal" />
    </div>
  </div>
</template>

<style>
.sidebar {
  z-index: 40;
  position: fixed;
  top: 75px;
  left: 0;
  width: 335px;
  height: calc(100% - 75px); /* Высота экрана минус высота шапки */
  background-color: #fff;
  overflow: auto;

  border-top: solid 1px #a2acbe;
  border-right: solid 1px #a2acbe;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar__info {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;

  padding-left: 27px;
  padding-right: 27px;
}

.sidebar__info p {
  color: #2e3146;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
}

.sidebar__btn {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;

  display: flex;
  column-gap: 20px;
  align-items: center;
  padding-left: 27px;
  padding-right: 27px;

  background-color: #fff;

  border: solid 1px #a2acbe;
  border-radius: 6px;
}

.sidebar__btn p {
  color: #2e3146;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
}

.sidebar__link {
  display: flex;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  column-gap: 20px;
}

.sidebar__link a {
  text-decoration: none;
  color: #2e3146;
}

@media (max-width: 1160px) {
  .sidebar {
    border-right: solid 1px #a2acbe;
  }
}
</style>

