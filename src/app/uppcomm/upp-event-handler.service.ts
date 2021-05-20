import { Injectable } from '@angular/core';
import { UppEvent, initEvent } from './model/upp-event.model'


@Injectable({
  providedIn: 'root'
})
export class UppEventHandlerService {

  constructor() { }

  public sendStartupEvents(height = 0) {
    this.sendEvent(initEvent);
    this.sendEvent(new UppEvent('sizeChange', { height }));
  }

  private sendEvent(event: any, origin = "*") {
    let wkit = (window).webkit;
    // Web
    if (window.parent !== window) {
      window.parent.postMessage(event, origin);
    }
    // Android
    else if ((window).Android) {
      (window).parent.postMessage(event, origin);

    }
    // Ios
    else if (wkit && wkit.messageHandlers && wkit.messageHandlers.uppHandler) {
      wkit.messageHandlers.uppHandler.postMessage(JSON.stringify(event));
    }
    else {
      console.log("no send method detected");
    }
  }

}
