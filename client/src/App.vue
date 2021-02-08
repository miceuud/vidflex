<template>
  <div id="app">
    <nav-bar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap");
body {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
}
h3 {
  text-align: center;
}
form {
  width: 500px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 1px solid black; */
}
.form-subcontainer {
  padding: 5px 15px;
}
label {
  display: block;
  margin: 6px 0 8px 0;
}
input {
  width: 100%;
  height: 1.3rem;
  border-radius: 5px;
  font-weight: 100;
  font-size: 1.4rem;
  padding-left: 10px;
}
button {
  margin-top: 10px;
  padding: 15px 15px;
  color: white;
  width: 10rem;
  background: rgba(53, 92, 159, 0.701);

  border-radius: 5px;
  border: none;
}
button:focus {
  background: rgba(2, 21, 55, 0.851);
}
a{
  text-decoration: none;
  color:darkblue;
}
</style>
