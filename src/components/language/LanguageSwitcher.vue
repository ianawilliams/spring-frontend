<template>
  <div>
    <select v-model="locale">
      <option v-for="(lang, index) in availableLocales" :key="index">
        {{  lang  }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, availableLocales } = useI18n();
</script>
