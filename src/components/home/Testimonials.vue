<template>
    <div class="testimonials" id="testimonials">
        <div class="container">
            <span>Testimonial</span>
            <h2>Apa yang member kami katakan?</h2>

            <div class="wrapper">
                <swiper :navigation="true" :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
                    clickable: true,
                }" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/1.jpeg" alt="testimonials" class="rounded-circle">
                        <span class="name">Ahmad Wahyu</span>
                        <span class="role">Manajer</span>
                        <span class="quote">
                            Revolusi MMM akan dimulai tahun 2023, jadi jangan tunda dan informasikan kepada semua teman Anda
                            beserta diri Anda sendiri agar revolusi besar ini mencapai setiap rumah dan ada kemajuan ekonomi
                            dalam kehidupan masyarakat dan orang-orang saling membantu dengan sepenuh hati. Jadilah bagian
                            dari revolusi ini.”
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/2.jpeg" alt="testimonials" class="rounded-circle">
                        <span class="name">Michael Siahahan</span>
                        <span class="role">Pengusaha</span>
                        <span class="quote">
                            MMM Revolution sangat membantu saya dengan semua manfaat yang dimilikinya! Sungguh cara yang
                            luar biasa untuk menghemat uang dan mempelajari cara mengelolanya. Saya juga mencintai anggota
                            komunitas, mereka ramah dan sangat murah hati. Terima kasih!”
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/images/testimonials/3.jpeg" alt="testimonials" class="rounded-circle">
                        <span class="name">David Raditya</span>
                        <span class="role">Karyawan Swasta</span>
                        <span class="quote">
                            MMM Revolution bekerja sempurna. Mengapa membuang-buang waktu untuk kerja keras demi uang,
                            ketika Anda dapat membantu orang dan sebagai gantinya menerima bantuan yang lebih besar? MMM
                            Revolution saat ini dapat dengan mudah disebut sebagai cara terbaik untuk menghasilkan uang!”
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