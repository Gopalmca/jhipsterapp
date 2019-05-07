import { NgModule } from '@angular/core';

import { JhipsterappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterappSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterappSharedCommonModule {}
