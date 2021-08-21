<template>
  <!-- ======= Info Box Section ======= -->
  <section class="info-box">
    <div class="container-fluid">
      <div class="section-title">
        <h2>Services</h2>
      </div>
      <div class="row">
        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="content">
            <h4 class="text-justify">
              Owing to need for specialization, the firm has four department
              providing services in Architecture, Design, Construction and
              Project Management
            </h4>
          </div>
          <div class="accordion-list">
            <ul>

              <Architecture></Architecture>
              <Design></Design>
              <Building></Building>
              <Project></Project>
            </ul>
          </div>
        </div>

        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img">
          &nbsp;
        </div>
      </div>
    </div>
  </section>
  <!-- End Info Box Section -->
</template>

<script>
import Architecture from "../components/services/Architecture";
import Design from "../components/services/Design";
import Building from "../components/services/Building";
import Project from "../components/services/Project";
import image_box from "../assets/img/slide/sh-1-2000x1263-800x464.jpeg";

export default {
  name: "Services",
  components: {
    Architecture,
    Design,
    Building,
    Project
  },
  data: function () {
    return {
      image_box: image_box
    }
  }
};
</script>

<style scoped>
.img {
  background-image: url("../assets/img/info-box.jpg");
}
</style>