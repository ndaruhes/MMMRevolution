<template>
    <div class="testimonials">
        <div class="container">
            <span>Testimonials</span>
            <h2>What our member says?</h2>

            <div class="wrapper">
                <swiper :navigation="true" :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
                    clickable: true,
                }" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/1.png" alt="testimonials" class="rounded-circle">
                        <span class="name">Nicholas Hudson</span>
                        <span class="role">Employee</span>
                        <span class="quote">
                            “MMM Revolution really helps me a lot with all the benefit it’s has! How incredible way to
                            saving money and learning how to manage them. I love the community members as well, they are
                            welcoming and really generous. Thank You!”
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/2.png" alt="testimonials" class="rounded-circle">
                        <span class="name">Gerard Cohen</span>
                        <span class="role">Employee</span>
                        <span class="quote">
                            “MMM Revolution really helps me a lot with all the benefit it’s has! How incredible way to
                            saving money and learning how to manage them. I love the community members as well, they are
                            welcoming and really generous. Thank You!”
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/3.png" alt="testimonials" class="rounded-circle">
                        <span class="name">Keith Morrison</span>
                        <span class="role">Employee</span>
                        <span class="quote">
                            “MMM Revolution really helps me a lot with all the benefit it’s has! How incredible way to
                            saving money and learning how to manage them. I love the community members as well, they are
                            welcoming and really generous. Thank You!”
                        </span>
                    </swiper-slide>

                    <swiper-slide>
                        <img src="@/assets/images/testimonials/1.png" alt="testimonials" class="rounded-circle">
                        <span class="name">Nicholas Hudson</span>
                        <span class="role">Employee</span>
                        <span class="quote">
                            “MMM Revolution really helps me a lot with all the benefit it’s has! How incredible way to
                            saving money and learning how to manage them. I love the community members as well, they are
                            welcoming and really generous. Thank You!”
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/2.png" alt="testimonials" class="rounded-circle">
                        <span class="name">Gerard Cohen</span>
                        <span class="role">Employee</span>
                        <span class="quote">
                            “MMM Revolution really helps me a lot with all the benefit it’s has! How incredible way to
                            saving money and learning how to manage them. I love the community members as well, they are
                            welcoming and really generous. Thank You!”
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/3.png" alt="testimonials" class="rounded-circle">
                        <span class="name">Keith Morrison</span>
                        <span class="role">Employee</span>
                        <span class="quote">
                            “MMM Revolution really helps me a lot with all the benefit it’s has! How incredible way to
                            saving money and learning how to manage them. I love the community members as well, they are
                            welcoming and really generous. Thank You!”
                        </span>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/testimonials';
</style>