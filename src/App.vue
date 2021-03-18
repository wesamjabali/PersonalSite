<template>
  <v-app>
    <v-main>
      <v-row style="max-width: 1200px;" class="mx-auto py-12">
        <v-col cols="12">
          <v-card class="mx-auto d-flex" flat>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <div
                  :style="
                    $vuetify.breakpoint.mdAndUp
                      ? 'height: 150px'
                      : 'height: 75px'
                  "
                  class="title text-xl-h2 text-lg-h3 text-sm-h4 text-center "
                >
                  <vue-typer
                    :text="[
                      'Hey there.',
                      'Thanks for visiting my page.',
                      'I\'m Wesam Jabali,\nthe Software Developer.',
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
            </v-row>
          </v-card>
        </v-col>
        <!-- Profile col -->
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 6 : 12">
          <v-card outlined>
            <div class="text-center title">Profile</div>
            <v-col cols="12">
              <v-row class="mt-1">
                <v-card class="mx-3 my-2 px-2 py-2" width="98%" tile>
                  <!-- CARD -->
                  <v-row>
                    <v-col :cols="$vuetify.breakpoint.mdAndUp ? '5' : '12' ">
                      <v-img
                        height="150"
                        width="150"
                        src="https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/profile.png?raw=true"
                      />
                    </v-col>
                    <v-col :cols="$vuetify.breakpoint.mdAndUp ? '7' : '12'">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Wesam Jabali</v-list-item-title>
                          <v-list-item-subtitle
                            >Software Developer</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Education</v-list-item-title>
                          <v-list-item-subtitle
                            >DePaul University</v-list-item-subtitle
                          ><v-list-item-subtitle
                            >Computer Science/Software
                            Engineering</v-list-item-subtitle
                          >
                          <v-list-item-subtitle>GPA: 3.9</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Skills</v-list-item-title>
                          <v-row no-gutters>
                            <v-col
                              v-for="skill in skills"
                              :key="skill.name"
                              cols="6"
                            >
                              <v-list-item-subtitle>{{
                                skill.name
                              }}</v-list-item-subtitle>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                  <!-- CARD -->
                </v-card>
                <!-- <v-img
                    max-height="200"
                    max-width="200"
                    src="https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/profile.png?raw=true"
                  ></v-img> -->
              </v-row>
            </v-col>
          </v-card>
        </v-col>
        <!-- Projects Col -->
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 6 : 12">
          <v-card outlined>
            <div class="text-center title">Projects</div>
            <v-col cols="12">
              <v-row class="mt-1 justify-center">
                <v-card
                  v-for="project in projects"
                  :key="project.name"
                  :href="project.url"
                  target="_blank"
                  class="mx-2 my-2"
                  width="96%"
                  tile
                >
                  <v-img :src="project.photo" height="200"> </v-img>
                  <div class="text-center title py-5">{{ project.name }}</div>
                  <div
                    v-html="project.description"
                    class="text-center pb-5 mx-5"
                  ></div>
                  <div v-if="project.demo" class="text-center">
                    <v-btn
                      color="primary"
                      class="text-center mx-auto mb-5"
                      outlined
                      :href="project.demo"
                      target="_blank"
                      width="180px"
                      >Demo</v-btn
                    >
                  </div>
                </v-card>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
        <!-- Done -->
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "App",
  components: {
    VueTyper,
  },
  data() {
    return {
      skills: [
        { name: "Fullstack" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "C/C++" },
        { name: "Swift" },
        { name: "Python" },
        { name: "SQL" },
        { name: "PostgreSQL" },
        { name: "Git" },
        { name: "Node" },
        { name: "ExpressJS" },
        { name: "VueJS" },
        { name: "Data Analysis" },
        { name: "Interpersonal Skills" },
      ],
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
            "A course management solution written in <b>VueJS.</b><br/>Demo Username: <b>admin@admin.com</b><br/>Demo Password: <b>admin</b>",
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
