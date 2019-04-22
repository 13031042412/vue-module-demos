<template>
    <div class="hello">
        <h4 class="text-center py-2 border-bottom">{{ msg }}</h4>
        <div class="test-content">

            <button class="btn btn-primary" @click="test">test</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: '测试页'
            }
        },
        created(){



        },
        mounted(){
            let that = this;
            function stringifyHeader(param) {
                let results = [];
                if ($.isEmptyObject(param) === true) {
                    return '';
                }
                $.map(param, (value, key) => {
                    results.push(`${key}=${value}`);
                });
                return results.join(',');
            }

            function getAuthHeader(header) {
                let headerLang = (localStorage.selectLang === 'en') ? 'en-US' : 'zh-CN';
                let headers = {
                    'Content-Type': "application/json; charset=utf-8",
                    'accept-language': headerLang
                };
                let token = localStorage.getItem('LOGIN_TOKEN_ADMIN');
                let auth = {};
                if (token) {
                    auth.token = token;
                }
                if (header && $.isEmptyObject(header) === false) {
                    auth = $.extend(auth , header);
                }
                if ($.isEmptyObject(auth) === false) {
                    headers.authorization = stringifyHeader(auth);
                }
                return headers;
            }

            function ajaxget (url, params = {}, header, callback) {
                let headers = getAuthHeader(header);
                console.log(111,params, headers)
                axios({
                    method: 'get',
                    url: '/apis/' + url,
                    data: params,
                    headers: headers,
                    timeout: 3000
                }).then(rep=>{
                    console.log(rep)
                    if (callback instanceof Function) {
                        callback(rep)
                    }
                }).catch(function(thrown) {
                    if (axios.isCancel(thrown)) {
                        console.log('Request canceled', thrown.message);
                    } else {
                        // 处理错误
                        console.log('处理错误')
                    }
                });
                /*$http({
                    url: baseUri + url,
                    method: 'GET',
                    params: params,
                    headers: headers
                }).then(function (baseResult) {
                    window.unloading();
                    if (baseResult.status === 200) {
                        if (baseResult.data && baseResult.data.code === NO_LOGIN_CODE) {
                            setTimeout(() => {
                                window.location.href = './login.html';
                            }, 2000)
                            return;
                        }
                        baseResult.data ? deferred.resolve(baseResult.data) : console.log('无data返回数据');
                    } else {
                        console.log('请求回馈非200状态');
                    }
                }, function (baseResult) {
                    window.unloading();
                    console.log('请求失败，请重试！！！');
                    // let httpError = 'httpError~';
                    // console && console.log(httpError);
                    // deferred.reject(httpError + ':' + baseResult.status + ',' + baseResult.statusText);
                });
                return deferred.promise;*/
            }

            setTimeout(function () {
                ajaxget('exchange_manager/admin/login',{account: "13031042412"},{
                    'account-no': "13031042412",
                    'login-password': "liu1234",
                    'google-code': "205829"
                }, that.doresult)
            },5000)
        },
        methods: {
            doresult(rep){
                console.log(222, rep)
            },
            test(){
                axios({
                    method: 'get',
                    url: '/apis/exchange_manager/admin/login',
                    data: {
                        account: "13031042412"
                    },
                    headers: {
                        'Content-Type': "application/json; charset=utf-8",
                        'accept-language': "zh-CN",
                        'authorization': "login-password=liu1234,account-no=13031042412,google-code=123123"
                    },
                    timeout: 5000
                }).then(function (rep) {
                    console.log(rep)
                }).catch(function(thrown) {
                    if (axios.isCancel(thrown)) {
                        console.log('Request canceled', thrown.message);
                    } else {
                        // 处理错误
                        console.log('处理错误')
                    }
                });
                /*axios.get('apis/c2cApi/c2cadvert/get-info?type=SELL').then(rep => {
                    console.log(rep)
                })*/
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
