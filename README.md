## basic-react-redux-electron-tailwindcss 

Based on [this basic-electron-react-boilerplate](https://github.com/pbarbiero/basic-electron-react-boilerplate)

This boilerplate may be useful to those who wants a small basic setup to not waist time configuring most of the tools that they usually use in their electron and react-based projects.

I extracted it from one of my private projects that I am working on and I hope that you will find it useful.

The following list of tools was used and configured in this boilerplate:
- React 16
- Redux
- React-Router 4
- [React-Intl](https://github.com/yahoo/react-intl#react-intl)
- Enzyme
- Jest
- [Tailwindcss](https://tailwindcss.com/)
- Purgecss
- Webpack 3
- Electron-packager (basic configuration)


## Build an application
- Set the name of your application in the `package.json` as `productName`.
- Run `npm run package`
Feel free to edit the `postpackage` command to include more options or flags for `electron-packager` to match your needs

By default, `--asar` flag is used with `electron-packager`, meaning that after you build your app, you will not be able to check the content of it, because it will be archived and the source code will be hidden. To be able to see the content, remove the `--asar` flag from the `postpackage` command.

## Dev hot-reload mode
`npm run dev`

You can also build and run your prod bundle with `npm run prod`

## Add language
- Create a json file in the `src/locale` directory
- Import it in the `src/reducers/locales.reducer.js`
For more information, please refer to the documentation of the [react-intl module](https://github.com/yahoo/react-intl#react-intl)

## Remove Tailwind
You might be looking for the same boilerplate without Tailwindcss.
To remove it, follow the steps described:
- `npm uninstall -D tailwindcss postcss postcss-loader purgecss-webpack-plugin`
- Delete `tailwind.js`, `postcss.config.js` files from the root.
- Remove the invokation of `postcss-loader` in both `webpack` configuration files
```
 // remove this line specifically
 { loader: 'postcss-loader' }
```
as well as `PurgeCssPlugin` from the list of plugins in`webpack.build.config.js`
- The last thing to do is to remove `@tailwind` directives from `src/App.css`
