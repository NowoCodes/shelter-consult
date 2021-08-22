import {createApp} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";

// <!-- Vendor JS Files -->
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/glightbox/js/glightbox.min.js";
import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "./assets/vendor/php-email-form/validate.js";
import "./assets/vendor/purecounter/purecounter.js";
import "./assets/vendor/swiper/swiper-bundle.min.js";
import "./assets/vendor/waypoints/noframework.waypoints.js";

// <!-- Template Main JS File -->
import './assets/js/main';

createApp(App).use(router).mount("#app");
