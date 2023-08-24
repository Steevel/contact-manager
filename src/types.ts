export interface InitialState {
  contacts: Contact[];
}

export interface Contact {
  id:string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  status: string,
}