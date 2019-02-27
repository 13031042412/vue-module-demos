<template>
    <div class="hello">
        <h4 class="text-center py-2 border-bottom">{{ msg }}</h4>
        <div class="test-content">



        </div>
    </div>
</template>

<script>
    import moment from 'moment/moment'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: '测试页'
            }
        },
        created(){},
        mounted(){
            let now = moment();  // 当前时间
            console.log('当前时间: ', now);

            var day = moment("12-25-1995", "YYYY-MM-DD");
            console.log(moment("12-25-1995").isValid())





        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
