// Return Codes
// 101 - Invalid Username and/or Password
// 102 - Invalid System Key
// 103 - Entered Invalid Username and/or Password or Session was Expired.

const express = require('express')
const app = express()
const morgan = require ('morgan')
const mysql = require('mysql')
const http = require('http')
const https = require('https')
const fs = require("fs")



app.use(morgan('combined'))

const connection_to_itisdb = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'tbl_user'
		
	})

const connection_to_itis_dashboard = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'itis_dashboard'
		
	})




// Function Dashboard
eval(fs.readFileSync('functions/function_dashboard.js')+'');



// localhost:3003
app.listen(3003, () => {
	console.log("Server is up and listening on 3003...")
})



