@echo off
cls
py manage.py collectstatic
py manage.py runserver