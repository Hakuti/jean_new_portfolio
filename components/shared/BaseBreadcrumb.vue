<script setup lang="ts">
import { ChevronRightIcon, Home2Icon } from 'vue-tabler-icons';
const props = defineProps({
    title: String,
    breadcrumbs: Array as any,
    icon: String
});
</script>

<template>
    <v-card class="elevation-0 rounded-md mb-8">
        <div class="">
            <div class="d-flex justify-space-between">
                <div class="d-flex py-0 align-center">
                    <HomeIcon size="20" class="mr-3 text-dark"/>
                    <div>
                        <v-breadcrumbs :items="breadcrumbs" class="text-h6 font-weight-regular text-dark  pa-0 ml-n1">
                            <template v-slot:divider>
                                <div class="d-flex align-center text-h3 "><ChevronRightIcon size="18"/></div>
                            </template>
                            <template v-slot:title="{ item }">
                                <h6 class="text-primary ">{{ item.title }}</h6>
                            </template>
                        </v-breadcrumbs>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<style lang="scss">
.page-breadcrumb {
    .v-toolbar {
        background: transparent;
    }
}
</style>
