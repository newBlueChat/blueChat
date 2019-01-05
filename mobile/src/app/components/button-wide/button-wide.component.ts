import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: '[app-button-wide]',
    templateUrl: './button-wide.component.html',
    styleUrls: ['./button-wide.component.scss']
})
export class ButtonWideComponent implements OnInit {

    @Input() buttonTitle: string;
    @Input() colorButton: string;
    constructor() {
    }

    ngOnInit() {
    }

}
