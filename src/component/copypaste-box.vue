<style>
    .CopyPasteBox, .CopyPasteBox-textarea {
        min-height: 5em;
    }
    .CopyPasteBox {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .CopyPasteBox-textarea {
        width: 100%;
        margin: 0 2em;
    }
</style>
<template>
    <div class="CopyPasteBox">
        <textarea class="CopyPasteBox-textarea">{{GitHubRibbonHTML}}</textarea>
    </div>
</template>
<script>
    import {GitHubCopyPaste} from "../util/ribbon";
    export default {
        name: 'CopyPasteBox',
        props: {
            repositoryURL: String,
            position: String,
            color: String
        },
        computed: {
            GitHubRibbonHTML: function () {
                return GitHubCopyPaste(this.$data);
            }
        }
    }
</script>