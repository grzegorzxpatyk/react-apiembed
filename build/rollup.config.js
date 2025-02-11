import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/react-apiembed.js',
    name: 'react-apiembed',
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'httpsnippet': 'HTTPSnippet'
    }
  },
  // All the used libs needs to be here
  external: [
    'react',
    'react-dom',
    'prop-types',
    'httpsnippet',
  ],
  plugins: [
    filesize(),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
}
