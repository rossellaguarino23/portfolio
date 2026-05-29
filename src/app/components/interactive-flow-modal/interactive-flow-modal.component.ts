import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveFlow } from '../../types/gallery';

@Component({
  selector: 'app-interactive-flow-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-flow-modal.component.html',
  styleUrl: './interactive-flow-modal.component.scss'
})
export class InteractiveFlowModalComponent {
  private _activeFlow: InteractiveFlow | null = null;

  @Input()
  set activeFlow(flow: InteractiveFlow | null) {
    this._activeFlow = flow;
    this.currentScreenId = flow?.startScreenId ?? '';
  }

  get activeFlow(): InteractiveFlow | null {
    return this._activeFlow;
  }

  @Output() closeFlow = new EventEmitter<void>();

  currentScreenId = '';

  navigateToScreen(targetScreenId: string): void {
    if (!this.activeFlow || !this.activeFlow.screens[targetScreenId]) {
      return;
    }

    this.currentScreenId = targetScreenId;
  }

  resetFlow(): void {
    if (!this.activeFlow) {
      return;
    }

    this.currentScreenId = this.activeFlow.startScreenId;
  }

  closeModal(): void {
    this.closeFlow.emit();
  }
}
