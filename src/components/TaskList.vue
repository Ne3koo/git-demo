<template>
  <div class="task-list">
    <ul>
      <li v-for="task in tasks" v-on:click="onClick(task)">
        <span v-bind:class="{isDone: task.isDone}">{{ task.description }}</span>
        <div class="delete-button" v-on:click="onDelete(task)">&#10006;</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
    border: 0.1rem solid #ccc;
    border-radius: 5px;
  }

  li+li {
    margin-top: 0.5em;
  }

  .isDone {
    text-decoration: line-through;
  }

  .delete-button {
    cursor: pointer;
  }
</style>

<script>
  export default {
    name: 'TaskList',
    props: ['tasks', 'onDelete'],
    methods: {
      onClick(task) {
        task.isDone = !task.isDone;
      }
    }
  };
</script>
