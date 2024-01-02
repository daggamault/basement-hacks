import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLayoutComponent } from '@bh/web/shared/application';

@Component({
  selector: 'bh-shell',
  standalone: true,
  imports: [SharedLayoutComponent, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {}
