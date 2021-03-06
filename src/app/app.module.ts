import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgUtilsModule } from '@xyzblocks/ng-utils';
import { AppComponent } from '@app/app.component';
import { AuthenticationService } from '@app/authentication';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgUtilsModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
