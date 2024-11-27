import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { CockpitComponent } from './modules/module 3/cockpit/cockpit.component';
import { ServerElementComponent } from './modules/module 3/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DisplayDetailsComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
