import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  /*
    data flow from child to parent via emitting events
  */
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output()
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';

  // access elements through local reference
  // serverContentInput is the local reference
  // defined in the template
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  // two-way binding approach
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }

  // use the local references in template approach
  // TS is not aware of the defined local reference
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      // access the DOM directly
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
