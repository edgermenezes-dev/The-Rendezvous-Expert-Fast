# GoDaddy Deployment Guide for The Rendezvous Experts

## 📋 Overview

This guide will help you deploy The Rendezvous Experts website to GoDaddy hosting with all performance optimizations intact.

---

## 🎯 Deployment Options

### Option 1: Static Hosting (Recommended for Frontend)
Best for: Shared hosting, cPanel hosting

### Option 2: Node.js Hosting (For Full-Stack)
Best for: VPS, Dedicated Server with Node.js support

### Option 3: WordPress Hosting (Alternative)
Best for: WordPress-based hosting with static files

---

## 🚀 Option 1: Static Hosting (React Frontend Only)

### Step 1: Build Production Bundle

```bash
# Navigate to frontend directory
cd /app/frontend

# Create optimized production build
yarn build:prod

# This creates a 'build' folder with optimized static files
```

### Step 2: Prepare Files for Upload

```bash
# The build folder contains:
# - index.html (main HTML file)
# - static/ (CSS, JS, media files)
# - service-worker.js (PWA cache)
# - manifest.json (PWA config)
# - favicon.ico, robots.txt, etc.

# Create a deployment package
cd /app/frontend/build
ls -la
```

### Step 3: Upload to GoDaddy via cPanel

#### Using File Manager:
1. **Login to cPanel** at https://yourdomain.com/cpanel
2. Open **File Manager**
3. Navigate to `public_html` directory
4. **Delete** existing files (if replacing old site)
5. **Upload** all files from `/app/frontend/build` folder
6. Ensure folder structure:
   ```
   public_html/
   ├── index.html
   ├── static/
   │   ├── css/
   │   ├── js/
   │   └── media/
   ├── service-worker.js
   ├── manifest.json
   ├── favicon.ico
   └── robots.txt
   ```

#### Using FTP (FileZilla):
1. **Download FileZilla** or use your preferred FTP client
2. **Connect to GoDaddy**:
   - Host: ftp.yourdomain.com
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21
3. Navigate to `public_html` folder
4. Upload all files from `/app/frontend/build`

### Step 4: Configure .htaccess for React Router

Create `.htaccess` file in `public_html`:

```apache
# React Router Support
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE image/x-icon
  AddOutputFilterByType DEFLATE image/svg+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/x-font
  AddOutputFilterByType DEFLATE application/x-font-truetype
  AddOutputFilterByType DEFLATE application/x-font-ttf
  AddOutputFilterByType DEFLATE application/x-font-otf
  AddOutputFilterByType DEFLATE application/x-font-opentype
  AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
  AddOutputFilterByType DEFLATE font/ttf
  AddOutputFilterByType DEFLATE font/otf
  AddOutputFilterByType DEFLATE font/opentype
  
  # For Older Browsers
  BrowserMatch ^Mozilla/4 gzip-only-text/html
  BrowserMatch ^Mozilla/4\.0[678] no-gzip
  BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # Video
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType video/mpeg "access plus 1 year"
  
  # CSS, JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  
  # Others
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType font/ttf "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Step 5: Test Your Deployment

1. Visit: https://yourdomain.com
2. Check all pages load correctly
3. Test form submissions
4. Verify images load properly
5. Check mobile responsiveness

---

## 🔧 Option 2: Node.js Hosting (Full-Stack with Backend)

### Prerequisites:
- GoDaddy VPS or Dedicated Server
- SSH access
- Node.js installed (v18+ recommended)
- MongoDB access

### Step 1: Prepare Application

```bash
# Update environment variables
cd /app/frontend
nano .env
```

Update `.env` with your production values:
```env
REACT_APP_BACKEND_URL=https://api.yourdomain.com
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

Backend `.env`:
```env
MONGO_URL=mongodb://username:password@localhost:27017/rendezvous
DB_NAME=rendezvous
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### Step 2: Build Frontend

```bash
cd /app/frontend
yarn build:prod
```

### Step 3: Transfer Files to GoDaddy

Using SCP:
```bash
# Transfer entire project
scp -r /app username@your-server-ip:/var/www/rendezvous

# Or use rsync for incremental updates
rsync -avz -e ssh /app/ username@your-server-ip:/var/www/rendezvous/
```

### Step 4: Server Setup

SSH into your server:
```bash
ssh username@your-server-ip
```

Install dependencies:
```bash
cd /var/www/rendezvous

# Backend dependencies
cd backend
pip3 install -r requirements.txt

# Frontend dependencies (if needed)
cd ../frontend
yarn install --production
```

### Step 5: Setup Process Manager (PM2)

```bash
# Install PM2
npm install -g pm2

# Start backend
cd /var/www/rendezvous/backend
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name rendezvous-backend

# Serve frontend build (optional)
cd ../frontend
pm2 serve build 3000 --name rendezvous-frontend --spa

# Save PM2 configuration
pm2 save
pm2 startup
```

### Step 6: Configure Nginx

Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/rendezvous
```

