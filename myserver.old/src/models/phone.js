import { ISerializable, SerializationStrategy, Serialize } from 'document-ts'

import { PhoneType } from './enums'

export const IPhone = {
  type: PhoneType,
  digit: String,
}

