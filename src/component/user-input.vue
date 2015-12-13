<style>
    .UserInput {

    }
</style>
<template>
    <div class="UserInput">
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-control-group">
                    <label>GitHub Repository:</label>
                    <input type="text" v-model="repositoryURL" placeholder="https://github.com/jquery/jquery">
                </div>
                <div class="pure-control-group">
                    <label for="position">Position:</label>
                    <select id="position" v-model="position">
                        <option>left</option>
                        <option>right</option>
                    </select>
                </div>
                <div class="pure-control-group">
                    <label for="color">Color:</label>
                    <select id="color" v-model="color">
                        <option>red</option>
                        <option>green</option>
                    </select>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
    import Store from "../store/UserStore";
    export default {
        name: 'UserInput',
        props: {
            repositoryURL: String,
            position: String,
            color: String
        },
        methods: {
            onChange(){
                console.log(arguments);
            }
        },
        created(){
            this.$watch('repositoryURL', function (newVal, oldVal) {
                Store.setRepositoryURL(newVal);
            });
            this.$watch('color', function (newVal, oldVal) {
                Store.setColor(newVal);
            });
            this.$watch('position', function (newVal, oldVal) {
                Store.setPosition(newVal);
            });
        }
    }
</script>