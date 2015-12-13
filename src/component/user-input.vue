<style>
</style>
<template>
    <div class="UserInput">
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-control-group">
                    <label>GitHub Repository:</label>
                    <input class="pure-input-2-3" type="text" v-model="repositoryURL"
                           placeholder="https://github.com/jquery/jquery">
                </div>
                <div class="pure-control-group">
                    <label for="position">Position:</label>
                    <select id="position" v-model="position">
                        <option v-for="position in positionList" :value="position.value">
                            {{ position.text }}
                        </option>
                    </select>
                </div>
                <div class="pure-control-group">
                    <label for="color">Color:</label>
                    <select id="color" v-model="color">
                        <option v-for="color in colorList" :value="color.value">
                            {{ color.text }}
                        </option>
                    </select>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
    import Store from "../store/UserStore";
    import {colorList, positionList} from "../util/ribbon";
    export default {
        name: 'UserInput',
        props: {
            repositoryURL: String,
            position: String,
            color: String
        },
        data() {
            return {
                colorList: colorList.map(function (color) {
                    return {text: color, value: color}
                }),
                positionList: positionList.map(function (position) {
                    return {text: position, value: position}
                })
            }
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