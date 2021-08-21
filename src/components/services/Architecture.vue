<template>
  <li>
      <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1">
        <span>01</span> ARCHITECTURAL CONSULTANCY SERVICES
        <i class="bx bx-chevron-down icon-show"></i>
        <i class="bx bx-chevron-up icon-close"></i>
      </a>
      <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
        <p class="text-justify">
          Apart from meeting clients’ functional and non functional
          needs, our design methodologies enable us to deliver
          clients’ projects within cost, time and quality.
          <br/>
          <br/>Our design methodology includes the following;
        </p>
        <br/>
        A. Preliminary design
        <div>
          <img :src="image" alt="">Detail analysis of
          clients’ brief <br>
          <img :src="image" alt="">Preparing and
          illustration of outline proposal <br>
          <img :src="image" alt="">Cost analysis <br>
          <img :src="image" alt="">Full scale presentation
          drawings <br>
          <img :src="image" alt="">Report with estimated
          cost for client’s approval <br>
        </div>
        <br/>

        B. Detail design and production drawings
        <div>
          <img :src="image" alt="">Detail working drawings
          with specifications <br>
          <img :src="image" alt="">Site plan in details <br>
          <img :src="image" alt="">Detail structural
          drawings <br>
          <img :src="image" alt="">Detail mechanical and
          electrical drawings <br>
          <img :src="image" alt="">Bill of quantities and
          cost checks <br>
          <img :src="image" alt="">Tender procedure/ Award <br>
        </div>
        <br>

        C. Site Supervision
        <div>
          <img :src="image" alt="">Final detail drawings <br>
          <img :src="image" alt="">Site supervision - Site
          meetings/Site Visits <br>
          <img :src="image" alt="">Final report <br>
        </div>
        <br>

        <p class="text-justify">
          It important to note here that the above methodology enables
          us meet our clients’ functional requirements as well as
          ensuring that proposed development is delivered within cost
          and time&nbsp;
        </p>
      </div>
  </li>
</template>

<script>
import image from "../../assets/img/right.png";

export default {
  name: "Architecture",
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