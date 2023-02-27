<template>
    <header class="header">
        <div class="header-container">
            <NuxtLink to="/" class="logo__wrapper">
                <img src="@/assets/images/logo.png" alt="Logo" class="logo">
            </NuxtLink>
            <nav class="navbar">
                <ul class="menu">
                    <li class="menu__item">
                        <NuxtLink exact to="/" class="menu__link" active-class="active">
                            <Icon name="rss" class="menu__icon" size="24" /> Главная
                        </NuxtLink>
                    </li>

                    <li class="menu__item">
                        <NuxtLink to="work" class="menu__link" active-class="active">
                            <Icon name="briefcase" class="menu__icon" size="24" /> Работа
                        </NuxtLink>
                    </li>
                    <li class="menu__item">
                        <NuxtLink to="chat" class="menu__link" active-class="active">
                            <Icon name="message-square" class="menu__icon" size="24" /> Чат
                        </NuxtLink>
                    </li>
                    <li class="menu__item">
                        <NuxtLink to="notification" class="menu__link" active-class="active">
                            <Icon name="bell" class="menu__icon" size="24" /> Уведомление
                        </NuxtLink>
                    </li>
                    <li class="menu__item">
                        <NuxtLink to="about" class="menu__link" active-class="active">
                            <Icon name="users" class="menu__icon" size="24" /> О нас
                        </NuxtLink>
                    </li>
                </ul>
                <form action="#" class="search-form" @submit.prevent="">
                    <button type="submit" class="search-form-button">
                        <Icon name="search-2" size="24" />
                    </button>
                    <input type="text" placeholder="Поиск" class="search-form-input">
                </form>
            </nav>
            <NuxtLink to="/user" class="user">
                <img src="@/assets/images/header_men.png" alt="user image" class="user__image">
                <span class="user__content">
                    <span class="user__title">Илья Алпатов</span>
                    <span class="user__status">365 просмотров</span>
                </span>
            </NuxtLink>
            <div class="other">
                <NuxtLink class="menu__link">
                    <Icon name="more-horizontal" class="menu__icon" size="24" /> Другое
                </NuxtLink>
            </div>
        </div>
    </header>
</template>


<style scoped lang="scss">
.header {
    background: $card_bg_color;
    box-shadow: 0px 10px 40px rgba(89, 120, 150, 0.06);
}

.header-container {
    margin: 0 auto;
    max-width: 1374px;
    display: flex;
    align-items: center;
    padding: 0 10px;
}

.logo__wrapper {
    padding: 17px 43px 17px 0;
    transition: 0.2s;
    border-right: 1px solid $gray_color_1;
    margin-right: 26px;

    &:hover {
        opacity: 0.6;
    }
}

.logo {
    width: 46px;
    height: 46px;
}

.navbar {
    display: flex;
    flex: 1;
}

.menu {
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;

    &>&__item {
        margin-right: 28px;
        min-width: 90px;

        &:last-child {
            margin: 0
        }
    }

    &__icon {
        margin-bottom: 7px;
    }

    &__link {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        font-weight: 500;
        color: $font_color;
        transition: 0.2s;
        padding: 17px 6px;

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            background: $main_color;
            width: 100%;
            height: 0px;
            transition: 0.2s;
        }

        &:hover {
            color: $main_color;
            opacity: 0.8;

            &::before {
                height: 4px;
            }
        }

        &.active {
            color: $main_color;
            opacity: 1;

            &::before {
                height: 4px;
            }
        }

    }
}

.search-form {
    display: flex;
    align-items: center;
    flex: 1;
}

.search-form-button {
    cursor: pointer;
    background: none;
    border: none;
    color: $main_color;
    margin-right: 10px;
}

.search-form-input {
    border: none;
    outline: none;
    padding: 5px;
    font-weight: 300;
    flex: 1;
}

.user {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 100px;
}

.user__image {
    width: 52px;
    height: 52px;
    margin-right: 15px;
    border-radius: 50%;
    border: 1px solid $gray_color_1;

}

.user__title {
    display: block;
    color: $font_color;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700px;
}

.user__status {
    font-size: 12px;
    color: $gray_color_2;
}
</style>