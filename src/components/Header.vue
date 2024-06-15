<script>
    export default {
        data() {
            return {
                isVisibleSidebar: false,
                isVisibleBurgerMenu: false,
                isAdaptiveSizeScreen: false
            }
        },
        mounted() {
            this.checkScreenSize();
            window.addEventListener('resize', this.checkScreenSize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkScreenSize);
        },
        methods: {
            changeVariable() {
                this.isVisibleSidebar = !this.isVisibleSidebar
                this.$emit('variableChanged', this.isVisibleSidebar);
            },
            checkScreenSize() {
                const newIsAdaptiveSizeScreen = window.innerWidth <= 1160; 

                if (newIsAdaptiveSizeScreen !== this.isAdaptiveSizeScreen) {
                    this.isAdaptiveSizeScreen = newIsAdaptiveSizeScreen;
                    if (!this.isAdaptiveSizeScreen) {
                        this.isVisibleBurgerMenu = false;
                    }
                }
            },
            toggleBurgerMenu() {
                if (this.isAdaptiveSizeScreen) {
                    this.isVisibleBurgerMenu = !this.isVisibleBurgerMenu;
                }
            },
            logout() {
            // Реализуйте здесь логику выхода из системы, если необходимо
            this.$router.push({ name: 'auth' }); // Перенаправление на страницу авторизации
            }
        }
    }
</script>

<template>
    <header>
        <nav>
            <div class="navbar">
                <button @click="changeVariable" class="navbar__btn-menu">
                    <p>≡</p>
                </button>
                <div class="navbar__icons">
                    <a title="home" href="">
                        <div class="navbar__logo">
                            <img src="/img/Logo.svg" alt="">
                        </div>
                    </a>
                    <div class="navbar_icons-btns">
                        <button title="Уведомления" class="navbar_icons-btn">
                            <img src="/icons/alert.svg" alt="">
                        </button>
                        <button title="Календарь" class="navbar_icons-btn">
                            <img src="/icons/calendar.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="navbar__profile">
                    <button @click="toggleBurgerMenu" class="navbar__profile-btn leave-btn">
                        <img src="/icons/icon-profile.svg" alt="">
                        <p>Иван Иванов</p>
                    </button>
                    <button @click="logout" class="navbar__profile-btn leave-btn">
                        <p>Войти</p>
                    </button>
                </div>
            </div>
            <ul v-if="isVisibleBurgerMenu" class="burger-menu">
                <li>
                    <button>
                        <p>Уведомления</p>
                    </button>
                </li>
                <li>
                    <button>
                        <p>Календарь</p>
                    </button>
                </li>
                <li>
                    <button>
                        <p>Выход</p>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background-color: #FFF; 
    z-index: 20;

    border-bottom: solid 1px #A2ACBE;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.burger-menu {
    display: flex;
    flex-direction: column;
    width: 170px;

    background-color: #FFF;
    border: solid 1px #A2ACBE;

    position: fixed;
    top: 75px;
    right: 15px;

    margin: 0px;
    padding: 0px;
    list-style-type: none;
}

.burger-menu li {
    width: 100%;
    display: flex;
    justify-content: center;
    transition: background-color 0.2s;
}

.burger-menu li:hover {
    cursor: pointer;
    background-color: #e8eaec; 
}

.burger-menu li:active {
    cursor: pointer;
    background-color: #d4d6d8; 
}

.burger-menu p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.2;
    color: #71809B;
}

.navbar__icons {
    display: flex;
}

.navbar__btn-menu {
    display: none;
}

.navbar__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 335px;
    height: 75px;

    position: relative;
}

.navbar__logo img {
    width: 150px;
}

.navbar__logo::before {
    content: "";
    top: 0px;
    left: 335px;
    right: 0;
    bottom: 0;
    border-right: solid 1px #A2ACBE;
    position: absolute;
    margin: 15px 0px 15px 0px;
    opacity: 70%;
}

.navbar_icons-btns{
    display: flex;
    margin-left: 1px;
}

.navbar_icons-btn {
    background-color: #FFF;
    border: none;
    margin-bottom: 1px;
    padding-right: 34px;
    padding-left: 34px;
    border-radius: 6px;
    transition: background-color 0.2s, opacity 0.2s;
}

.navbar_icons-btn:hover {
    cursor: pointer;
    background-color: #e3e5e7; 
    opacity: 0.9;
}

.navbar_icons-btn:active {
  background-color: #c2c3c4; /* Дополнительно темнее при клике */
}

.navbar__profile {
    display: flex;
    margin-right: 15px;
}

.navbar__profile-btn {
    display: flex;
    align-items: center;
    column-gap: 20px;
    background-color: #FFF;
    border: none;
    padding-right: 30px;
    padding-left: 30px;

    transition: background-color 0.2s, opacity 0.2s;
}

.navbar__profile-btn p{
    font-size: 15px;
    font-weight: 400;
    line-height: 1.2;
    color: #71809B;
}

.navbar__profile-btn:hover {
    cursor: pointer;
    background-color: #d4d6d8; 
    opacity: 0.9;
}

.navbar__profile-btn:active {
    background-color: #c2c3c4;
}

@media (max-width: 1160px) {
  .navbar_icons-btns {
    display: none;
  }

  .navbar__logo {
    min-width: 0px;
  }

  .navbar__logo::before {
    display: none;
  }

  .navbar__btn-menu {
    display: block;

    padding: 10px 10px 15px 10px;
  }

  .navbar__btn-menu p {
    font-size: 40px;
    font-weight: 500;
    color: #A2ACBE;
    margin: 0px;
  }

  .navbar__profile-btn {
    column-gap: 8px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .leave-btn {
    display: none;
  }
}

@media(max-width: 768px) {
    .navbar__logo img {
        width: 110px;
    }

    .navbar__profile-btn img {
        width: 30px;
        height: 32px;
    }

    .navbar__profile-btn p {
        font-size: 13px;
    }

    .burger-menu {
        width: 160px;
    }

    .burger-menu p {
        font-size: 13px;
    }
}

</style> 