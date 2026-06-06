#!/bin/bash
cd ~/Desktop/wolveslogic-website
git add .
git commit -m "Update: $(date '+%Y-%m-%d %H:%M')"
git push origin main
echo "✅ Pushed to GitHub! Vercel will auto-deploy in ~60 seconds."
