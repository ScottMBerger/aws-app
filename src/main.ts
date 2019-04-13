import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import awsConfig from './aws-exports';

PubSub.configure(awsConfig);
API.configure(awsConfig);
if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
