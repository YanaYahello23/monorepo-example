import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFeatureComponent} from "@combined-monorepo/login-feature";

@Component({
  standalone: true,
  imports: [CommonModule, LoginFeatureComponent],
  selector: 'ng-mf-login-entry',
  template: `<lib-login-feature></lib-login-feature>`,
})
export class RemoteEntryComponent {}
