<template>
  <section>
    <button @click.prevent="activate">+1</button>
    <button @click="action">Call Action</button>
  </section>
</template>

<script>
export default {
  methods: {
    activate() {
      console.log("+1 Pressed");
      this.$store.commit("increment", 10);
      console.log(this.$store.state.count);
    },
    action() {
      this.$store.dispatch("increment");
    },
  },
};
</script>