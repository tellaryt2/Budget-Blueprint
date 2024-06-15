<script>
export default {
    
}
</script>

<template>
    <div class="content-auth">
        <div class="auth">
            <div class="container-auth">
                    <form @submit.prevent="login" class="container-auth__form">
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Пароль">
                        <div class="button-auth">
                            <button type="submit">Войти</button>
                            <button type="submit">Регистрация</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

.content-auth {
    padding-top: 200px;
    margin-left: 15px;
    margin-right: 15px;
}


.container-auth {
  max-width: 600px;
  height: 250px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  text-align: center;
}

.container-auth__form {
    padding-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
}

.container-auth__form input {
    width: 250px;
    height: 20px;
    border-radius: 6px;

    border: solid 0.5px #A2ACBE;
}

.button-auth {
    display: flex;
    column-gap: 20px;
}

.button-auth button {
    padding: 5px 10px;
    border-radius: 6px;
    border: solid 0.5px #A2ACBE;
}

.button-auth button:hover {
    cursor: pointer;
    background-color: #abdac6; 
    opacity: 0.9;
}

</style>