import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
// tslint:disable-next-line: no-inferrable-types
    @Input() defaultColor: string = 'transparent';
// tslint:disable-next-line: no-inferrable-types
    @Input() highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
