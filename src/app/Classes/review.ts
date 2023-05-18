export class Review {
    Id!: number;
    UserName?: string;
    Date!:Date
    PhoneNumber?:String;
    Email?:String;
    Like?: number;
    ReviewContent!: string;
    ProfileSrc?: string;
}
