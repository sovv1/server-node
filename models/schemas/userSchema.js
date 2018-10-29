import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
        email: { type: String, lowercase: true, required: true, unique: "This email is already using" },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    });

// UserSchema
//     .virtual('password')
//     .set(function (password) {
//         this._plainPassword = password;
//         if (password) {
//             this.salt = crypto.randomBytes(128).toString("base64");
//             this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha512');
//         }
//     })
//     .get(function () {
//         return this._plainPassword;
//     });
//
// UserSchema.methods.checkPassword = function (password) {
//     if (!password) return false;
//     if (!this.passwordHash) return false;
//     return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha512') === this.passwordHash;
// };

const userModel = mongoose.model('User', UserSchema);

export default userModel;
