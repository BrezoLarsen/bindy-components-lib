import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

let enableProfiler;

if (environment.production) {
  enableProdMode();
  enableProfiler = () => {};
} else {
  enableProfiler = module => enableDebugTools(module.injector.get(ApplicationRef).components[0]);
  window['tick'] = () => (window as any).ng.profiler.timeChangeDetection();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(enableProfiler)
  .catch(err => console.error(err));
