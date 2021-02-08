<template>
  <div>
    <div id="nav">
      <ul>
        <li v-for="(link,index) in links" :key="index">
          <router-link :to="link.path">{{ link.page }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/", page: "home" },
        { path: "/login", page: "login" },
        { path: "/signup", page: "Signup" },
      ],
    };
  },
};
</script>

<style scoped>
#nav {
  padding: 5px 0;
  background: rgba(2, 2, 54, 0.883);
}
ul {
  list-style: none;
  display: flex;
}
li {
  text-transform: capitalize;
  margin: 0 0.6rem;
}
li:nth-child(1) {
  margin-right: auto;
}
a {
  text-decoration: none;
  color: white;
}
</style>
