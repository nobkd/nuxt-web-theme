# Nuxt Web Theme: Content + Typography + Elements

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run generate
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

## Usage

This template uses [Nuxt Typography](https://typography.nuxt.space/) and [Nuxt Elements](https://elements.nuxt.space/) for predefined Components with [Nuxt Content](https://content.nuxtjs.org/).

There are more components, that are defined inside of my [Nuxt Web Theme](https://github.com/nobkd/nuxt-web-theme/).
This repository is extended to gather all the pieces to form a complete picture.

It's an opinionated layout and has all the components and styling predefined.
Only the primary have to be changed in the [`tokens.config.ts`](./tokens.config.ts), as well as the used Icon in [`public/favicon.svg`](./public/favicon.svg) and [`components/icon/Logo.vue`](./components/icon/Logo.vue).

**Component Reference:**

-   https://typography.nuxt.space/#prose-components
-   https://elements.nuxt.space/globals/alert/
-   https://github.com/nobkd/nuxt-web-theme/tree/main/components/content/
