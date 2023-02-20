// const { response } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const patents = require('../models/patentSchema');
const User = require('../models/userSchema');
const user = require('../models/userSchema');
const uspatents = require('../models/USPatentsSchema');
const cbuspatents = require('../models/CBUSPatentsSchema');
const employees = require('../models/employeeSchema');
const authenticate = require('../Middleware/authenticate');

router.get('/', (req, res) =>{
    res.send(`Hello World from the Server router js`)
});

router.get('/patents', async(req, res) => {
    try {
            patents.find({}, (err, result) => {
            res.status(200).send(result);
        })
    } catch(err){
        res.status(500).send(err);
    }
});

// Search for Wno
router.get('/patents/wipo/:wno', (req, res) => {
    const wno = req.params.wno;
    patents.find({wno: wno})
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Search for Therapeutic Area
router.get('/patents/therapeutic_area/:ta', (req, res) => {
    const ta = req.params.ta;
    patents.find({therapeutic_area: ta})
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Search for Year
router.get('/patents/years/:year', (req, res) => {
    const year = req.params.year;
    patents.find({ year: year})
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/patents/sort/years/:year', async(req, res) => {
    try{
        const year = req.params.year;
        const yearsPatents = await patents.find({ year: year }).exec();
        const yearsSortPatents = yearsPatents.sort((a,b) => moment(b.publication_date, 'DD.MM.YYYY').diff(moment(a.publication_date, 'DD.MM.YYYY')));
        res.status(200).send(yearsSortPatents);
    } catch (err) {
        res.status(500).json({
            error: err,
            message: "Failed to get the Patents"
        })
    }
});

//Search for PCT
router.get('/patents/pct/:pct', (req, res) => {
    const pct = req.params.pct;
    patents.find({ pct: pct})
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Search for Both
router.get('/patents/:search', (req, res) => {
    const search = req.params.search;
    console.log(search);
    patents.find(
        {$or: [
            {wno: {$regex: search, $options: '$i'}},
            {therapeutic_area: {$regex: search, $options: '$i'}},
            {diseases: {$regex: search, $options: '$i'}},
            {pct: {$regex: search, $options: '$i'}}
        ]}
    )
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

router.get('/patents/sort/:search', async(req, res) => {
    try{
        const search = req.params.search;
        const patentsData = await patents.find(
            {$or: [
                {wno: {$regex: search, $options: '$i'}},
                {therapeutic_area: {$regex: search, $options: '$i'}},
                {diseases: {$regex: search, $options: '$i'}},
                {pct: {$regex: search, $options: '$i'}}
            ]}
        ).exec();
        const PatentsSortData = patentsData.sort((a,b) => moment(b.publication_date, 'DD.MM.YYYY').diff(moment(a.publication_date, 'DD.MM.YYYY')));
        res.status(200).send(PatentsSortData);
    } catch (err) {
        res.status(500).json({
            error: err,
            message: "Failed to get the Patents"
        })
    }
});



// router.get('/pagination/:pageIndex/:pageSize', async(req, res) => {
//     let pageIndex = +req.params.pageIndex || 0;
//         let pageSize = +req.params.pageSize || 10;
//         let direction = req.query.direction;
//         let sortParam = req.query.sortParam;
//         try {
//             const cnt = await productService.count();
//             let totalPages = Math.ceil(cnt / pageSize);
//             let metadata = {
//                 count: cnt,
//                 hasPrevious: pageIndex > 0,
//                 hasNext: pageIndex < totalPages - 1,
//                 currentPage: pageIndex + 1,
//                 totalPages
//             };
//             const products = await productService.getByPagination(pageIndex, pageSize, direction, sortParam);
//             let response = {
//                 metadata: {...metadata, currentPageCount: products.length},
//                 data: products
//             }
//             res.status(200);
//             res.send(response);
//         } catch(error) {
//             res.status(500).send(error);
//         }
// });

// router.get('/patents/years/:year/:pageIndex', (req, res) => {
//         let pageIndex = +req.params.pageIndex || 0;
//         const year = req.params.year;
//         let pageSize = 10;
//         patents.countDocuments({year: year}).then(cnt => {
//             let totalPages = Math.ceil(cnt / pageSize);
//             let metadata = {
//                 count: cnt,
//                 hasPrevious: pageIndex > 0,
//                 hasNext: pageIndex < totalPages - 1,
//                 currentPage: pageIndex + 1,
//                 totalPages
//             };
//             patents.find({year: year})
//                         .skip(pageIndex * pageSize)
//                         .limit(pageSize)
//                         .then(patents => {
//                             let response = {
//                                 metadata: {...metadata, currentPageCount: patents.length},
//                                 data: patents
//                             }
//                             res.status(200);
//                             res.send(response);
//                         }).catch((err) => {
//                             res.status(500).send(err);
//                         });
//         }).catch((err) => {
//             res.status(500).send(err);
//         });
// });

router.get('/patents/years/:year/:pageIndex', (req, res) => {
    let pageIndex = +req.params.pageIndex || 0;
    const year = req.params.year;
    let pageSize = 10;
    patents.countDocuments({year: year}).then(cnt => {
        let totalPages = Math.ceil(cnt / pageSize);
        let metadata = {
            count: cnt,
            hasPrevious: pageIndex > 0,
            hasNext: pageIndex < totalPages - 1,
            currentPage: pageIndex + 1,
            totalPages
        };
        patents.find({year: year})
                    .skip(pageIndex * pageSize)
                    .limit(pageSize)
                    .then(patents => {
                        let result = patents;
                        res.status(200);
                        // res.send(result);
                        res.send({result, totalPages});
                    }).catch((err) => {
                        res.status(500).send(err);
                    });
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/uspatents', async(req, res) => {
    try {
            uspatents.find({}, (err, result) => {
            res.status(200).send(result);
        })
    } catch(err){
        res.status(500).send(err);
    }
});

router.get('/sort/uspatents', async(req, res) => {
    try{
        const uspatentsort = await uspatents.find().sort({ publication_date: -1 }).exec();
        res.status(201).send(uspatentsort);
    } catch (err) {
        res.status(500).json({
            error: err,
            message: "US Patent Failed to Load"
        })
    }
});

router.get('/cbuspatents', async(req, res) => {
        try {
            cbuspatents.find({}, (err, result) => {
            res.status(200).send(result);
        })
    } catch (err){
        res.status(500).send(err);
    }
});

router.get('/sort/cbuspatents', async(req, res) => {
    try{
        const cbuspatentsort = await cbuspatents.find().sort({ publication_date: -1 }).exec();
        res.status(201).send(cbuspatentsort);
    } catch (err) {
        res.status(500).json({
            error: err,
            message: "US Patent Failed to Load"
        })
    }
});


router.get('/contact', async(req, res) => {
    try {
        user.find({}, (err, result) => {
            res.status(200).send(result);
        })
    } catch(err){
        res.status(500).send(err);
    }
});

router.post('/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    if(!name || !email || !phone || !subject || !message){
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    try{
        const userExist = await User.findOne({ email: email })
        if(userExist){
            return res.status(422).json({ error: "Email Already Exists"});
        }
        const user = new User({name, email, phone, subject, message});
        await user.save();
        res.status(201).json({message: "User Registered successfully"})
    }catch (err){
        console.log(err);
    }
});

router.post('/register', async (req, res) => {
    const { emp_name, emp_email, emp_phone, emp_unq_id, emp_designation, emp_password, emp_cpassword } = req.body;
    if(!emp_name || !emp_email || !emp_phone || !emp_unq_id || !emp_designation || !emp_password || !emp_cpassword){
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try{
        const employeeExist = await employees.findOne({
            $or: [{emp_email:emp_email},
            {emp_unq_id:emp_unq_id} 
        ]});
        if(employeeExist){
            return res.status(422).json({ error: "Account Already Exists"});
        } else if (emp_password != emp_cpassword) {
            return res.status(422).json({error: "Passwords does not match"});
        } else {
            const employee = new employees({emp_name, emp_email, emp_phone, emp_unq_id, emp_designation, emp_password, emp_cpassword});
            await employee.save();
            res.status(201).json({message: "User Registered successfully"})
        }
    } catch (err){
        console.log(err);
    }
});

router.post('/login', async(req, res) => {
    try{
        let token;
        const { emp_unq_id, emp_email, emp_password } = req.body;
        
        if(!emp_unq_id || !emp_email || !emp_password){
            return res.status(400).json({error: "Please fill all fields"})
        }

        const empLogin = await employees.findOne({ 
            $and: [{emp_email:emp_email},
                {emp_unq_id:emp_unq_id}  
        ]});
        // console.log(empLogin);
        if(empLogin){
            const passwordMatch = await bcrypt.compare(emp_password, empLogin.emp_password);
            token = await empLogin.generateAuthToken();
            console.log(token);
            
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 1800000),
                httpOnly: true
            });

            if (!passwordMatch) {
                res.status(400).json({error: "Login Failed! Invalid credentials"});
            } else {
                res.json({message: "Employee Signed In Successfully"});
            }
        } else {
            res.status(400).json({error: "Login Failed! Invalid credentials"});
        }
    } catch (err) {
        console.log(err);
    }
});



router.get('/pipeline', (req, res) => {
    res.send(`Hello from Pipeline Services`)
});

router.get('/profile', authenticate, (req, res) => {
    res.send(req.rootUser);
});

module.exports = router;