<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/images/logo.png" alt="logo" width="80">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#hero">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Tentang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#howItWorks">Sistem Kerja</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#exampleTransaction">Transaksi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#faq">Pertanyaan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonials">Testimoni</a>
                    </li>
                    <li class="nav-item d-flex socmed">
                        <a class="nav-link" href="#"><i class="uil uil-telegram-alt"></i></a>
                        <a class="nav-link" href="#"><i class="uil uil-facebook-f"></i></a>
                        <a class="nav-link" href="#"><i class="uil uil-twitter"></i></a>
                        <a class="nav-link" href="#"><i class="uil uil-instagram-alt"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/navbar';
</style>