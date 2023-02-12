<template>
    <div class="registration-form">
        <div class="col-md-7 mx-auto">
            <div class="heading">
                <span class="note">
                    Note : Khusus yang sudah mendaftar menjadi member MMMRevolusi.com dan melakukan PH
                </span>
                <h2>
                    Form registrasi subdomain <br> website
                </h2>
            </div>

            <div class="container">
                <form action="#" method="POST">
                    <div class="form-group">
                        <label class="form-label">Fullname<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Your Name" value="John Doe">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email registrasi mmmrevolusi.com<span
                                class="text-danger">*</span></label>
                        <input type="email" class="form-control" placeholder="Example : john.doe@email.com">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Mobile phone<span class="text-danger">*</span></label>
                        <input type="number" class="form-control" placeholder="Example : Lorem ipsum dolor sit amet">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Opsi 1 subdomain<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Example : Lorem ipsum dolor sit amet">
                        <span class="text-secondary">
                            Contoh opsi subdomain : <br>
                            www.<b>edisantoso</b>.mmmrevolusi.com / www.<b>edihalim</b>.mmmrevolusi.com / <br>
                            www.<b>edihalim99</b>.mmmrevolusi.com
                        </span>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Opsi 2 subdomain<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Example : Lorem ipsum dolor sit amet">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Opsi 3 subdomain<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Example : Lorem ipsum dolor sit amet">
                        <span class="text-success fw-bold">
                            Note : Jika opsi 1 sudah diambil orang, maka admin akan menggunakan opsi 2 atau 3
                        </span>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Message (optional) <span class="text-danger">*</span></label>
                        <textarea rows="4" class="form-control" placeholder="Lorem ipsum dolor sit amet"></textarea>
                    </div>
                    <button type="submit" class="btn bg-green w-100 py-3 fw-bold fs-6">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/sass/registration_form';
</style>