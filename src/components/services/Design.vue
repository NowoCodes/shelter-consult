<template>
  <li>
    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-2">
      <span>02</span> DESIGN CONSULTANCY SERVICES
      <i class="bx bx-chevron-down icon-show"></i>
      <i class="bx bx-chevron-up icon-close"></i>
    </a>
    <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
      <img :src="image" alt="">Design/Construction of Aviation Consoles <br>
      <img :src="image" alt="">Interior Design <br>
      <img :src="image" alt="">Modelling <br>
    </div>
  </li>
</template>

<script>
import image from "../../assets/img/right.png";

export default {
  name: "Design",
  data: function () {
    return {
      image: image
    }
  }
}
</script>

<style scoped>
img {
  width: 25px;
  margin-right: 10px;
  margin-left: 20px;
}
</style>