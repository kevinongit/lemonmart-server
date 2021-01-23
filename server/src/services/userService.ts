import { IUser, User } from '../models/user'

export async function createNewUser(userData: IUser): Promise<User | boolean> {
    const user = new User(userData)
    const success = await user.save()

    if (success) {
        return user
    } else {
        return false
    }
}