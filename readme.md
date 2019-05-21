# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates new commit with files from staging area
git log - View recent commits 

git push heroku master - Push to production.
heroku open - Launch in browser

# To install heroku CLI
download heroku CLI - https://devcenter.heroku.com/articles/heroku-cli
login from command prompt - heroku login

# To set remote to existing repo:
heroku git:remote -a wc-expensify

# To create a new heroku app (adds new git remote to local repository):
heroku create app name
git remote - See remote repos. 

#To set heroku production env variables:
heroku config:set <<key:value pairs (space separated)>>