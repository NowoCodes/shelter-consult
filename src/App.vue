<template>
  <div id="app">
    <Header></Header>
    <Hero></Hero>

    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->

    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Hero,
    Header,
    Footer,
  },
};
</script>
