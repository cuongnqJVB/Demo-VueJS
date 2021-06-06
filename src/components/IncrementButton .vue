<template>
  <button @click.prevent="activate">+1</button>
</template>

<script>
export default {
  methods: {
    activate() {
      console.log("+1 Pressed");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>