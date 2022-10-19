<script setup>

import { RouterView } from 'vue-router'
import SidebarMenu from '@/components/SidebarMenu.vue';

</script>

<template>

  <div id="root" class="flex font-sans md:flex bg-gray-lighter">

    <div class="flex-none" >
      <SidebarMenu />
    </div>

    <div class="grow ">
      <RouterView />
    </div>

  </div>

</template>

<style scoped>
</style>