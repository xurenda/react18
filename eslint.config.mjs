import globals from 'globals'
import pluginJs from '@eslint/js'
import tsEslint from 'typescript-eslint'

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
]
