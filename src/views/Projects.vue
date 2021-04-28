<template>
  <v-row class="d-flex mt-1 mx-0">
    <v-col
      :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
      v-for="project in projects"
      :key="project.name"
    >
      <v-card
        tile
        :href="project.url"
        target="_blank"
        :height="isMobile() ? '400px' : '350px'"
        width="100%"
        class="mb-1"
        hover
      >
        <v-img :src="project.photo" height="160px"> </v-img>
        <div class="text-center title pt-3">
          {{ project.name }}
        </div>
        <v-card-text class="text-center">
          <div v-html="project.description" class="text-center mx-5" />
        </v-card-text>
        <v-card-actions
          v-if="project.demo"
          style="bottom:0; left:0; right:0; position:absolute;"
        >
          <v-btn
            color="primary"
            class="mx-auto"
            outlined
            :href="project.demo"
            target="_blank"
            width="180px"
            >Demo</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <!-- Done -->
</template>

<script>
export default {
  name: "Projects",
  methods: {
    isMobile() {
      return !this.$vuetify.breakpoint.mdAndUp;
    },
  },
  data() {
    return {
      projects: [
        {
          name: "ChiBatterySystems Clock",
          url: "https://chibatterysystems.com",
          description:
            "A closed-source (by client request) time-sheet management system I created full-stack using <b>VueJS, NodeJS, ExpressJS</b> and <b>PostgreSQL</b><br />This is currently in use by over 20 employees on a daily basis.",
          photo: "https://i.ytimg.com/vi/y8HhPXo-Dxw/maxresdefault.jpg",
        },
        {
          name: "BlueDaemon",
          url: "https://github.com/wesamjabali/BlueDaemon",
          description:
            "A Discord bot to manage university servers, written with <b>Node</b> and <b>DiscordJS.</b> Sees consistent daily use.",
          photo: "https://i.imgur.com/pUAb3nL.png",
          demo:
            "https://discord.com/oauth2/authorize?client_id=819103115693260860&permissions=8&scope=bot",
        },
        {
          name: "D3L Frontend",
          url: "https://github.com/wesamjabali/d3l-ui",
          description:
            "A course management solution written in <b>VueJS.</b><div class='text-left'><b>Username: </b>admin@admin.com<br/><b>Password: </b>admin</div>",
          photo:
            "https://github.com/wesamjabali/d3l-ui/blob/main/src/assets/login.jpg?raw=true",
          demo: "https://csc394.netlify.app/",
        },
        {
          name: "D3L API",
          url: "https://github.com/wesamjabali/d3l-backend",
          description:
            "The API that runs D3L. Written with <b>NodeJS, ExpressJS, Knex, PostgreSQL.</b> Authentication done with <b>JWT.</b>",
          photo: "https://i.imgur.com/2KiJ1gz.png",
        },
        {
          name: "CDM Discussions",
          url: "https://discord.gg/4GbaSsvbDb",
          description:
            "A Discord server I created and manage for DePaul University, consisting of over <b>1100 students</b> and <b>15 faculty members.</b> The Career Center also hosts events here.",
          photo:
            "https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/server_banner_compact.png?raw=true",
        },
        {
          name: "Vue Portfolio Site",
          url: "https://github.com/wesamjabali/PersonalSite",
          description:
            "The website you're on right now is open-source! Made from scratch in <b>Vue.</b>",
          photo: "https://i.imgur.com/r8dG6wl.jpeg",
          demo: "https://wesamjabali.com/",
        },
      ],
    };
  },
};
</script>
