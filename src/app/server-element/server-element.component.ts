import {
    Component,
    OnInit,
    OnChanges,
    Input,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
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

    @Input() serverElement;

    constructor() {
        console.log('Constructor called!');
    }

    ngOnInit() {
        console.log('ngOnInit called!');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called!', changes);
    }

    ngDoCheck() {
        console.log('ngDoCheck Called!');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit Called!');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit Called!');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked Called!');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy Called!');
    }
}
