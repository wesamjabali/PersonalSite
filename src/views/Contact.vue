<template>
  <div class="d-flex justify-center">
    <v-snackbar top tile color="success" v-model="snackbar"
      >Sent! I'll get back to you shortly.</v-snackbar
    >
    <v-card :disabled="sent" class="mx-1 mb-2" width="100vw" tile>
      <v-card
        flat
        tile
        class="primary white--text d-flex align-center justify-center"
        height="170px"
      >
        <div class="text-h3">
          Contact
        </div>
      </v-card>
      <v-col>
        <v-form
          ref="contact"
          name="contact"
          class="text-center"
          @submit.prevent="sendEmail"
        >
          <v-text-field
            v-model="contactName"
            type="text"
            outlined
            label="Name"
            name="name"
            :rules="required"
          />

          <v-text-field
            v-model="company"
            type="text"
            outlined
            label="Company"
            name="company"
            :rules="required"
          />

          <v-text-field
            v-model="email"
            type="text"
            outlined
            label="E-Mail"
            name="email"
            required
            :rules="emailRules"
          />
          <v-textarea
            v-model="message"
            label="Message"
            outlined
            name="message"
            :rules="required"
          />
          <v-btn type="submit" color="primary" outlined>Send</v-btn>
        </v-form>
      </v-col>
    </v-card>
  </div>
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
