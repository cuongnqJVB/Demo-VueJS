<template>
  <div>Count is {{ counter }}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    console.log("counter", this.$store.state.count);
  },
  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
};
</script>