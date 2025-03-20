<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{ $t("helloWorld.subHeader") }}
      <a href="https://vite.dev/" target="_blank" rel="noopener">
        {{ $t("helloWorld.intro.vite") }}
      </a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">
        {{ $t("helloWorld.intro.vue") }}
      </a>. {{ $t("helloWorld.intro.next") }}
    </h3>
  </div>

  <ColorPicker v-model="colour" /> {{ colour  }}
  <div style="margin-top: 20px">
    <vp-btn label="Submit" @click="setColour" />
  </div>
</template>

<script setup lang="ts">
import { updatePreset } from '@primevue/themes';
import Color from "color";
import ColorPicker from 'primevue/colorpicker';
import { ref } from 'vue'

  defineProps<{
    msg: string
  }>()

  const colour = ref("FF7600");

  function setColour(): void {
    console.log(`Color: #${colour.value}`)
    const colorObject = Color("#" + colour.value);

    updatePreset({
      semantic: {
        primary: {
          50: colorObject.lighten(0.9).hex(),
          100: colorObject.lighten(0.8).hex(),
          200: colorObject.lighten(0.6).hex(),
          300: colorObject.lighten(0.4).hex(),
          400: colorObject.lighten(0.2).hex(),
          500: `#${colour.value}`,
          600: colorObject.darken(0.2).hex(),
          700: colorObject.darken(0.4).hex(),
          800: colorObject.darken(0.6).hex(),
          900: colorObject.darken(0.8).hex(),
          950: colorObject.darken(0.9).hex()
        }
      }
    })
  }
</script>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  display: block;
  margin: 50px 0;
  border: 2px solid $primary;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
