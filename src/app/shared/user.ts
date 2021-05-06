export class User{
    firstName: string;
    lastName: string;

    age: number;
    email: string;
    
    universityInformation: University;
}
export class University{
    id: number;

    study: string;
    universityName: string;    
    term: number;

    average: number;
}
export const UserTest: User = {
    firstName: "ashkan",
    lastName: "vedadi",
    age: 21,
    email: "ashkan.vedadi@live.com",
    universityInformation: null
}
