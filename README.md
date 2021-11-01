# Snippets

Snippets is a website where people can visit and copy code snippets. For example, if you want
a quicksort algorithm and don't want to spend time writing it. Copy it from our website

## Important Notice: 

1. This website is currently *not* hosted due to lack of data. Hopefully this will be changed soon
2. Only the front-end is on Github since the backend is not ready to open to public.
3. We are facing some issues with continuous integration tests. So if you see any error while automated tests are being run, please ignore.

## Dev Stuff:

### Frontend:

1. Sass
2. NextJS

### Backend / API:

1. ExpressJS

### Database:

1. PostgreSQL

## Data Models:

### The user model will be something like this:

```javascript
{
"id":1
"email:"xyz",
"password":"xyz",
"bookmarkedSnippets": ["snippetID", "snippetID"]
}
```


### A snippet will be something like this:

```javascript
{
"id": 1,
"title":"Quicksort Function",
"snippet":["Line 1", "Line 2"],
"language":"JavaScript (out of many)",
"description":"This is a quicksort function in JS"
}
```


## Future Plans:

1. Adding snippets and data!!
1. Adding authentication (an user can bookmark and like snippets etc.)
1. Migrating to TypeScript 


## Contributing:

**Please read the [CONTRIBUTING.md](https://github.com/mitheelgajare/snippets/blob/master/CONTRIBUTING.md) for details**

## License:

This project is **MIT Licensed**


