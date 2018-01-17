module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
  
      // First application
      {
        name      : 'BitplugWeb',
        script    : 'build/server.js',
        watch     :  true,
        instances :  4,
        exec_mode :  "cluster",
        env: {
          COMMON_VARIABLE: 'true'
        },
        env_production : {
          NODE_ENV: 'production'
        }
      },
    ],
  
    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     * 
     *  npm install && npm run build &&
     */
    deploy : {
      production : {
        user : 'root',
        host : '139.162.247.100',
        ref  : 'origin/master',
        repo : 'git@gitlab.com:BitPlug/bitplug-webapp.git',
        path : '/var/www/production',
        'post-deploy' : 'export NODE_ENV=production && npm install && npm run build && pm2 reload ecosystem.config.js --env production'
      },
      dev : {
        user : 'root',
        host : '139.162.247.100',
        ref  : 'origin/master',
        repo : 'git@gitlab.com:BitPlug/bitplug-webapp.git',
        path : '/var/www/development',
        'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env dev',
        env  : {
          NODE_ENV: 'development'
        }
      }
    }
  };
  