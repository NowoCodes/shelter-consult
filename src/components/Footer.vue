<template>
  <div>
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-info">
              <h3>Shelter Consult</h3>
              <p>
                Plot 11, Ajayi Bembe Street, <br/>
                off University of Lagos Road, <br/>
                Yaba, Lagos, Nigeria. <br/>
                P.O. Box 1, Ebute Metta, <br/>
                Lagos, Nigeria. <br/><br/>
                <strong>Phone:</strong> +234 802 328 6289<br/>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> +234 807 720
                0082<br/>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> +234 908 003
                1618<br/>
                <strong>Email:</strong> info@shelterconsult-adcpm.com <br/>
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <router-link to="/about">About SC</router-link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <router-link to="/services">Services</router-link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <router-link to="/team">The Team</router-link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <router-link to="/gallery">Gallery</router-link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <p>At Shelter Consult, provision of shelter is given global consideration especially the influence of both
                the micro and macro environment on the abode of human habitat.</p>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter to get more updates from our company.
              </p>
              <form action="" method="post">
                <input type="email" name="email"/><input
                  type="submit"
                  value="Subscribe"
              />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          © Copyright 2020 - {{ currentYear }} <br>
          <strong><span> Shelter Consult</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bootstrap-3-one-page-template-free-shuffle/ -->
          <!--          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>-->
        </div>
      </div>
    </footer>
    <!-- End Footer -->

    <a
        href="#"
        class="
        back-to-top
        d-flex
        align-items-center
        justify-content-center
        active
      "
    ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  }
};
</script>
