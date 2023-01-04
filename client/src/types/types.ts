export interface RandomUsers {
    name:{
        title:string,
        first:string,
        last:string
    }
    dob:{
        age:number
    }
    email:string
    picture:{
        large:string
    }
    login:{
        username:string
    }
}

export interface UsersInfo {
    _id: string
    name:string
    tel: string
    address: string
    cpf:string
    email:string
}

export interface CreateUserInfo {
    name:string
    tel: string
    address: string
    cpf:string
    email:string
}

export interface AnimateProps {
    children: React.ReactNode;
    layout?: boolean;
    className?: string;
    direction?: 'left' | 'right' | 'up' | 'down' | 'none';
    distance?: number;
    durationIn?: number;
    durationOut?: number;
  }