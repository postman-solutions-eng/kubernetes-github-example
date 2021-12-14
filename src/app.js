const express = require('express');
const quotes = require('./data/quotes.json');
const authors = require('./data/authors.json');
const tags = require('./data/tags.json');

const app = express();

app.get('/quotes', (_req, res) => {
  res.json(quotes);
});

app.get('/quotes/:id', (req, res) => {
  const quote = quotes.find((quote) => req.params.id === quote._id);
  if (quote) {
    res.json(quote);
    return;
  }

  res.sendStatus(404);
});

app.get('/authors', (_req, res) => {
  res.json(authors);
});

app.get('/authors/:id', (req, res) => {
  const author = authors.find((author) => req.params.id === author._id);
  if (author) {
    res.json(author);
    return;
  }

  res.sendStatus(404);
});

app.get('/tags', (_req, res) => {
  res.json(tags);
});

app.get('/tags/:id', (req, res) => {
  const tag = tags.find((tag) => req.params.id === tag._id);
  if (tag) {
    res.json(tag);
    return;
  }

  res.sendStatus(404);
});

module.exports = app;
