package com.wildBirds.BlueChat.api.controllers;

import com.wildBirds.BlueChat.api.dto.UserDto;
import com.wildBirds.BlueChat.api.dto.UserDtoPass;
import com.wildBirds.BlueChat.domain.model.UserFacade;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rpc")
public class RpsController {
    private UserFacade userFacade;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserDtoPass userDtoPass){
        UserDto loginUser = userFacade.loginUser(userDtoPass);

        return new ResponseEntity(loginUser, HttpStatus.OK);
    }

}