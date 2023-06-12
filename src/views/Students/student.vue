<template>
   
   <div class="card">
    <div class="card-header">
        <h4>Student <router-link to="/student/create" class="btn btn-primary float-end">Add student</router-link></h4>
        
    </div>
    <div class="card-body ">
        <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">cours</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
          <th scope="col">created at</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>test</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          
        </tr>
       
      </tbody>
    </table>
    </div>
   </div>
</template>

<script setup>
import { onMounted, ref } from "vue"


const student = ref([]);


onMounted(()=>{
 console.log('test');
});
</script>