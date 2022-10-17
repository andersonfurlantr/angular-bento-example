import { Component, OnInit } from '@angular/core';
import { BentoAlertItemOptions } from '@bento/bento-ng';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss'],
})
export class AlertExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  alerts: BentoAlertItemOptions[] = [];

  addAlert(type: string = 'success') {
    this.alerts.push({
      type,
      msg: `3 records were successfully copied.`,
      closeable: true,
    });
  }
  addAlertInfo(type: string = 'info') {
    this.alerts.push({
      type,
      msg: `<a href="/components/alert">Learn how</a> to upload several documents at one time.`,
      closeable: true,
    });
  }
  addAlertWarn(type: string = 'warning') {
    this.alerts.push({
      type,
      msg: `For the best experience, you may want to update your browser.`,
      closeable: true,
    });
  }
  addAlertDanger(type: string = 'danger') {
    this.alerts.push({
      type,
      msg: `Your document was not saved. Try again; there may have been a connection interruption.`,
      closeable: true,
    });
  }

  addAlertWithTimeout(type: string = 'success') {
    this.alerts.push({
      type,
      msg: `All 102 clients successfully migrated.`,
      timeout: 20000,
      closeable: true,
    });
  }
  addAlertWithTimeoutInfo(type: string = 'info') {
    this.alerts.push({
      type,
      msg: `<a href="/components/alert">Learn how</a> to upload several documents at one time.`,
      timeout: 20000,
      closeable: true,
    });
  }

  closeAlert($event: any) {
    console.info('Alert #', $event, ' is being closed');
  }
}
