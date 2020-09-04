const express = require('express');
const cors = require('cors');
const app = express();
const fs = require("fs");
const path = require("path");
const readAllUser = require("./readuser");
const updatepass = require("./update");
const deleteuser = require("./deleteUser");
app.use(cors());

app.use(express.json());


const adduser = require('./adduser');
const con = require('./con');

app.post('/adduser', async (req, res) => {
    try {
        const input = req.body;
        await adduser.addUser(input);
        res.json({
            status: "added"
        });
        res.end();
    } catch (err) {
        console.log(err);
    }
});

app.post("/user", async (req, res) => {
    try {
        const login = req.body;
        console.log(login);
        const results = await readAllUser.read(login.email);
        if (results[0].password === login.password) {
            console.log("sucess");
            res.send('1');
        } else {
            res.send('0');
        }
        res.end();
    } catch (err) {
        const json = {
            message: "Failure"
        };
        res.json(json);
    }

});


// app.post('/update', async (req, res) => {
//     try {
//         const update = req.body;
//         console.log(update);
//         const results = await readAllUser.read(login.email);
//         if (results[0].email === login.email) {
//             const result = await updatepass.update(update);
//             console.log(result);
//         } else {
//             console.log("Eror inside");
//         }

//     } catch (err) {
//         console.log("Error");
//     }

// })
app.post('/update', async (req, res) => {
    try {

        const input = req.body;
        let output = await readAllUser.read(input.email);
        if (input.email == output[0].email) {
            let result = await updatepass.update(input);
            res.setHeader('Content-Type', 'application/json');
            res.send('1');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send('0');
        }
        res.end();
    } catch (err) {
        console.log(err.name);
    }
});
app.post('/createrepo', async (req, res) => {
    const name = req.body;
    console.log(name);
    const test = name.name;
    console.log(test);
    fs.mkdir(path.join(__dirname, test), {}, err => {
        if (err) throw err;
        console.log("Folder created");
        res.send('1');

    })

});

app.post('/createfile', async (req, res) => {
    try {
        const name = req.body;
        // console.log(name);
        var file = name.filename;
        const final = file + ".txt";
        const content = name.filecontent;
        await fs.writeFile(path.join(__dirname, '/vipul', final), content, err => {
            if (err) throw err;
            //console.log("File created");
        })

    } catch (error) {
        console.log(error);
    }
});
app.post('/editfile', async (req, res) => {
    try {
        const name = req.body;
        var file = name.editfilename;
        const final = file + ".txt";
        const content = name.filecontent + " ";
        await fs.appendFile(path.join(__dirname, '/vipul', final), content, err => {
            if (err) throw err;
        })

    } catch (error) {

    }
});

app.post('/showfiles', async (req, res) => {
    var file1 = [];
    var count = 0;
    const directoryPath = path.join('./vipul');
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log(err);
        }
        files.forEach(function (file) {
            console.log(file);
            count = count + 1;
            file1.push(file);
        });

        console.log(file1);
        res.send(JSON.stringify(file1));
    });
});


app.post('/readuser1', async (req, res) => {
    try {
        const input = req.body;
        console.log(input);
        let output = await readAllUser.read(input.email);
        if (output == "") {
            console.log("sucess");
            res.send('1');
        } else {
            res.send('0');
        }
    } catch (err) {
        console.log(err.name);
    }
});

app.post('/deleteUser', async (req, res) => {
    try {

        const input = req.body.email;
        console.log(input);

        let result = await deleteuser.deleteUser(input);
        res.setHeader('Content-Type', 'application/json');
        res.send('1');
        res.end();

    } catch (err) {
        console.log(err.name);
    }
});

app.post('/readuser2', async (req, res) => {
    try {
        const input = req.body;
        console.log(input);
        let output = await readAllUser.read(input.e);
        console.log(output);
        if (output == "") {
            console.log("sucess");
            res.send('0');
        } else {
            res.send(output);
        }


    } catch (err) {
        console.log(err);
    }
});
app.listen(3000);
