import User, { IUser } from '../models/User';

class UserService {
  async create(userData: IUser) {
    const user = await User.create(userData);
    return user;
  }

  async findById(id: string) {
    return User.findById(id);
  }

  async findAll() {
    const users = await User.find();
    return users;
  }

  async update(id: string, updatedUser: IUser) {
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    return user;
  }

  async delete(id: string) {
    await User.findByIdAndDelete(id);
  }
}

export default UserService;
