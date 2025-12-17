import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemComponent {
  // Navigation sections
  sections = [
    { id: 'colors', label: 'Colors', icon: '🎨' },
    { id: 'typography', label: 'Typography', icon: '📝' },
    { id: 'spacing', label: 'Spacing', icon: '📏' },
    { id: 'components', label: 'Components', icon: '🧩' },
    { id: 'layout', label: 'Layout', icon: '📐' },
    { id: 'utilities', label: 'Utilities', icon: '⚡' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
