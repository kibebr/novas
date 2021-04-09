# novas
News website made with Next.js.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Folder structure
- `/domain`: this is where the core logic of app resides. It is totally devoid of infrastructure concerns
- `/pages`: all of Novas' pages. those are statically generated using Next.js
- `/components`: React components used in `/pages`
- `/fetchers`: this is the logic of fetching articles from an API resides. I am using NewsAPI but this is easily swappable
- `/scripts`: better explained below
- `/api`: this is the back-end of app. it's simple: it only contains an end-point that allows you to search for a certain article given a title

## Scripts
- `loadCategories`: fetches all the categories using NewsAPI, and then saves them to a JSON file.
- `saveImages`: for each article, fetch its headline image, and save it

## TODOS
1. More styling for each category's index page
2. Make the domain a bit more expressive (add parsers, etc.)

## Known issues
None! :smile:
