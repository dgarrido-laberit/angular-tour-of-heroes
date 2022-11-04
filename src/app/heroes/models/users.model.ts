export interface User {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  address?: userAdress,
  phone?: string,
  website?: string,
  company?: userCompany,

}

interface userAdress {
  street?: string,
  suite?: string,
  city?: string,
  zipcode?: string,
  geo?: userAdressGeo,
}

interface userAdressGeo{
  lat?: string,
  lng?: string
}

interface userCompany {
  name?: string,
  catchPhrase?: string,
  bs?: string,
}