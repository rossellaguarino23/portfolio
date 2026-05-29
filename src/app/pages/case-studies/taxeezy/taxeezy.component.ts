import { Component, ViewChild } from '@angular/core';
import { GalleryModalComponent } from '../../../components/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-taxeezy',
  imports: [GalleryModalComponent],
  templateUrl: './taxeezy.component.html',
  styleUrl: './taxeezy.component.scss'
})
export class TaxeezyComponent {
    @ViewChild(GalleryModalComponent) galleryModal!: GalleryModalComponent;

  galleryImages: string[] = [
    '/case-studies/taxeezy-1.png',
    '/case-studies/taxeezy-2.png',
    '/case-studies/taxeezy-3.png',
    '/case-studies/taxeezy-home.png',
    '/case-studies/taxeezy-profile.png',
    '/case-studies/BladderBoss-Profile.png',
  ];

  selectedImage: string | null = null;

  openModal(image: string): void {
    this.selectedImage = image;
    this.galleryModal.openModal(image);
  }

}
