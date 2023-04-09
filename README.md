# Django-project

This project is for self-study of Django for back-end and React for front-end to learn full-stack application

## How both django & react works together
1. User reaches an endpoint then project-level `urls.py` send it to corresponding urls configs to either frontend or backend
2. If it goes front, `frontend/urls.py` manage and run `index` function in `frontend/views.py`
3. The `index` function brings `templates/frontend/index.html` and prepare to insert React code into the html file.
4. When run `npm run dev`, webpack starts by following the `frontend/webpack.config.js`
5. See and run `src/index.js` then all imported components run.
6. The multiple components will be rendered in the right `div` tags finding by ids.

## Study log
### 05/Apr/2023
- Init django
- Installed related packages (e.g. Django, djangorestframework)
- Created virtual environment for package management
- Learned basic operations of Django (e.g. views, models and urls management)
- Learned how to apply system changes to the app (makemigrations, migrate)
- Serialising data

### 07/Apr/2023
- Wrote some React codes and refreshed
- This tutorial contains a classic method of React coding such as using Class not Functional programming
- Learned React routes to move around different URLs.

### 08/Apr/2023
- Learned how to use POST request in the Django backend
- Some understandings of Serializer, django models.
- I think I need more easier tutorial for fully understanding of django

### 09/Apr/2023
- Designed frontend with MaterialUI
- Connected to backend
- Prepared for data analytics libraries for music mood classification