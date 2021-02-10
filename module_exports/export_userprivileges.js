// START ----- USER PRIVILEGES
/*
const queryStringValidateCasePrivilege = "(SELECT userprivileges.view FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_ValidateCase+") AS validate_case_privilege, ";
			
const queryStringAddPatientPrivilege = "(SELECT userprivileges.add FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_AddPatient+") AS add_patient_privilege, ";

const queryStringEditPatientPrivilege = "(SELECT userprivileges.edit FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_EditPatient+") AS edit_patient_privilege, ";

const queryStringAddTBCasePrivilege = "(SELECT userprivileges.add FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_AddTBCase+") AS add_tbcase_privilege, ";

const queryStringEditTBCasePrivilege = "(SELECT userprivileges.edit FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_EditTBCase+") AS edit_tbcase_privilege ";
*/
// END ----- USER PRIVILEGES




const privileges = {};
const express = require('express');
const app = express();
const morgan = require ('morgan');
const mysql = require('mysql');
const https = require('https');
const http = require('http');
const fs = require("fs");




const host_name = 'localhost';
const host_user = 'root';
const host_password = '';

const database_itis = 'tbl_user';
const database_dashboard = 'itis_dashboard';


app.use(morgan('combined'));


const connection_to_itisdb = mysql.createConnection({
		host: host_name,
		user: host_user,
		password: host_password,
		database: database_itis
		
	});

const connection_to_itis_dashboard = mysql.createConnection({
		host: host_name,
		user: host_user,
		password: host_password,
		database: database_dashboard
		
	});

privileges.authorize = function(action,userfunctionID,userlevelID) {
	//console.log('Validate Case');
	//return action + " " + userfunctionID + " " + userlevelID;
	
	
	
	
	
	const privileges_action = action;
	const privileges_userfunctionID = userfunctionID;
	const privileges_userlevelID = userlevelID;
	
	
	const queryPrivileges = "SELECT * FROM userprivileges WHERE userlevelID = ? AND userfunctionID = ?";
	connection_to_itisdb.query(queryPrivileges, [userlevelID,userfunctionID], (err, rows, fields) => {

		
		const privilege_num = rows.length
		
		const privilege_view = rows[0].view;
		const privilege_add = rows[0].add;
		const privilege_edit = rows[0].edit;
		const privilege_delete = rows[0].delete;
		
		
		/*
		if (privileges_action == 'view'){ return privilege_view; }
		if (privileges_action == 'add'){ return privilege_add; }
		if (privileges_action == 'edit'){ return privilege_view; }
		if (privileges_action == 'delete'){ return privilege_delete; }
		*/
		return privilege_view;
		
	});
	
	
	
}


privileges.addpatient = function() {
	console.log('Add Patient');
}


privileges.editpatient = function() {
	console.log('Edit Patient');
}


privileges.addtbcase = function() {
	console.log('Add TB Case');
}


privileges.edittbcase = function() {
	console.log('Edit TB Case');
}



exports.data = privileges;