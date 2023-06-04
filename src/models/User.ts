import mongoose, { Schema } from 'mongoose';

export interface IUser {
  name: string;
  rg?: string;
  cpf?: string;
  dateOfBirth?: string;
  admissionDate?: string;
  role?: string;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rg: String,
  cpf: String,
  dateOfBirth: String,
  admissionDate: String,
  role: String,
});

export default mongoose.model<IUser>('User', UserSchema);
