<template>
  <!-- ======= Contact Us Section ======= -->
  <section id="contact" class="contact section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Contact Us</h2>
        <p>
          For any type of project please don't hesitate to get in touch with us.
        </p>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 d-flex align-items-stretch infos">
          <div class="row">
            <div class="col-lg-6 info d-flex flex-column align-items-stretch">
              <i class="bx bx-map"></i>
              <h4>Address</h4>
              <h4>Head Office:</h4>
              <p>
                Plot 11, Ajayi Bembe Street,<br />
                off University of Lagos Road,<br />
                Yaba, Lagos, Nigeria.<br />
                P.O. Box 1, Ebute Metta,<br />
                Lagos, Nigeria.
              </p>
            </div>
            <div class="col-lg-6 info d-flex flex-column align-items-stretch">
              <i class="bx bx-map"></i>
              <h4>Address</h4>
              <h4>Abuja Liaison Office:</h4>
              <p>
                Oyo House, 4th Floor,<br />
                Opposite Federal Ministry of Finance,<br />
                Central Business District, Abuja.<br />
              </p>
            </div>
            <div
              class="
                col-lg-6
                info info-bg
                d-flex
                flex-column
                align-items-stretch
              "
            >
              <i class="bx bx-phone"></i>
              <h4>Call Us</h4>

              <p>
                +234 802 328 6289 <br />+234 807 720 0082 <br />+234 908 003
                1618
              </p>
            </div>
            <div
              class="
                col-lg-6
                info info-bg
                d-flex
                flex-column
                align-items-stretch
              "
            >
              <i class="bx bx-envelope"></i>
              <h4>Email Us</h4>
              <p>info@shelterconsult-adcpm.com</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 d-flex align-items-stretch contact-form-wrap">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            class="php-email-form"
          >
            <div class="row">
              <div class="col-md-6 form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <label for="email">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <label for="subject">Subject</label>
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required=""
              />
            </div>
            <div class="form-group mt-3">
              <label for="message">Message</label>
              <textarea
                class="form-control"
                name="message"
                rows="8"
                required=""
              ></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>
