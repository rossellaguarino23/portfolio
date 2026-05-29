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

  designSystemImages: string[] = [
    '/case-studies/BladderBoss-1.png',
    '/case-studies/BladderBoss-2.png',
    '/case-studies/BladderBoss-3.png',
  ];

  uiArchitectureImages: string[] = [
    '/case-studies/BladderBoss-Home.png',
    '/case-studies/BladderBoss-Diary.png',
    '/case-studies/BladderBoss-Profile.png',
  ];


  openModal(images: string[], index: number): void {
    this.galleryModal.openModal(images, index);
  }

}
