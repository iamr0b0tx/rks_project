title deploying rks_project to heroku
@echo off

echo git adding ...
git add .
echo ---------------------------------------------------------------------

echo -------------------------git committing------------------------------
git commit -m "preping for heroku deploy"
echo ----------------------------------------------------------------------

echo ----------------------git pushing to origin----------------------------
git push origin master
echo -----------------------------------------------------------------------

echo ---------------------git pushing to heroku------------------------------
git push heroku master
echo ------------------------------------------------------------------------

echo --------------------------migrating--------------------------------------
heroku run python manage.py migrate
echo -------------------------------------------------------------------------

echo logs ...
heroku logs --tail