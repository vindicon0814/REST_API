/*
if (req.method === 'POST') {
        // Handle post info...
    }
    else {}
*/



app.get("/login/:system_key/:username/:password", (req, res) => {
	console.log("Fetching username: " + req.params.username)
	
	const systemKey = req.params.system_key
	const queryString = "SELECT * FROM dohsystems WHERE systemID = ?"
	connection_to_itisdb.query(queryString, [systemKey], (err, rows, fields) => {
		
		if (err) {
			console.log(err)
			res.sendStatus(500)
			throw err
			return
		} 
		
		const system_key_num = rows.length
		
		
		if (system_key_num == 1){
			
			const username = req.params.username
			const password = req.params.password
			
			const userFunctionID_ValidateCase = '38'
			const userFunctionID_AddPatient = '13'
			const userFunctionID_EditPatient = '13'
			const userFunctionID_AddTBCase = '43'
			const userFunctionID_EditTBCase = '43'
			//const queryString = "SELECT * FROM user WHERE username = ? AND password = md5(?)"
			
			const queryString1 = "SELECT user.*, user.id AS userID, userlevels.userlevelName, userprivileges.*, hfacility.name AS defaultStationName, ";
			
			
			
			
			
			// START ----- USER PRIVILEGES
			const queryStringValidateCasePrivilege = "(SELECT userprivileges.view FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_ValidateCase+") AS validate_case_privilege, ";
			
			const queryStringAddPatientPrivilege = "(SELECT userprivileges.add FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_AddPatient+") AS add_patient_privilege, ";

			const queryStringEditPatientPrivilege = "(SELECT userprivileges.edit FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_EditPatient+") AS edit_patient_privilege, ";

			const queryStringAddTBCasePrivilege = "(SELECT userprivileges.add FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_AddTBCase+") AS add_tbcase_privilege, ";

			const queryStringEditTBCasePrivilege = "(SELECT userprivileges.edit FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_EditTBCase+") AS edit_tbcase_privilege ";
			// END ----- USER PRIVILEGES
			
			
		
			const queryFromDB = "FROM user ";
			
			const queryInnerJoin1 = "INNER JOIN userlevels ON user.userlevel = userlevels.userlevelID ";
			
			const queryInnerJoin2 = "INNER JOIN hfacility ON user.defaultStation = hfacility.id ";
			
			const queryInnerJoin3 = "INNER JOIN userprivileges ";
			
			const queryWhere = "WHERE user.username = ? AND user.password = md5(?)";
			
			
			
			const queryString = queryString1 + queryStringValidateCasePrivilege + queryStringAddPatientPrivilege + queryStringEditPatientPrivilege + queryStringAddTBCasePrivilege + queryStringEditTBCasePrivilege + queryFromDB + queryInnerJoin1 + queryInnerJoin2 + queryInnerJoin3 + queryWhere
			connection_to_itisdb.query(queryString, [username,password], (err, rows, fields) => {

				if (err) {
					console.log(err)
					res.sendStatus(500)
					throw err
					return
				} 
				
				
				const user_num = rows.length
				
				
				if (user_num > 0){
					
					
					console.log("Fetched User successfully")
					const userInfo = rows
					console.log(userInfo)
					
					
					const userID_val = rows[0].id;
					const username_val = rows[0].username;
					const name_val = rows[0].name;
					const email_val = rows[0].email;
					const state_val = rows[0].state;
					const defaultStationName_val = rows[0].defaultStationName;
					const accessArea_val = rows[0].accessArea;
					const userlevelName_val = rows[0].userlevelName;
					const userprivilegeValidateCase_val = rows[0].validate_case_privilege;
					const userprivilegeAddPatient_val = rows[0].add_patient_privilege;
					const userprivilegeEditPatient_val = rows[0].edit_patient_privilege;
					const userprivilegeAddTBCase_val = rows[0].add_tbcase_privilege;
					const userprivilegeEditTBCase_val = rows[0].edit_tbcase_privilege;
					
					
					/*
					const userValue = rows.map((row) => {
						return {USER_INFO:[{"ID": row.id, 
											"USERNAME": row.username, 
											"NAME": row.name, 
											"EMAIL": row.email, 
											"STATE": row.state, 
											"DEFAULT_STATION": row.defaultStationName, 
											"ACCESS_AREA": row.accessArea, 
											"USERLEVEL": row.userlevelName}]}
					
						
					});
					*/
					
					const userValue = {'success': '{"USER_INFO":[{"ID": "'+userID_val+'","USERNAME": "'+username_val+'","NAME": "'+name_val+'","EMAIL": "'+email_val+'","STATE": "'+state_val+'","DEFAULT_STATION": "'+defaultStationName_val+'","ACCESS_AREA": "'+accessArea_val+'","USERLEVEL": "'+userlevelName_val+'","USER_VALIDATE_CASE_PRIVILEGE": "'+userprivilegeValidateCase_val+'","USER_ADD_PATIENT_PRIVILEGE": "'+userprivilegeAddPatient_val+'","USER_EDIT_PATIENT_PRIVILEGE": "'+userprivilegeEditPatient_val+'","USER_ADD_TBCASE_PRIVILEGE": "'+userprivilegeAddTBCase_val+'","USER_EDIT_TBCASE_PRIVILEGE": "'+userprivilegeEditTBCase_val+'"}]'}
					
					res.json(userValue);
					
					
				} else {
					
					res.json(user_num)
					
				}
				
				
				//res.json(user_num)


			})
			
			
			
		} else {
			
			const invalid_system_key = 102
			res.json(invalid_system_key)
			
		}
		
		
		
		
	})
	
	
})
	
	
	
	
	
	
	
	
	
	