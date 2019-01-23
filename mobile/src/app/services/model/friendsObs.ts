import {UserShortObs} from "./userShortObs";
import {FriendsDto} from "../../repository/friend/friendsDto";


export class FriendsObs {
    private idFriendship: number;
    private friend: UserShortObs;
    private dateFriendship: string;
    private noReadMessage: number;

    constructor() {
    }

    public static create(friendsDto: FriendsDto): FriendsObs {

        const friend = new FriendsObs();
        friend.dateFriendship = friendsDto.dateFriendship;
        friend.friend = UserShortObs.create(friendsDto.friend);
        friend.dateFriendship = friendsDto.dateFriendship;
        friend.noReadMessage = friendsDto.noReadMessage;
        return friend;
    }

    public getIdFrendship(): number {
        return this.idFriendship;
    }

    public getFriend(): UserShortObs {
        return this.friend;
    }

    public getDateFriendship(): string {
        return this.dateFriendship;
    }
    public getNoReadMessage(): number {
        return this.noReadMessage;
    }


}