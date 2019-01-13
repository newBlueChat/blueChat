import {UserDtoShort} from '../user/userDtoShort';
import {ChannelDtoShort} from '../channel/channelDtoShort';

export class ChannelMessageDto {
    private id: number;
    private content: string;
    private sentDate: string;
    private isReadLogInUser: boolean;
    private sender: UserDtoShort;
    private channel: ChannelDtoShort;

}