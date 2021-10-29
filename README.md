# Snippets

Snippets is a website where people can visit and copy code snippets. For example, if you want
a quicksort algorithm and don't want to spend time writing it. Copy it from our website

## Dev Stuff:

### Frontend:

1. Sass
2. NextJS

### Backend / API:

1. ExpressJS

### Database:

1. PostgreSQL

## Data Models:

### A user will be something like this:

```javascript
{
"id":1
"email:"xyz",
"password":"xyz",
"bookmarkedSnippets": ["snippetID", "snippetID"]
}
```

Please Note auth feature is coming soon

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
