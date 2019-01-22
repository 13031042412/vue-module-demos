<template>
    <div class="row teachs text-center">
        <div v-if="list.length > 0" v-for="item in list" class="col-6">
            <div class="item">
                <a class="teachs_header">
                    <img class="teachs_header_img" :src="formatSrc(item.header)" alt="讲师照片">
                </a>
                <a class="teachs_name textover">
                    {{item.name}}
                </a>
                <div class="teachs_flower"><i class="iconfont icon-huahuaduoqingxin alignMid"></i><span class="alignMid"><span class="red">{{item.flowers}}</span>朵</span></div>
            </div>
        </div>
        <div v-else class="text-secondary text-center py-3">暂无数据</div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            list: {
                type: Array,
                default: function () {
                    return { list: [] }
                }
            }
        },
        methods: {
            formatSrc: function (src) {
                return src.replace('70x90', '160x205');
            }
        }
    }
</script>

<style scoped>
    .teachs .col-6{padding: 0 10px 20px;}
    .teachs .item{border: 1px solid #3e3e59;background: #0e0e2f;padding-bottom: 10px;position: relative;}
    .teachs_header{display: block;padding: 24px 20px 5px;}
    .teachs_header img{display: block;width: 100%;/* height: 100%; */}
    .teachs_name{display: block;font-size: 16px;color: #fd9;}
    .teachs_flower{padding-bottom: 5px;}
    .alignMid{vertical-align: middle;}
</style>

