import { User } from './user';

export class Comment {

    public _id          : string;
    public user         : User;
    public comment      : string;
    public creationDate : Date;

    constructor() {
        this._id = null;
        this.user = null;
        this.comment = null;
        this.creationDate = null;
    }

}