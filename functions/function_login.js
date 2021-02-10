/*
if (req.method === 'POST') {
        // Handle post info...
    }
    else {}
*/

const privilege_response = require('./module_exports/export_userprivileges.js');

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
			const state = '0'
			
			const userFunctionID_ValidateCase = '38'
			const userFunctionID_AddPatient = '13'
			const userFunctionID_EditPatient = '13'
			const userFunctionID_AddTBCase = '43'
			const userFunctionID_EditTBCase = '43'
			
		
			
			const queryString1 = "SELECT user.*, user.id AS userID, userlevels.userlevelName, hfacility.name AS defaultStationName ";
		
			const queryFromDB = "FROM user ";
			
			const queryInnerJoin1 = "INNER JOIN userlevels ON user.userlevel = userlevels.userlevelID ";
			
			const queryInnerJoin2 = "INNER JOIN hfacility ON user.defaultStation = hfacility.id ";
			
			const queryInnerJoin3 = "INNER JOIN userprivileges ";
			
			const queryWhere = "WHERE user.username = ? AND user.password = md5(?) AND state = ?";
			
			
			
			const queryString = queryString1 + queryFromDB + queryInnerJoin1 + queryInnerJoin2 + queryWhere
			connection_to_itisdb.query(queryString, [username,password,state], (err, rows, fields) => {

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
					const userlevel_val = rows[0].userlevel;
					
					
					
					const validateCasePriviliges = privilege_response.data.authorize("view",userFunctionID_ValidateCase,userlevel_val);
					
					console.log(validateCasePriviliges);
					
					const userValue = {'success': '{"USER_INFO":[{"ID": "'+userID_val+'","USERNAME": "'+username_val+'","NAME": "'+name_val+'","EMAIL": "'+email_val+'","STATE": "'+state_val+'","DEFAULT_STATION": "'+defaultStationName_val+'","ACCESS_LEVEL": "'+accessArea_val+'","USERLEVEL": "'+userlevelName_val+'","USER_VALIDATE_CASE_PRIVILEGE": "'+validateCasePriviliges+'","USER_ADD_PATIENT_PRIVILEGE": "add patient","USER_EDIT_PATIENT_PRIVILEGE": "edit patient","USER_ADD_TBCASE_PRIVILEGE": "add tb case","USER_EDIT_TBCASE_PRIVILEGE": "edit tb case"}]'}
					
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
	
	
	
	
	
	
	
	
	
	