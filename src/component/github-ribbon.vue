<template>
    <div class="GitHubRibbon" v-html="GitHubRibbonHTML"></div>
</template>
<script>
    import { GitHubCopyPaste } from "../util/ribbon"

    export default {
        name: 'GitHubRibbon',
        props: {
            repositoryURL: String,
            position: String,
            color: String
        },
        computed: {
            /**
             * @return {string}
             */
            GitHubRibbonHTML: function() {
                // Vue watch accessing for these property
                return GitHubCopyPaste({
                    repositoryURL: this.repositoryURL,
                    position: this.position,
                    color: this.color
                });
            }
        }
    }
</script>
