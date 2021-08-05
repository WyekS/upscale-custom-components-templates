import { ElementRef, NgZone } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { debounce } from 'lodash';
import { UppEvent } from '../uppcomm/model/upp-event.model';
import { UppEventHandlerService } from '../uppcomm/upp-event-handler.service';
import { EVENT_SIZE_CHANGE, MARGIN_HEIGHT } from '../constants/constants';

export class AbstractComponent {
  subject: Subject<any>;
  container: ElementRef | undefined;

  constructor(
    public zone: NgZone,
    public uppEventHandlerService: UppEventHandlerService,
    public initialHeight: number
  ) {
    this.subject = new Subject();
    this.uppEventHandlerService.sendStartupEvents(initialHeight);
  }

  public perform(container: ElementRef | undefined): void {
    this.container = container;
    this.uppEventHandlerService.sendStartupEvents(
      this.container?.nativeElement.scrollHeight
    );

    // Apply events to send height of interior elements or when resizing
    this.detectResize();
    this.onResize();
  }

  /**
   * Detect changes on each element within the main container
   */
  private detectResize() {
    const callback = debounce((entries) => {
      const allHeights: number[] = [];
      for (const entry of entries) {
        allHeights.push(entry.target.scrollHeight);
      }

      this.sendHeightEvent(Math.max.apply(null, allHeights));
    }, 1000);

    const observer = new ResizeObserver(callback);
    observer.observe(this.container?.nativeElement);
    for (var i = 0; i < this.container?.nativeElement.children.length; i++) {
      observer.observe(this.container?.nativeElement.children[i]);
    }
  }

  /**
   * Resize event is catched
   */
  private onResize() {
    this.zone.runOutsideAngular(() => {
      fromEvent(this.container?.nativeElement, 'resize')
        .pipe(
          map((event: any) => event.target.scrollHeight),
          debounceTime(650),
          distinctUntilChanged()
        )
        .subscribe((scrollHeight) => {
          this.zone.run(() => 
            this.sendHeightEvent(scrollHeight)
          );
        });
    });
  }

  private sendHeightEvent(height: number) {
    this.uppEventHandlerService.sendEvent(
      new UppEvent(EVENT_SIZE_CHANGE, { height: height + MARGIN_HEIGHT })
    );
  }
}
