import { Component, ViewChild } from '@angular/core';
import { GalleryModalComponent } from '../../../components/gallery-modal/gallery-modal.component';
import { InteractiveFlow } from '../../../types/gallery';
import { InteractiveFlowModalComponent } from "../../../components/interactive-flow-modal/interactive-flow-modal.component";

@Component({
  selector: 'app-taxeezy',
  imports: [GalleryModalComponent, InteractiveFlowModalComponent],
  templateUrl: './taxeezy.component.html',
  styleUrl: './taxeezy.component.scss'
})
export class TaxeezyComponent {
    @ViewChild(GalleryModalComponent) galleryModal!: GalleryModalComponent;

  designSystemImages: string[] = [
    '/case-studies/taxeezy-1.png',
    '/case-studies/taxeezy-2.png',
    '/case-studies/taxeezy-3.png',
  ];

  uiArchitectureImages: string[] = [
    '/case-studies/taxeezy-home.png',
    '/case-studies/taxeezy-profile.png',
    '/case-studies/BladderBoss-Profile.png',
  ];

  // Definimos el flujo de Perfil (Serie 2.x de tu imagen)
  taxeezyProfileFlow: InteractiveFlow = {
    title: 'Taxeezy - Profile Setup Flow',
    startScreenId: '2.1',
    screens: {
      '2.1': {
        id: '2.1',
        imageUrl: '/flows/taxeezy-profile-1.png',
        hotspots: [
          { x: 75, y: 85, width: 20, height: 10, targetScreenId: '2.2', tooltip: 'Open Accordion' }
        ]
      },
      '2.2': {
        id: '2.2',
        imageUrl: '/flows/taxeezy-profile-2.png',
        hotspots: [
          { x: 5, y: 5, width: 10, height: 10, targetScreenId: '2.1', tooltip: 'Back' },
          { x: 75, y: 85, width: 20, height: 10, targetScreenId: '2.3', tooltip: 'Go to Email Setup' }
        ]
      },
      '2.3': {
        id: '2.3',
        imageUrl: '/flows/taxeezy-profile-3.png',
        hotspots: [
          { x: 5, y: 5, width: 10, height: 10, targetScreenId: '2.1', tooltip: 'Back' },
          { x: 75, y: 85, width: 20, height: 10, targetScreenId: '2.2', tooltip: 'Go to Email Setup' }
        ]
      },
      // ... así sucesivamente con 2.2, 2.3 (el modal), 2.4, etc.
    }
  };

  currentFlow: InteractiveFlow | null = null;

  openModal(images: string[], index: number): void {
    this.galleryModal.openModal(images, index);
  }

  openFlow(flow: InteractiveFlow): void {
    this.currentFlow = flow;
  }

  onFlowClose(): void {
    this.currentFlow = null;
  }

}
