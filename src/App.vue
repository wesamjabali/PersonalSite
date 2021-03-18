<template>
  <v-app>
    <v-main>
      <v-row class="mx-5">
        <v-col cols="12">
          <v-card class="mx-auto d-flex" flat>
            <v-row align="center" justify="center">
              <v-col :cols="$vuetify.breakpoint.smAndUp ? 2 : 12">
                <div :align="$vuetify.breakpoint.smAndUp ? 'left' : 'center'">
                  <v-img
                    max-height="200"
                    max-width="200"
                    src="https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/profile.png?raw=true"
                  ></v-img>
                </div>
              </v-col>
              <v-col :cols="$vuetify.breakpoint.smAndUp ? 8 : 12">
                <div class="title text-xl-h2 text-lg-h3 text-sm-h4 text-center">
                  <vue-typer
                    :text="[
                      'Hey there.',
                      'Thanks for visiting my page.',
                      'I\'m Wesam Jabali.\nThe Software Developer.',
                    ]"
                    :repeat="0"
                    :shuffle="false"
                    initial-action="typing"
                    :pre-type-delay="0"
                    :type-delay="70"
                    :pre-erase-delay="2000"
                    :erase-delay="50"
                    erase-style="backspace"
                    :erase-on-complete="false"
                    caret-animation="smooth"
                  ></vue-typer>
                </div>
              </v-col>
              <v-col cols="2" />
            </v-row>
          </v-card>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndUp ? 6 : 12">
          <div class="text-center title">My projects</div>
          <v-card
            v-for="project in projects"
            :key="project.name"
            :href="project.url"
            target="_blank"
            class="mx-auto my-5"
          >
            <v-img :src="project.photo" height="200"> </v-img>
            <div class="text-center title py-5">{{ project.name }}</div>
            <div v-html="project.description" class="text-center pb-5"></div>
          </v-card>
        </v-col>
        <!-- Second col -->
        <v-col :cols="$vuetify.breakpoint.smAndUp ? 6 : 12">
          <div class="text-center title">Here's some stuff I'm working on</div>

          <v-card
            v-for="project in projects"
            :key="project.name"
            :href="project.url"
            target="_blank"
            class="d-flex"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<style>
/* .vue-typer .custom.char { */
/* color: white; */
/* } */
</style>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "App",
  components: {
    VueTyper,
  },
  data() {
    return {
      projects: [
        {
          name: "BlueDaemon",
          url: "https://github.com/wesamjabali/BlueDaemon",
          description: "A Discord bot to manage university servers.",
          photo:
            "https://github.com/wesamjabali/BlueDaemon/blob/main/assets/banner.png?raw=true",
        },
        {
          name: "CDM Discussions",
          url: "https://discord.gg/4GbaSsvbDb",
          description:
            "A Discord server I created and manage for DePaul University, consisting of about 500 members, including 7 faculty members.",
          photo:
            "https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/server_banner_compact.png?raw=true",
        },
        {
          name: "D3L Frontend",
          url: "https://github.com/wesamjabali/d3l-ui",
          description: "A course management solution written in <b>VueJS.</b>",
          photo:
            "https://github.com/wesamjabali/d3l-ui/blob/main/src/assets/login.jpg?raw=true",
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
