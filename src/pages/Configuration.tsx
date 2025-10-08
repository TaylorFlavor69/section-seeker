import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function Configuration() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Configuration</h1>
      
      <p>
        Advanced configuration options to customize the platform for your specific needs.
      </p>

      <h2>Environment Configuration</h2>

      <p>
        Set up environment-specific configuration using environment variables:
      </p>

      <pre>
        <code>{`// .env.development
API_URL=http://localhost:3000
DEBUG_MODE=true
LOG_LEVEL=debug

// .env.production
API_URL=https://api.production.com
DEBUG_MODE=false
LOG_LEVEL=error
CACHE_TTL=3600`}</code>
      </pre>

      <h2>Application Config</h2>

      <p>
        Main configuration file structure:
      </p>

      <pre>
        <code>{`// app.config.js
export default {
  api: {
    baseUrl: process.env.API_URL,
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000,
  },
  
  auth: {
    tokenKey: 'auth_token',
    tokenExpiry: 3600, // seconds
    refreshThreshold: 300, // refresh token 5min before expiry
  },
  
  features: {
    analytics: true,
    errorReporting: true,
    darkMode: true,
    notifications: {
      enabled: true,
      position: 'top-right',
      duration: 5000,
    },
  },
  
  cache: {
    enabled: true,
    ttl: process.env.CACHE_TTL || 1800,
    maxSize: 100, // MB
  },
  
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    console: process.env.DEBUG_MODE === 'true',
    remote: {
      enabled: true,
      endpoint: '/api/logs',
      batchSize: 50,
    },
  },
};`}</code>
      </pre>

      <h2>Plugin Configuration</h2>

      <p>
        Extend functionality with plugins:
      </p>

      <pre>
        <code>{`import { createApp } from '@platform/core';
import analyticsPlugin from '@platform/analytics';
import authPlugin from '@platform/auth';
import cachePlugin from '@platform/cache';

const app = createApp({
  plugins: [
    analyticsPlugin({
      trackingId: 'UA-XXXXX-Y',
      autoTrack: true,
      events: ['click', 'submit'],
    }),
    
    authPlugin({
      providers: ['email', 'google', 'github'],
      redirectUrl: '/dashboard',
      sessionTimeout: 3600,
    }),
    
    cachePlugin({
      strategy: 'stale-while-revalidate',
      maxAge: 1800,
    }),
  ],
});

app.mount('#app');`}</code>
      </pre>

      <h2>Theme Customization</h2>

      <p>
        Customize the visual appearance:
      </p>

      <pre>
        <code>{`// theme.config.js
export default {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    background: '#ffffff',
    text: '#1f2937',
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
  },
  
  spacing: {
    unit: 8, // base unit in pixels
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
};`}</code>
      </pre>

      <h2>Performance Optimization</h2>

      <pre>
        <code>{`// performance.config.js
export default {
  // Code splitting
  codeSplitting: {
    enabled: true,
    chunkSize: 250, // KB
    routes: true, // split by route
    vendors: true, // separate vendor bundle
  },
  
  // Lazy loading
  lazyLoad: {
    images: true,
    components: true,
    threshold: 0.1, // load when 10% visible
  },
  
  // Compression
  compression: {
    enabled: true,
    algorithm: 'gzip',
    level: 6,
  },
  
  // Caching strategy
  caching: {
    staticAssets: 'max-age=31536000',
    apiResponses: 'max-age=300',
    htmlPages: 'no-cache',
  },
};`}</code>
      </pre>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-6">
        <p className="font-semibold text-primary mb-2">⚙️ Configuration Priority</p>
        <p className="text-sm mb-0">
          Configuration is loaded in this order: defaults → environment variables → config files → 
          runtime overrides. Later sources override earlier ones.
        </p>
      </div>

      <h2>Security Settings</h2>

      <pre>
        <code>{`// security.config.js
export default {
  cors: {
    enabled: true,
    origins: ['https://yourdomain.com'],
    credentials: true,
  },
  
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  
  rateLimit: {
    enabled: true,
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
  },
  
  encryption: {
    algorithm: 'aes-256-gcm',
    keyRotation: 30, // days
      },
};`}</code>
      </pre>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
