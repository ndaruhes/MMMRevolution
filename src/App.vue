<template>
    <Navbar />
    <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
            <div :key="route.name">
                <component :is="Component"></component>
            </div>
        </transition>
    </router-view>
    <Footer />
</template>

<script setup>
import Navbar from '@/components/partials/Navbar.vue'
import Footer from '@/components/partials/Footer.vue'
</script>

<style lang="scss">
@import '@/assets/sass/app';
</style>