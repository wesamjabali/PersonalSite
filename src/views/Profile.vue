<template>
  <v-row>
    <v-col cols="12">
      <v-card
        class="mx-2 mt-5 mb-2 px-3"
        :height="isMobile() ? '350px' : ''"
        tile
      >
        <v-row>
          <v-col :cols="isMobile() ? '2' : '12'" class="d-flex justify-center">
            <v-avatar size="150">
              <v-img
                src="https://github.com/wesamjabali/PersonalSite/blob/main/src/assets/profile.png?raw=true"
              />
            </v-avatar>
          </v-col>
          <v-col :cols="isMobile() ? '10' : '12'">
            <v-list-item-title class="ml-4">Skills</v-list-item-title>
            <v-row no-gutters>
              <!-- <div class="text-center title mb-4">Skills:</div> -->
              <v-col
                :cols="4"
                class="my-n3"
                v-for="skill in skills"
                :key="skill.name"
              >
                <v-list-item>
                  <v-list-item-icon
                    ><v-img v-bind:src="skill.icon"
                  /></v-list-item-icon>
                  <v-list-item-subtitle>{{ skill.name }}</v-list-item-subtitle>
                </v-list-item>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
  data() {
    return {
      resume:
        "https://github.com/wesamjabali/PersonalSite/raw/main/src/assets/Jabali%20Wesam%20Resume.pdf",

      skills: [
        { name: "Fullstack", icon: "./../assets/icons/stack.png" },
        { name: "Java", icon: "./../assets/icons/stack.png" },
        { name: "JavaScript", icon: "./../assets/icons/stack.png" },
        { name: "C/C++", icon: "./../assets/icons/stack.png" },
        { name: "Swift", icon: "./../assets/icons/stack.png" },
        { name: "Python", icon: "./../assets/icons/stack.png" },
        { name: "SQL", icon: "./../assets/icons/stack.png" },
        { name: "PostgreSQL", icon: "./../assets/icons/stack.png" },
        { name: "Git", icon: "./../assets/icons/stack.png" },
        { name: "Node", icon: "./../assets/icons/stack.png" },
        { name: "ExpressJS", icon: "./../assets/icons/stack.png" },
        { name: "VueJS", icon: "./../assets/icons/stack.png" },
        { name: "Data Analysis", icon: "./../assets/icons/stack.png" },
        { name: "Interpersonal Skills", icon: "./../assets/icons/stack.png" },
      ],
    };
  },
};
</script>
