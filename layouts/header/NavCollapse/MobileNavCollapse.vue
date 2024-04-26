<script setup>
import { ChevronDownIcon } from "vue-tabler-icons";
import NavItem from "../NavItem/index.vue";
const props = defineProps({ item: Object, level: Number });
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Item Childern -->
  <!-- ---------------------------------------------- -->
  <v-list-group no-action>
    <!-- ---------------------------------------------- -->
    <!---Dropdown  -->
    <!-- ---------------------------------------------- -->
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" :value="item.title" :ripple="false">
        <!---Icon  -->
        <template v-slot:append>
          <ChevronDownIcon size="15" class="ml-2" />
        </template>
        <!---Title  -->
        <v-list-item-title class="mr-auto">{{ item.title }}</v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle
          v-if="item.subCaption"
          class="text-caption mt-n1 hide-menu"
        >
          {{ item.subCaption }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Sub Item-->
    <!-- ---------------------------------------------- -->
    <div class="dropdown_menu my-2">
      <template
        v-for="(subitem, i) in item.children"
        :key="i"
        v-if="item.children"
      >
        <MobileNavCollapse
          :item="subitem"
          v-if="subitem.children"
          :level="level + 1"
        />
        <NavItem :item="subitem" :level="level + 1" v-else></NavItem>
      </template>
    </div>
  </v-list-group>

  <!-- ---------------------------------------------- -->
  <!---End Item Sub Header -->
  <!-- ---------------------------------------------- -->
</template>
