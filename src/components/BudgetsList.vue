<script>

</script>

<template>
    <div class="budget__info">
        <p>Бюджет:</p>
        <h1>{{ $store.state.budget }}</h1>
    </div>
</template>

<style>
.budget__info {
    background-color: rgb(218, 248, 236);
    padding: 5px 0px 5px 27px;
    border-radius: 10px;
}

.budget__info:hover {
  background-color: rgb(196, 247, 226);
}


.budget__info p {
    color: #2e3146;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
}

.budget__info h1 {
    color: #4f8f69;
    font-weight: 600;
    line-height: 1.5;
}
</style>