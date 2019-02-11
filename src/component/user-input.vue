<style>
    .UserInput .UserInput-field {
        margin: 1rem 0;
    }
</style>
<template>
    <div class="UserInput">
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="UserInput-field pure-control-group">
                    <label>GitHub Repository:</label>
                    <input class="pure-input-2-3" type="text"
                           :value="repositoryURL"
                           @input="onChangeRepositoryURL"
                           placeholder="https://github.com/jquery/jquery">
                </div>
                <div class="UserInput-field pure-control-group">
                    <label for="position">Position:</label>
                    <select id="position" @change="onChangePosition">
                        <option v-for="positionItem in positionList"
                                :value="positionItem.text"
                                :selected="positionItem.text === position"
                        >
                            {{ positionItem.text }}
                        </option>
                    </select>
                </div>
                <div class="UserInput-field pure-control-group">
                    <label for="color">Color:</label>
                    <select id="color" @change="onChangeColor">
                        <option v-for="colorItem in colorList"
                                :value="colorItem.text"
                                :selected="colorItem.text === color">
                            {{ colorItem.text }}
                        </option>
                    </select>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
    import Store from "../store/UserStore";
    import { colorList, positionList } from "../util/ribbon";

    export default {
        name: 'UserInput',
        props: {
            repositoryURL: String,
            position: String,
            color: String
        },
        data() {
            // http://jp.vuejs.org/guide/forms.html#Select
            // Create [{ text, value }]
            return {
                colorList: colorList.map(function(color) {
                    return { text: color, value: color }
                }),
                positionList: positionList.map(function(position) {
                    return { text: position, value: position }
                })
            }
        },
        methods: {
            onChangeRepositoryURL(event) {
                Store.setRepositoryURL(event.target.value);
            },
            onChangeColor(event) {
                Store.setColor(event.target.value);
            },
            onChangePosition(event) {
                Store.setPosition(event.target.value);
            }
        }
    };
</script>
