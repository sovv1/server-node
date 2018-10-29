import User from './schemas/userSchema';

export const createUser = async (data) => {
    const newUser = new User(data);
    try {
        const user = await newUser.save();
        return { user };
    } catch (error) {
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const users = await User.find({});
        return { users };
    } catch (error) {
        throw error;
    }
};

export const getUser = async (id) => {
    try {
        const user = await User.findById(id);
        return { user };
    } catch (error) {
        throw error;
    }
};
