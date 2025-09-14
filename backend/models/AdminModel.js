import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
    {
        adminid: {
            type: Number,
            required: true,
            unique: true
        },
        adminname: {
            type: String,
            required: true
        },
        adminemail: {
            type: String,
            required: true,
            unique: true
        },
        adminpassword: {
            type: String,
            required: true
        },
        adminpasswordsalt: {
            type: String,
            required: true
        },
        adminrole: {
            type: String,
            required: true
        }
    }
);

const Admin = mongoose.model("admins", AdminSchema);
export default Admin;
