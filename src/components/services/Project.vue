<template>
  <li>
    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-4">
      <span>04</span> PROJECT MANAGEMENT CONSULTANCY SERVICES
      <i class="bx bx-chevron-down icon-show"></i>
      <i class="bx bx-chevron-up icon-close"></i>
    </a>
    <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list">
      <p class="text-justify">
        At Shelter Consult, the management view success of Clients’ proposal as the totality of the effectiveness of
        managerial skills adopted from Conceptualization, Construction and throughout Life Span of the project.
      </p>
      <br/>

      Our Project Management Consultancy Services include:

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

        <img :src="image" alt="">Preparation of clients’ brief <br>
        <img :src="image" alt="">Preparation of project feasibility study <br>
        <img :src="image" alt="">Advice the client on the selection of Consultants <br>
        <img :src="image" alt="">Advice the client on payments for work down to contractors <br>
        <img :src="image" alt="">Monitoring and Evaluation Consultancy and other related Project Management Services
        <br>
      </div>
    </div>
  </li>
</template>

<script>
import image from "../../assets/img/right.png";

export default {
  name: "Project",
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