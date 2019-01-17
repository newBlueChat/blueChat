import {PhotoDto} from '../photo/photoDto';

export class UserDto {
    public idUser : number;
    public name: string;
    public email: string;
    public description: string;
    public photo : PhotoDto;

    constructor(id: number = 0, name: string = "", email: string = "", description: string = "", photo: PhotoDto = null) {
        this.idUser = id;
        this.name = name;
        this.email = email;
        this.description = description;
        this.photo = photo;
    }

}