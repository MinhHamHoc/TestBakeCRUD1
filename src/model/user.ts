let id = 0

export const generateId: () => number = () => {
  id += 1
  return id
}

export class User implements UserInterface {
  id!: string | number

  firstName!: string

  lastName!: string

  birthday!: string

  gender!: 0 | 1

  email!: string

  phone!: string

  address!: string

  username!: string

  password!: string

  status!: 0 | 1 | 2

  created_at!: string

  updated_at!: string

  delete_at!: string

  constructor(json:any) {
    const keys = Object.keys(json)
    for(let index = 0; index < keys.length; index += 1) {
      const key = keys[index]
      // @ts-ignore
      this[key] = json[key]
    }
  }
  static fromJson = (json: Record<string,any>) => {
    return new User(json)
  }
}

export const fake_data: User[] = [
  new User({
    id: generateId(),
    firstName: "Anh",
    lastName: "Minh",
    birthday: '25/05/2001',
    gender: 1
  }),
  new User({
    id: generateId(),
    firstName: "Nguyen ",
    lastName: "A",
    birthday: '01/01/2001',
    gender: 0
  }),
  new User({
    id: generateId(),
    firstName: "Nguyen",
    lastName: "B",
    birthday: '02/02/2002',
    gender: 1
  }),
  new User({
    id: generateId(),
    firstName: "Nguyen",
    lastName: "C",
    birthday: '03/03/2003',
    gender: 0
  }),
]