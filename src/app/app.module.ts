import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
