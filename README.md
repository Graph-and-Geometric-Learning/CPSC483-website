# Overview
This website is based on vue 3 + vite + vuetify. Vuetify as an UI component framework.

This repo has two branches, master and gh-pages.
master branch corresponds to the root dierctory of this project, while gh-pages corresponds to `dist` folder. In other words, you should `git push` under the root directory, while `git push` under `dist` folder.

Therefore, to download the whole project, first 
```shell
git clone <the master branch>
```
then
```shell
mkdir dist
cd dist
```
then
```shell
git clone <the gh-pages branch>
```

To build this project, you need to have node.js installed. All packages information are in `package.json`, you need to install them first.

## Preview for development
To preview the website locally,
```shell
npm run dev
```
and then open the link in the output.


## Build
```shell
npm run build
```
This command will update `dist` folder. And then

```shell
cd dist
git push origin master:gh-pages
```
which pushes the `dist` folder to `gh-pages` branch. Wait a moment for github to update the deployment.