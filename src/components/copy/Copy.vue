<template>
    <div class="copy">
        <div class="container">
            <h3 class="text-center">The clipboard usage.</h3>
            <!--data-clipboard-target 可以直接指向需要复制的数据。-->
            <!--data-clipboard-text 是放置需要复制的数据-->
            <!--复制表单内容-->
            <div class="border-dark border py-3 my-3">
                <div class="input-group">
                    <input id="copy-ipt1" type="text" class="form-control" value="复制指定输入框的内容." readonly>
                    <div class="input-group-append">
                        <button @click="copy" class="btn btn-secondary btn-copy" data-clipboard-target="#copy-ipt1" type="button">copy</button>
                    </div>
                </div>
            </div>

            <!--复制元素内容-->
            <div class="border-dark border py-3 my-3 text-center">
                <div>
                    <button @click="copy" class="btn btn-secondary btn-copy" data-clipboard-target="#copy-p1" type="button">copy</button>
                    <p id="copy-p1">复制元素的内容。</p>
                </div>
            </div>

            <!--剪切表单内容-->
            <div class="border-dark border py-3 my-3 text-center">
                <div>
                    <button @click="copy" class="btn btn-secondary btn-copy" data-clipboard-action="cut" data-clipboard-target="#copy-textarea1" type="button">cut</button>
                    <textarea id="copy-textarea1" class="form-control" v-model="cutMsg" placeholder="Some text to cut or copy."></textarea>
                </div>
            </div>

            <!--复制自身属性-->
            <div class="border-dark border py-3 my-3 text-center">
                <div>
                    <button @click="copy" class="btn btn-secondary btn-copy" data-clipboard-text="数据放在属性中" type="button">copy</button>
                    <p class="text-secondary small">复制自身属性</p>
                </div>
            </div>

            <!--测试输入框-->
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" v-model="pasteText" placeholder="paste here...">
                    <div class="input-group-append">
                        <button @click="pasteText = ''" class="btn btn-secondary" type="button">clear</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Clipboard from 'clipboard'
    import toast from 'toast2'
    import 'toast2/dist/toast.css'
    export default {
        name: 'copy',
        data () {
            return {
                pasteText: '',
                cutMsg: 'disabled 和 readonly的表单不可剪切.'
            }
        },
        methods: {
            copy(){
                let clipboard = new Clipboard('.btn-copy');
                //注意要使用let或者const，不能使用var，否则会出现复制次数叠加的问题，即复制不止一次。
                //因为var是全局变量，let和const是局部
                clipboard.on('success', function(e){
                    // console.log(e)
                    console.log(e.text);
                    toast.success('复制成功！');
                    clipboard.destroy() //使用destroy可以清楚缓存
                });
                clipboard.on('error', function(e){
                    console.log('failed', e);
                    clipboard.destroy()
                });
            }
        }
    }
</script>

<style scoped>

</style>
