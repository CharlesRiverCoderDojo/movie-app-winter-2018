# Installing your new project

You should already have the latest stable version of Node and NPM installed.
If not, please install them here: <https://nodejs.org/en/>


You should also have a Github account and a link between that account and the
git tool in your command line. Instructions are here:   <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>


## Install bower, gulp, gulp-cli, yeoman and the generator-webapp:

_npm install -g bower gulp gulp-cli yo generator-webapp_

If you want to know more, check out the Yeoman Generator-Webapp Getting Started
docs: <https://github.com/yeoman/generator-webapp/blob/master/docs/README.md>


## To create the folder to install the scaffolding:

*  In your directory of choice, create a new folder called my-webapp (_mkdir my-webapp_)
*  Navigate into that folder (_cd my-webapp_) on Mac or (_cd /D my-webapp_) on a PC


## To generate the app scaffold:

*  _yo webapp_
*  if they ask you to report usage statistics, hit ‘n’
*  hit ‘a’ to deselect all three add-on options
*  hit ‘Y’ to add jQuery
*  select either testing option (BDD or TDD, doesn’t matter)

The scaffolding for the project should now be installed


## To test that the project works:

*  type ‘ls’ (on a Mac) or ‘dir’ (on a PC) to check that the directory has been
populated
*  _gulp serve_
*  You should be brought to http://localhost:9000/ in your browser


## To add additional packages

To add additional packages so you can easily use functions in between files:

_npm install --save-dev browserify babelify vinyl-buffer vinyl-source-stream_

** you may need to run npm install at this point

If you want to know more, check out how to install the recipe for Browserify: <https://github.com/yeoman/generator-webapp/blob/master/docs/recipes/browserify.md>


## Copy some files from a repo

To finish installing Browserify, replace the contents of the following files in
your local copy with the contents from these files from my GitHub repo:

*  gulpfile.js <https://github.com/CharlesRiverCoderDojo/movie-app-winter-2018/blob/master/gulpfile.js>
*  package.json <https://github.com/CharlesRiverCoderDojo/movie-app-winter-2018/blob/master/package.json>
*  Delete this line in your app/index.html file:<script src=”scripts/main.js”></script>
*  Add this line to your app/index.html file:<script src=”scripts/bundle.js”></script>
*  Create a file called “index.js” in your app/scripts folder


## test

To integrate your changes into the rest of your project:

_gulp build_

_gulp serve_


## Add the project to your GitHub

Once that is finished, you should now commit your changes to Github

In the top right corner, click on the (+) and then new repository

Give your repository a name like, “my-movie-app”

Click “create repository”

In the command line, type the following in the main folder for your project:

*  git init
*  git add *
*  git status (check that no files appear red, they should only be green)
*  git commit –m “first commit after building scaffolding and adding dependencies”
*  git remote add origin git@github.com:{your_username”}/{repository_name}.git
*  git push –u origin master

Refresh the Github page, and you should see all of your project files.

Now you’ve created your project and made your first commit!

---

The main repository for this project is found here – feel free to use it as a reference:
<https://github.com/CharlesRiverCoderDojo/movie-app-winter-2018>
