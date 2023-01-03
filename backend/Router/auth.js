// const { response } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const patents = require('../models/patentSchema');
const User = require('../models/userSchema');
const user = require('../models/userSchema');
const uspatents = require('../models/USPatentsSchema');
const cbuspatents = require('../models/CBUSPatentsSchema');
const employees = require('../models/employeeSchema');

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

// router.get('/patents/info/:wno', (req, res) => {
//     const wno = req.params.wno;
//     patents.find({ wno:wno })
//     .then((result) => {
//         res.status(500).send(result)
//     })
// })

//Search for Both
router.get('/patents/:search', (req, res) => {
    const search = req.params.search;
    patents.find(
        {$or: [
            {wno: {$regex: search}},
            {therapeutic_area: {$regex: search}}
        ]}
    )
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

//Search for Both

// router.get('/patents/:search', async(req, res) => {
//     let data = await patents.find(
//         {
//             "$or": [
//                 { "wno": {$regex:req.params.search} },
//                 { "therapeutic_area": {$regex:req.params.search} }
//             ]
//         }
//         .then((result) => {
//             res.status(200).send(result);
//         }).catch((err) => {
//             res.status(500).send(err);
//         })
//     )
// });

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

router.get('/cbuspatents', async(req, res) => {
        try {
            cbuspatents.find({}, (err, result) => {
            res.status(200).send(result);
        })
    } catch(err){
        res.status(500).send(err);
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
        const employeeExist = await employees.findOne({ emp_unq_id:emp_unq_id })
        if(employeeExist){
            return res.status(422).json({ error: "Unique ID Already Exists"});
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
        const { emp_unq_id, emp_email, emp_password } = req.body;
        
        if(!emp_unq_id || !emp_email || !emp_password){
            return res.status(400).json({error: "Please fill all fields"})
        }

        const empLogin = await employees.findOne({ emp_unq_id:emp_unq_id });
        // console.log(empLogin);
        if(empLogin){
            const passwordMatch = await bcrypt.compare(emp_password, empLogin.emp_password);
            if(!passwordMatch){
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

module.exports = router;