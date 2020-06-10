<template>
    <div class="hello">
        <vue-editor
            id="editor"
            v-model="content"
            placeholder="请编辑内容"
            :editor-toolbar="customToolbar"
        />
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: { VueEditor },
    data() {
        return {
            content: "",
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["blockquote", "code-block"],
                ["link", "image"]
            ]
        };
    }
};
</script>

<style scoped>
.hello {
    max-width: 800px;
    margin: 0 auto;
}
</style>
