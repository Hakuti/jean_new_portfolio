<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import Logo from "@/layouts/logo/logo.vue"
import { Menu2Icon } from "vue-tabler-icons";
import Login from '@/layouts/shared/auth/Login.vue';
import Register from '@/layouts/shared/auth/Register.vue';
import sidebarItem from '@/_mockApis/header/Menu';
import NavGroup from './NavGroup/index.vue';
import NavItem from './NavItem/index.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import MobileNavCollapse from './NavCollapse/MobileNavCollapse.vue';
const drawer = ref(false);

//For on Scroll Effect on Header
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})
const stickyHeader = ref(false)
function handleScroll() {
  if (window.pageYOffset) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}
</script>

<template>
  <div class="header white-header mt-n95">
    <!----sidebar menu drawer start----->
    <v-navigation-drawer color="white" class="drawer" v-model="drawer" temporary>
      <perfect-scrollbar class="scrollnavbar">
        <v-list class="menu text-capitalizew-100">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarItem">
                    <!---Item Sub Header -->
                    <NavGroup :item="item" v-if="item.header" :key="item.title" />
                    <!---If Has Child -->
                    <MobileNavCollapse class="" :item="item" :level="0" v-else-if="item.children" />
                    <!---Single Item-->
                    <NavItem :item="item" v-else class="" />
                    <!---End Single Item-->
                </template>
            </v-list>
      </perfect-scrollbar>
    </v-navigation-drawer>
    <!----sidebar menu drawer end----->
    <v-app-bar flat class="header-card  py-4" :class="stickyHeader ? 'sticky' : ''">
      <v-container class="py-0">
        <v-toolbar class=" h-auto d-flex">
          <Logo />
          <v-list class="d-md-flex d-none flex-wrap py-0 pl-16 ml-4 menu text-capitalize ml-auto">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarItem">
                    <!---Item Sub Header -->
                    <NavGroup :item="item" v-if="item.header" :key="item.title" />
                    <!---If Has Child -->
                    <NavCollapse class="" :item="item" :level="0" v-else-if="item.children" />
                    <!---Single Item-->
                    <NavItem :item="item" v-else class="" />
                    <!---End Single Item-->
                </template>
            </v-list>

          <div class="ml-12 d-md-flex d-none">
            <!-----Login Button and Popup----->
            <Login/> 
            <!-----Register Button and Popup----->
            <Register/> 
          </div>
          <Menu2Icon class="d-md-none d-flex drawer-icon  no-effect ml-auto mr-0" @click.stop="drawer = !drawer"
            size="30"></Menu2Icon>
        </v-toolbar>
      </v-container>
    </v-app-bar>
  </div>
</template>