app.post("/pushtbnotification", (req, res) => {
	
	
	
	//const jobj = (JSONObject).parse(inline);
	
	
	//const SYSTEM_KEY_REQ = req.body.SYSTEM_KEY
	console.log("Pushing TB Notification with System Key1: " + req.body);
	//console.log("Pushing TB Notification with System Key2: " + req.body.MOBILE_ID);
	
	
	
	/*
	const queryString = "SELECT * FROM dohsystems WHERE systemID = ?"
	connection_to_itisdb.query(queryString, [req.body.SYSTEM_KEY], (err, rows, fields) => {
		
		if (err) {
			console.log(err)
			res.sendStatus(500)
			throw err
			return
		} 
		
		const system_key_num = rows.length
		
		
		if (system_key_num == 1){
			
			const MOBILE_ID_REQ = req.body.MOBILE_ID
			
			/*
			const FACILITY_REQ = req.body.FACILITY
			const PHYSICIAN_REQ = req.body.PHYSICIAN
			const LAST_NAME_REQ = req.body.LAST_NAME
			const FIRST_NAME_REQ = req.bodyy.FIRST_NAME
			const MIDDLE_NAME_REQ = tbnotif.MIDDLE_NAME
			const NAME_EXTENSION_REQ = req.bodyy.NAME_EXTENSION
			const BIRTH_DATE_REQ = tbnotif.BIRTH_DATE
			const AGE_REQ = req.body.AGE
			const SEX_REQ = req.body.SEX
			const STREET_ADDRESS_REQ = req.body.STREET_ADDRESS
			const LOCATION_REQ = req.body.LOCATION
			const CONTACT_NUMBER_REQ = req.body.CONTACT_NUMBER
			const DATE_DIAGNOSED_REQ = req.body.DATE_DIAGNOSED
			const REG_GROUP_REQ = req.body.REG_GROUP
			const BACT_STATUS_REQ = req.body.BACT_STATUS
			const REFERRED_REQ = req.body.REFERRED
			const START_TX_DATE_REQ = req.body.START_TX_DATE
			const OUTCOME_REQ = req.body.OUTCOME
			const OUTCOME_DATE_REQ = req.body.OUTCOME_DATE
			const SUBMITTED_VIA_REQ = req.body.SUBMITTED_VIA
			const LAST_UPDATE_REQ = req.body.LAST_UPDATE
			const USER_ID_REQ = req.body.USER_ID
			
			
			
			const queryString = "INSERT INTO tb_notifications (mobileID) VALUES(?)"
			connection_to_tb_notification.query(queryString, [MOBILE_ID_REQ], (err, rows, fields) => {

				const tbnotif_num = rows.length
				
				
				if (tbnotif_num > 0){
				
					res.json(tbnotif_num);
					
				} else {
					
					res.json(tbnotif_num);
					
				}
				
				

			})
			
		} else {
			
			const invalid_system_key = 102
			res.json(invalid_system_key);
			
		}
		
		
		
		
	})
	
	*/
})