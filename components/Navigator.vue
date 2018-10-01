<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand d-flex" href="#">
            <img class="mr-1" src="~assets/images/logo.svg" alt="Siêu tỏi logo"><b>SiêuTỏi</b>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Trang chủ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Bảng giá</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Về chúng tôi</a>
                </li>
            </ul>
            <div>
                <button type="button" class="btn btn-outline-light">
                    <font-awesome-icon icon="phone" flip="horizontal" class="m-r-xs" /> 0898120400
                </button>
                <button type="button" class="btn btn-outline-light">Đặt mua ngay</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:"Navigator"
}
</script>

<style lang="scss">
</style>
