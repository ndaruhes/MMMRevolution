<template>
    <div class="slideshow">
        <div class="slider">
            <swiper-container style="--swiper-navigation-color: #black; --swiper-pagination-color: #black"
                class="my-slider" thumbs-swiper=".slideshow-gallery" space-between="10" navigation="true"
                pagination-clickable="true" slides-per-view="auto" centered-slides="true">
                <swiper-slide>
                    <div class="image"
                        :style="`background: url('${getImgUrl(`transaction-example/slideshow/1.jpeg`)}')`"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="image"
                        :style="`background: url('${getImgUrl(`transaction-example/slideshow/2.jpeg`)}')`"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="image"
                        :style="`background: url('${getImgUrl(`transaction-example/slideshow/3.png`)}')`"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="image"
                        :style="`background: url('${getImgUrl(`transaction-example/slideshow/4.jpeg`)}')`"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="image"
                        :style="`background: url('${getImgUrl(`transaction-example/slideshow/5.jpeg`)}')`"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="image"
                        :style="`background: url('${getImgUrl(`transaction-example/slideshow/6.jpeg`)}')`"></div>
                </swiper-slide>
            </swiper-container>

            <div class="container">
                <swiper-container class="slideshow-gallery" space-between="10" slides-per-view="4" free-mode="true"
                    watch-slides-progress="true">
                    <swiper-slide>
                        <div class="image"
                            :style="`background: url('${getImgUrl(`transaction-example/slideshow/1.jpeg`)}')`"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image"
                            :style="`background: url('${getImgUrl(`transaction-example/slideshow/2.jpeg`)}')`"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image"
                            :style="`background: url('${getImgUrl(`transaction-example/slideshow/3.png`)}')`"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image"
                            :style="`background: url('${getImgUrl(`transaction-example/slideshow/4.jpeg`)}')`"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image"
                            :style="`background: url('${getImgUrl(`transaction-example/slideshow/5.jpeg`)}')`"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image"
                            :style="`background: url('${getImgUrl(`transaction-example/slideshow/6.jpeg`)}')`"></div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    </div>
</template>

<script setup>
const getImgUrl = (pic) => {
    return new URL(`/src/assets/images/${pic}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/slideshow';
</style>