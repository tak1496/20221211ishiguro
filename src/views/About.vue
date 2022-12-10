<template>
  <div class="about">
    <h2>current team:{{ name }}</h2>
    <div>
      <button v-on:click="counter">counter</button>
    </div>
    <div>
      <h2>{{ $store.state.sum }}</h2>
    </div>
    <div>
      Last team name clicked:{{ $store.state.lastTeam }}
    </div>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ]
    };
  },
  methods: {
    counter() {
      this.$store.commit('team_counter', { name: this.name });
    }
  },
  props: ['name']
};
</script>

<style scoped>
div {
  line-height: 30px;
  text-align: center;
}

.about {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>