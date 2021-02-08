<template>
  <div>
    <h1 class="">Welcome to your dashboard</h1>
    <create-video />
  </div>
</template>

<script>
import CreateVideo from "../components/CreateVideo.vue";
export default {
  'name': 'DashBoard',
  components: { CreateVideo },
};
</script>

<style lang="scss" scoped></style>
