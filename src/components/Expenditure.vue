<script>
export default {
  data() {
    return {
      price: null,
      count: null
    };
  },
  methods: {
    saveExpenditure() {
      const price = this.price;
      const count = this.count;
      const currentBudget = this.$store.state.budget;
      const totalAmount = price * count;
      

      if (totalAmount > this.$store.state.budget) {
        alert('Недостаточно средств на бюджете');
        return;
      }
      this.$store.commit('updateBudget', currentBudget - totalAmount);
    }
  }
}
</script>

<template>
    <div class="expenses">
        <div class="expenses__title">
            <p>Введите название </p>
            <input type="text" name="title" placeholder="Название затраты">
        </div>
        <div class="expenditure">
            <input type="number" v-model="price" name="price" placeholder="Цена товара">
            <input type="number" v-model="count"  name="count" placeholder="Количество">
        </div>
        <div class="expenditure">
            <input type="number" name="sale" placeholder="Цена продажи">
        </div>
        <button class="expenses__btn">
                <img src="/icons/plus.svg" alt="">
                <p>Добавить затрату</p>
        </button>
        <div class="expenditure">
            <input type="number" name="profit" placeholder="Прибыль">
        </div>
        <button @click="saveExpenditure" class="expenses__btn">
            <p>Сохранить затрату</p>
        </button>
    </div>
</template>

<style>

.expenses {
    column-gap: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 24px;
    padding-bottom: 16px;
}

.expenses__title {
    text-align: center;
    display: flex;
    column-gap: 25px;
    align-items: center;
}

.expenses__title input {
    width: 100%;
    height: 25px;
    border: solid 1px #A2ACBE;
    border-radius: 10px;
}

.expenditure {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.expenditure input {
    width: 250px;
    height: 25px;
    border: solid 1px #A2ACBE;
    border-radius: 10px;
}

.expenses__btn {
    margin: auto;
  margin-top: 15px;
  margin-bottom: 10px;

  display: flex;
  column-gap: 10px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #FFF;

  border: solid 1px #A2ACBE;
  border-radius: 6px;
}

.expenses__btn p{
  color: #2E3146;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.2;
}

@media (max-width: 380px) {
    .expenditure input {
        width: 120px;

    }
}
</style>