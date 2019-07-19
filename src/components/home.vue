<template>
  <div class="home">
    <div class="home__left">
      <label class="home__left__newMission">
        <input
          type="text"
          class="home__left__newMission__new__task"
          placeholder="ADD A NEW MISSION..."
        />
      </label>
      <div class="home__left__newMission__add__button">
        <i class="fas fa-plus"></i>
      </div>
      <div class="home__left__newMission__mix__title">
        <div class="home__left__newMission__mix__title__small__dot"></div>
        <div class="home__left__newMission__mix__title__main__title">{{title}}</div>
      </div>
      <div class="home__left__newMission__countdown">{{minTime+":"+secTime}}</div>
      <div class="home__left__newMission__list">
        <div class="home__left__newMission__list__task">
          <ul>
            <li v-for="item in list" :key="item.id">
              <div class="home__left__newMission__list__task__small__dot"></div>
              {{item.name}}
              <div
                class="home__left__newMission__list__task__small__triangle"
                @click="changeTask(item)"
              >
                <i class="far fa-play-circle changeTask"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <svg x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200">
      <circle
        class="path"
        stroke="hotpink"
        fill="none"
        stroke-width="5"
        stroke-dasharray="1000"
        cx="100"
        cy="100"
        r="80"
      />
    </svg> -->
    <div class="home__right">
      <div class="home__right__bar">
        <router-link to="/list">
          <i class="fas fa-bars"></i>
        </router-link>
        <router-link to="/">
          <i class="fas fa-chart-bar"></i>
        </router-link>
        <router-link to="/">
          <i class="fas fa-podcast"></i>
        </router-link>
        <div class="home__right__bar__text">
          <span>POMODORO</span>
        </div>
      </div>
      <div class="home__right__dot">
        <div class="home__right__dot__inside" :class="isPlay == true?'active':'negative'">
          <div class="home__right__dot__inside__small" @click="go">
            <div class="home__right__dot__inside__small__triangle">
              <div v-if="!isPlay">
                <i class="fas fa-play fa-3x"></i>
              </div>
              <div v-else>
                <i class="fas fa-pause fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isPlay: false,
      time: null,
      minTime: null,
      secTime: null,
      list: [
        { id: 1, name: "the second thing to do today" },
        { id: 2, name: "the third thing to do today" },
        { id: 3, name: "the forth thing to do today" }
      ],
      title: "the First thing to do today"
    };
  },
  props: {},
  methods: {
    go: function() {
      var vm = this;
      vm.isPlay = !vm.isPlay;
    },
    changeTask: function(item) {
      var vm = this;
      vm.title = item.name;
      vm.time = 25 * 60;
      vm.minTime = Math.floor(vm.time / 60);
      vm.secTime = vm.time % 60 > 10 ? vm.time % 60 : "0" + (vm.time % 60);
    }
  },
  watch: {
    isPlay: function() {
      var vm = this;
      var timer = setInterval(() => {
        if (vm.isPlay == false) {
          clearInterval(timer);
          return;
        }
        if (vm.time < 0) {
          vm.minTime = 0;
          vm.secTime = 0;
          return;
        }
        vm.time = vm.time - 1;
        vm.minTime = Math.floor(vm.time / 60);
        vm.secTime = vm.time % 60 > 10 ? vm.time % 60 : "0" + (vm.time % 60);
      }, 1000);
    }
  },
  mounted() {
    var vm = this;
    vm.time = 25 * 60;
    vm.minTime = vm.time / 60;
    vm.secTime = vm.time % 60 > 9 ? vm.time % 60 : "0" + (vm.time % 60);
  }
};
</script>


