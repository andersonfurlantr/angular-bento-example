import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BentoContextualHeaderItem,
  BentoActionableItem,
} from '@bento/bento-ng';

@Component({
  selector: 'app-contextual-header-example',
  templateUrl: './contextual-header-example.component.html',
  styleUrls: ['./contextual-header-example.component.scss'],
})
export class ContextualHeaderExampleComponent implements OnInit {
  items: BentoContextualHeaderItem[];
  customButton: BentoActionableItem;

  constructor(private router: Router) {
    this.items = [
      new BentoContextualHeaderItem(
        'Title one',
        undefined,
        'bento-icon-buildings'
      ),
      new BentoContextualHeaderItem(
        'Title two',
        'Very long subtitle 2 here',
        'bento-icon-asterisk'
      ),
      new BentoContextualHeaderItem('Title three', 'Very long subtitle 3 here'),
      new BentoContextualHeaderItem('Title four', 'Very long subtitle 4 here'),
    ];

    this.customButton = new BentoActionableItem('Click me!', '', () => {
      // console.info('Custom button is clicked');
      this.items[0].title = 'TITLE CHANGED!!';
      this.items[0].subtitle = 'Angular is fun...';
    });
  }

  onBackButtonClick() {
    this.router.navigate(['/alerts']);
  }

  ngOnInit(): void {}
}
