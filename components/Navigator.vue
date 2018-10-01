<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark">
            
            <b-navbar-brand href="#" class="d-flex">
                <img class="mr-1" src="~assets/images/logo.svg" alt="Siêu tỏi logo"><b>SiêuTỏi</b>
            </b-navbar-brand>
            
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto mr-auto">
                    <b-nav-item href="#">Trang chủ</b-nav-item>
                    <b-nav-item href="#">Bảng giá</b-nav-item>
                    <b-nav-item href="#">Về chúng tôi</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav>
                    <button type="button" class="btn btn-outline-light ">
                        <font-awesome-icon icon="phone" flip="horizontal"/> 0898120400
                    </button>
                    <button type="button" class="btn btn-outline-light">
                        Đặt mua ngay
                    </button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>


      
    </div>
    
</template>

<script>
export default {
    name:"Navigator",
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style lang="scss">
.navbar-toggler {
  border-color: transparent;
}
</style>
