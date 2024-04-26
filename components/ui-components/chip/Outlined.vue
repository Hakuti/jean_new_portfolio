<script setup lang="ts">
import { ref } from 'vue';
import { MoodSmileIcon, CircleXIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="d-flex flex-wrap align-center gap-3">
        <v-chip class="text-subtitle-1"  variant="outlined">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Filled
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Deletable
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="primary">
            <v-avatar start size="25">
                <img src="/images/profile/profile-5.jpg"  width="25" />
            </v-avatar> Primary Filled 
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="primary">
            <v-avatar start size="25">
                <img src="/images/profile/profile-5.jpg"  width="25" />
            </v-avatar> Primary Deletable 
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="secondary">
            <MoodSmileIcon class="mr-2" start size="20" /> Secondary Filled 
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="secondary">
            <MoodSmileIcon class="mr-2" start size="20" /> Secondary Deletable 
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="success">
            <v-avatar start size="25">
                <img src="/images/profile/profile-6.jpg"  width="25" />
            </v-avatar> Default Filled 
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="success">
            <v-avatar start size="25">
                <img src="/images/profile/profile-6.jpg"  width="25" />
            </v-avatar> Default Deletable 
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="warning">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Filled 
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="warning">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Deletable 
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="error">
            <v-avatar start size="25">
                <img src="/images/profile/profile-6.jpg"  width="25" />
            </v-avatar> Default Filled 
        </v-chip>
        <v-chip class="text-subtitle-1"  variant="outlined" color="error">
            <v-avatar start size="25">
                <img src="/images/profile/profile-6.jpg"  width="25" />
            </v-avatar> Default Deletable 
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
    </div>
</template>
