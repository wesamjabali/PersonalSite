<template>
  <v-app>
    <v-main>
      <v-row style="max-width: 1200px; height: 100%;" class="mx-auto py-5">
        <v-row class="d-flex align-center">
          <v-col cols="2" />
          <v-col cols="8">
            <div
              class="py-5 title text-xl-h2 text-lg-h3 text-sm-h4 text-center "
            >
              <vue-typer
                :text="['Wesam Jabali']"
                :repeat="0"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="0"
                :type-delay="120"
                :pre-erase-delay="2000"
                :erase-delay="50"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="smooth"
              ></vue-typer>
            </div>
          </v-col>
          <v-col
            cols="2"
            :class="
              isMobile()
                ? 'd-flex ml-n3 mt-n6'
                : 'd-flex align-center justify-center'
            "
          >
            <v-switch
              class="switch"
              inset
              @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            />
          </v-col>
        </v-row>

        <v-tabs v-model="tab" class="mb-2" fixed-tabs>
          <v-tab>Profile</v-tab>
          <v-tab>Projects</v-tab>
          <v-tab>Contact</v-tab>
        </v-tabs>
        <v-tabs-items
          :style="
            $vuetify.theme.dark ? 'background: #121212' : 'background: #FFFFFF;'
          "
          v-model="tab"
        >
          <v-tab-item>
            <Profile />
          </v-tab-item>
          <v-tab-item>
            <Projects />
          </v-tab-item>
          <v-tab-item>
            <Contact />
          </v-tab-item>
        </v-tabs-items>
        <!-- </v-row> -->
      </v-row>
    </v-main>
  </v-app>
</template>

<style>
html,
body {
  overflow-x: hidden;
  width: 100vw;
}
.theme--light .vue-typer .custom.char.typed {
  color: #000000;
}
.theme--dark .vue-typer .custom.char.typed {
  color: #ffffff;
}
.switch {
  transform: rotate(90deg);
}
</style>

<script>
import { VueTyper } from "vue-typer";
import Profile from "./views/Profile";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
export default {
  name: "App",
  components: {
    VueTyper,
    Profile,
    Projects,
    Contact,
  },
  data() {
    return {
      tab: 0,
    };
  },
  methods: {
    isMobile() {
      return !this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>
