export interface GetUserResult{
    info:Info;
    users:NewsType
}

export interface Info{
    count:number;
    pages:number;
    next:string;
    prev:null
}

export interface NewsType {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

export interface UsersType {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    phone:    string;
    address:  Address;
    website:string;
    
}
export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    
}


