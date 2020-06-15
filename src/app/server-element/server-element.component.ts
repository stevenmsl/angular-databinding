import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  /*
    Angular will inject an identifier to manage view encapsulation  
    ViewEncapsulation.Emulated : <p _ngcontent-vtc-c48> </p>
    
    CSS defined in this component will be picked up by all components
    after it’s rendered - not the desired behavior for most cases as
    it might be confusing 
    ViewEncapsulation.None: <p> </p>
  */
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  /* 
    - allows parent component to bind to this property 
      using Input decorator
    - you can provide an alias that makes more sense
      from parent component’s perspective 
      (srvElement instead of element)
    - data flow from parent to child    
  */
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  /*
    - use local reference defined in the parent component’s template
      to access the content projected onto this component 
      from the parent component
  */
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  /*
    constructor -> ngOnChanges -> ngOnInit -> ngDoCheck 
    -> ngAfterContentInit -> ngAfterContentChecked
    -> ngAfterViewInit -> ngAfterViewChecked
  */

  constructor() {
    console.log('constructor called');
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    const msg = `Text Content: ${this.header.nativeElement.textContent}`;
    console.log(msg); // should be blank

    const msgContentChild = `Text Content of paragraph: ${this.paragraph.nativeElement.textContent}`;
    console.log(msgContentChild);
  }
  /*
    - called when any data-bound property (@Input('srvElement') element)
      of a directive changes
    - when the default change detector detects changes, 
      it invokes ngOnChanges() if supplied
  */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  /* 
    - invokes a custom change-detection function for a directive,
      in addition to the check performed by the default change-detector.
  */
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  /*
   - you can access the value of the content projected
     from the parent component at this point 
   - while in ngOnInit the value is still empty 
 */
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    const msgContentChild = `Text Content of paragraph: ${this.paragraph.nativeElement.textContent}`;
    console.log(msgContentChild);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  /* 
    - you can access the value (textContext for example) of an element
      in the template at this point.
    - while in ngOnInit the value is still empty 
  */
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    const msg = `Text Content: ${this.header.nativeElement.textContent}`;
    console.log(msg); // should be test server 1
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
