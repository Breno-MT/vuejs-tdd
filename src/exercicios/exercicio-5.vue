<template>
  <div>
    <div class="bg">Exercicio Cinco TODO List</div>
    <input type="text" placeholder="digite a tarefa" v-model="tarefaInput" />
    <button @click="insertTODO">Inserir tarefa</button>
    <div v-for="todo in todoList" :key="todo">{{ todo }}</div>
  </div>
</template>

<script>
export default {
  name: "ExercicioCinco",
  data() {
    return {
      todoList: [],
      tarefaInput: "",
    };
  },
  methods: {
    insertTODO() {
      this.todoList.push(this.tarefaInput);
      this.tarefaInput = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background-color: #eee;
  padding: 64px 32px;
}
</style>
