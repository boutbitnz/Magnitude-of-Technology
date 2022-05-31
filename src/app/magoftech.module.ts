import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './magoftech.component';
import { HeaderModule } from './component/header/header.module';
import { FooterComponent } from './component/public.api';
import { PageHomePageModule } from './view/page-home-page/page-home-page.module';

// const CUSTOM_ELEMENTS_SCHEMA: SchemaMetadata;
// const NO_ERRORS_SCHEMA: SchemaMetadata;


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    HeaderModule,
    PageHomePageModule
  ],
  providers: [],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [AppComponent],

  bootstrap: [AppComponent],
})
export class AppModule { }
