<template>
    <v-alert type="warning"  density="compact" class="mb-4 single-line-alert" closable>
        <div class="text-subtitle-1">This is an warning alert  — check it out!</div>
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-outline</v-icon>
        </template>
    </v-alert>
    <v-alert type="info"  density="compact" class="mb-4 single-line-alert" closable>
        <div class="text-subtitle-1">This is an info alert  — check it out!</div>
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
        </template>
    </v-alert>
</template>
