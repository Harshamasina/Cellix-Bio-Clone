const express = require('express');
const router = express.Router();
const employees = require('../models/employeeSchema');


router.post('/register', async (req, res) => {
    const { emp_name, emp_email, emp_phone, emp_unq_id, emp_designation, emp_password, emp_cpassword } = req.body;
    if(!emp_name || !emp_email || !emp_phone || !emp_unq_id || !emp_designation || !emp_password || !emp_cpassword){
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    try{
        const employeeExist = await employees.findOne({ emp_email: emp_email })
        if(employeeExist){
            return res.status(422).json({ error: "Email Already Exists"});
        }
        const employee = new employees({emp_name, emp_email, emp_phone, emp_unq_id, emp_designation, emp_password, emp_cpassword});
        await employee.save();
        res.status(201).json({message: "User Registered successfully"})
    }catch (err){
        console.log(err);
    }
});