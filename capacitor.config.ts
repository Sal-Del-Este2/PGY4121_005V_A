import type { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'MyAPP',
  webDir: 'www',

  // se agrego esto
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
