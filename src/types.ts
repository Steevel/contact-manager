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

export interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

export interface Data {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    pointRadius: number;
  }[];
}