<template>
    <div class="example" id="exampleTransaction">
        <div class="container">
            <div class="heading">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-5 text-left">
                        Contoh Transaksi
                    </div>
                    <div class="col-md-5 text-right">Kami mengambil rekening yang memiliki transaksi transfer 100% dengan
                        tahapan PH 3x (10%, 40% dan 50%)</div>
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
                        Pada tanggal 24 November 2022, Anda mengajukan untuk memberikan bantuan (PH) dan pada saat itu
                        muncul Perintah Transfer ke-1 (PH 10%), Anda mentransfer langsung ke rekening peserta, mengunggah
                        bukti transfer (resi) dan penerima mengkonfirmasi transaksi selesai!
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/transaction-example/contoh-transaksi-1.jpeg" alt="transaction-example">
                    <p>
                        Pada tanggal 30 Nov 2022 (6 hari setelah Perintah Transfer ke-1), Perintah Transfer ke-2 muncul
                        dengan nilai 40% dari jumlah PH, Anda mentransfer langsung ke rekening peserta, mengunggah bukti
                        transfer (kwitansi) dan penerima konfirmasi transaksi selesai!
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/transaction-example/contoh-transaksi-1.jpeg" alt="transaction-example">
                    <p>
                        Pada 04 Des 2022, (4 hari setelah Perintah Transfer ke-2), Anda bisa mendapatkan AUTO GH (Dapatkan
                        Bantuan) senilai 40% dari jumlah PH. Anda bisa mendapatkan bantuan (GH) dari orang lain, periksa
                        rekening bank/dompet Anda, dan konfirmasi transaksi yang diterima! Hanya tersisa 10% dari modal PH
                        dengan akun Mavro berjalan yang telah berjalan selama 10 hari
                    </p>
                </swiper-slide>
            </swiper>
        </div>

        <div class="note bg-green">
            <p>
                Note: Anda transfer PH, upload bukti transfer (receipt), tunggu konfirmasi dari Receiver. Jika Penerima
                belum mengkonfirmasi dalam 48 jam, sistem akan secara otomatis mengkonfirmasi transaksi selesai!
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