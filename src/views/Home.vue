<template>
  <div class="home">
    <Mission></Mission>
    <Services></Services>
    <Cta></Cta>
  </div>
</template>

<script>
import Cta from "../components/home/Cta";
import Services from "../components/home/Services";
import Mission from "../components/home/Mission";

export default {
  name: "Home",
  components: {
    Cta,
    Services,
    Mission
  },
};
</script>
