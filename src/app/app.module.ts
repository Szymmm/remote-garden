import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPathComponent } from './my-path/my-path.component';
import { PathElementComponent } from './my-path/path-element.component';
import { PathListComponent } from './my-path/path-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyPathService } from './my-path/my-path.service';

@NgModule({
  declarations: [
    AppComponent,
    MyPathComponent,
    PathElementComponent,
    PathListComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [MyPathService],
  bootstrap: [AppComponent],
})
export class AppModule {}
