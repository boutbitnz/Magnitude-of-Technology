import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, PromotionBannerComponent, SocialIconsComponent } from 'src/app/component/public.api';
// const CUSTOM_ELEMENTS_SCHEMA: SchemaMetadata;
// const NO_ERRORS_SCHEMA: SchemaMetadata;



@NgModule({
  declarations: [HeaderComponent, PromotionBannerComponent, SocialIconsComponent],
  imports: [
    CommonModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  
  exports: [HeaderComponent, PromotionBannerComponent, SocialIconsComponent],
})
  
export class HeaderModule { }
