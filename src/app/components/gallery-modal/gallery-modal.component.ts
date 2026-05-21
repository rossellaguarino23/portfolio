import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery-modal',
  imports: [],
  templateUrl: './gallery-modal.component.html',
  styleUrl: './gallery-modal.component.scss'
})
export class GalleryModalComponent {
  @Input() images: string[] = [];
  @Input() selectedImage: string | null = null;

  currentIndex = 0;

  openModal(image: string): void {
    this.currentIndex = this.images.indexOf(image);
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }

  nextImage(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[this.currentIndex];
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[this.currentIndex];
  }

  onOverlayClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('gallery-modal')) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeModal();
  }

  @HostListener('document:keydown.arrowright')
  handleNext(): void {
    if (this.selectedImage) {
      this.nextImage();
    }
  }

  @HostListener('document:keydown.arrowleft')
  handlePrev(): void {
    if (this.selectedImage) {
      this.prevImage();
    }
  }
}
