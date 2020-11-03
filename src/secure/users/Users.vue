<template>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.first_name }} {{ user.last_name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role.name }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
 name: 'Users',
 setup() {
   const users = ref([]);

   onMounted(async () => {
       const response = await axios.get('users');
       users.value = response.data.data;
   });

   return {
       users
   }
 }
}
</script>

<style>

</style>