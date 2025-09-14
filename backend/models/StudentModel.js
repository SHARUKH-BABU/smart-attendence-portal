import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
    {
        empid: {
            type: Number,
            required: true,
            unique: true
        },
        empname: {
            type: String,
            required: true
        },
        empemail: {
            type: String,
            required: true,
            unique: true
        },
        emppasswordsalt: {
            type: String,
            required: true
        },
        emprole: {
            type: String,
            required: true
        },
        empBatch: {
            type: String,
            required: true
        },
        empclass: {
            type: String,
            required: true
        }
    }
);

const Student = mongoose.model("students", StudentSchema);
export default Student;
