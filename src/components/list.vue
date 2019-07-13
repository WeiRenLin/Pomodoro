<template>
    <div class="list">
        <div class="list__bar">
        <router-link to="/list" :class="isPage === true? 'hrefActive':''">
        <i class="fas fa-bars"></i>
        <span>To-do list</span>
        </router-link>
        <router-link to="/">
        <i class="fas fa-chart-bar"></i>
        <span>Analytics</span>
        </router-link>
        <router-link to="/">
        <i class="fas fa-podcast"></i>
        <span>Ringtones</span>
        </router-link>
        <!-- <div class="home__right__bar__text">
        <span>POMODORO</span>
        </div> -->
      </div>
    </div>
</template>
<script>
export default {
    name: "list",
  data() {
      return{
      isPage:true,
      }
  }
}
</script>

