<template lang="html">
  <nav>
   <div class="menuToggle">
     <input type="checkbox"/>
     <span></span>
     <span></span>
     <span></span>
     <ul id="menu">
       <li v-for="(item, key) in menu">
         <a :href="item.to"> {{ item.name }}</a>
       </li>
     </ul>
   </div>
 </nav>
</template>

<script>
export default {
  data(){
    return {
      menu : [
        { name : 'home', to : '/'},
        { name : 'project 1', to : '/project1'},
        { name : 'project 2', to : '/project2'},
        { name : 'project 3', to : '/project3'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
