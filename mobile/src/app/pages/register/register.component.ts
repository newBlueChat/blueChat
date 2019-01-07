import {Component, OnInit} from '@angular/core';
import {ColorsService} from '../../services/colors.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


    form = {
        email: '',
        password: '',
        repeatPassword: ''
    };
    buttonColor: string;

    constructor(private colors: ColorsService, private router: Router) {

    }

    ngOnInit() {
        this.buttonColor = this.colors.getColor('--yellow');
    }

    showMenuHandler() {
        alert('showMenuHandler click');
        this.router.navigateByUrl('/home-menu');
    }

    onChange(e) {
        console.log(this.form);
    }
}