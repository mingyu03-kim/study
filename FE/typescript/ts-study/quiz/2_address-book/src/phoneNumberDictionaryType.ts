export interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}
  
export interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
  
export enum PhoneType {
    Studio = 'studio',
    Office = 'office',
    Home = 'home',
}
  