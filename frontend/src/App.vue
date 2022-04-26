<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',

  components: {
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
<style>
body {
   -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;

   /*
     Introduced in Internet Explorer 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
   -ms-user-select: none;
   user-select: none;
}
input {   
  margin-right: 20px; 
}
</style>