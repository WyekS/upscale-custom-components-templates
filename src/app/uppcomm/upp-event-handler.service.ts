import { Injectable } from '@angular/core';
import { UppEvent, initEvent } from './model/upp-event.model';

@Injectable({
  providedIn: 'root',
})
export class UppEventHandlerService {
  constructor() {}

  public sendStartupEvents(height = 0) {
    this.sendEvent(initEvent);
    this.sendEvent(new UppEvent('sizeChange', { height }));
  }

  public sendEvent(event: UppEvent<any>, origin = '*') {
    console.log('Sending ' + event.type + ' event with data: ', event.data);
    let webkit = window.webkit;
    // Web
    if (window.parent !== window) {
      window.parent.postMessage(event, origin);
    }
    // Android
    else if (window.Android) {
      window.parent.postMessage(event, origin);
    }
    // Ios
    else if (
      webkit &&
      webkit.messageHandlers &&
      webkit.messageHandlers.uppHandler
    ) {
      webkit.messageHandlers.uppHandler.postMessage(JSON.stringify(event));
    }
  }
}
