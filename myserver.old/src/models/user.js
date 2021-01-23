import { PhoneType, Role } from './enums'

import { IPhone } from './phone'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const nameSchema = new Schema({
  first: String,
  middle: String,
  last: String,
})

// class Name {
//   first : "",
//   middle = ""
//   last = ""
// }

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    first: String,
    middle: String,
    last: String,
    // ref: 'nameSchema',
  },
  picture: {
    type: String,
  },
  role: {
    type: Role,
  },
  userStatus: {
    type: Boolean,
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: String
  },
  phones: {
    type: [IPhone],
  },
})

export const User = mongoose.model("User", userSchema)