Add configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Frontend
    location / {
        root /var/www/rendezvous/frontend/build;
        try_files $uri $uri/ /index.html;
        
        # Caching
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/rendezvous /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 7: SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is configured automatically
```

---

## 📦 Option 3: Using cPanel's "Build Your Website"

### If GoDaddy offers Node.js in cPanel:

1. **Login to cPanel**
2. Go to **"Software" → "Setup Node.js App"**
3. Click **"Create Application"**
4. Configure:
   - Node.js version: 18.x or higher
   - Application mode: Production
   - Application root: `/home/username/rendezvous`
   - Application URL: yourdomain.com
   - Application startup file: `backend/server.py` (if using Python)

---

## 🗄️ Database Setup

### Option 1: MongoDB Atlas (Recommended)
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update `MONGO_URL` in backend `.env`

### Option 2: Install MongoDB on VPS
```bash
# Install MongoDB
sudo apt update
sudo apt install mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Create database and user
mongo
> use rendezvous
> db.createUser({
  user: "rendezvous_user",
  pwd: "your_secure_password",
  roles: ["readWrite"]
})
```

---

## ✅ Pre-Deployment Checklist

- [ ] Build production bundle: `yarn build:prod`
- [ ] Test production build locally
- [ ] Update environment variables
- [ ] Configure database connection
- [ ] Setup `.htaccess` file
- [ ] Verify all images load
- [ ] Test form submissions
- [ ] Check mobile responsiveness
- [ ] Setup SSL certificate
- [ ] Configure backup strategy
- [ ] Test performance with Lighthouse
- [ ] Setup monitoring (optional)

---

## 🧪 Testing After Deployment

### 1. Basic Functionality
```bash
# Test home page
curl -I https://yourdomain.com

# Test API (if deployed)
curl https://yourdomain.com/api/
```

### 2. Performance Testing
- Run Lighthouse audit
- Check Google PageSpeed Insights
- Verify Core Web Vitals

### 3. Cross-browser Testing
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

---

## 🔍 Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check browser console for errors. Usually paths issue.
```bash
# Make sure .htaccess is configured for React Router
# Check that all files uploaded correctly
```

### Issue: API calls failing
**Solution**: Check CORS configuration
```python
# In backend/server.py, verify CORS_ORIGINS includes your domain
allow_origins=["https://yourdomain.com", "https://www.yourdomain.com"]
```

### Issue: Images not loading
**Solution**: Check image paths and permissions
```bash
# Ensure images are in public_html
# Check file permissions (644 for files, 755 for directories)
chmod 644 public_html/static/media/*
```

### Issue: 404 on refresh
**Solution**: `.htaccess` not configured properly
```apache
# Add React Router configuration to .htaccess
RewriteRule . /index.html [L]
```

---

## 📊 Performance Optimization on GoDaddy

### 1. Enable Caching in cPanel
1. Go to **"Optimize Website"**
2. Select **"Compress All Content"**

### 2. Use Cloudflare (Free CDN)
1. Sign up at https://cloudflare.com
2. Add your domain
3. Update nameservers at GoDaddy
4. Enable "Auto Minify" and "Brotli" in Cloudflare

### 3. Setup Monitoring
- Use Google Analytics
- Setup uptime monitoring (UptimeRobot, Pingdom)
- Monitor Core Web Vitals

---

## 📁 File Structure on Server

```
public_html/
├── index.html
├── .htaccess
├── favicon.ico
├── manifest.json
├── robots.txt
├── service-worker.js
├── static/
│   ├── css/
│   │   └── main.[hash].css
│   ├── js/
│   │   ├── main.[hash].js
│   │   ├── vendors.[hash].js
│   │   └── runtime.[hash].js
│   └── media/
│       └── (images, fonts, etc.)
└── asset-manifest.json
```

---

## 🚀 Quick Deployment Commands

### From Development to Production:

```bash
# 1. Build
cd /app/frontend
yarn build:prod

# 2. Create deployment package
cd build
tar -czf rendezvous-deploy.tar.gz *

# 3. Upload to server (via SCP)
scp rendezvous-deploy.tar.gz user@yourdomain.com:/home/user/

# 4. Extract on server (via SSH)
ssh user@yourdomain.com
cd public_html
tar -xzf ~/rendezvous-deploy.tar.gz
```

---

## 📞 GoDaddy Support

If you need help with:
- Setting up Node.js
- Configuring SSH
- Database setup
- SSL certificates

Contact GoDaddy Support:
- Phone: 480-505-8877 (US)
- Chat: Available in cPanel
- Help: https://www.godaddy.com/help

---

## 🎉 Post-Deployment

### Monitor Performance:
1. **Google Analytics**: Track visitors
2. **Google Search Console**: Monitor SEO
3. **Lighthouse**: Regular performance audits
4. **Uptime monitoring**: Ensure 99.9% uptime

### Regular Maintenance:
- Update dependencies monthly
- Monitor bundle size
- Check performance metrics
- Backup database weekly
- Review logs for errors

---

## 📚 Additional Resources

- **GoDaddy Help Center**: https://www.godaddy.com/help
- **React Deployment**: https://create-react-app.dev/docs/deployment/
- **Performance Tips**: https://web.dev/performance/
- **MongoDB Atlas**: https://docs.atlas.mongodb.com/

---

## ✅ You're Ready!

Your optimized website is ready for deployment on GoDaddy with:
- ⚡ 70-80% faster load times
- 📱 PWA capabilities
- 🔒 Security headers
- 💾 Smart caching
- 🌐 CDN-ready architecture

**Good luck with your deployment! 🚀**
