<template>
  <v-row
    :style="isMobile() ? 'height:100%' : 'height:740px'"
    class="d-flex mt-1 mx-0"
  >
    <v-snackbar top tile color="success" v-model="snackbar"
      >Sent! I'll get back to you shortly.</v-snackbar
    >
    <v-col :cols="isMobile() ? '12' : '6'">
      <v-card :disabled="sent" height="560px" class="mb-2" width="100vw" tile>
        <v-card
          flat
          tile
          class="primary white--text d-flex align-center justify-center "
          height="100px"
        >
          <div class="title">
            Inquiries
          </div>
        </v-card>
        <v-col cols="12">
          <v-form
            ref="contact"
            name="contact"
            class="text-center mx-4"
            @submit.prevent="sendEmail"
          >
            <v-text-field
              v-model="contactName"
              type="text"
              outlined
              label="Name"
              name="name"
              class="mb-n2"
              :rules="required"
            />

            <v-text-field
              v-model="company"
              type="text"
              outlined
              label="Company"
              name="company"
              class="mb-n2"
              :rules="required"
            />

            <v-text-field
              v-model="email"
              type="text"
              outlined
              label="E-Mail"
              name="email"
              class="mb-n2"
              :rules="emailRules"
            />
            <v-textarea
              v-model="message"
              label="Message"
              outlined
              name="message"
              class="mb-n4"
              :rules="required"
            />
            <v-btn type="submit" color="primary" outlined>Send</v-btn>
          </v-form>
        </v-col>
      </v-card>
    </v-col>
    <!--  -->
    <v-col :cols="isMobile() ? '12' : '6'">
      <v-card tile width="100%" height="560px" class="py-2 d-flex mb-1">
        <v-row>
          <v-col cols="12">
            <v-card color="primary" height="100" class="mt-n2" flat tile>
              <v-row no-gutters>
                <v-col cols="2">
                  <v-avatar height="150" width="150" class="ml-2 mt-2"
                    ><v-img
                      src="https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/profile.png?raw=true"
                  /></v-avatar>
                </v-col>
                <v-col
                  style="height:100px;"
                  :class="
                    isMobile()
                      ? 'd-flex white--text title align-center justify-end'
                      : 'd-flex white--text title align-center justify-center'
                  "
                  cols="9"
                >
                  Thank You
                </v-col>
                <v-col cols="1" />
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12">
            <div class="text-center mx-10 mt-n12">
              Thanks for reaching out! 
              <br /> <br />
              If you'd rather reach out to my email or
              phone directly, please check my resume on the profile tab.
              <br /><br />
              I look forward to speaking with you.
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  methods: {
    isMobile() {
      return !this.$vuetify.breakpoint.mdAndUp;
    },
    sendEmail() {
      if (!this.$refs.contact.validate()) {
        return;
      }
      var emailData = {
        name: this.contactName,
        company: this.company,
        email: this.email,
        message: this.message,
      };
      emailjs.send("service_c5xzok2", "template_lwkuf3p", emailData);
      this.sent = true;
      this.snackbar = true;
    },
  },
  data() {
    return {
      sent: false,
      snackbar: false,
      contactName: "",
      company: "",
      email: "",
      message: "",
      emailRules: [
        (v) => !!v || "This field is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      required: [(v) => !!v || "This field is required"],
    };
  },
};
</script>
