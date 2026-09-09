# Divya Enco Website — User Manual

This manual explains how to maintain the Divya Enco website without programming knowledge. It is written for a non-technical user who wants to update the photo gallery, project workstream cards, contact details, form email destination, and public website copy.

## 1. What this project is

This website is a React + Vite + TypeScript project for Divya Enco. It uses TanStack Router for page routes and static production output for GitHub Pages.

The main files for content changes are:

- Home page: `src/routes/index.tsx`
- About page: `src/routes/about.tsx`
- Projects and capabilities page: `src/routes/projects.tsx`
- Contact page: `src/routes/contact.tsx`
- Careers page: `src/routes/careers.tsx`
- Photo gallery: `src/components/PhotoGallery.tsx`
- Project gallery: `src/components/ProjectGallery.tsx`
- Contact form handler: `src/routes/contact.tsx`
- Career form handler: `src/components/CareerForm.tsx`
- Images folder: `Images/`

## 2. Where the content lives

The website is mostly content-driven. Most public text is stored in route files and component files.

### Main folders

- `src/routes/` — page routes such as Home, About, Projects, Contact, Careers
- `src/components/` — reusable UI pieces such as the gallery and forms
- `Images/` — photo assets used by the product gallery

## 3. How to run the website locally

Use a terminal in the project root.

```bash
npm install
npm run dev
```

Then open the local Vite link shown in the terminal, usually:

http://localhost:5173/

## 4. How to build the GitHub Pages static docs output

The website uses a GitHub Pages-friendly configuration.

```bash
npm run build:github
rm -rf docs
cp -R dist docs
```

This copies the Vite production HTML, assets, and generated route pages into the `docs/` folder.

## 5. How to update the photo gallery

The product photo gallery is controlled by:

- `src/components/PhotoGallery.tsx`
- `Images/`

### Step-by-step

1. Add or replace the image file in the `Images/` folder.
2. Keep the image file names consistent. The gallery component references files by import name.
3. Open `src/components/PhotoGallery.tsx`.
4. Update the `PRODUCT_PHOTOS` array.

Each item in the array looks like this:

```ts
{ image: product1, title: "Diffuser" }
```

The `image` field points to the imported image file. The `title` field is the caption shown below the main photo.

### To add a new photo

Add the image file to `Images/` with a new file name, such as `product 8.jpg`.

Then import it in the top of the file:

```ts
import product8 from "../../Images/product 8.jpg";
```

Then add one item to the `PRODUCT_PHOTOS` array:

```ts
{ image: product8, title: "New product photo" },
```

### To remove a photo

Delete the array item from `PRODUCT_PHOTOS` and, if desired, remove the image file from `Images/`.

## 6. How to update the project capability gallery

The workstream or capability card list is controlled by:

- `src/components/ProjectGallery.tsx`

This file contains a constant array named `WORKSTREAMS`.

Example:

```ts
const WORKSTREAMS = [
  { title: "Air / oil cylinder inlets", tag: "Product profile", Icon: Cog, description: "..." },
];
```

You can update:

- `title` — the card title
- `tag` — the section tag such as Product profile or Core capability
- `description` — the description text
- `Icon` — one of the existing icon objects (
  `Cog`, `Ruler`, `ScanLine`, `Flame`, etc.)

Do not change the icon import names unless you want to add a new icon.

## 7. How to update the projects page text

The page route for projects is:

- `src/routes/projects.tsx`

In this file you can change:

- the page headline
- the paragraph under the headline
- the capability infrastructure list
- the PhotoGallery block location

The `INFRASTRUCTURE` array is the table-like list of machine and capability information.

Example:

```ts
const INFRASTRUCTURE = [
  ["01", "Vertical turning lathe", "1500 mm table diameter / 1500 mm height"],
];
```

Update the values in order:

1. Number
2. Equipment title
3. Equipment detail

## 8. How to update the contact page

The public contact page is:

- `src/routes/contact.tsx`

This file contains:

- `DETAILS` — office address, email, phone, working hours
- `MAPS_URL` — Google map link
- form fields and form submit behavior

To change contact details:

1. Open `src/routes/contact.tsx`.
2. Edit the `DETAILS` array values.
3. Save the file.
4. Rebuild the static docs folder if publishing to GitHub Pages.

