import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-b2all-number-formatter',
  template: `
    <span>{{number}}</span>
  `,
  styles: []
})
export class B2allNumberFormatterComponent implements OnInit {

  @Input() number: string;

  constructor() { }

  ngOnInit(): void {
    const incomingNumber = this.number;
    this.number = this.nFormatter(Math.abs(parseInt(incomingNumber, 10)), 1);
  }

  nFormatter(num, digits) {
    const si = [
      { value: 1E18, symbol: 'E' },
      { value: 1E15, symbol: 'P' },
      { value: 1E12, symbol: 'T' },
      { value: 1E9, symbol: 'B' },
      { value: 1E6, symbol: 'M' },
      { value: 1E3, symbol: 'K' }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i: number;
    for (i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
      }
    }
    return num.toFixed(digits).replace(rx, '$1');
  }

}
