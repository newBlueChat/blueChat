import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-login',
    templateUrl: './main-login.component.html',
    styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {

    newMessageDTOs = [
        {
            'idMessage': 1,
            'content': 'Thanks',
            'userNick': 'Marian Nowak',
        },
        {
            'idMessage': 2,
            'content': 'What are you doing today at the morning ?.',
            'userNick': 'Ola Taraska',
        },
        {
            'idMessage': 3,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },
        {
            'idMessage': 3,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },
        {
            'idMessage': 3,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },

    ];
    messageDTOs = [
        {
            'idMessage': 1,
            'content': 'It\'s a convenient tool for mock-ups.',
            'userNick': 'Marian Nowak',
        },
        {
            'idMessage': 2,
            'content': 'What are you doing today at the morning ?.',
            'userNick': 'Ola Taraska',
        },
        {
            'idMessage': 3,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },
        {
            'idMessage': 4,
            'content': 'It\'s a convenient tool for mock-ups.',
            'userNick': 'Marian Nowak',
        },
        {
            'idMessage': 5,
            'content': 'What are you doing today at the morning ?.',
            'userNick': 'Ola Taraska',
        },
        {
            'idMessage': 6,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },
        {
            'idMessage': 5,
            'content': 'What are you doing today at the morning ?.',
            'userNick': 'Ola Taraska',
        },
        {
            'idMessage': 6,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',

        },
        {
            'idMessage': 6,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },
        {
            'idMessage': 5,
            'content': 'What are you doing today at the morning ?.',
            'userNick': 'Ola Taraska',
        },
        {
            'idMessage': 6,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },
        {
            'idMessage': 6,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },
        {
            'idMessage': 5,
            'content': 'What are you doing today at the morning ?.',
            'userNick': 'Ola Taraska',
        },
        {
            'idMessage': 6,
            'content': 'I\'m fine thank you so much :)',
            'userNick': 'Anna Ostrowska',
        },

    ];


    constructor() {
    }

    ngOnInit() {
    }

}
