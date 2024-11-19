<script setup lang="ts">
import { onMounted, ref } from "vue";

const name: string = "anas";
const status = ref("pending");
const tasks = ref(["Task One", "Task Two", "Task Three"]);
const newTask = ref("");

const toggleState = (): void => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task: { title: string }) => task.title);
  } catch (error) {
    console.log("Error fetching tasks");
  }
});
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">Pending State</p>
  <p v-else>User is Inatcive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task </label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit New Task</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      {{ task }}
      <span>
        <button @click="deleteTask(index)">Delete</button>
      </span>
    </li>
  </ul>
  <hr />
  <button @click="toggleState">Change Status</button>
</template>
