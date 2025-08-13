# Vercel Deployment Setup - Quick Guide

## Files Created for Deployment

✅ `vercel.json` - Main deployment configuration
✅ `build.sh` - Build script  
✅ `.vercelignore` - Files to exclude from deployment
✅ `.env.example` - Environment variables template

## Step 1: Prepare Repository

Make sure these files are in your root directory:
- `vercel.json`
- `package.json`
- `build.sh` (optional)
- `.vercelignore`

## Step 2: Vercel Dashboard Setup

1. Go to [vercel.com](https://vercel.com) and login
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure these settings:

**Framework Preset:** Other
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`
**Root Directory:** `.` (leave empty)

## Step 3: Environment Variables

Add in Vercel dashboard under Settings > Environment Variables:

```
DATABASE_URL=postgresql://username:password@hostname:port/database
NODE_ENV=production
SESSION_SECRET=your-secure-random-string-here
```

## Step 4: Deploy

Click "Deploy" - build should complete in 2-3 minutes.

## Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Check all dependencies are listed in package.json

**Site loads but shows blank?**
- Check browser console for errors
- Verify `dist/index.html` exists after build
- Check static file routing in vercel.json

**Current Status:**
- ✅ Build tested locally and works
- ✅ Static files generated in `dist/` directory  
- ✅ vercel.json configured for static site deployment
- 🔄 Backend API routes removed (can add back if needed)

The current configuration deploys as a static site. If you need backend API functionality, we can add serverless functions back to the configuration.