<script>

</script>

<template>
    <div class="expenses">
        <div class="expenditure">
            <input type="number" name="price" placeholder="Цена товара">
            <input type="number" name="count" placeholder="Количество">
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
    </div>
</template>

<style>

.expenses {
    column-gap: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 36px;
    padding-bottom: 36px;
}

.expenditure {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.expenditure input {
    width: 250px;
    height: 25px;
    border: solid 1px #A2ACBE;
    border-radius: 10px;
}

.expenses__btn {
    margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;

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