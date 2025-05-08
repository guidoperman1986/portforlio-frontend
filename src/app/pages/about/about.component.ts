import { Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  scrollContainer = viewChild<ElementRef>('scrollContainer');

  scrollBarWidth = signal(0);
  scrollBarLeft = signal(0);

  isDragging = false;
  dragStartX = 0;
  startScrollLeft = 0;

  ngOnInit(): void {
    this.updateScrolBar();
    this.scrollContainer()?.nativeElement.addEventListener('scroll', () => this.updateScrolBar());
  }

  updateScrolBar() {
    const el = this.scrollContainer()?.nativeElement;
    const visible = el.offsetWidth;
    const total = el.scrollWidth;
    const scrollLeft = el.scrollLeft;

    this.scrollBarWidth.set((visible / total) * 100);
    this.scrollBarLeft.set((scrollLeft / total) * 100);
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = event.clientX;
    const el = this.scrollContainer()?.nativeElement;
    this.startScrollLeft = el.scrollLeft;
  
    // Listen for mousemove and mouseup on the document
    document.addEventListener('mousemove', this.onDragMove);
    document.addEventListener('mouseup', this.stopDrag);
  }
  
  onDragMove = (event: MouseEvent) => {
    if (!this.isDragging) return;
    const el = this.scrollContainer()?.nativeElement;
    const bar = (event.target as HTMLElement).parentElement;
    if (!el || !bar) return;
  
    const total = el.scrollWidth;
    const visible = el.offsetWidth;
    const barWidth = (visible / total) * bar.offsetWidth;
    const deltaX = event.clientX - this.dragStartX;
    const scrollableWidth = bar.offsetWidth - barWidth;
  
    // Calculate new scrollLeft
    let newScrollLeft = this.startScrollLeft + (deltaX * (total - visible) / scrollableWidth);
    newScrollLeft = Math.max(0, Math.min(newScrollLeft, total - visible));
    el.scrollLeft = newScrollLeft;
    this.updateScrolBar();
  }
  
  stopDrag = () => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onDragMove);
    document.removeEventListener('mouseup', this.stopDrag);
  }
}
