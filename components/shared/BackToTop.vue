<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ChevronUpIcon } from "vue-tabler-icons";

const scTimer = ref(0);
const scY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

function handleScroll(scTimer: any) {
  if (scTimer.value) return;
  scTimer = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
  }, 100);
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div id="app" v-cloak>
    <transition name="fade">
      <v-btn
        id="pagetop"
        class="position-fixed right-0 bottom-0 mb-10 mr-5 z-index1"
        v-show="scY > 350"
        @click="toTop"
        icon
        color="primary"
      >
        <ChevronUpIcon size="25" />
      </v-btn>
    </transition>
  </div>
</template>
