import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-view-encap',
  templateUrl: './no-view-encap.component.html',
  styleUrls: ['./no-view-encap.component.css'],
})
export class NoViewEncapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
