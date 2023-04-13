<template>
  <form>
    <label for="idDescription">Description</label>
    <input id="idDescription" type="text" v-model="modelDescription" />
    <button v-on:click="onClick">Enregistrer</button>
  </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin-top: 2em;
        border: 1px solid #CCC;
        background-color: whitesmoke;
    }

    input {
        margin-bottom: 1rem;
    }
</style>

<script>
    export default {
        name: 'TaskForm',
        props: ['onSave', 'isShown'],
        data() {
            return {
                modelDescription: ''
            }
        },
        methods: {
            onClick(event) {
                event.preventDefault();

                let newTask = {
                    description: this.modelDescription
                };

                this.onSave(newTask);
            }
        }
    }
</script>
