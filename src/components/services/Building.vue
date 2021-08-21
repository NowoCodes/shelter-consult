<template>
  <li>
    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-3">
      <span>03</span> BUILDING CONSTRUCTION SERVICES
      <i class="bx bx-chevron-down icon-show"></i>
      <i class="bx bx-chevron-up icon-close"></i>
    </a>
    <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
      <p class="text-justify">
        The following are services offered by our construction department:
      </p>
      <br/>

      <img :src="image" alt="">Construction of Buildings <br>
      <img :src="image" alt="">Construction of Roads <br>
      <img :src="image" alt="">Water Reticulation <br>
      <img :src="image" alt="">Electrical works <br>
      <img :src="image" alt="">Erosion Control <br>
      <img :src="image" alt="">Landscaping <br>
    </div>
  </li>
</template>

<script>
import image from "../../assets/img/right.png";

export default {
  name: "Building",
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