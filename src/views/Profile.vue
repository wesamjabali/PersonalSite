<template>
  <v-row class="d-flex mx-0">
    <v-col :cols="isMobile() ? '12' : '6'">
      <v-card
        light
        tile
        width="100vw"
        :height="isMobile() ? '400px' : '350px'"
        class="py-2 d-flex mb-1"
      >
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
                  Wesam Jabali
                </v-col>
                <v-col cols="1" />

                <v-col cols="12">
                  <div class="mx-6 mt-3 text-center">{{ bio }}</div>
                </v-col>
                <!--  -->

                <v-col cols="12" class="d-flex justify-center">
                  <v-card class="py-2 mx-3 mt-5" outlined width="100%">
                    <v-row class="text-center align-center">
                      <v-col cols="12">
                        <v-btn rounded color="secondary" :href="resume"
                          >Resume</v-btn
                        >
                        <v-btn
                          rounded
                          color="secondary"
                          class="mx-4"
                          href="https://github.com/wesamjabali"
                          target="_blank"
                          >GitHub</v-btn
                        >
                        <v-btn
                          rounded
                          color="secondary"
                          href="https://linkedin.com/in/wesamjabali"
                          target="_blank"
                          >Linkedin</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>

                <!--  -->
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <!-- Skills -->
    <v-col :cols="isMobile() ? '12' : '6'">
      <v-card
        light
        tile
        width="100vw"
        :height="isMobile() ? '370px' : '350px'"
        class="py-2 d-flex mb-1"
      >
        <v-row >
          <v-col cols="12">
            <v-card color="primary" height="100" class="mt-n2" flat tile>
              <v-row no-gutters>
                <v-col
                  style="height:100px;"
                  class="d-flex white--text title align-center justify-center"
                  cols="12"
                >
                  Skills
                </v-col>
              </v-row>
            </v-card>
            <v-row no-gutters :class="isMobile() ? 'd-flex mt-4 align-center' : 'd-flex align-center'">
              <v-col
                v-for="skill in skills"
                :key="skill.name"
                class="text-center mt-2"
                cols="4"
              >
                {{ skill.name }}
              </v-col>
              <v-card
                outlined
                :class="isMobile() ? 'mx-3 mt-3' : 'mx-3 mt-1'"
                width="100%"
              >
                <v-row
                  v-if="!isMobile()"
                  no-gutters
                  class="d-flex justify-center"
                >
                  <v-col
                    v-for="skill in skills"
                    :key="skill.icon"
                    class="mx-3 d-flex justify-center"
                    cols="1"
                  >
                    <v-img
                      :src="skill.icon"
                      class="mx-3 my-1 d-flex justify-center"
                      max-height="25"
                      max-width="25"
                    >
                    </v-img>
                  </v-col>
                </v-row>
                <v-row
                  v-if="isMobile()"
                  no-gutters
                  class="d-flex justify-center"
                >
                  <v-col
                    v-for="n in 12"
                    :key="n"
                    class="mx-3 d-flex justify-center"
                    cols="1"
                  >
                    <v-img
                      :src="skills[n].icon"
                      class="mx-3 my-1 d-flex justify-center"
                      max-height="25"
                      max-width="25"
                    >
                    </v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <!-- Education -->
    <v-col :cols="isMobile() ? '12' : '12'">
      <v-card
        light
        tile
        width="100vw"
        :height="isMobile() ? '400px' : '350px'"
        class="py-2 d-flex mb-1"
      >
        <v-row>
          <v-col cols="12">
            <v-col cols="12">
              <div class="d-flex justify-center">
                <v-img :src="depaulLogo" max-height="98" max-width="150" />
              </div>
            </v-col>
            <v-col cols="12">
              <div class="text-center">
                Computer Science <br />
                3.9 GPA <br />
                June 2021
              </div>
            </v-col>
            <v-card
              color="primary"
              style="bottom:0; left:0; right:0; position:absolute;"
              height="100"
              class="mt-n2"
              flat
              tile
            >
              <v-row no-gutters>
                <v-col
                  style="height:100px;"
                  class="d-flex white--text title align-center justify-center"
                  cols="12"
                >
                  Education
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <!--  -->
  </v-row>
</template>

<style>
html {
  overflow-y: hidden;
  width: 100%;
}

body {
  overflow-y: hidden;
  width: 100%;
}
</style>

<script>
export default {
  name: "Profile",
  methods: {
    isMobile() {
      return !this.$vuetify.breakpoint.mdAndUp;
    },
  },
  data() {
    return {
      bio:
        "Hey there! Thanks for visiting my page. My name is Wesam Jabali and looking for career in Software Development. I've created projects, some for practical reasons and some for the experience. Go to the projects tab to check them out!",
      hobbies: ["Camping", "Fishing", "Road Trips", "Programming"],
      resume:
        "https://github.com/wesamjabali/PersonalSite/raw/main/src/assets/Jabali%20Wesam%20Resume.pdf",
      depaulLogo: require("@/assets/depaul.png"),
      skills: [
        { name: "Fullstack", icon: require("@/assets/icons/stack.png") },
        { name: "Java", icon: require("@/assets/icons/java.png") },
        { name: "JavaScript", icon: require("@/assets/icons/javascript.png") },
        { name: "C/C++", icon: require("@/assets/icons/c.png") },
        { name: "Swift", icon: require("@/assets/icons/swift.png") },
        { name: "Python", icon: require("@/assets/icons/python.png") },
        { name: "SQL", icon: require("@/assets/icons/sql.png") },
        { name: "Git", icon: require("@/assets/icons/git.png") },
        { name: "Node", icon: require("@/assets/icons/nodejs.png") },
        { name: "ExpressJS", icon: require("@/assets/icons/express.png") },
        { name: "VueJS", icon: require("@/assets/icons/vue.png") },
        { name: "Data Analysis", icon: require("@/assets/icons/data.png") },
        {
          name: "Interpersonal",
          icon: require("@/assets/icons/handshake.png"),
        },
        { name: "JWT", icon: require("@/assets/icons/jwt.png") },
        { name: "PostgreSQL" },
      ],
    };
  },
};
</script>
