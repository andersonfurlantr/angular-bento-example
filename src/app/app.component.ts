import {Component, QueryList, ViewChildren} from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChildren(NgbTooltip) tooltips!: QueryList<NgbTooltip>;

  open = false;
  openRight = false;
  accountOptions: any[] = [
    {
      label: 'Switch account',
      link: '/#/components/off-canvas-menu'
    },
    {
      label: 'Return to home account',
      link: '/#/components/off-canvas-menu'
    },
    {
      label: 'Change background',
      link: '/#/components/off-canvas-menu'
    }
  ];
  tData = [
    {
      label: 'Active link',
      active: true,
      action: () => {
        this._setActive('Active link');
      }
    },
    {
      label: 'Disabled link',
      disabled: true,
      action: () => {
        this._setActive('Disabled link');
      }
    },
    {
      label: 'Another link',
      action: () => {
        this._setActive('Another link');
      }
    },
    {
      label: 'Dropdown btn',
      dropdown: [
        {
          label: 'Dropdown 1',
          action: () => {
            this._setActive('Dropdown 1');
          },
          disabled: true
        },
        {
          label: 'Dropdown 2',
          action: () => {
            this._setActive('Dropdown 2');
          }
        },
        {
          label: 'Dropdown 3',
          action: () => {
            this._setActive('Dropdown 3');
          }
        },
        {
          label: 'Dropdown 4',
          action: () => {
            this._setActive('Dropdown 4');
          }
        }
      ]
    },
    {
      label: 'Last link',
      separated: true,
      action: () => {
        this._setActive('Last link');
      }
    }
  ];

  // Close tooltips when a dropdown menu is opened
  onDropdownOpen(v: boolean) {
    if (v) {
      // Only close all tooltips when a dropdown is opened
      const tooltipArray = this.tooltips.toArray();
      for (const tooltip of tooltipArray) {
        tooltip.close();
      }
    }
  }
  _setActive(s: string) {
    this.tData.map(item => (item.active = item.label === s));
  }
}
