import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import tseslint from 'typescript-eslint';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  // Crashes with error if this is removed
  ...vueTsEslintConfig(),
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
]
