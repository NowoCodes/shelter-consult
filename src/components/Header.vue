<template>
  <!-- ======= Header ======= -->
  <header
      id="header"
      class="d-flex align-items-center sticky-top"
      style="background-color: #2c3432"
  >
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1 class="text-light">
          <router-link class="text-white nav-link scrollto active" to="/">
            <img src="../assets/images/logo-2.png" alt="" class="img-fluid">
            <span class="text-white">Shelter Consult</span>
          </router-link>
        </h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <router-link class="text-white nav-link scrollto" to="/services">Services</router-link>
          <router-link class="text-white nav-link scrollto" to="/team">The Team</router-link>
          <router-link class="text-white nav-link scrollto" to="/about">About SC</router-link>
          <router-link class="text-white nav-link scrollto" to="/gallery">Gallery</router-link>
          <router-link class="text-white nav-link scrollto" to="/contact">Contact</router-link>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
export default {
  name: "Header",
};
</script>
