import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: '[app-input-with-button]',
    templateUrl: './input-with-button.component.html',
    styleUrls: ['./input-with-button.component.scss']
})
export class InputWithButtonComponent implements OnInit {

    @Input() title: string;
    @Input() value: string;
    @Input() buttonTitle: string;
    @Input() texArea: boolean;
    @Input() textAlign: string

    constructor() {
    }

    ngOnInit() {
        this.texArea = this.texArea || false;
        this.textAlign = this.textAlign || "center";
    }


}
