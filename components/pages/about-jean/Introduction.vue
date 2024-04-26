<template>
    <div class="mt-95 border-top">
        <v-container>
            <v-row class="align-center justify-md-space-between  justify-center my-5">
                <v-col cols="12" md="2" class="justify-center d-flex">
                    <v-avatar size="200" color="lightprimary" class="">
                                        <img src="/images/aboutpage/introduction/jean_profile_pic.jpeg" style="object-fit: cover; height: 200px; width: 200px;"/>
                                    </v-avatar>
                </v-col>
                <v-col cols="12" md="5">
                    <div class="text-md-left text-center position-relative about-content ">
                        <h2 class="text-h2 font-weight-bold text-dark mb-4 " data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000">
                            Hi there!</h2>
                          
                        <p class="text-body-1 text-muted bg-surface position-relative z-index1" data-aos="fade-up"
                            data-aos-delay="400" data-aos-duration="1000">I am Jean, a passionate full-stack developer dedicated to building and developing innovative software. I thrive on creating new projects that explore the cutting edge of technology. </p>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="pl-md-6">
                        
                        <v-card elevation="10">
                          
                            <v-card-item class="px-12 py-6">
                                <div class="d-flex align-center  text-sm-left">
                                    <v-avatar size="60" color="lightprimary" class="me-6">
                                        <img src="/images/icon/icon-request.svg" alt="icon" width="30" />
                                    </v-avatar>
                                    <div>
                                        <h4 class="font-weight-bold text-dark pr-sm-3 my-sm-0 my-0 text-caption lh-normal">
                                            2014</h4>
                                        <p class="text-muted text-subtitle-1">Coding since</p>
                                    </div>
                                </div>
                            </v-card-item>
                            <v-divider></v-divider>
                            <v-card-item class="px-12 py-6">
                                <div class="d-flex align-center  text-sm-left">
                                    <v-avatar size="60" color="lightprimary" class="me-6">
                                        <img src="/images/icon/icon-career.svg" alt="icon" width="30" />
                                    </v-avatar>
                                    <div>
                                        <h4 class="font-weight-bold text-dark pr-sm-3 my-sm-0 my-0 text-caption lh-normal">
                                            5+</h4>
                                        <p class="text-muted text-subtitle-1">Years of experience</p>
                                    </div>
                                </div>
                            </v-card-item>
                            <v-divider></v-divider>
                            <v-card-item class="px-12 py-6">
                                <div class="d-flex align-center  text-sm-left">
                                    <v-avatar size="60" color="lightprimary" class="me-6">
                                        <img src="/images/icon/flight.svg" alt="icon" width="30" />
                                    </v-avatar>
                                    <div>
                                        <h4 class="font-weight-bold text-dark pr-sm-3 my-sm-0 my-0 text-caption lh-normal">
                                            Beach Lover</h4>
                                        <p class="text-muted text-subtitle-1">I also love traveling</p>
                                    </div>
                                </div>
                            </v-card-item>
                            
                        </v-card>
                    </div>
                </v-col>
            </v-row>

            <div class="py-sm-16 py-6">
                <h2 class="text-h2 font-weight-bold text-dark mb-8" data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000">My Projects</h2>
                <v-row>
                    <v-col cols="12" sm="6">
                        <div class="hover-card overflow-hidden rounded-md h-100 position-relative">
                            <h3 class="text-primary">Printing App, find printing near you</h3>
                            <img src="/images/aboutpage/banner/Empri.png" class="zoom-in w-100 h-100" style="object-fit: contain;" />
                            <div class="banner-content">
                                <NuxtLink to="https://empri.vercel.app/tabs/tab1/print" target="_blank"><v-chip color="dark cursor-pointer bg-primary mr-2" size="large" >Website</v-chip></NuxtLink>
                                <v-chip color="dark cursor-pointer bg-tertiary" size="large">Vue, Ionic, Firebase</v-chip>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <div class="hover-card overflow-hidden rounded-md h-100 position-relative">
                            <h3 class="text-primary">E-Commerce App with Medusa</h3>
                            <img src="/images/aboutpage/banner/Spenser.png" class="zoom-in w-100 h-100" style="object-fit: contain;" />
                            <div class="banner-content">
                                <NuxtLink to="https://spenser-storefront.vercel.app/gb" target="_blank"><v-chip color="dark cursor-pointer bg-primary mr-2" size="large" >Website</v-chip></NuxtLink>
                                <v-chip color="dark cursor-pointer bg-tertiary" size="large">React, NextJS, Postgres</v-chip>
                            </div>
                        </div>
                </v-col>
            </v-row>
        </div>
    </v-container>
</div>
</template>

<style scoped lang="scss">
    .banner-content {
            z-index: 99;
            bottom: 40px;
            position: absolute;
            width: 100%;

            @media screen and (max-width:767px) {
                bottom: 20px;
            }
        }
</style>