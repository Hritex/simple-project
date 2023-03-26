import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
