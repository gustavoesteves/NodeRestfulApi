/**
 * Documentation reference
 * https://mongoosejs.com/docs/transactions.html
 */

import * as mongoose from "mongoose";

const User = mongoose.model('Users', new mongoose.Schema({
    userId: String,
    wallet: Number
}));
const Transaction = mongoose.model('Transactions', new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    amount: Number,
    type: String
}));

async function updateWallet(userId, amount) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const opts = { session };
        const A = await User.findOneAndUpdate({ 
            _id: userId 
        }, 
        { $inc: 
            { wallet: amount 
            } 
        }, opts);

        const B = await new Transaction({
            usersId: 'userId',
            amount: 10,
            type: "credit"
        }).save(opts);

        await session.commitTransaction();
        session.endSession();
        return true;
    } catch (error) {
        // If an error occurred, abort the whole transaction and
        // undo any changes that might have happened
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
}

updateWallet('userId', 500);