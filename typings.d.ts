import { Document } from "mongoose";

export interface IUser extends Document {
   readonly  name: string;
   readonly email: string;
  readonly password: string;
   readonly role: string;
   readonly phone: number;
}

export interface IRefreshToken extends Document{
    readonly token: string;
    readonly userId: string;
    readonly expiresAt: Date;

}