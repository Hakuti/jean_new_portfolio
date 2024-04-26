<script setup lang="ts">
import { SocialLinksIcons } from '@/_mockApis/footer/regularFooter';
</script>
<template>
    <section class="footer position-relative py-md-12 py-8" id="contact">
        <v-container>
            <v-row>
                <v-col cols="12" md="5">
                    <Logo />
                </v-col>
                <v-col cols="12" md="7">
                    <v-row class="pb-sm-16 pb-8">
                        <v-col cols="12" sm="6">
                            <div class="font-weight-medium text-dark text-uppercase">Phone</div>
                            <NuxtLink to="tel:(407) 449 9484"
                                class="text-h5 font-weight-bold text-dark text-decoration-none">(407) 449 9484 </NuxtLink>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="font-weight-medium text-dark text-uppercase">email</div>
                            <NuxtLink to="mailto:can1927@gmail.com"
                                class="text-h5 font-weight-bold text-dark text-decoration-none">can1927@gmail.com
                            </NuxtLink>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="pb-7 mt-5">
                        
                       
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="5">
                    <ul class="d-flex align-center">
                        <li v-for="social in SocialLinksIcons" class="mr-4">
                            <NuxtLink :to="social.url" class="text-decoration-none">
                                <v-avatar size="30" color="primary" class="rounded-md">
                                    <component :is="social.icon" stroke-width="2" size="22" />
                                </v-avatar>
                            </NuxtLink>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12" md="7">
                   
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>