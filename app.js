// Return Codes
// 101 - Invalid Username and/or Password
// 102 - Invalid System Key
// 103 - Entered Invalid Username and/or Password or Session was Expired.
// 104 - Add
// 105 - Update

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const mysql = require('mysql');
const https = require('https');
const http = require('http');
const fs = require('fs');

const app = express();



const host_name = 'localhost'
const host_user = 'root'
const host_password = ''

const host_name_xpert = 'localhost'
const host_user_xpert = 'root'
const host_password_xpert = ''

const database_itis = 'itisdb2'
const database_dashboard = 'itis_dashboard'
const database_tb_notification = 'mandatory_notification';

/*
const host_name = 'localhost';
const host_user = 'root';
const host_password = '';

const database_itis = 'tbl_user';
const database_dashboard = 'itis_dashboard';
const database_tb_notification = 'mandatory_notification';
*/

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('combined'));

//app.use(morgan('short'));


const connection_to_itisdb = mysql.createConnection({
		host: host_name,
		user: host_user,
		password: host_password,
		database: database_itis,
		multipleStatements : true
	});

const connection_to_itisdb_xpert = mysql.createConnection({
		host: host_name_xpert,
		user: host_user_xpert,
		password: host_password_xpert,
		database: database_itis,
		multipleStatements : true
	});


const connection_to_itis_dashboard = mysql.createConnection({
		host: host_name,
		user: host_user,
		password: host_password,
		database: database_dashboard,
		multipleStatements : true
	});


const connection_to_tb_notification = mysql.createConnection({
		host: host_name,
		user: host_user,
		password: host_password,
		database: database_tb_notification,
		multipleStatements : true
	});



// Function Root
eval(fs.readFileSync('functions/function_root.js')+'');

// Function Dashboard
eval(fs.readFileSync('functions/function_dashboard.js')+'');

// Function Test
eval(fs.readFileSync('functions/function_test.js')+'');

// Function User
eval(fs.readFileSync('functions/function_user.js')+'');

// Function System Key
eval(fs.readFileSync('functions/function_systemkey.js')+'');

// Function Login Access for Other Systems
eval(fs.readFileSync('functions/function_login_access.js')+'');

// Function Login
eval(fs.readFileSync('functions/function_login.js')+'');

// Function GX Alert Push/Update
eval(fs.readFileSync('functions/function_push_gx_alert.js')+'');

// Function Xpert Push/Update
eval(fs.readFileSync('functions/function_push_xpert.js')+'');

// Function TB Notification Push
eval(fs.readFileSync('functions/function_push_tb_notification.js')+'');

// Function Health Facility List
eval(fs.readFileSync('functions/function_hfacility.js')+'');

// Function Health Facility List
eval(fs.readFileSync('functions/function_hfacility_list.js')+'');

// Function Patient Data
eval(fs.readFileSync('functions/function_patient_data.js') + '');

// Function Patient Data Push/Update
eval(fs.readFileSync('functions/function_push_patient_data.js') + '');

// Function Patient Data Push/Update
eval(fs.readFileSync('functions/function_push_patient_data_test.js') + '');

// Function Patient Data
eval(fs.readFileSync('functions/function_patient_data_bckup3.js') + '');

// localhost:3005
app.listen(3005, () => {
	console.log("Server is up and listening on 3005...");
});



