export interface InitialState {
  contacts: Contact[];
}

export interface Contact {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  status: string,
}