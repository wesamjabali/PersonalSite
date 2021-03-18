<template>
  <div>
    <v-card class="mx-auto" flat>
      <div class="title text-left">
        Hello, I'm Wesam Jabali and I'm
        <vue-typer
          :text="[
            'a Software Developer',
            'a DePaul University Graduate',
            'a Community Leader',
            'looking for work!',
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
    </v-card>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  components: {
    VueTyper,
  },
};
</script>
