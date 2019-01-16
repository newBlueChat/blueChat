import {EventEmitter, Injectable} from '@angular/core';
import {UserRepositoryService} from '../repository/user/user-repository.service';
import {UserDto} from '../repository/user/userDto';
import {UserPassDto} from '../repository/user/userPassDto';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private userRepository: UserRepositoryService) {
    }

    public Login(userPassDto: UserPassDto) {

        console.log(userPassDto);
        if (userPassDto.name === 'test' && userPassDto.pass === 'test') {
            const userDto = new UserDto();
            userDto.name = userPassDto.name;
            userDto.description ='    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet neque veritatis nihil recusandae, omnis velit, expedita non, dolore maiores tempore debitis consequuntur doloribus pariatur esse incidunt.';
            console.log('LoginService -- emit');
            this.onLogin.emit(userDto);
        }else {
            throw("error");
        }
    }

    // Events
    public onLogin = new EventEmitter<UserDto>();
}
