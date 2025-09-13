import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync, statSync } from "fs";

// Plugin to copy static preview files to dist (including nested directories)
const copyStaticPreviews = () => {
  return {
    name: 'copy-static-previews',
    writeBundle() {
      const previewsDir = 'dist/previews';
      const publicPreviewsDir = 'public/previews';
      
      console.log('🔄 Starting static preview files copy...');
      
      if (!existsSync(previewsDir)) {
        mkdirSync(previewsDir, { recursive: true });
        console.log('📁 Created dist/previews directory');
      }
      
      // Check if public/previews exists
      if (!existsSync(publicPreviewsDir)) {
        console.warn('⚠️  public/previews directory not found');
        return;
      }
      
      // Recursive function to copy HTML files from nested directories
      const copyHtmlFilesRecursively = (sourceDir, destDir, relativePath = '') => {
        try {
          const items = readdirSync(sourceDir);
          
          items.forEach(item => {
            const sourcePath = path.join(sourceDir, item);
            const stat = statSync(sourcePath);
            
            if (stat.isDirectory()) {
              // Create directory in destination and recurse
              const newDestDir = path.join(destDir, item);
              const newRelativePath = relativePath ? path.join(relativePath, item) : item;
              
              if (!existsSync(newDestDir)) {
                mkdirSync(newDestDir, { recursive: true });
                console.log(`📁 Created directory: dist/previews/${newRelativePath}`);
              }
              
              copyHtmlFilesRecursively(sourcePath, newDestDir, newRelativePath);
            } else if (item.endsWith('.html')) {
              // Copy HTML file
              const destPath = path.join(destDir, item);
              const displayPath = relativePath ? path.join(relativePath, item) : item;
              
              copyFileSync(sourcePath, destPath);
              console.log(`✅ Copied ${displayPath} to dist/previews/${displayPath}`);
            }
          });
        } catch (error) {
          console.error(`❌ Error processing directory ${sourceDir}:`, error.message);
        }
      };
      
      // Start recursive copy
      copyHtmlFilesRecursively(publicPreviewsDir, previewsDir);
      
      console.log('✅ Static preview files copy completed (including nested directories)');
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    copyStaticPreviews()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure public directory files are copied to dist
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure all public files are copied
    copyPublicDir: true
  }
}));