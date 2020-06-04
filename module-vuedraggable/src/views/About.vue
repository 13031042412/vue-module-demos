<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
    name: "About",
    components: { draggable },
    data() {
        return {};
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