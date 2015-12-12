<template>
    <form>
        <fieldset>
            <label>GitHub Repository:</label>
            <input type="text" v-model="repositoryURL" placeholder="https://github.com/jquery/jquery">
            <label for="position">Position:</label>
            <select id="position" v-model="position">
                <option>Left</option>
                <option>Right</option>
            </select>
            <label for="color">Position:</label>
            <select id="color" v-model="color">
                <option>Red</option>
                <option>Green</option>
            </select>
        </fieldset>
    </form>
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