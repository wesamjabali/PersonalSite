<template>
  <v-row class="d-flex mt-1 mx-0">
    <v-col :cols="isMobile() ? '12' : '6'">
      <v-card
        tile
        width="100vw"
        :height="isMobile() ? '400px' : '350px'"
        class="py-2 d-flex mb-1"
      >
        <v-row class="d-flex">
          <v-col cols="12">
            <v-card color="primary" height="100" class="mt-n2" flat tile>
              <v-row no-gutters>
                <v-col cols="2">
                  <v-avatar size="150" class="ml-2 mt-2"
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
                  <div class="mx-12 mt-10 text-center">
                    {{ bio }}
                  </div>
                </v-col>
                <!--  -->

                <!--  -->
              </v-row>
            </v-card>
            <v-col cols="12">
              <v-card
                class="mb-2 mx-3 py-2"
                outlined
                style="bottom:0px; right:0px; left:0; position:absolute;"
              >
                <v-row class="text-center align-center">
                  <v-col cols="12">
                    <v-btn rounded color="secondary" @click="openPDF()">
                      Resume</v-btn
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
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <!-- Skills -->
    <v-col :cols="isMobile() ? '12' : '6'">
      <v-card
        tile
        width="100vw"
        :height="isMobile() ? '370px' : '350px'"
        class="py-2 d-flex mb-1"
      >
        <v-row>
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
            <v-row
              no-gutters
              :class="
                isMobile() ? 'd-flex mt-4 align-center' : 'd-flex align-center'
              "
            >
              <v-col
                v-for="skill in skills"
                :key="skill.name"
                class="text-center mt-2"
                cols="4"
              >
                {{ skill.name }}
              </v-col>
              <v-card
                class="mb-2 mx-3"
                outlined
                style="bottom:0px; right:0px; left:0; position:absolute;"
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
    <v-col v-if="!isMobile()" cols="2" />
    <v-col :cols="isMobile() ? '12' : '8'">
      <v-card
        tile
        width="100vw"
        :height="isMobile() ? '' : '350px'"
        class="pb-3 d-flex mb-1"
      >
        <v-row class="d-flex">
          <v-col cols="12">
            <v-card
              color="primary"
              height="100px"
              class="mt-n2 mb-n9"
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
          <v-col
            :cols="isMobile() ? '12' : '6'"
            :class="isMobile() ? 'mt-5' : 'ml-2'"
          >
            <v-card outlined height="100%" class="mx-2 mt-1 pt-2">
              <div class="d-flex justify-center mb-10">
                <v-img :src="depaulLogo" max-height="98" max-width="150" />
              </div>
              <div class="text-center">
                Computer Science <br />
                3.94 GPA <br />
                June 2021
              </div>
            </v-card>
          </v-col>

          <v-col
            :cols="isMobile() ? '12' : '6'"
            :class="isMobile() ? '' : 'mx-n2 ml-n4'"
          >
            <v-card outlined height="100%" class="mx-2 mt-1">
              <div
                class="text-center mx-2"
                v-for="item in school"
                :key="item.name"
              >
                {{ item.name }}
                <v-divider v-if="!item.last" class="mx-n2 my-1" />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col v-if="!isMobile()" cols="2" />

    <!--  -->
  </v-row>
</template>

<script>
import pdf from "@/assets/Jabali_Wesam_Resume.pdf";
export default {
  name: "Profile",
  methods: {
    isMobile() {
      return !this.$vuetify.breakpoint.mdAndUp;
    },
    openPDF() {
      window.open(pdf);
    },
  },
  data() {
    return {
      bio: `A highly-driven and adaptable Chicago-based software developer looking for a full-time job.`,
      school: [
        {
          name:
            "Created largest communication network for students and faculty",
        },
        { name: "Hold free tutoring sessions" },
        {
          name: "Solidify concepts by developing personal projects",
        },
        { name: "Member of Computer Science Society" },
        { name: 'Achieved straight "A"s', last: true },
      ],
      resume:
        "https://github.com/wesamjabali/PersonalSite/raw/main/src/assets/Jabali_Wesam_Resume.pdf",
      depaulLogo: require("@/assets/depaul.png"),
      skills: [
        { name: "Java", icon: require("@/assets/icons/java.png") },
        { name: "C/C++", icon: require("@/assets/icons/c.png") },
        { name: "Swift", icon: require("@/assets/icons/swift.png") },
        { name: "Python", icon: require("@/assets/icons/python.png") },
        { name: "SQL", icon: require("@/assets/icons/sql.png") },
        { name: "Git", icon: require("@/assets/icons/git.png") },
        { name: "Fullstack", icon: require("@/assets/icons/stack.png") },
        { name: "JavaScript", icon: require("@/assets/icons/javascript.png") },
        { name: "Node", icon: require("@/assets/icons/nodejs.png") },
        { name: "ExpressJS", icon: require("@/assets/icons/express.png") },
        { name: "VueJS", icon: require("@/assets/icons/vue.png") },
        { name: "JWT", icon: require("@/assets/icons/jwt.png") },
        {
          name: "Communication",
          icon: require("@/assets/icons/handshake.png"),
        },
        { name: "Management", icon: require("@/assets/icons/group.png") },
        { name: "Public Speaking" },
      ],
    };
  },
};
</script>
