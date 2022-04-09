npm install gh-pages — save-dev
Addd these line below the "private": true,

"homepage": "https://your-github-username.github.io/repository-name",
Add these 2 lines to the Scripts object "predeploy": "npm run build", "deploy": "gh-pages -d build",

Then

npm run deploy
This will push the necessary files to the gh-pages branch.

To push all your files to the master branch, do these on git git add . git commit -m "your commit message" git push origin master