<template>
  <div class="container">
    <Header title="Gestion des tâches" />
    <Main>
      <button v-on:click="showForm">Ajouter une tâche</button>
      <TaskList :tasks=tasks :onDelete=deleteTask />
      <TaskForm v-if="isFormVisible" isShown=true :onSave=addTask />
    </Main>
    <Footer copyright="Nevezide 2022" />
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
</style>

<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import TaskList from './components/TaskList.vue';
  import TaskForm from './components/TaskForm.vue';

  export default {
    data() {
      return {
        isFormVisible: false,
        tasks: [{
          description: 'Faire le ménage',
          isDone: false
        },{
          description: 'Apprendre Vue',
          isDone: false
        },{
          description: 'Faire un projet',
          isDone: false
        }],
      };
    },
    methods: {
      showForm() {
        this.isFormVisible = true;
      },
      addTask(task) {
        this.tasks.push(task);

        this.isFormVisible = false;
      },
      deleteTask(task) {
          this.tasks.splice(this.tasks.indexOf(task), 1);
      }
    },
    components: {
      Header,
      Main,
      Footer,
      TaskList,
      TaskForm
    },
  }
</script>
