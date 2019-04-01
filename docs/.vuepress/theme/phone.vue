<template>
    <div class="test">
        <div class="ifr">
            <div class="topbarcon">
                <div class="topbar">
                    {{baseUrl}}/{{text}}
                </div>
            </div>
            <iframe :src="baseUrl" name="ifr" width="329" height="560"></iframe>
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
            this.baseUrl = this.ifrUrl + query
            console.log('this.baseUrl', this.baseUrl);
            console.log('query', query);
            console.log(this.baseUrl);
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
}
</style>
