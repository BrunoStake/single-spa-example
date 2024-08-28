import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {}