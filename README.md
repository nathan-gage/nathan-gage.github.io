# nathangage.co

Personal site for Nathan Gage, built with [Astro](https://astro.build/) and deployed to GitHub Pages.

- Site: <https://nathangage.co>
- GitHub: <https://github.com/nathan-gage>
- RSS: <https://nathangage.co/rss.xml>

## Stack

- Astro 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- MDX content collections
- `oxfmt` for formatting
- `oxlint` for linting

## Development

```sh
npm install
npm run dev
```

## Commands

| Command                | Action                                         |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the local dev server at `localhost:4321` |
| `npm run build`        | Build the production site to `./dist/`         |
| `npm run preview`      | Preview the production build locally           |
| `npm run format`       | Format files with `oxfmt`                      |
| `npm run format:check` | Check formatting with `oxfmt`                  |
| `npm run lint`         | Lint with `oxlint`                             |
| `npm run lint:ci`      | Lint with GitHub Actions annotations           |
| `npm run check`        | Run format check, lint, and build              |

## Project structure

```text
src/
  components/       Shared Astro components
  content/post/     Published posts
  layouts/          Page layouts
  pages/            Routes
  styles/           Global styles
```

Content collections are configured in `src/content.config.ts`.
