<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-2 my-2" tile>
        <v-row no-gutters>
          <v-col cols="12">
            <v-card
              flat
              tile
              class="primary mt-n2 py-2 pl-3 white--text"
              height="170px"
            >
              <v-row class="d-flex">
                <v-col cols="2">
                  <v-avatar size="150">
                    <v-img
                      v-if="!isMobile()"
                      src="https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/profile.png?raw=true"
                    />
                  </v-avatar>
                </v-col>
                <v-col cols="8" class="d-flex align-center justify-center">
                  <div class="title text-center">
                    A full-stack developer looking for work.
                  </div>
                </v-col>
                <v-col cols="2" />
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  Education
                </v-list-item-title>
                <v-list-item-subtitle>DePaul University</v-list-item-subtitle>
                <v-list-item-subtitle>June 2021</v-list-item-subtitle>
                <v-list-item-subtitle>GPA: 3.9</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters class="text-center py-3">
              <v-list-item-title>
                Skills
              </v-list-item-title>
              <v-col
                :cols="4"
                class="my-n3"
                v-for="skill in skills"
                :key="skill.name"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{
                      skill.name
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="12">
          <v-card class="my-2 mx-2" tile>
            <v-col cols="12">
              <div class="title text-center mt-2 mb-8">Contact Me</div>
              <v-form
                name="contact"
                method="POST"
                data-netlify="true"
                class="text-center"
              >
                <v-text-field type="text" outlined label="Name" name="name" />
                <v-text-field
                  type="text"
                  outlined
                  label="Company"
                  name="company"
                />
                <v-text-field
                  type="email"
                  outlined
                  label="E-Mail"
                  name="email"
                />
                <v-textarea label="Message" outlined name="message" />
                <v-btn type="submit" color="primary" outlined>Send</v-btn>
              </v-form>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

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
      resume:
        "https://github.com/wesamjabali/PersonalSite/raw/main/src/assets/Jabali%20Wesam%20Resume.pdf",

      skills: [
        { name: "Fullstack", icon: require("@/assets/icons/stack.png") },
        { name: "Java", icon: require("@/assets/icons/java.png") },
        { name: "JavaScript", icon: require("@/assets/icons/javascript.png") },
        { name: "C/C++", icon: require("@/assets/icons/c.png") },
        { name: "Swift", icon: require("@/assets/icons/swift.png") },
        { name: "Python", icon: require("@/assets/icons/python.png") },
        { name: "SQL", icon: require("@/assets/icons/sql.png") },
        { name: "PostgreSQL", icon: require("@/assets/icons/sql.png") },
        { name: "Git", icon: require("@/assets/icons/git.png") },
        { name: "Node", icon: require("@/assets/icons/nodejs.png") },
        { name: "ExpressJS", icon: require("@/assets/icons/express.png") },
        { name: "VueJS", icon: require("@/assets/icons/vue.png") },
        { name: "Data Analysis", icon: require("@/assets/icons/data.png") },
        { name: "JWT" },
        {
          name: "Interpersonal",
          icon: require("@/assets/icons/handshake.png"),
        },
      ],
    };
  },
};
</script>
