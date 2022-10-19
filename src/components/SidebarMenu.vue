<script setup lang="ts">

import { RouterLink, useRouter  } from 'vue-router';

import TeamIcon from './icons/Sidebar/TeamIcon.vue';
import FavoritesIcon from './icons/Sidebar/FavoritesIcon.vue';
import ModulesIcon from './icons/Sidebar/ModulesIcon.vue';
import HomeIcon from './icons/Sidebar/HomeIcon.vue';
import NotificationsIcon from './icons/Sidebar/NotificationsIcon.vue';
import PremiumImage from './Images/PremiumImage.vue';

let currentRoute = useRouter().currentRoute?.value?.name;
if (!currentRoute) currentRoute = 'Accueil';

</script>

<template>
  <!-- Menu de gauche  -->
  <aside>

    <ul class="card card-nav">
      <li :class="currentRoute === 'Accueil' ? 'menu-current' : ''">
        <router-link to="/">
          <span class="icon-bg"><HomeIcon class="icon-menu"/></span>
          <span>Accueil</span>
        </router-link>
      </li>
      <li :class="currentRoute === 'Modules' ? 'menu-current' : ''">
        <router-link to="#">
          <span class="icon-bg"><ModulesIcon class="icon-menu"/></span>
          <span>Modules</span>
        </router-link>
      </li>
      <li :class="currentRoute === 'Favoris' ? 'menu-current' : ''">
        <router-link to="#">
          <span class="icon-bg"><FavoritesIcon class="icon-menu"/></span>
          <span>Favoris</span>
        </router-link>
      </li>
      <li :class="currentRoute === 'Équipe' ? 'menu-current' : ''">
        <router-link to="#">
          <span class="icon-bg"><TeamIcon class="icon-menu"/></span>
          <span>Équipe</span>
        </router-link>
      </li>
      <li :class="currentRoute === 'Notifications' ? 'menu-current' : ''">
        <router-link to="#">
          <span class="icon-bg"><NotificationsIcon class="icon-menu"/></span>
          <span>Notifications</span>
        </router-link>
      </li>
    </ul>

    <div id="premium" class="card relative overflow-hidden">
      <h5>Passez en Premium&nbsp;!</h5>
      <p class="mb-10">Profitez d'encore plus de fonctionnalités avec Meeko Premium !</p>
      <button>Mettre à jour</button>
      <PremiumImage class="premiumImage absolute"/>
    </div>

  </aside>
  <!-- // Menu de gauche  -->

</template>

<style scoped lang="scss">

aside {
  display: flex;
  flex-direction: column;
  width: 16rem;
  @apply text-gray m-7;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block-end: 1rem;
}

li {
  min-width: fit-content;
  cursor: pointer;

  &:hover {
    @apply text-primary;
  }

  & a {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding-block: 0.2rem;
  }
}

li.menu-current {
   @apply text-primary transition-colors;
   
   :hover {
      @apply text-santa;
    }
}

li .icon-bg {
  @apply inline-block p-3 rounded-md transition-all;
}

  li.menu-current .icon-bg {
    @apply bg-gray-lighter;
  }

    li:hover .icon-bg {
      @apply bg-gray-lighter;
    }

li .icon-menu {
  width:20px;
  @apply fill-gray-light transition-all;
}

  li.menu-current .icon-menu {
    @apply fill-primary;
  }

    li:hover .icon-menu {
      @apply fill-primary;
    }
    li.menu-current:hover .icon-menu {
      @apply fill-santa;
    }

.premiumImage {
  width: 110px;
  right: -10px;
  bottom: -30px;
}

</style>