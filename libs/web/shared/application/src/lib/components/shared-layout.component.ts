import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'bh-shared-layout',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    SidebarModule,
    NgTemplateOutlet
  ],
  templateUrl: './shared-layout.component.html',
  styleUrl: './shared-layout.component.scss'
})
export class SharedLayoutComponent {
  @Input() busy = false;
  sidebarVisible = false;
}
