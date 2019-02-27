<template>
    <div class="moment">
        <h4 class="text-center">Moment</h4>
        <ul>
            <li>年：{{nowDate.year}}</li>
            <li>月：{{nowDate.month + 1}}</li>
            <li>日：{{nowDate.day}}</li>
            <li>时：{{nowDate.hour}}</li>
            <li>分：{{nowDate.minute}}</li>
            <li>秒：{{nowDate.second}}</li>
            <li>毫秒：{{nowDate.millisecond}}</li>
        </ul>

        <dl>
            <dt>格式化</dt>
            <dd>{{moment().format('YYYY-MM-DD')}}</dd>
            <dd>{{moment().format('YYYY/MM/DD')}}</dd>
            <dd>{{moment().format('YYYY年MM月DD日')}}</dd>
            <dd>{{moment(1411641720000).format('YYYY-MM-DD HH:mm:ss')}}</dd>
        </dl>

    </div>
</template>

<script>
    import moment from 'moment/moment'
    export default {
        name: "Moment",
        data () {
            return {
                moment: moment,
                Now: '',
                nowDate: {
                    year: '',
                    month: '',
                    day: '',
                    hour: '',
                    minute: '',
                    second: '',
                    millisecond: ''
                }
            }
        },
        created(){},
        mounted(){
            let that = this;
            let nowTime = moment();  // 当前时间
            that.Now = nowTime;

            console.log('是否是日期1: ', moment(nowTime).isValid());  // 是否是日期 true
            console.log('是否是日期2: ', moment('abcde').isValid());  // 是否是日期 false

            // 获取日期
            that.nowDate.year = nowTime.get('year');
            that.nowDate.month = nowTime.get('month');
            that.nowDate.day = nowTime.get('day');
            that.nowDate.hour = nowTime.get('hour');
            that.nowDate.minute = nowTime.get('minute');
            that.nowDate.second = nowTime.get('second');
            that.nowDate.millisecond = nowTime.get('millisecond');




            // 测试
            console.log('测试：', nowTime.format('YYYY-MM-DD'))




        }
    }
</script>

<style scoped>

</style>
