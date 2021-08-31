import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { PublicModule } from '../public/public.module';
import { SecuredModule } from '../secured/secured.module';
import { ServiceModule } from './service/service.module';



@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    PublicModule,
    SecuredModule,
    ServiceModule
  ],
  exports: [
    LayoutModule,
    PublicModule,
    SecuredModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
