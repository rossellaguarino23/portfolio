import { Component, ViewChild } from '@angular/core';
import { GalleryModalComponent } from '../../../components/gallery-modal/gallery-modal.component';
import { InteractiveFlow } from '../../../types/gallery';
import { utrFlow, dashboardFlow, profileFlow } from '../../../model/taxeezy-flows';
import { InteractiveFlowModalComponent } from '../../../components/interactive-flow-modal/interactive-flow-modal.component';

@Component({
  selector: 'app-taxeezy',
  imports: [GalleryModalComponent, InteractiveFlowModalComponent],
  templateUrl: './taxeezy.component.html',
  styleUrl: './taxeezy.component.scss',
})
export class TaxeezyComponent {
  @ViewChild(GalleryModalComponent) galleryModal!: GalleryModalComponent;

  designSystemImages: string[] = ['/case-studies/taxeezy-1.png', '/case-studies/taxeezy-2.png', '/case-studies/taxeezy-3.png'];

  uiArchitectureImages: string[] = ['/case-studies/taxeezy-home.png', '/case-studies/taxeezy-profile.png', '/case-studies/BladderBoss-Profile.png'];

  utrFlow = utrFlow;
  dashboardFlow = dashboardFlow;
  profileFlow = profileFlow;

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
