<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { AboutHistoryData } from '@/_mockApis/pages/about';
import { historySliderSettings, historySliderSettingsBreakpoints } from '@/_mockApis/pages/SliderSettings';
</script>
<template>
    <section class="history bg-lightprimarygray py-md-12 py-5 ">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="justify-space-between">
                    <v-col cols="12" md="4">
                        <h2 class="text-h2 text-dark  font-weight-bold pr-sm-10">My work history</h2>
                        <p class="text-body-1 text-muted my-4">
                            It has been an interesting journey, and I would love to take you through it!
                        </p>
                    </v-col>
                    <v-col cols="12" md="7">
                        <carousel :settings="historySliderSettings" :breakpoints="historySliderSettingsBreakpoints"
                            class="">
                            <slide v-for="card in AboutHistoryData" :key="card.img">
                                <div class="text-left">
                                    <div class="text-h3 mb-2 font-weight-bold text-primary">{{ card.year }}</div>
                                    <p class="text-body-1 text-muted mb-10 pr-sm-5">{{ card.desc }}</p>
                                    <div v-if="Array.isArray(card.website)">
                                        <NuxtLink :to="website" target="_blank" v-for="(website, websiteIndex) in card.website" :key="websiteIndex">
                                        <v-chip class="cursor-pointer mr-2 mb-2">Visit Website {{ websiteIndex + 1 }}</v-chip>
                                    </NuxtLink>
                                    </div>
                                    <NuxtLink v-if="typeof card.website === 'string'" :to="card.website" target="_blank">
                                        <v-chip class="cursor-pointer">Visit Website</v-chip>
                                    </NuxtLink>
                                    <div v-if="!card.website">
                                        <v-chip color="secondary">No Website</v-chip>
                                    </div>
                                </div>
                            </slide>
                            <template #addons>
                                <navigation class="navarrow mt-md-n3">
                                    <template #next>
                                        <span class="mt-sm-0 mt-16">
                                            <CircleArrowRightIcon class="text-primary mt-md-0 mt-7 pa-sm-0 pa-0" size="55" stroke-width="0.5" />
                                        </span>
                                    </template>
                                    <template #prev>
                                        <span class="mt-sm-0 mt-16">
                                            <CircleArrowLeftIcon class="text-primary mt-md-0 mt-7 pa-sm-0 pa-0" size="55" stroke-width="0.5" />
                                        </span>
                                    </template>
                                </navigation>
                            </template>
                        </carousel>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>