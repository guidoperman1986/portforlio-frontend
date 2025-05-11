import { AfterViewInit, Component, ElementRef, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-custom-scrollbar',
  imports: [],
  templateUrl: './custom-scrollbar.component.html',
  styleUrl: './custom-scrollbar.component.scss'
})
export class CustomScrollbarComponent implements OnInit, AfterViewInit {
  scrollContainer = input.required<HTMLDivElement>();

  scrollBarWidth = signal(0);
  scrollBarLeft = signal(0);

  isDragging = false;
  dragStartX = 0;
  startScrollLeft = 0;

  ngOnInit(): void { }
  
  ngAfterViewInit(): void {
    this.updateScrolBar();

    if (this.scrollContainer()) {
      this.scrollContainer().addEventListener('scroll', () => this.updateScrolBar());
    }
  }

  updateScrolBar() {
    const el = this.scrollContainer();
    const visible = el?.offsetWidth;
    const total = el?.scrollWidth;
    const scrollLeft = el?.scrollLeft;

    this.scrollBarWidth.set((visible / total) * 100);
    this.scrollBarLeft.set((scrollLeft / total) * 100);
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = event.clientX;
    const el = this.scrollContainer();
    this.startScrollLeft = el?.scrollLeft ?? 0;

    // Listen for mousemove and mouseup on the document
    document.addEventListener('mousemove', this.onDragMove);
    document.addEventListener('mouseup', this.stopDrag);
  }

  onDragMove = (event: MouseEvent) => {
    if (!this.isDragging) return;
    const el = this.scrollContainer();
    const bar = (event.target as HTMLElement).parentElement;
    if (!el || !bar || !bar.parentElement) return;

    const total = el?.scrollWidth;
    const visible = el?.offsetWidth;
    const barWidth = (visible / total) * bar.offsetWidth;
    const deltaX = event.clientX - this.dragStartX;
    const scrollableWidth = bar.parentElement?.offsetWidth - barWidth;

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
