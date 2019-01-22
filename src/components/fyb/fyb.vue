<template>
    <div class="fyb">
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
            <!--<span class="back rounded-circle bg-dark text-white" @click="back">&lt;</span>-->
            <img class="img-fluid mx-auto" src="/static/img/bg_firstScreen.jpg">
            <div class="container">
                <h5 class="text-center">奖项设置</h5>
                <div class="rankType2 small nowrap">
                    <span :class="{active: tabi==1}" @click="filter_result(1)">10强</span>
                    <span :class="{active: tabi==2}" @click="filter_result(2)">20强</span>
                    <span :class="{active: tabi==3}" @click="filter_result(3)">50强</span>
                    <span :class="{active: tabi==4}" @click="filter_result(4)">100强</span>
                    <span :class="{active: tabi==5}" @click="filter_result(5)">200强</span>
                    <span :class="{active: tabi==6}" @click="filter_result(6)">管理</span>
                    <span :class="{active: tabi==7}" @click="filter_result(7)">领导力</span>
                    <span :class="{active: tabi==8}" @click="filter_result(8)">互联网</span>
                    <span :class="{active: tabi==9}" @click="filter_result(9)">营销</span>
                    <span :class="{active: tabi==10}" @click="filter_result(10)">国学</span>
                </div>
                <div id="teachs">
                    <List :list="list"></List>
                </div>
            </div>
        </scroller>



    </div>
</template>

