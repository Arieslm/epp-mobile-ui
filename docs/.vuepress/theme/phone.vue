<template>
    <div class="test">
        <div class="loading-box" v-show="loadingshow">
            <span class="loading-spinners">
              <i class="loading-spinner" v-for="i in 12"></i>
            </span>
        </div>
        <div class="ifr">
            <!-- <div class="topbarcon">
                <div class="topbar">
                    {{baseUrl}}/{{text}}
                </div>
            </div> -->
            <iframe :src="baseUrl" name="ifr" width="329" height="560" @load="loading()"></iframe>
        </div>
    </div>
</template>
<script type="text/babel">
export default {
    name: 'iphone',
    data() {
        return {
            ifr: false,
            text: 'Button',
            loadingshow: true,
            baseUrl: 'http://59.110.141.94:8015/',
            ifrUrl: 'http://59.110.141.94:8015/',
        };
    },
    mounted() {
        this.ifr = location.pathname.split('/')[2];
        console.log(this);
        this.baseUrl = this.ifrUrl + this.ifr;
    },
    watch: {
        $route(val) {
            let path = val.path;
            var query = path.split('/')[2]
            this.baseUrl = this.ifrUrl + query;
            this.loadingshow = true;
        }
    },
    methods: {
        loading() {
            this.loadingshow = false;
        }
    }
};
</script>
<style lang="scss" scoped>
.test {
    position: fixed;
    right: 20px;
    // top: 10px;
    color: red;
    font-size: 14px;
    width: 400px;
    height: 696px;
    background: url('../public/img/phonex.png') no-repeat;
    background-size: 100% 100%;
    .loading-box {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 999999;
        transform: translate(-50%, -50%);
        .loading-spinners {
            position: relative;
            display: block;
            width: 40px;
            height: 40px;
            .loading-spinner {
                position: absolute;
                left: 44.5%;
                top: 37%;
                width: 4px;
                height: 30%;
                border-radius: 50%/20%;
                opacity: .25;
                background-color: #282c34;
                animation: spinnerFade 1s linear infinite;
                @for $i from 1 through 12 {
                    &:nth-child(#{$i}) {
                        animation-delay: (($i - 1) / 12) + (s);
                        transform: rotate(30deg * ($i - 6)) translateY(-150%);
                    }
                }
            }
        }
    }
    .ifr {
        width: 370px;
        height: 593px;
        margin: 50px auto;
        overflow: hidden;
        border-radius: 3px;
        background: #f5f5f5;
        transform: scale(1);
        iframe {
            height: 100%;
            width: 375px;
            border: none;
        }

    }
    @keyframes spinnerFade {
        0% {
            opacity: .85;
        }
        50% {
            opacity: .25;
        }
        100% {
            opacity: .2;
        }
    }
}
</style>
