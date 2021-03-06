import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    globals: {
      'v-tooltip': 'vTooltip',
      'prosemirror-utils': 'prosemirrorUtils',
      'tiptap-extensions': 'tiptapExtensions',
      'tiptap-commands': 'tiptapCommands',
      tiptap: 'tiptap',
    },

    name: 'VueEditor',
    file: 'dist/vue-editor.umd.js',
    format: 'umd',
  },
})

export default config
