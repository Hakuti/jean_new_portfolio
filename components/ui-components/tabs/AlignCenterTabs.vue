<script setup lang="ts">
import { ref } from "vue";
import blog1 from '/images/blog-grid/grid-LP.jpg';
import blog2 from '/images/blog-grid/grid-uxdesign.jpg';
import blog3 from '/images/blog-grid/grid-search.jpg';
import blog4 from '/images/blog-grid/grid-effective-tech.jpg';
import blog5 from '/images/blog-grid/grid-marketing.jpg';
import blog6 from '/images/blog-grid/grid-agile.jpg';
import blog7 from '/images/blog-grid/grid-js.jpg';
import blog8 from '/images/blog-grid/grid-smartwatch.jpg';
import blog9 from '/images/blog-grid/grid-sidelap.jpg';


const tab = ref(null);
const tab1 = ref(
  [
    {img:  blog1},
    {img:  blog2},
    {img:  blog3},
    {img:  blog4},
    {img:  blog5},
    {img:  blog6},
  ]
)
const tab2 = ref(
  [
    {img:  blog7},
    {img:  blog8},
    {img:  blog9},
    {img:  blog1},
    {img:  blog2},
    {img:  blog3},
  ]
)
  const tab3 = ref(
  [
  {img:  blog1},
    {img:  blog2},
    {img:  blog3},
    {img:  blog4},
    {img:  blog5},
    {img:  blog6},
  ]
)
</script>
<template>
    <v-card elevation="0">
      <v-tabs
        v-model="tab"
        color="primary"
        align-tabs="center"
      >
        <v-tab value="1" class="no-effect">Landscape</v-tab>
        <v-tab value="2" class="no-effect">Products</v-tab>
        <v-tab value="3" class="no-effect">Abstract</v-tab>
      </v-tabs>

      <v-card-text class="rounded-md pa-0 mt-6">
        <v-window v-model="tab">
            <v-window-item value="1">
                  <v-row>
                    <v-col v-for="item in tab1" :key="item.img"  cols="12" md="4" sm="6">
                        <v-img :src="item.img" alt="tab" cover  class="w-100"  height="250"></v-img>
                    </v-col>
                  </v-row>
            </v-window-item>
            <v-window-item value="2">
                  <v-row>
                    <v-col v-for="item in tab2" :key="item.img"  cols="12" md="4" sm="6">
                      <v-img :src="item.img" alt="tab" cover  class="w-100"  height="250"></v-img>
                    </v-col>
                  </v-row>
            </v-window-item>
            <v-window-item value="3">
                  <v-row>
                    <v-col v-for="item in tab3" :key="item.img"  cols="12" md="4" sm="6">
                      <v-img :src="item.img" alt="tab" cover  class="w-100"  height="250"></v-img>
                    </v-col>
                  </v-row>
            </v-window-item>
        </v-window>
    </v-card-text>
    </v-card>
  </template>