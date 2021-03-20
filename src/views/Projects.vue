<template>
  <!-- Projects Col -->
  <v-row class="d-flex">
    <v-col
      :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
      v-for="project in projects"
      :key="project.name"
    >
      <v-card
        :href="project.url"
        target="_blank"
        height="350px"
        class="mx-1 mb-1 "
        tile
        hover
      >
        <v-img :src="project.photo" height="150px"> </v-img>
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
  data() {
    return {
      projects: [
        {
          name: "BlueDaemon",
          url: "https://github.com/wesamjabali/BlueDaemon",
          description:
            "A Discord bot to manage university servers, written with <b>Node</b> and <b>DiscordJS</b>",
          photo:
            "https://github.com/wesamjabali/BlueDaemon/blob/main/assets/banner.png?raw=true",
          demo:
            "https://discord.com/oauth2/authorize?client_id=819103115693260860&permissions=8&scope=bot",
        },
        {
          name: "CDM Discussions",
          url: "https://discord.gg/4GbaSsvbDb",
          description:
            "A Discord server I created and manage for DePaul University, consisting of about <b>500 students</b> and <b>7 faculty members.</b>",
          photo:
            "https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/server_banner_compact.png?raw=true",
        },
        {
          name: "ChiBatterySystems Clock",
          url: "https://chibatterysystems.com",
          description:
            "A closed-source (by client request) time-sheet management system I created full-stack using <b>VueJS, NodeJS, ExpressJS</b> and <b>PostgreSQL</b><br />This is currently in use by over 20 employees on a daily basis.",
          photo: "https://i.ytimg.com/vi/y8HhPXo-Dxw/maxresdefault.jpg",
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
          photo:
            "https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/API.png?raw=true",
        },
      ],
    };
  },
};
</script>
