//node -v

//npm -v

//git -v

//ONE-TIME setup

//user.name
git config --global user.name "Your name"

//To check
 git config user.name

//user.email
git config --global user email "Your email"

//To check
git config user.email

//Main
git config -- global init.defaultBranch main

//Initialize a new local repository 
git init

//Flow
Working directory (edit) -> Staging Area (git add .) -> repository (git commit)

//Add and commit
git add .
git commit -m "Initial commit"

git branch -M main

git remote add origin <your-repo-url>

git remote -v 

//Push
git push -u origin main 

//Merge request (MR) / Pull request (PR)
git checkout main

git checkout -b feature/react-setup

//To confirm 
git status
git branch

git add .
git commit -m "feature:react initial status"

//To push
git push

//then copy below and paste in terminal for first Time 
git push --set-upstream origin feature/react-setup

//For Second time simply
git push