<template>
    <div class="add">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 offset-sm-2 col-md-6 offset-md-0">
                    <button @click="add" class="btn btn-primary" type="button">Add</button>
                    <draggable
                        class="list-group"
                        ghostClass="sortable-placeholder"
                        animation="250"
                        :list="arr"
                        group="people"
                        @change="fnChange"
                    >
                        <div
                            class="list-group-item"
                            v-for="item in arr"
                            :key="item.id"
                        >{{item.name}}</div>
                    </draggable>
                </div>
                <div class="col-sm-4 col-md-6 text-left">
                    <h4>List</h4>
                    <pre>
                        {{arr}}
                    </pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
let id = 3;
export default {
    name: "Add",
    components: {
        draggable
    },
    data() {
        return {
            arr: [
                { id: 1, name: "aaa" },
                { id: 2, name: "bbb" },
                { id: 3, name: "ccc" }
            ]
        };
    },
    methods: {
        fnChange(evt) {
            console.log("change", evt);
        },
        add() {
            id++;
            this.arr.push({ id, name: "ddd " + id });
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
