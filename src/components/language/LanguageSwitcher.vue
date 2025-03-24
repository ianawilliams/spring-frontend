<template>
  <div class="language-swticher">
    <label for="lang-switcher">{{ $t("language.label") }}</label>
    <select
      v-model="locale"
      id="lang-switcher"
    >
      <option v-for="(lang, index) in availableLocales" :key="index">
        {{  lang  }}
      </option>
    </select>
    <div class="language-swticher__msg">
      {{ $t("language.msg") }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, availableLocales } = useI18n();
</script>
<style lang="scss" scoped>
select {
  width: 100%;
  padding: $padding;
  border-radius: 4px;
  border: 1px solid $border-color;
}

.language-swticher__msg {
    font-size: 0.75rem;
  }
</style>
