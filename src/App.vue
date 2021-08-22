<template>
  <div id="app">
    <Header></Header>
    <Hero></Hero>
    <router-view/>
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
