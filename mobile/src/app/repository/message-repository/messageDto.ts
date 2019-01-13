import {UserDtoShort} from '../user-repository/userDtoShort';

export class MessageDto {
    private id: number;
    private content: string;
    private sentDate: string;
    private isRead: boolean;
    private sender: UserDtoShort;
    private receiver: UserDtoShort;
}