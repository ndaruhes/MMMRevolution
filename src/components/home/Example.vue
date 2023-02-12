<template>
    <div class="example" id="example">
        <div class="container">
            <div class="heading">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-5 text-left">
                        Contoh Transaksi
                    </div>
                    <div class="col-md-5 text-right">We take an account that has 100% transfer transactions with 3x PH
                        stages
                        (10%, 40% and 50%)</div>
                </div>
            </div>
        </div>

        <div class="transaction">
            <swiper :navigation="true" :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <img src="@/assets/images/transaction-example/contoh-transaksi-1.jpeg" alt="transaction-example">
                    <p>
                        On November 24, 2022, you proposed to provide help (PH) and at that moment, the 1st Transfer
                        Order (PH 10%) appeared, you transferred directly to participant’s account, uploaded the
                        proof
                        of transfer (receipt) and the receiver confirmed transaction was completed!
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/transaction-example/contoh-transaksi-1.jpeg" alt="transaction-example">
                    <p>
                        On Nov 30, 2022 (6 days after the 1st Transfer Order), the 2nd Transfer Order appeared with
                        a
                        value of 40% of PH amount, you transferred directly to participant’s account, uploaded the
                        proof
                        of transfer (receipt) and the receiver confirmed transaction was completed!
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/transaction-example/contoh-transaksi-1.jpeg" alt="transaction-example">
                    <p>
                        On Nov 30, 2022 (6 days after the 1st Transfer Order), the 2nd Transfer Order appeared with
                        a
                        value of 40% of PH amount, you transferred directly to participant’s account, uploaded the
                        proof
                        of transfer (receipt) and the receiver confirmed transaction was completed!
                    </p>
                </swiper-slide>
            </swiper>
        </div>

        <div class="note bg-green">
            <p>
                Note : You transfer PH, upload the proof of transfer (receipt), waiting the confirmation from Receiver.
                If the Receiver has not confirmed in 48 hours, the system will automatically confirm the transaction
                completed!
            </p>
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
@import '@/assets/sass/example';
</style>