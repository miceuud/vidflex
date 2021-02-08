<template>
  <div>
    <footer>&copy; {{ getYear() }}</footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="css" scoped>
footer {
  background: rgba(59, 59, 235, 0.883);
  color: whitesmoke;
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
