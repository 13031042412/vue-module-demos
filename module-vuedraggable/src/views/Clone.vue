<template>
    <div class="clone">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <draggable
                        class="list-group"
                        ghostClass="sortable-placeholder"
                        animation="250"
                        :list="arr1"
                        :group="{name: 'people', pull: 'clone', put: false}"
                        @change="fnChange"
                        :clone="setClone"
                    >
                        <div
                            class="list-group-item"
                            v-for="item in arr1"
                            :key="item.id"
                        >{{item.name}}</div>
                    </draggable>
                </div>
                <div class="col-sm-6 col-md-3">
                    <draggable
                        class="list-group"
                        ghostClass="sortable-placeholder"
                        animation="250"
                        :list="arr2"
                        group="people"
                        @change="fnChange"
                    >
                        <div
                            class="list-group-item"
                            v-for="(item, index) in arr2"
                            :key="index"
                        >{{item.name}}</div>
                    </draggable>
                </div>
                <div class="col-sm-6 col-md-3 text-left">
                    <h4>List1</h4>
                    <pre>
                        {{arr1}}
                    </pre>
                </div>
                <div class="col-sm-6 col-md-3 text-left">
                    <h4>List2</h4>
                    <pre>
                        {{arr2}}
                    </pre>
                </div>
            </div>
            <!-- <p>这种方式id也会克隆，容易报错</p> -->
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
let idGlobal = 8;
export default {
    name: "Clone",
    components: { draggable },
    data() {
        return {
            arr1: [
                { id: 1, name: "aaa" },
                { id: 2, name: "bbb" },
                { id: 3, name: "ccc" }
            ],
            arr2: [
                { id: 4, name: "ddd" },
                { id: 5, name: "eee" },
                { id: 6, name: "fff" },
                { id: 7, name: "ggg" }
            ]
        };
    },
    methods: {
        fnChange(evt) {
            console.log("change", evt);
        },
        setClone({ name }) {
            // 处理id报错,接受被克隆的元素为参数
            console.log(name);
            return {
                id: idGlobal++,
                name: name
            };
        }
    }
};
</script>
<style scoped>
.list-group {
    height: 100%;
    background-color: #fcc;
}
.sortable-placeholder {
    border: 2px dashed #2878f0;
}
</style>