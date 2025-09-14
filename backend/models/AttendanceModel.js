import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema(
    {
        date : {
            type: String,
            required: true
        },
        adminid: {
            type: Number,
            required: true,
            unique: true,
            ref: 'admins'
        },
        times:[
            {
                time: {
                    type: String,
                    required: true
                }
            }
        ],
        students: [
            {
                empid: {
                    type: Number,
                    required: true,
                    ref: 'students'
                }, 
                status: {
                    type: Number,
                    required: true
                },
                mode : {
                    type: String,
                    required: true
                },
                time: {
                    type: String,
                    required: true
                }
            }
        ],
        batch : {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        present: {
            type: Number,
            required: true
        },
        absent: {
            type: Number,
            required: true
        }
    }
);
const Attendance = mongoose.model("attendances", AttendanceSchema);
export default Attendance;