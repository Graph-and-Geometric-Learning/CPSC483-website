# Overview
This website is based on vue 3 + vite + vuetify. Vuetify as an UI component framework.

This repo has two branches, master and gh-pages.
master branch corresponds to the root dierctory of this project (source code), while gh-pages corresponds to `dist` folder (distribution file). In other words, you should `git push` to update master branch under the root directory, while `git push` to update gh-pages under `dist` folder.

To build this project, you need to have node.js installed. All packages information are in `package.json`, you need to install them (maybe it's `npm install`) before you build the project.

Therefore, download the repo by
1. ``git clone <master repo>``
2. ``cd CPSC483-website``
3. ``git clone <gh-pages repo>``
4. ``mv CPSC483-website dist``

# Preview for development
To preview the website locally,
```shell
npm run dev
```
and then open the link in the output.


# Build
To build and update the website (gh-pages branch)
```shell
npm run build
```
This command will update the `dist` folder. And then

```shell
cd dist
git add .
git commit -m <message>
git push
```
which pushes the `dist` folder to `gh-pages` branch. Wait a moment for github to update the deployment.

For master banch, you can commit and push under the root directory as normal.