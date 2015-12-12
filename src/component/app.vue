<template>
    <user-input :repository-url="repositoryURL"
                :color="color"
                :position="position"></user-input>
    <git-hub-ribbon :repository-url="repositoryURL"
                   :color="color"
                   :position="position"></git-hub-ribbon>
</template>
<script>
    import UserInput from "./user-input.vue";
    import GitHubRibbon from "./github-ribbon.vue";
    import Store from "../store/UserStore";
    export default {
        name: "App",
        data () {
            return Store.getState();
        },
        components: {
            GitHubRibbon,
            UserInput
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