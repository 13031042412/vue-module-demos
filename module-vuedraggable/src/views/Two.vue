<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <draggable
                        class="list-group"
                        ghostClass="sortable-placeholder"
                        animation="250"
                        :list="arr1"
                        group="people"
                        @change="fnChange"
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
                            v-for="item in arr2"
                            :key="item.id"
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
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
    name: "Two",
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