<script>
    import List from './list'
    export default {
        name: "fyb",
        data(){
            return {
                tabi: 1,
                listAll: [
                    {id:518957,name:'袁清',flowers:41255,header:'http://img1.jiangshi.org/rsi/20180811/111535150447_518957_70x90.jpg'},
                    {id:518803,name:'叶峰',flowers:30514,header:'http://img1.jiangshi.org/rsi/20181026/260912257844_1423_160x205.png'},
                    {id:516495,name:'海惕',flowers:29395,header:'http://img1.jiangshi.org/rsi/20160401/011649220643_516495_70x90.jpg'},
                    {id:586975,name:'程学友',flowers:29006,header:'http://img1.jiangshi.org/rsi/20160505/051525199663_586975_70x90.jpg'},
                    {id:1228488,name:'金昕炜',flowers:22717,header:'http://img1.jiangshi.org/rsi/20171230/301847234018_1228488_70x90.jpg'},
                    {id:518243,name:'桂海杰',flowers:22216,header:'http://img1.jiangshi.org/rsi/20171124/241520462866_1395.jpg'},
                    {id:702298,name:'谷晟阳',flowers:21755,header:'http://img1.jiangshi.org/rsi/20180104/041745232735_702298_70x90.jpg'},
                    {id:1454164,name:'龙金科',flowers:20619,header:'http://img1.jiangshi.org/rsi/20170626/261211399497_1454164_70x90.jpg'},
                    {id:706419,name:'钮东涛',flowers:20363,header:'http://img1.jiangshi.org/rsi/20180426/20180426-c6ec7a72d1db71f8_70x90.jpg'},
                    {id:528416,name:'冯涛',flowers:20222,header:'http://img1.jiangshi.org/rsi/20180425/251153071524_528416_70x90.jpg'},
                    {id:524020,name:'王一名',flowers:20039,header:'http://img1.jiangshi.org/rsi/20170613/131955047828_524020_70x90.jpg'},
                    {id:520553,name:'孙新平',flowers:20011,header:'http://img1.jiangshi.org/rsi/20160407/071952401911_520553_70x90.jpg'},
                    {id:517204,name:'肖旭东',flowers:15952,header:'http://img1.jiangshi.org/rsi/20171228/282001278757_517204_70x90.jpg'},
                    {id:701648,name:'无量子',flowers:15104,header:'http://img1.jiangshi.org/rsi/20181026/261035581934_701648_70x90.jpg'},
                    {id:525542,name:'魏庆岷',flowers:11923,header:'http://img1.jiangshi.org/v1/lect/logo/12783.jpg'},
                    {id:1655066,name:'李居云',flowers:11425,header:'http://img1.jiangshi.org/rsi/20181031/311127009186_1655066_70x90.jpg'},
                    {id:529028,name:'姜俊宏',flowers:11283,header:'http://img1.jiangshi.org/rsi/20160405/051637338100_529028_70x90.jpg'},
                    {id:517833,name:'李金波',flowers:10968,header:'http://img1.jiangshi.org/rsi/20160401/011324308633_517833_70x90.jpg'},
                    {id:1614460,name:'慧杰',flowers:10888,header:'http://img1.jiangshi.org/rsi/20180507/071826044916_1614460_70x90.jpg'},
                    {id:1662075,name:'贺蓓',flowers:10759,header:'http://img1.jiangshi.org/rsi/20181210/101251515578_1662075_70x90.jpg'},
                    {id:1059124,name:'李洋',flowers:10599,header:'http://img1.jiangshi.org/rsi/20161108/081011112480_1059124_70x90.jpg'},
                    {id:1582820,name:'王登虎',flowers:10352,header:'http://img1.jiangshi.org/rsi/20171225/251548239296_1582820_70x90.png'},
                    {id:1192123,name:'陈浩',flowers:10235,header:'http://img1.jiangshi.org/rsi/20181029/290006402983_1192123_70x90.jpg'},
                    {id:1623655,name:'张花敏',flowers:10113,header:'http://img1.jiangshi.org/rsi/20180611/112000370969_1623655_70x90.jpg'},
                    {id:523709,name:'胡福庭',flowers:10033,header:'http://img1.jiangshi.org/rsi/20160401/011643254725_523709_70x90.jpg'},
                    {id:1633339,name:'岳曲',flowers:10029,header:'http://img1.jiangshi.org/rsi/20180724/240952131018_1633339_70x90.jpg'},
                    {id:530500,name:'周锦弘',flowers:10017,header:'http://img1.jiangshi.org/rsi/20180412/122055222013_530500_70x90.jpg'},
                    {id:1625583,name:'朱亮',flowers:9748,header:'http://img1.jiangshi.org/rsi/20180621/211447549043_1625583_70x90.jpg'},
                    {id:525087,name:'刘鹏',flowers:8000,header:'http://img1.jiangshi.org/rsi/20171217/171608471538_525087_70x90.jpg'},
                    {id:521720,name:'文钊飞',flowers:7879,header:'http://img1.jiangshi.org/rsi/20180716/160952364239_521720_70x90.jpg'},
                    {id:1580755,name:'徐用才',flowers:7574,header:'http://img1.jiangshi.org/rsi/20180530/301627201330_1580755_70x90.jpg'},
                    {id:532771,name:'黄梓博',flowers:7435,header:'http://img1.jiangshi.org/rsi/20180122/220914319993_532771_70x90.jpg'},
                    {id:1047516,name:'崔进',flowers:7051,header:'http://img1.jiangshi.org/rsi/20171017/171514599495_1047516_70x90.jpg'},
                    {id:1611017,name:'胡礼新',flowers:6219,header:'http://img1.jiangshi.org/rsi/20180423/231204370081_1611017_70x90.jpg'},
                    {id:1082707,name:'庞大伟',flowers:6094,header:'http://img1.jiangshi.org/rsi/20160517/170823387909_1082707_70x90.jpg'},
                    {id:529871,name:'刘华鹏',flowers:6094,header:'http://img1.jiangshi.org/rsi/20180105/051159067295_529871_70x90.jpg'},
                    {id:523441,name:'梁叶',flowers:6018,header:'http://img1.jiangshi.org/rsi/20161115/151659286631_523441_70x90.jpg'},
                    {id:522090,name:'菅勃',flowers:5773,header:'http://img1.jiangshi.org/rsi/20180909/090625202685_522090_70x90.jpg'},
                    {id:519221,name:'凛子',flowers:5706,header:'http://img1.jiangshi.org/v1/upload/lectavatar/5159/5159.jpg'},
                    {id:1396149,name:'屠建清',flowers:5582,header:'http://img1.jiangshi.org/rsi/20171201/011106435870_1396149_70x90.jpg'},
                    {id:526328,name:'王飞',flowers:5428,header:'http://img1.jiangshi.org/rsi/20180410/102309558842_526328_70x90.jpg'},
                    {id:517116,name:'张学民',flowers:5421,header:'http://img1.jiangshi.org/rsi/20161220/201722440701_517116_70x90.jpg'},
                    {id:1663666,name:'周志芬',flowers:5358,header:'http://img1.jiangshi.org/rsi/20181207/070941179840_1663666_70x90.jpg'},
                    {id:1641559,name:'徐旭升',flowers:5327,header:'http://img1.jiangshi.org/rsi/20181112/121451537093_1641559_70x90.jpg'},
                    {id:534547,name:'李欣',flowers:5226,header:'http://img1.jiangshi.org/rsi/20181212/121040437080_534547_70x90.jpg'},
                    {id:1652688,name:'大高华',flowers:5209,header:'http://img1.jiangshi.org/rsi/20181219/192113397352_1652688_70x90.jpg'},
                    {id:1619419,name:'贺俊贤',flowers:5201,header:'http://img1.jiangshi.org/rsi/20180525/251557452865_1619419_70x90.jpg'},
                    {id:518368,name:'张晓晴',flowers:5153,header:'http://img1.jiangshi.org/rsi/20180416/160024277897_518368_70x90.jpg'},
                    {id:1547744,name:'宋柏君',flowers:5128,header:'http://img1.jiangshi.org/rsi/20180702/020448280055_1547744_70x90.jpg'},
                    {id:520322,name:'王毅',flowers:5121,header:'http://img1.jiangshi.org/rsi/20180313/131615404308_520322_70x90.jpg'},
                    {id:525518,name:'缪宇泓',flowers:5105,header:'http://img1.jiangshi.org/rsi/20160402/021352097876_525518_70x90.jpg'},
                    {id:1360802,name:'李博',flowers:5079,header:'http://img1.jiangshi.org/rsi/20180802/022324538884_1360802_70x90.jpg'},
                    {id:533537,name:'尤龙涛',flowers:5074,header:'http://img1.jiangshi.org/rsi/20180308/081507232873_533537_70x90.jpg'},
                    {id:534825,name:'姚春妹',flowers:5040,header:'http://img1.jiangshi.org/v1/upload/lectavatar/18774/18774.jpg'},
                    {id:526132,name:'杨天雄',flowers:5040,header:'http://img1.jiangshi.org/rsi/20160401/012034284606_526132_70x90.jpg'},
                    {id:1414025,name:'高岗富',flowers:5029,header:'http://img1.jiangshi.org/rsi/20180806/061448548804_1414025_70x90.jpg'},
                    {id:521566,name:'董天乐',flowers:5018,header:'http://img1.jiangshi.org/rsi/20170421/211300520586_521566_70x90.jpg'},
                    {id:1507910,name:'何有志',flowers:5014,header:'http://img1.jiangshi.org/rsi/20170821/212331409484_1507910_70x90.png'},
                    {id:1625429,name:'张书豪',flowers:5014,header:'http://img1.jiangshi.org/rsi/20180620/201800535039_1625429_70x90.jpg'},
                    {id:706172,name:'林江武',flowers:5011,header:'http://img1.jiangshi.org/rsi/20160519/191028467311_706172_70x90.jpg'},
                    {id:1645068,name:'陈文冬',flowers:5010,header:'http://img1.jiangshi.org/rsi/20181217/171648028160_1645068_70x90.jpg'},
                    {id:533969,name:'杨佑泉',flowers:5009,header:'http://img1.jiangshi.org/rsi/20160505/051700080291_533969_70x90.jpg'},
                    {id:531444,name:'顾业栋',flowers:5005,header:'http://img1.jiangshi.org/rsi/20160401/011421113361_531444_70x90.jpg'},
                    {id:1617777,name:'姜毅恩',flowers:5001,header:'http://img1.jiangshi.org/rsi/20180830/301536265036_1617777_70x90.jpg'},
                    {id:1625608,name:'毛雪',flowers:5000,header:'http://img1.jiangshi.org/rsi/20180621/211646450719_1625608_70x90.jpg'},
                    {id:1498423,name:'涂清华',flowers:5000,header:'http://img1.jiangshi.org/rsi/20180825/251018148464_1498423_70x90.jpg'},
                    {id:1356739,name:'姚若愚',flowers:5000,header:'http://img1.jiangshi.org/rsi/20170126/262249434788_1356739_70x90.jpg'},
                    {id:1289433,name:'张奕成',flowers:5000,header:'http://img1.jiangshi.org/rsi/20161104/041208114733_1289433_70x90.jpg'},
                    {id:1286463,name:'史香玉',flowers:5000,header:'http://img1.jiangshi.org/rsi/20161101/011632309676_1286463_70x90.jpg'},
                    {id:1638444,name:'柳丽惠',flowers:5000,header:'http://img1.jiangshi.org/rsi/20181214/141740165366_1638444_70x90.jpg'},
                    {id:517040,name:'王同',flowers:5000,header:'http://img1.jiangshi.org/rsi/20180716/162152276913_517040_70x90.jpg'},
                    {id:517038,name:'宋劝其',flowers:5000,header:'http://img1.jiangshi.org/rsi/20160401/011608146901_517038_70x90.jpg'},
                    {id:517831,name:'王风范',flowers:5000,header:'http://img1.jiangshi.org/rsi/20181126/261426128964_517831_70x90.jpg'},
                    {id:664845,name:'千海',flowers:4413,header:'http://img1.jiangshi.org/rsi/20171111/110223521942_664845_70x90.jpg'},
                    {id:705615,name:'刘长伟',flowers:4403,header:'http://img1.jiangshi.org/v1/upload/lectavatar/21051/21051.png'},
                    {id:526664,name:'蔡乐平',flowers:4301,header:'http://img1.jiangshi.org/rsi/20160401/011707130432_526664_70x90.jpg'},
                    {id:520568,name:'李羿锋',flowers:3983,header:'http://img1.jiangshi.org/rsi/20160401/011749133677_520568_70x90.jpg'},
                    {id:1585580,name:'梁俊景',flowers:3967,header:'http://img1.jiangshi.org/rsi/20171230/301909510278_1585580_70x90.jpg'},
                    {id:1566539,name:'曹保印',flowers:3869,header:'http://img1.jiangshi.org/rsi/20171123/231709263413_1566539_70x90.jpg'},
                    {id:1346067,name:'刘芳',flowers:3813,header:'http://img1.jiangshi.org/rsi/20180731/311643059949_1346067_70x90.jpg'},
                    {id:1396075,name:'刘义才',flowers:3736,header:'http://img1.jiangshi.org/rsi/20180815/151351591009_1396075_70x90.jpg'},
                    {id:526684,name:'薛晓庆',flowers:3701,header:'http://img1.jiangshi.org/rsi/20161002/020112112673_526684_70x90.jpg'},
                    {id:523540,name:'余杨元',flowers:3299,header:'http://img1.jiangshi.org/rsi/20160401/011746005097_523540_70x90.jpg'},
                    {id:1256101,name:'陈楠华',flowers:3275,header:'http://img1.jiangshi.org/rsi/20171015/151332216912_1256101_70x90.jpg'},
                    {id:523930,name:'吴宝峰',flowers:3229,header:'http://img1.jiangshi.org/rsi/20160401/011615539411_523930_70x90.jpg'},
                    {id:1520634,name:'林安',flowers:3215,header:'http://img1.jiangshi.org/rsi/20180523/232059214823_1520634_70x90.jpg'},
                    {id:525245,name:'彭江根',flowers:3141,header:'http://img1.jiangshi.org/rsi/20160402/021414060423_525245_70x90.jpg'},
                    {id:525637,name:'丁惠敏',flowers:3036,header:'http://img1.jiangshi.org/rsi/20160402/021337363847_525637_70x90.jpg'},
                    {id:533454,name:'曲一峰',flowers:3006,header:'http://img1.jiangshi.org/rsi/20180906/061500599590_533454_70x90.jpg'},
                    {id:532603,name:'徐捷',flowers:3000,header:'http://img1.jiangshi.org/rsi/20171228/281435303894_1390_160x205.jpg'},
                    {id:1590780,name:'陈晓军',flowers:2700,header:'http://img1.jiangshi.org/rsi/20180803/031803240371_1590780_70x90.jpg'},
                    {id:1374440,name:'胡柏',flowers:2682,header:'http://img1.jiangshi.org/rsi/20170222/221111581698_1374440_70x90.png'},
                    {id:1049076,name:'韩鹤之',flowers:2600,header:'http://img1.jiangshi.org/rsi/20180814/141004465241_1049076_70x90.jpg'},
                    {id:1445105,name:'李忠',flowers:2571,header:'http://img1.jiangshi.org/rsi/20180422/221517366329_1445105_70x90.jpg'},
                    {id:518476,name:'肖一刀',flowers:2522,header:'http://img1.jiangshi.org/rsi/20180712/121801189442_518476_70x90.jpg'},
                    {id:526824,name:'王可',flowers:2427,header:'http://img1.jiangshi.org/rsi/20170926/261451238452_526824_70x90.jpg'},
                    {id:1662245,name:'康明启',flowers:2353,header:'http://img1.jiangshi.org/rsi/20181219/192119373121_1662245_70x90.jpg'},
                    {id:523657,name:'陈锦华',flowers:2290,header:'http://img1.jiangshi.org/rsi/20180101/011144027991_523657_70x90.jpg'},
                    {id:531904,name:'夜小叶',flowers:2277,header:'http://img1.jiangshi.org/rsi/20171221/211152147527_531904_70x90.jpg'},
                    {id:532690,name:'王海波',flowers:2237,header:'http://img1.jiangshi.org/rsi/20180409/091442285081_532690_70x90.jpg'},
                    {id:1629923,name:'赵泽民',flowers:2234,header:'http://img1.jiangshi.org/rsi/20180711/111355206883_1629923_70x90.jpg'},
                    {id:520177,name:'曹敬',flowers:2229,header:'http://img1.jiangshi.org/v1/upload/lectavatar/6281/6281.jpg'},
                    {id:523311,name:'林正光',flowers:2160,header:'http://img1.jiangshi.org/rsi/20180612/121137350214_523311_70x90.jpg'},
                    {id:1584534,name:'陈玉祥',flowers:2098,header:'http://img1.jiangshi.org/rsi/20180108/082124472174_1584534_70x90.png'},
                    {id:525811,name:'程洪于',flowers:2066,header:'http://img1.jiangshi.org/rsi/20180525/252130070919_525811_70x90.jpg'},
                    {id:518730,name:'齐炳堂',flowers:2035,header:'http://img1.jiangshi.org/rsi/20160406/061812016910_518730_70x90.jpg'},
                    {id:1463077,name:'马向前',flowers:2029,header:'http://img1.jiangshi.org/rsi/20171205/052123368683_1463077_70x90.jpg'},
                    {id:1596465,name:'武海生',flowers:2025,header:'http://img1.jiangshi.org/rsi/20180207/071428136221_1596465_70x90.jpg'},
                    {id:517063,name:'红智博',flowers:2016,header:'http://img1.jiangshi.org/rsi/20180204/042025298392_517063_70x90.jpg'},
                    {id:1659821,name:'付林盛',flowers:2015,header:'http://img1.jiangshi.org/rsi/20181121/211345527478_1659821_70x90.jpg'},
                    {id:1553729,name:'王汉明',flowers:2010,header:'http://img1.jiangshi.org/rsi/20171101/011511088934_1553729_70x90.png'},
                    {id:532626,name:'李强',flowers:2008,header:'http://img1.jiangshi.org/rsi/20180722/221113039413_532626_70x90.jpg'},
                    {id:1561529,name:'李吉',flowers:2005,header:'http://img1.jiangshi.org/rsi/20171114/141657401734_1561529_70x90.jpg'},
                    {id:1456163,name:'王征',flowers:2004,header:'http://img1.jiangshi.org/rsi/20170912/121719573501_1456163_70x90.jpg'},
                    {id:531017,name:'周海斌',flowers:2004,header:'http://img1.jiangshi.org/rsi/20181219/191135567716_531017_70x90.jpg'},
                    {id:522180,name:'郑撼',flowers:2003,header:'http://img1.jiangshi.org/rsi/20160407/071922466933_522180_70x90.jpg'},
                    {id:528384,name:'余向阳',flowers:2001,header:'http://img1.jiangshi.org/v1/upload/lectavatar/14638/14638.jpg'},
                    {id:531652,name:'成敏华',flowers:2000,header:'http://img1.jiangshi.org/rsi/20180719/190859417412_531652_70x90.jpg'},
                    {id:519592,name:'汪文辉',flowers:2000,header:'http://img1.jiangshi.org/rsi/20181016/161648298781_519592_70x90.jpg'},
                    {id:706453,name:'匡晔',flowers:2000,header:'http://img1.jiangshi.org/rsi/20170304/042139373211_706453_70x90.jpg'},
                    {id:1506313,name:'毛伟峰',flowers:2000,header:'http://img1.jiangshi.org/rsi/20170818/181231311256_1506313_70x90.jpg'},
                    {id:1589551,name:'马睿',flowers:2000,header:'http://img1.jiangshi.org/rsi/20180116/161447118194_1589551_70x90.jpg'},
                    {id:1614100,name:'黄玉宇',flowers:1999,header:'http://img1.jiangshi.org/rsi/20180506/061059053758_1614100_70x90.jpg'},
                    {id:702031,name:'左明军',flowers:1999,header:'http://img1.jiangshi.org/rsi/20170501/010705302573_702031_70x90.jpg'},
                    {id:1488036,name:'陈忠安',flowers:1999,header:'http://img1.jiangshi.org/rsi/20170719/191110470961_1488036_70x90.jpg'},
                    {id:705683,name:'柳创译',flowers:1972,header:'http://img1.jiangshi.org/rsi/20160401/011310378284_705683_70x90.jpg'},
                    {id:522888,name:'罗李华',flowers:1893,header:'http://img1.jiangshi.org/rsi/20160405/051717310151_522888_70x90.jpg'},
                    {id:517398,name:'李明俊',flowers:1881,header:'http://img1.jiangshi.org/rsi/20181116/161538267220_517398_70x90.jpg'},
                    {id:529974,name:'李毅超',flowers:1867,header:'http://img1.jiangshi.org/rsi/20180911/111206264385_529974_70x90.jpg'},
                    {id:1233435,name:'袁文明',flowers:1767,header:'http://img1.jiangshi.org/rsi/20180912/120909140131_1233435_70x90.jpg'},
                    {id:1590776,name:'杜艳芬',flowers:1727,header:'http://img1.jiangshi.org/rsi/20180111/111852577254_1590776_70x90.jpg'},
                    {id:1047209,name:'陈成',flowers:1685,header:'http://img1.jiangshi.org/rsi/20180107/072158588790_1047209_70x90.jpg'},
                    {id:1648819,name:'姜泽',flowers:1641,header:'http://img1.jiangshi.org/rsi/20180925/252213302492_1648819_70x90.jpg'},
                    {id:1303933,name:'叶剑',flowers:1609,header:'http://img1.jiangshi.org/rsi/20170210/101124285696_1303933_70x90.jpg'},
                    {id:532319,name:'苏静',flowers:1447,header:'http://img1.jiangshi.org/rsi/20180806/061156162878_532319_70x90.jpg'},
                    {id:533049,name:'唐玮',flowers:1380,header:'http://img1.jiangshi.org/rsi/20160401/011738354067_533049_70x90.jpg'},
                    {id:523983,name:'王波',flowers:1373,header:'http://img1.jiangshi.org/rsi/20170426/262147005635_523983_70x90.jpg'},
                    {id:1574900,name:'彭为威',flowers:1373,header:'http://img1.jiangshi.org/rsi/20171207/20171207-2086b50dc0dbcc6f_70x90.jpg'},
                    {id:522012,name:'魏楚君',flowers:1343,header:'http://img1.jiangshi.org/v1/js/9093/20120414223024z203.jpg'},
                    {id:519613,name:'陈云雯',flowers:1267,header:'http://img1.jiangshi.org/v1/peixunpicture/lect/2010-12-21/4d3c169f-f799-4a4a-88d3-f7b87bd68de8.jpg'},
                    {id:706165,name:'唐冬',flowers:1239,header:'http://img1.jiangshi.org/rsi/20160501/011620051625_706165_70x90.jpg'},
                    {id:517903,name:'周凌峰',flowers:1237,header:'http://img1.jiangshi.org/rsi/20160401/011318565458_517903_70x90.jpg'},
                    {id:521030,name:'王延臣',flowers:1217,header:'http://img1.jiangshi.org/rsi/20160408/081021145043_521030_70x90.jpg'},
                    {id:1627830,name:'范惠清',flowers:1217,header:'http://img1.jiangshi.org/rsi/20180701/011808484292_1627830_70x90.jpg'},
                    {id:530853,name:'黄钰茗',flowers:1204,header:'http://img1.jiangshi.org/rsi/20160401/011612591043_530853_70x90.jpg'},
                    {id:666522,name:'郭军锋',flowers:1199,header:'http://img1.jiangshi.org/rsi/20180527/272245480045_666522_70x90.jpg'},
                    {id:1598426,name:'李泽庭',flowers:1127,header:'http://img1.jiangshi.org/rsi/20181107/071347459817_1420.jpg'},
                    {id:533105,name:'陶志岩',flowers:1104,header:'http://img1.jiangshi.org/rsi/20170627/271741515807_533105_70x90.jpg'},
                    {id:525343,name:'王跃文',flowers:1087,header:'http://img1.jiangshi.org/rsi/20160402/021402564833_525343_70x90.jpg'},
                    {id:1223057,name:'徐其山',flowers:1085,header:'http://img1.jiangshi.org/rsi/20171226/261837427512_1223057_70x90.jpg'},
                    {id:519870,name:'王骜锋',flowers:1047,header:'http://img1.jiangshi.org/v1/js/5936/5936.jpg'},
                    {id:526744,name:'潘胜原',flowers:1046,header:'http://img1.jiangshi.org/rsi/20160401/011650296489_526744_70x90.jpg'},
                    {id:702507,name:'刘遇阳',flowers:1019,header:'http://img1.jiangshi.org/rsi/20170111/111951254235_702507_70x90.jpg'},
                    {id:525389,name:'张坚',flowers:1014,header:'http://img1.jiangshi.org/rsi/20180116/161005154365_525389_70x90.jpg'},
                    {id:532994,name:'刘宗斌',flowers:999,header:'http://img1.jiangshi.org/rsi/20160407/071340276863_532994_70x90.jpg'},
                    {id:1616805,name:'马建国',flowers:999,header:'http://img1.jiangshi.org/rsi/20180515/151515529803_1616805_70x90.jpg'},
                    {id:1598638,name:'韦素评',flowers:979,header:'http://img1.jiangshi.org/rsi/20180227/271206481839_1598638_70x90.jpg'},
                    {id:1655250,name:'水木法师',flowers:973,header:'http://img1.jiangshi.org/rsi/20181101/010900413813_1655250_70x90.jpg'},
                    {id:1624491,name:'陈昭财',flowers:972,header:'http://img1.jiangshi.org/rsi/20180703/031613580869_1624491_70x90.jpg'},
                    {id:1624058,name:'张京',flowers:925,header:'http://img1.jiangshi.org/rsi/20180823/230540374085_1624058_70x90.png'},
                    {id:529920,name:'梁语晴',flowers:918,header:'http://img1.jiangshi.org/rsi/20160405/050908307917_529920_70x90.jpg'},
                    {id:1609234,name:'孔德池',flowers:913,header:'http://img1.jiangshi.org/rsi/20180416/161058419991_1609234_70x90.jpg'},
                    {id:534295,name:'景元利',flowers:899,header:'http://img1.jiangshi.org/rsi/20170818/180812394614_534295_70x90.jpg'},
                    {id:1639212,name:'宏林',flowers:897,header:'http://img1.jiangshi.org/rsi/20180820/201351205312_1639212_70x90.jpg'},
                    {id:1610720,name:'沈勇',flowers:870,header:'http://img1.jiangshi.org/rsi/20180421/211732247820_1610720_70x90.jpg'},
                    {id:516622,name:'郝大鹏',flowers:867,header:'http://img1.jiangshi.org/rsi/20160728/281658339889_516622_70x90.jpg'},
                    {id:516768,name:'宫同昌',flowers:854,header:'http://img1.jiangshi.org/rsi/20170520/201022172458_516768_70x90.jpg'},
                    {id:518612,name:'莫宇斌',flowers:841,header:'http://img1.jiangshi.org/rsi/20160927/271719157396_518612_70x90.jpg'},
                    {id:1441152,name:'文小林',flowers:839,header:'http://img1.jiangshi.org/rsi/20170426/261752484458_1441152_70x90.jpg'},
                    {id:526621,name:'原广魁',flowers:822,header:'http://img1.jiangshi.org/rsi/20160401/011730588178_526621_70x90.jpg'},
                    {id:1618918,name:'王磊',flowers:813,header:'http://img1.jiangshi.org/rsi/20180807/20180807-5936e12c5cfbaeac_70x90.jpg'},
                    {id:534185,name:'林少刚',flowers:808,header:'http://img1.jiangshi.org/rsi/20180831/311601396639_534185_70x90.jpg'},
                    {id:1595278,name:'殷亮',flowers:806,header:'http://img1.jiangshi.org/rsi/20180131/311708446200_1595278_70x90.jpg'},
                    {id:531964,name:'高歌',flowers:784,header:'http://img1.jiangshi.org/v1/upload/lectavatar/16790/16790.jpg'},
                    {id:1615347,name:'宇涵',flowers:765,header:'http://img1.jiangshi.org/rsi/20180510/100710086583_1615347_70x90.jpg'},
                    {id:530768,name:'陈苍野',flowers:757,header:'http://img1.jiangshi.org/v1/upload/lectavatar/15994/15994.jpg'},
                    {id:1638170,name:'徐亦磊',flowers:745,header:'http://img1.jiangshi.org/rsi/20180813/130949404745_1638170_70x90.jpg'},
                    {id:1578039,name:'李伟',flowers:741,header:'http://img1.jiangshi.org/rsi/20171213/131652459957_1578039_70x90.jpg'},
                    {id:1653120,name:'王海波',flowers:728,header:'http://img1.jiangshi.org/rsi/20181020/201021502340_1653120_70x90.jpg'},
                    {id:1617766,name:'蔡晓清',flowers:715,header:'http://img1.jiangshi.org/rsi/20180518/181440525737_1617766_70x90.jpg'},
                    {id:1606252,name:'相宏泽',flowers:707,header:'http://img1.jiangshi.org/rsi/20180402/022314494735_1606252_70x90.jpg'},
                    {id:1656167,name:'王耀宗',flowers:705,header:'http://img1.jiangshi.org/rsi/20181105/051529092966_1656167_70x90.jpg'},
                    {id:1638176,name:'李纲',flowers:689,header:'http://img1.jiangshi.org/rsi/20180810/20180810-70c0ea493ffc17f7_70x90.jpg'},
                    {id:1639672,name:'肖蕓泷',flowers:662,header:'http://img1.jiangshi.org/rsi/20180829/291520581180_1639672_70x90.jpg'},
                    {id:1637571,name:'端木云天',flowers:642,header:'http://img1.jiangshi.org/rsi/20181219/191524572771_1637571_70x90.jpg'},
                    {id:1569877,name:'龚亚君',flowers:639,header:'http://img1.jiangshi.org/rsi/20171129/20171129-936abb0a7eb35b18_70x90.png'},
                    {id:521286,name:'赵军',flowers:637,header:'http://img1.jiangshi.org/rsi/20160921/211535075605_521286_70x90.jpg'},
                    {id:1629734,name:'李丰申',flowers:624,header:'http://img1.jiangshi.org/rsi/20180708/081440406227_1629734_70x90.jpg'},
                    {id:1262846,name:'朱金山',flowers:620,header:'http://img1.jiangshi.org/rsi/20161018/181113143411_1262846_70x90.jpg'},
                    {id:1630271,name:'高峰',flowers:616,header:'http://img1.jiangshi.org/rsi/20180710/101619038155_1630271_70x90.jpg'},
                    {id:516710,name:'李奉奇',flowers:616,header:'http://img1.jiangshi.org/rsi/20160401/011637085078_516710_70x90.jpg'},
                    {id:1604469,name:'宁世雄',flowers:610,header:'http://img1.jiangshi.org/rsi/20180803/032114165214_1604469_70x90.jpg'},
                    {id:1056308,name:'柯学佳',flowers:608,header:'http://img1.jiangshi.org/rsi/20171026/261536121501_1410_160x205.png'},
                    {id:1103168,name:'卢立峰',flowers:607,header:'http://img1.jiangshi.com/rsi/20160613/130932310240_1103168_70x90.jpg'},
                    {id:1625590,name:'徐明',flowers:602,header:'http://img1.jiangshi.org/rsi/20180621/211505116504_1625590_70x90.jpg'},
                    {id:1598576,name:'兰勇泽',flowers:577,header:'http://img1.jiangshi.org/rsi/20180227/271023396661_1598576_70x90.jpg'},
                    {id:529724,name:'石展辉',flowers:577,header:'http://img1.jiangshi.org/rsi/20160405/050926231811_529724_70x90.jpg'},
                    {id:522877,name:'匡峰',flowers:575,header:'http://img1.jiangshi.org/rsi/20160405/051715220306_522877_70x90.jpg'},
                    {id:517404,name:'张天泽',flowers:566,header:'http://img1.jiangshi.org/rsi/20160401/011444412586_517404_70x90.jpg'},
                    {id:1539112,name:'张木蓝',flowers:551,header:'http://img1.jiangshi.org/rsi/20171011/20171011-ebc81c5de24bf5de_70x90.jpg'},
                    {id:1646845,name:'谷翔鹏',flowers:542,header:'http://img1.jiangshi.org/rsi/20180925/251012039532_1646845_70x90.jpg'},
                    {id:529951,name:'杜延军',flowers:533,header:'http://img1.jiangshi.org/rsi/20171227/272229475683_529951_70x90.jpg'},
                    {id:518529,name:'上官泓',flowers:526,header:'http://img1.jiangshi.org/rsi/20160406/062147188028_518529_70x90.jpg'},
                    {id:1611312,name:'文峰',flowers:525,header:'http://img1.jiangshi.org/rsi/20180624/241032326435_1611312_70x90.jpg'},
                    {id:530722,name:'孙朝阳',flowers:523,header:'http://img1.jiangshi.org/rsi/20170719/191036229189_530722_70x90.jpg'},
                    {id:1061317,name:'孟凡坤',flowers:507,header:'http://img1.jiangshi.org/rsi/20170902/021029526123_1061317_70x90.jpg'},
                    {id:526219,name:'赵予',flowers:502,header:'http://img1.jiangshi.org/rsi/20180823/231321259945_526219_70x90.jpg'},
                    {id:516334,name:'华英雄',flowers:497,header:'http://img1.jiangshi.org/rsi/20180526/260952216444_516334_70x90.jpg'},
                    {id:1642376,name:'刘飞',flowers:488,header:'http://img1.jiangshi.org/rsi/20180828/281311476100_1642376_70x90.jpg'},
                    {id:1499503,name:'耿悦',flowers:484,header:'http://img1.jiangshi.org/rsi/20170808/081146136880_1499503_70x90.jpg'},
                    {id:1639269,name:'张伟',flowers:443,header:'http://img1.jiangshi.org/rsi/20180815/20180815-d7ad1e6b84308837_70x90.jpeg'},
                    {id:520118,name:'王瑞民',flowers:442,header:'http://img1.jiangshi.org/rsi/20160406/061747122401_520118_70x90.jpg'},
                    {id:1663221,name:'吴平',flowers:437,header:'http://img1.jiangshi.org/rsi/20181205/051653205467_1663221_70x90.jpg'},
                    {id:1475869,name:'曾德威',flowers:433,header:'http://img1.jiangshi.org/rsi/20170623/231603590756_1475869_70x90.jpg'},
                    {id:524825,name:'冯智明',flowers:432,header:'http://img1.jiangshi.org/rsi/20180722/221742406614_524825_70x90.jpg'},
                    {id:1619777,name:'陈增金',flowers:419,header:'http://img1.jiangshi.org/rsi/20180527/271601259380_1619777_70x90.jpg'},
                    {id:1613325,name:'叶宝鸿',flowers:413,header:'http://img1.jiangshi.org/rsi/20181010/101643120895_1613325_70x90.jpg'},
                    {id:1403784,name:'符永蔚',flowers:413,header:'http://img1.jiangshi.org/rsi/20170323/231916144154_1403784_70x90.jpg'},
                    {id:1663360,name:'梁胤杰',flowers:406,header:'http://img1.jiangshi.org/rsi/20181206/060216269957_1663360_70x90.jpg'},
                    {id:518996,name:'高定基',flowers:403,header:'http://img1.jiangshi.org/rsi/20180921/211821420296_518996_70x90.jpg'},
                    {id:524852,name:'黄志伟',flowers:400,header:'http://img1.jiangshi.org/rsi/20171214/141021246063_524852_70x90.jpg'},
                    {id:1571889,name:'崔伟',flowers:399,header:'http://img1.jiangshi.org/rsi/20180226/261632020477_1571889_70x90.jpg'},
                    {id:1628687,name:'马莉彤',flowers:398,header:'http://img1.jiangshi.org/rsi/20180704/041050284889_1628687_70x90.jpg'},
                    {id:1306065,name:'张钦',flowers:393,header:'http://img1.jiangshi.org/rsi/20171011/111603283374_1306065_70x90.jpg'},
                    {id:1565550,name:'海欧',flowers:389,header:'http://img1.jiangshi.org/rsi/20171121/211657089773_1565550_70x90.jpg'},
                    {id:522718,name:'陈豪',flowers:343,header:'http://img1.jiangshi.org/rsi/20160405/051813096173_522718_70x90.jpg'},
                    {id:1507900,name:'孙光晖',flowers:342,header:'http://img1.jiangshi.org/rsi/20170822/221207467167_1507900_70x90.jpg'},
                    {id:1448733,name:'李海鹰',flowers:339,header:'http://img1.jiangshi.org/rsi/20170508/20170508-65441face7913c1f_70x90.jpg'},
                    {id:521114,name:'叶昱克',flowers:337,header:'http://img1.jiangshi.org/rsi/20160408/080922000421_521114_70x90.jpg'},
                    {id:531997,name:'王阳阳',flowers:333,header:'http://img1.jiangshi.org/rsi/20161031/311719431339_531997_70x90.jpg'},
                    {id:535269,name:'魏迎生',flowers:319,header:'http://img1.jiangshi.org/v1/upload/lectavatar/18923/18923.jpg'},
                    {id:1071319,name:'李文春',flowers:318,header:'http://img1.jiangshi.org/rsi/20160508/20160508-d3e376d3c885e253_70x90.jpg'},
                    {id:1574252,name:'官惠珍',flowers:312,header:'http://img1.jiangshi.org/rsi/20180901/012332486691_1574252_70x90.jpg'},
                    {id:521366,name:'孟锦',flowers:309,header:'http://img1.jiangshi.org/v1/js/8195/8195.jpg'},
                    {id:1619089,name:'许舒文',flowers:307,header:'http://img1.jiangshi.org/rsi/20180524/241338182775_1619089_70x90.jpg'},
                    {id:1665856,name:'黎恒茂',flowers:304,header:'http://img1.jiangshi.org/rsi/20181218/181425482560_1665856_70x90.jpg'},
                    {id:1330063,name:'王致诚',flowers:302,header:'http://img1.jiangshi.org/rsi/20170103/031745389940_1330063_70x90.jpg'},
                    {id:700947,name:'李铭',flowers:299,header:'http://img1.jiangshi.org/rsi/20160401/011518561366_700947_70x90.jpg'},
                    {id:517642,name:'张博',flowers:297,header:'http://img1.jiangshi.org/rsi/20161027/270923110892_517642_70x90.jpg'},
                    {id:1644231,name:'姜博仁',flowers:284,header:'http://img1.jiangshi.org/rsi/20180905/051025534984_1644231_70x90.jpg'},
                    {id:706426,name:'王国超',flowers:279,header:'http://img1.jiangshi.org/rsi/20180121/211610042470_706426_70x90.jpg'},
                    {id:1589517,name:'王恩泽',flowers:276,header:'http://img1.jiangshi.org/rsi/20180109/091122040340_1589517_70x90.jpg'},
                    {id:523147,name:'郭树楹',flowers:273,header:'http://img1.jiangshi.org/rsi/20160405/051137235997_523147_70x90.jpg'},
                    {id:656712,name:'李斌',flowers:272,header:'http://img1.jiangshi.org/v1/upload/lectavatar/20388/20388.jpg'},
                    {id:533305,name:'李宪磊',flowers:268,header:'http://img1.jiangshi.org/rsi/20180528/281610215596_533305_70x90.jpg'},
                    {id:1609800,name:'郑存跑',flowers:264,header:'http://img1.jiangshi.org/rsi/20180822/221708253475_1609800_70x90.jpg'},
                    {id:519817,name:'舒立平',flowers:260,header:'http://img1.jiangshi.org/v1/upload/lectavatar/5853/5853.jpg'},
                    {id:1641823,name:'黄佑',flowers:259,header:'http://img1.jiangshi.org/rsi/20180825/252059407859_1641823_70x90.jpg'},
                    {id:1597631,name:'曾立平',flowers:259,header:'http://img1.jiangshi.org/rsi/20180221/211757584919_1597631_70x90.jpg'},
                    {id:523667,name:'邓玉金',flowers:253,header:'http://img1.jiangshi.org/rsi/20160401/011707566239_523667_70x90.jpg'},
                    {id:1628487,name:'尹素妹',flowers:248,header:'http://img1.jiangshi.org/rsi/20180822/221500175945_1628487_70x90.jpg'}
                ],
                list: [],
                infiniteTime: 0,
                canLoadMore: true
            }
        },
        components: {
            List
        },
        created(){
            this.list = this.listAll.slice(0, 10);
        },
        mounted(){
            // console.log(this.$refs.header.style.height)
            // console.log(this.$refs.header.offsetHeight)
            // console.log(window.getComputedStyle(this.$refs.header).height)
        },
        watch: {
            list: function() {
                let that = this;
                that.$nextTick(function(){
                    console.log('现在数据已经渲染完毕')
                    let teachs = document.getElementById('teachs').getElementsByClassName('teachs_header_img');
                    console.log(teachs.length)
                    for(let i = 0; i < teachs.length;i++){
                        let item = teachs[i];
                        item.style.height = (item.offsetWidth * 1.28) +'px';
                    }
                });
            }
        },
        methods: {
            filter_result(i){
                let that = this;
                that.tabi = i;
                switch(i){
                    case 1:
                        // 前10
                        that.list = that.listAll.slice(0, 10);
                        break;
                    case 2:
                        // 前20
                        that.list = that.listAll.slice(10, 20);
                        break;
                    case 3:
                        // 前50
                        that.list = that.listAll.slice(20, 50);
                        break;
                    case 4:
                        // 前100
                        that.list = that.listAll.slice(50, 100);
                        break;
                    case 5:
                        // 前200
                        that.list = that.listAll.slice(100, 200);
                        break;
                    case 6:
                        // 十大管理讲师
                        that.list = that.listAll.slice(-11, -1);
                        break;
                    case 7:
                        // 十大领导力讲师
                        that.list = that.listAll.slice(-21, -11);
                        break;
                    case 8:
                        // 十大互联网讲师
                        that.list = that.listAll.slice(-31, -21);
                        break;
                    case 9:
                        // 十大营销讲师
                        that.list = that.listAll.slice(-41, -31);
                        break;
                    case 10:
                        // 十大国学讲师
                        that.list = that.listAll.slice(-51, -41);
                        break;
                }
            },
            // formatSrc: function (src) {
            //     return src.replace('70x90', '160x205');
            // },
            back(){
                this.$router.back();
            },
            refresh(){
                let that = this;
                console.log('content is refresh.')
                setTimeout(function(){
                    that.$refs.my_scroller.finishPullToRefresh();
                }, 3000)
            },
            infinite(){
                let that = this;
                console.log('this is infinite');
                that.infiniteTime++;
                if (that.canLoadMore) {
                    that.canLoadMore = false;
                    setTimeout(function(){
                        that.$refs.my_scroller.finishInfinite(true);
                    }, 3000);
                }

            }
        }
    }
</script>

<style scoped>
    .fyb{position:absolute;left:0;top:40px;right:0;bottom:0;background: #040c28;color: #fd9;overflow-y: auto;}
    .rankType2{padding: 10px 0;width:100%;overflow-x: auto;white-space: nowrap;}
    .rankType2 span{display: inline-block;padding: 10px 15px;background: #252644;}
    .rankType2 span+span{margin-left: 3px;}
    .rankType2 span.active{background: #ffde95;color: #252644;}

    .back{position:fixed;left:10px;top:10px;z-index:100;width:30px;height:30px;line-height:28px;text-align:center;}
</style>
