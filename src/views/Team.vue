<template>
  <!-- ======= Our Team Section ======= -->
  <section id="team" class="more-services section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Team Leader</h2>
      </div>

      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 align-items-stretch mb-5 mb-lg-0">
          <div class="card">
            <img :src="image_box" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="">Arc. QUADRI Hakeem A.</a></h5>
              <p class="card-text">Msc. Architecture</p>
              <p class="card-text">Msc. Project Management</p>
              <p class="card-text">Member - Nigerian Institute of Architectures (MNIA)</p>
              <p class="card-text">Member - Architectural Registeration Council of Nigeria (ARCON)</p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </section><!-- End Our Team Section -->
</template>

<script>
import image_box from "../assets/images/team-leader.jpg";

export default {
  name: "Projects",
  data: function () {
    return {
      image_box: image_box
    }
  }
};
</script>
