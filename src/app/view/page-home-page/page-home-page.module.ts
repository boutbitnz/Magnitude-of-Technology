import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ArticleSlidesComponent, ButtonComponent, CtaBlockComponent, CtaPreviewComponent, CtaRevealComponent, ImagesComponent, LinkComponent, TextMakersComponent, VideoSpotComponent } from "src/app/component/public.api";
import { PageHomePageComponent } from "./page-home-page.component";


// const CUSTOM_ELEMENTS_SCHEMA: SchemaMetadata;
// const NO_ERRORS_SCHEMA: SchemaMetadata;

@NgModule({
  declarations: [
    // HeaderComponent,
    ArticleSlidesComponent,
    ButtonComponent,
    CtaBlockComponent,
    CtaPreviewComponent,
    CtaRevealComponent,
    ImagesComponent,
    LinkComponent,
    TextMakersComponent,
    PageHomePageComponent,
    // PromotionBannerComponent,
    // SocialIconsComponent,
    VideoSpotComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // HeaderComponent,
    ArticleSlidesComponent,
    ButtonComponent,
    CtaBlockComponent,
    CtaPreviewComponent,
    CtaRevealComponent,
    ImagesComponent,
    LinkComponent,
    TextMakersComponent,
    PageHomePageComponent,
    // PromotionBannerComponent,
    // SocialIconsComponent,
    VideoSpotComponent, 
  ],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class PageHomePageModule { title = 'Home Page' }

console.log('Home Page Module Works!')