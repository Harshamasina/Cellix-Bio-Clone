const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const EmployeeSchema = new mongoose.Schema(
    {
        emp_name: {
            type: String,
            required: true
        },
        emp_email: {
            type: String,
            required: true,
        },
        emp_phone: {
            type: Number,
            required: true
        },
        emp_unq_id: {
            type: String,
            required: true,
        },
        emp_designation: {
            type: String,
            required: true
        },
        emp_password: {
            type: String,
            required: true
        },
        emp_cpassword: {
            type: String,
            required: true
        },
    },
    {timestamps: true},
);

EmployeeSchema.pre('save', async function (next){
    if(this.isModified('emp_password')){
        this.emp_password = await bcrypt.hash(this.emp_password, 12);
        this.emp_cpassword = await bcrypt.hash(this.emp_cpassword, 12);
    }
    next();
});

const employees = mongoose.model('employees', EmployeeSchema);
module.exports = employees;
