# Elite VIP Escorts Hospitality — Next.js SEO starter

A responsive Next.js App Router website for an hospitality company. Includes local landing pages, metadata, sitemap, robots.txt, JSON-LD, and a WhatsApp inquiry form.

## Requirements
- Node.js 20.9 or later
- npm
- GitHub account
- Vercel account

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

Edit `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real production origin when known. For local development, localhost is fine, but never leave the example URL in production.

## Before deployment
1. Replace `NEXT_PUBLIC_SITE_URL` with the exact Vercel deployment URL or custom domain.
2. Confirm the brand name, contact number, service descriptions, and all business claims.
3. Replace any illustrative or placeholder information with verified details.
4. Review privacy and terms pages for your actual practices and applicable requirements.
5. Test the WhatsApp form on a mobile device.
6. Run:
   ```bash
   npm run typecheck
   npm run build
   ```
   The lint command depends on the installed Next.js version; use `npx eslint .` if you add ESLint configuration.

## Deploy with GitHub and Vercel
1. Create a new GitHub repository.
2. Upload or push this project to the repository.
3. In Vercel, select **Add New → Project** and import the repository.
4. Framework preset: Next.js. Build command: `npm run build`.
5. Add environment variable `NEXT_PUBLIC_SITE_URL` with your actual production URL.
6. Deploy.
7. If the project URL changes, update the environment variable and redeploy.

## SEO included
- App Router metadata and page-specific titles/descriptions
- Canonical URLs
- Open Graph and Twitter metadata
- `app/sitemap.ts` and `app/robots.ts`
- Organization JSON-LD and a relevant service JSON-LD example
- Location-specific pages for Islamabad, E-11, and Bahria Town
- Descriptive internal links and responsive layouts

## Important SEO notes
- No code can guarantee top Google rankings.
- Location pages should only be indexed while they contain useful, distinct content.
- Add real business contact details and LocalBusiness schema only after verifying the business is eligible and the information is accurate.
- Submit `/sitemap.xml` through Google Search Console after deployment.
- Monitor Search Console impressions, clicks, queries, and indexing issues.
- Do not add hidden keywords or copied competitor content.

## WhatsApp
The inquiry form prepares a message for `923099200071` and opens WhatsApp. The visitor must review and send the message. No backend or paid WhatsApp API is required.
