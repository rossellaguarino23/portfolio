import { Component, ViewChild } from '@angular/core';
import { GalleryModalComponent } from '../../../components/gallery-modal/gallery-modal.component';

@Component({
    selector: 'app-bladder-boss',
    imports: [GalleryModalComponent],
    templateUrl: './bladder-boss.component.html',
    styleUrl: './bladder-boss.component.scss'
})
export class BladderBossComponent {
  @ViewChild(GalleryModalComponent) galleryModal!: GalleryModalComponent;

  galleryImages: string[] = [
    '/case-studies/BladderBoss-1.png',
    '/case-studies/BladderBoss-2.png',
    '/case-studies/BladderBoss-3.png',
  ];

  selectedImage: string | null = null;

  openModal(image: string): void {
    this.selectedImage = image;
    this.galleryModal.openModal(image);
  }
}
