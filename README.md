
# GDI Modularity Invoices

Modularity Module that allows authenticated users to manage list, group and filter cases. This is a React app wrapped within a Wordpress plugin as a Modularity module.

## Getting started

```zsh
# clone repo into wp-content/plugins folder
git clone https://github.com/helsingborg-stad/gdi-modularity-invoices.git

# install composer dependencies
composer install

# install npm dependencies
yarn

# build scripts
yarn build

# watch scripts (for development)
yarn watch

# activate wordpress plugin (using wp-cli)
wp plugin activate gdi-modularity-invoices --url=example.local

# configure graphql endpoint (using wp-cli)
wp option update options_cases_api_uri http://localhost:3000/api/v1/aboutme/graphql --url=example.local

```

## Getting started (Headless without Wordpress)

This plugin can be run without Wordpress (for development).

```zsh
# install dependencies
yarn

# copy example env 
cp .env.example .env

# start web server
yarn start
```

## External connections and fake data

GraphQL endpoints (to a GDI About Me server) is configured in `.env` during development.

```
# Serve graphql from real endpoint
ABOUTME_GRAPHQL_URI=https://mycompany/api/v1/aboutme/graphql
```

```
# Serve graphql from file in ./dev-static
ABOUTME_GRAPHQL_URI=/dev-static/sample-aboutme-graphql-response.json
```


This plugin send GraphQL queries to a running GDI About Me server.