The email addresses and phone numbers are displayed in the contact cards.

### Contact form

The contact form currently uses a `mailto:` submit behavior.

```ts
window.location.href = "mailto:divyaenco@gmail.com,operations@divyaenco.com?subject=Project Inquiry";
```

This means the user’s email client opens with the message destination already set.

For a real backend solution:

- connect the form to Google Apps Script,
- connect the form to a CRM, or
- create an API endpoint that stores data on your server.

## 9. How to update the careers page

The careers route uses:

- `src/routes/careers.tsx`
- `src/components/CareerForm.tsx`

The `CareerForm` component holds the application form.

### Main configuration

At the top of `src/components/CareerForm.tsx`:

```ts
const CAREERS_EMAIL = "divyaenco@gmail.com";
```

This value is the email that receives the application content through the mailto flow.

### Form strategy

When the user submits the form:

- the form data is collected in React state,
- the subject and email body are created,
- the browser opens the mail client with a `mailto:` link,
- the user sends the application manually.

## 10. How to update the email destinations

There are two main email destinations in the current site:

- contact form destination in `src/routes/contact.tsx`
- career form destination in `src/components/CareerForm.tsx`

To update the contact form email:

```ts
mailto:divyaenco@gmail.com,operations@divyaenco.com?subject=Project Inquiry
```

To update the careers email:

```ts
const CAREERS_EMAIL = "divyaenco@gmail.com";
```

## 11. How to update the visible website text

You can change copy directly in these files:

- home page text: `src/routes/index.tsx`
- about page text: `src/routes/about.tsx`
- projects page text: `src/routes/projects.tsx`
- contact page text: `src/routes/contact.tsx`
- careers page text: `src/routes/careers.tsx`

Search the route files for specific phrases and edit the visible text in plain JSX or JSX text nodes.

## 12. How to make a real form storage workflow

The current forms do not save submissions into a database. They use `mailto:` flows. For a real low-cost solution, use Google Sheets and Google Apps Script.

Recommended workflow:

1. Create a Google Sheet.
2. Create an Apps Script web endpoint.
3. Replace the `mailto:` submit action with a `fetch()` POST.
4. Write the submitted values row by row into the Google Sheet.

This is a good free option for a startup or small company website.

## 13. How to create the production GitHub Pages site

The repository already contains a `docs/` directory that is treated as the published GitHub Pages output.

To refresh the docs folder:

```bash
npm run build:github
rm -rf docs
cp -R dist docs
```

Then commit and push the repository to the GitHub Pages branch or repo branch connected to GitHub Pages.

## 14. Common tasks for non-technical maintainers

### Update the hero headline

Edit the displayed headline in:

- `src/components/Hero.tsx`

### Update the top navigation menu

Edit the menu labels in:

- `src/components/Navbar.tsx`

### Update the footer details

Edit the footer in:

- `src/components/Footer.tsx`

### Add a new image to the gallery

1. Put the file in `Images/`
2. Import it in `src/components/PhotoGallery.tsx`
3. Add the `PRODUCT_PHOTOS` array entry

## 15. Troubleshooting

### The page is not updating locally

- Run `npm run dev`
- Confirm the local page is being served from Vite
- Refresh the browser

### The GitHub Pages site is not showing latest changes

- Run `npm run build:github`
- Copy the `dist/` output into `docs/`
- Commit and push the repo

### Photo is missing

- Check that the image file exists in `Images/`
- Check the import line in `PhotoGallery.tsx`
- Check the markup has the correct array entry

### Contact or career email not opening correctly

- Confirm the email address in the `mailto:` URL is correct
- Check the browser is opening the default email application

## 16. Quick checklist before publishing

- Update all visible text and labels.
- Add or remove gallery images in `Images/`.
- Update the `PRODUCT_PHOTOS` array.
- Update the `WORKSTREAMS` array for capability cards.
- Review the contact details in `src/routes/contact.tsx`.
- Review the career email in `src/components/CareerForm.tsx`.
- Run `npm run build:github`.
- Copy `dist` to `docs`.
- Commit and push.

## 17. Contact for support

For this website, the project and production owner should make the final decisions for content, contact addresses, email destinations, and infrastructure choices.
