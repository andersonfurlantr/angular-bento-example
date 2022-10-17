import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConsumerData, setConsumerData } from '@bento/bento-ng';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const data: ConsumerData  = {
  assetId: 123456
}

setConsumerData(data);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
