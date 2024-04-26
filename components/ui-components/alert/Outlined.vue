<template>
    <v-alert type="error" variant="outlined" density="compact" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
        </template>
        <div class="text-subtitle-1">This is an error alert — check it out!</div>
    </v-alert>
    <v-alert type="warning" variant="outlined" density="compact" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-outline</v-icon>
        </template>
        <div class="text-subtitle-1">This is a warning alert — check it out!</div>
    </v-alert>
    <v-alert type="info" variant="outlined" density="compact" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
        </template>
        <div class="text-subtitle-1">This is an info alert — check it out!</div>
    </v-alert>
    <v-alert type="success" variant="outlined" density="compact" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-checkbox-marked-circle-outline</v-icon>
        </template>
        <div class="text-subtitle-1">This is a success alert — check it out!</div>
    </v-alert>
</template>
