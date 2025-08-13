# Deployment Guide for Vercel

This guide walks you through deploying the AIPartners platform on Vercel.

## Prerequisites

1. Vercel account ([sign up here](https://vercel.com/signup))
2. GitHub account with your code repository
3. PostgreSQL database (recommend [Neon Database](https://neon.tech))

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure your code is pushed to GitHub with all necessary files:

- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Files to ignore during deployment  
- ✅ `build.sh` - Build script
- ✅ `README.md` - Documentation
- ✅ `.env.example` - Environment variables template

### 2. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Connect your GitHub account
4. Select your repository
5. Click "Import"

### 3. Configure Build Settings

Vercel should automatically detect the configuration from `vercel.json`. Verify these settings:

- **Framework Preset**: None (we use custom configuration)
- **Build Command**: `npm run build` 
- **Output Directory**: `client/dist`
- **Install Command**: `npm install`

### 4. Set Environment Variables

In the Vercel dashboard, go to Settings > Environment Variables and add:

| Variable | Value | Description |
|----------|--------|-------------|
| `DATABASE_URL` | `postgresql://user:pass@host:port/db` | PostgreSQL connection string |
| `NODE_ENV` | `production` | Environment setting |
| `SESSION_SECRET` | `your-secure-random-string` | Session encryption key |

### 5. Deploy

1. Click "Deploy" 
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be available at `https://your-project.vercel.app`

## Database Setup

### Option 1: Neon Database (Recommended)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add it as `DATABASE_URL` in Vercel environment variables

### Option 2: Other PostgreSQL Providers

- [Supabase](https://supabase.com)
- [Railway](https://railway.app)
- [PlanetScale](https://planetscale.com)

## Custom Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate will be automatically provisioned

## Monitoring and Analytics

Vercel provides built-in:
- Performance monitoring
- Error tracking  
- Analytics dashboard
- Function logs

Access these in your Vercel project dashboard.

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Ensure TypeScript compiles locally: `npm run build`

### Runtime Errors

1. Check Function logs in Vercel dashboard
2. Verify environment variables are set correctly
3. Test database connection string

### Static Assets Not Loading

1. Check file paths in `vercel.json` routes
2. Verify assets are in `client/dist` after build
3. Check browser network tab for 404 errors

### API Routes Not Working

1. Verify API routes are defined correctly in `server/routes.ts`
2. Check that routes start with `/api/`
3. Review Function logs for server errors

## Performance Optimization

1. **Enable Edge Caching**: Assets are automatically cached
2. **Use CDN**: Images and static files served from global CDN
3. **Monitor Core Web Vitals**: Available in Vercel Analytics
4. **Optimize Database Queries**: Use connection pooling

## Security Checklist

- ✅ Environment variables set securely
- ✅ Database credentials not in code
- ✅ HTTPS enabled (automatic with Vercel)
- ✅ CORS configured properly
- ✅ Session secret is secure random string

## Maintenance

### Updates

1. Push changes to GitHub
2. Vercel automatically redeploys
3. Monitor deployment status in dashboard

### Rollbacks

1. Go to Deployments tab in Vercel dashboard
2. Find previous successful deployment  
3. Click "Promote to Production"

### Monitoring

- Set up Vercel integration with monitoring tools
- Configure alerting for errors
- Review performance metrics regularly

---

Need help? Check [Vercel Documentation](https://vercel.com/docs) or contact support.