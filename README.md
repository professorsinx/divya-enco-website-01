# Divya Enco Website

Static website for Divya Enco, built with Vite, React, and TanStack Router.

## Build Deployment Files

The project generates static files suitable for both AWS S3/CloudFront and GitHub Pages.

Install dependencies:

```bash
npm install
```

Generate the production static build:

```bash
npm run build:github
```

This command creates the minified static output in `dist/`. The build includes:

- `index.html` and route pages
- `404.html` fallback page
- Minified JavaScript and CSS
- Images and other public assets
- Static route folders for `about`, `careers`, `contact`, and `projects`

The current generated deployment copies are maintained in:

- `s3-build/` for AWS S3 and CloudFront
- `docs/` for GitHub Pages

`docs/USER_MANUAL.md` is preserved as project documentation and is not part of the generated site synchronization.

## AWS S3 and CloudFront

1. Run `npm run build:github`.
2. Upload the contents of `s3-build/` to the root of the S3 bucket. Do not upload the `s3-build` folder itself.
3. Enable static website hosting if using the S3 website endpoint, with `index.html` as the index document and `404.html` as the error document.
4. For CloudFront, set the default root object to `index.html`.
5. Configure CloudFront custom error responses for HTTP `403` and `404` to return `/404.html` with response code `200` when SPA-style route fallback is required.
6. Invalidate the CloudFront cache after uploading a new build, for example:

```bash
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

For a private S3 origin, use CloudFront Origin Access Control and allow CloudFront to read the bucket. Do not expose AWS credentials in this repository.

## GitHub Pages

1. Run `npm run build:github`.
2. Commit and push the generated files in `docs/`.
3. In the GitHub repository, open **Settings > Pages**.
4. Choose **Deploy from a branch**.
5. Select the publishing branch and choose `/docs` as the folder.
6. Save the configuration and wait for GitHub Pages to publish the site.

The Vite configuration uses relative asset paths and creates route fallback files so the generated `docs/` folder can be served directly by GitHub Pages.

## Local Preview

Preview the static deployment build locally:

```bash
npm run preview
```

The preview command serves the `dist/` output. Re-run `npm run build:github` after source changes before previewing the updated static files.

## Development

Start the development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```
