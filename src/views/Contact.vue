<template>
  <!-- <v-snackbar top tile color="success" v-model="snackbar"
        >Sent! I'll get back to you shortly.</v-snackbar
      > -->
  <v-card :disabled="sent" class="mx-2 my-2" tile>
    <v-col cols="12">
      <div class="title text-center mt-2 mb-8">Contact Me</div>
      <v-form name="contact" class="text-center" @submit.prevent="sendEmail">
        <v-text-field
          v-model="contactName"
          type="text"
          outlined
          label="Name"
          name="name"
        />
        <v-text-field
          v-model="company"
          type="text"
          outlined
          label="Company"
          name="company"
        />
        <v-text-field
          v-model="email"
          type="text"
          outlined
          label="E-Mail/Phone"
          name="email"
        />
        <v-textarea v-model="message" label="Message" outlined name="message" />
        <v-btn type="submit" color="primary" outlined>Send</v-btn>
      </v-form>
    </v-col>
  </v-card>
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
    };
  },
};
</script>
