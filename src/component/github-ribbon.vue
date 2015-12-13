<template>
    <div class="GitHubRibbon" v-html="GitHubRibbonHTML"></div>
</template>
<script>
    import {GitHubCopyPaste} from "../util/ribbon"
    export default {
        name: 'GitHubRibbon',
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