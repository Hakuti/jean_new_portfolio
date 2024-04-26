<script setup lang="ts">
import Logo from "@/layouts/logo/logo.vue"
import { Menu2Icon } from "vue-tabler-icons";
import Login from '@/layouts/shared/auth/Login.vue';
import sidebarItem from '@/_mockApis/header/Menu';
import NavGroup from './NavGroup/index.vue';
import NavItem from './NavItem/index.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import MobileNavCollapse from './NavCollapse/MobileNavCollapse.vue';
const drawer = ref(false);
</script>

<template>
  <LoginPopup/>
  <div class="header">
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
    <v-app-bar flat class="header-card  py-4">
      <v-container class="py-0">
        <v-toolbar class=" h-auto d-flex ">
          <Logo />
          <!-- <v-list class="d-md-flex  d-none flex-wrap py-0 pl-16 ml-4 menu text-capitalize">
            <CommonHeader />
          </v-list> -->

          <v-list class="d-md-flex  d-none flex-wrap py-0 pl-16 ml-4 menu text-capitalize">
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


          <div class="d-md-flex d-none flex-wrap py-0 ml-auto">
            <div class="mr-3 searchbox d-lg-flex d-md-none ">
              <v-text-field variant="outlined" density="comfortable" color="" placeholder="Search" single-line
                hide-details class="custom-placeholer-color">
                <v-btn density="compact" color="muted" icon="mdi-magnify" :ripple="false" class="no-effect bg-surface"></v-btn>
              </v-text-field>
            </div>
             <!-----Login Button and Popup----->
             <Login/> 
          </div>
          <Menu2Icon class="d-md-none d-sm-flex d-flex drawer-icon ml-auto no-effect mr-0" @click.stop="drawer = !drawer"
            size="30"></Menu2Icon>
        </v-toolbar>
      </v-container>
    </v-app-bar>
  </div>

</template>