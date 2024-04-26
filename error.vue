<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>

<template>
    <div class="d-flex justify-center align-center text-center h-100vh px-4">
        <div>
            <img src="/images/backgrounds/errorimg.svg" max-width="500" alt="404" />
            <h1 class="text-h1 pt-3">Opps!!!</h1>
            <h4 class="text-h4 my-8">This page you are looking for could not be found.</h4>
            <v-btn flat color="primary" class="mb-4" to="/">Go Back to Home</v-btn>
        </div>    
    </div>
</template>

<style>
.h-100vh{
    height: 100vh;
}
</style>