package com.wildBirds.BlueChat.api.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FriendsDto {

    private Long idUserContainFriend;

//    private UserDtoShort loggedUser;

    private UserDtoShort hisFriend;

    private Instant dateFriendShip;

}