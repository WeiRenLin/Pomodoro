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
        <div class="home__left__newMission__mix__title__main__title">The First thing to do today</div>
      </div>
      <div class="home__left__newMission__countdown">{{minTime+":"+secTime}}</div>
      <div class="home__left__newMission__task__list">test</div>
    </div>
    <div class="home__right">
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
      secTime: null
    };
  },
  props: {},
  methods: {
    go: function() {
      var vm = this;
      vm.isPlay = !vm.isPlay;
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


