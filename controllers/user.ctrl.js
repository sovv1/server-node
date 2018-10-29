import { getUsers, createUser, getUser } from '../models/user';

const addUser = async (req, res, next) => {
   try {
       const { user } = await createUser(req.body);
       res.json(user);
   } catch(e) {
       res.json(e);
   }
};

const getAllUsers = async (req, res, next) => {
    try {
        const { users } = await getUsers();
        res.json(users);
    } catch(e) {
        res.json(e);
    }
};

const getUserByID = async (req, res, next) => {
    const { id } = req.params;
    try {
        const { user } = await getUser(id);
        res.json(user);
    } catch(e) {
        res.json(e);
    }
};

export default {
    addUser,
    getUserByID,
    getAllUsers
};
