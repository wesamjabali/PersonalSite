<template>
  <v-app>
    <v-main>
      <v-row style="max-width: 1200px;" class="mx-auto py-12">
        <v-card class="mx-auto d-flex" flat>
          <v-row>
            <v-col>
              <div
                style="height:75px;"
                class="title text-xl-h2 text-lg-h3 text-sm-h4 text-center "
              >
                <vue-typer
                  :text="[
                    'Hey there.',
                    'Thanks for visiting my page.',
                    'I\'m Wesam Jabali.',
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
        >
        <v-tabs v-model="tab" class="mb-5" fixed-tabs>
          <v-tab>Profile</v-tab>
          <v-tab>Projects</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <Profile />
          </v-tab-item>
          <v-tab-item>
            <Projects />
          </v-tab-item>
        </v-tabs-items>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { VueTyper } from "vue-typer";
import Profile from "./views/Profile";
import Projects from "./views/Projects";
export default {
  name: "App",
  components: {
    VueTyper,
    Profile,
    Projects,
  },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>
