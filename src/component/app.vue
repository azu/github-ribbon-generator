<style>
    .App {
        padding-left: 2em;
        padding-right: 2em;
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
    }

    .App h1, .App h2 {
        text-align: center;
        font-weight: 100;
        margin: 0;
    }
    .App .header {
        margin-bottom: 1rem;
    }
</style>
<template>
    <div class="App">
        <h1>GitHub Ribbon Generator</h1>
        <div class="header">
            <h2><iframe src="https://ghbtns.com/github-btn.html?user=azu&repo=github-ribbon-generator&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe></h2>
            <h2>Create Copy-Pastable GitHub Ribbon HTML snippet</h2>
        </div>
        <user-input :repository-url="repositoryURL"
                    :color="color"
                    :position="position"></user-input>
        <copy-paste-box :repository-url="repositoryURL"
                        :color="color"
                        :position="position"></copy-paste-box>
        <git-hub-ribbon :repository-url="repositoryURL"
                        :color="color"
                        :position="position"></git-hub-ribbon>
    </div>
</template>
<script>
    import UserInput from "./user-input.vue";
    import GitHubRibbon from "./github-ribbon.vue";
    import CopyPasteBox from "./copypaste-box.vue";
    import Store from "../store/UserStore";
    export default {
        name: "App",
        data () {
            return Store.getState();
        },
        components: {
            UserInput,
            GitHubRibbon,
            CopyPasteBox
        },
        methods: {
            update () {
                let state = Store.getState();
                this.repositoryURL = state.repositoryURL;
                this.color = state.color;
                this.position = state.position;
            }
        },
        created () {
            Store.onChange(this.update);
        }
    }
</script>