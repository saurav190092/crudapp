import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel,Event, NavigationError } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

// tslint:disable-next-line: variable-name
    constructor(private _loadingBar: SlimLoadingBarService,private _router: Router) {
      this._router.events.subscribe((event: Event) => {
        this.navigationInterceptor(event);
      });
    }
    private navigationInterceptor(event: Event): void {
      if (event instanceof NavigationStart) {
        this._loadingBar.start();
      }
      if (event instanceof NavigationEnd) {
        this._loadingBar.complete();
      }
      if (event instanceof NavigationCancel) {
        this._loadingBar.stop();
      }
      if (event instanceof NavigationError) {
        this._loadingBar.stop();
      }
    }
    ngOnInit(): void {}
  }
