# Vite Module Bug

Instructions to reproduce the issue:

1. Run `npm install` for the UI package.
2. Build the UI library with `npm run build`.
3. Run `npm install` for the Website package.
4. Run the website app with `npm run dev --debug` and load the page in a browser.

It should be broken with a bunch of warnings and a console error `Cannot read properties of undefined (reading 'panelId')`.

The debug output should show that `@headlessui/vue` is being loaded from the `ui-package` modules folder instead of the `website` one:

```
vite:deps Scan completed in 152.49ms: {
  vue: 'E:/Work/vite-module-bug/website/node_modules/vue/dist/vue.runtime.esm-bundler.js',
  '@headlessui/vue': 'E:/Work/vite-module-bug/ui-library/node_modules/@headlessui/vue/dist/headlessui.esm.js'
}
```
