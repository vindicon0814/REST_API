const MOBILE_ID_DIR = "/MOBILE_ID/:MOBILE_ID";
const FACILITY_DIR = "/FACILITY/:FACILITY";
const PHYSICIAN_DIR = "/PHYSICIAN/:PHYSICIAN";
const LAST_NAME_DIR = "/LAST_NAME/:LAST_NAME";
const FIRST_NAME_DIR = "/FIRST_NAME/:FIRST_NAME";
const MIDDLE_NAME_DIR = "/MIDDLE_NAME/:MIDDLE_NAME";
const NAME_EXTENSION_DIR = "/NAME_EXTENSION/:NAME_EXTENSION";
const BIRTH_DATE_DIR = "/BIRTH_DATE/:BIRTH_DATE";
const AGE_DIR = "/AGE/:AGE";
const SEX_DIR = "/SEX/:SEX";
const STREET_ADDRESS_DIR = "/STREET_ADDRESS/:STREET_ADDRESS";
const LOCATION_DIR = "/LOCATION/:LOCATION";
const CONTACT_NUMBER_DIR = "/CONTACT_NUMBER/:CONTACT_NUMBER";
const DATE_DIAGNOSED_DIR = "/DATE_DIAGNOSED/:DATE_DIAGNOSED";
const REG_GROUP_DIR = "/REG_GROUP/:REG_GROUP";
const BACT_STATUS_DIR = "/BACT_STATUS/:BACT_STATUS";
const REFERRED_DIR = "/REFERRED/:REFERRED";
const START_TX_DATE_DIR = "/START_TX_DATE/:START_TX_DATE";
const OUTCOME_DIR = "/OUTCOME/:OUTCOME";
const OUTCOME_DATE_DIR = "/OUTCOME_DATE/:OUTCOME_DATE";
const SUBMITTED_VIA_DIR = "/SUBMITTED_VIA/:SUBMITTED_VIA";
const LAST_UPDATE_DIR = "/LAST_UPDATE/:LAST_UPDATE";
const USER_ID_DIR = "/USER_ID/:USER_ID";

app.get("/pushtbnotification/:SYSTEM_KEY"
		+ MOBILE_ID_DIR
		+ FACILITY_DIR
		+ PHYSICIAN_DIR
		+ LAST_NAME_DIR
		+ FIRST_NAME_DIR
		+ MIDDLE_NAME_DIR
		+ NAME_EXTENSION_DIR
		+ BIRTH_DATE_DIR
		+ AGE_DIR
		+ SEX_DIR
		+ STREET_ADDRESS_DIR
		+ LOCATION_DIR
		+ CONTACT_NUMBER_DIR
		+ DATE_DIAGNOSED_DIR
		+ REG_GROUP_DIR
		+ BACT_STATUS_DIR
		+ REFERRED_DIR
		+ START_TX_DATE_DIR
		+ OUTCOME_DIR
		+ OUTCOME_DATE_DIR
		+ SUBMITTED_VIA_DIR
		+ LAST_UPDATE_DIR
		+ USER_ID_DIR
		, (req, res) => {
	console.log("Pushing TB Notification with System Key: " + req.params.SYSTEM_KEY);
	
	
	
	const SYSTEM_KEY_REQ = req.params.SYSTEM_KEY
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
			
			const MOBILE_ID_REQ = req.params.MOBILE_ID
			const FACILITY_REQ = req.params.FACILITY
			const PHYSICIAN_REQ = req.params.PHYSICIAN
			const LAST_NAME_REQ = req.params.LAST_NAME
			const FIRST_NAME_REQ = req.params.FIRST_NAME
			const MIDDLE_NAME_REQ = req.params.MIDDLE_NAME
			const NAME_EXTENSION_REQ = req.params.NAME_EXTENSION
			const BIRTH_DATE_REQ = req.params.BIRTH_DATE
			const AGE_REQ = req.params.AGE
			const SEX_REQ = req.params.SEX
			const STREET_ADDRESS_REQ = req.params.STREET_ADDRESS
			const LOCATION_REQ = req.params.LOCATION
			const CONTACT_NUMBER_REQ = req.params.CONTACT_NUMBER
			const DATE_DIAGNOSED_REQ = req.params.DATE_DIAGNOSED
			const REG_GROUP_REQ = req.params.REG_GROUP
			const BACT_STATUS_REQ = req.params.BACT_STATUS
			const REFERRED_REQ = req.params.REFERRED
			const START_TX_DATE_REQ = req.params.START_TX_DATE
			const OUTCOME_REQ = req.params.OUTCOME
			const OUTCOME_DATE_REQ = req.params.OUTCOME_DATE
			const SUBMITTED_VIA_REQ = req.params.SUBMITTED_VIA
			const LAST_UPDATE_REQ = req.params.LAST_UPDATE
			const USER_ID_REQ = req.params.USER_ID
			const queryString = "INSERT INTO tb_notifications ("
								+ "mobileID,"
								+ "facility,"
								+ "physician,"
								+ "last_name,"
								+ "first_name,"
								+ "middle_name,"
								+ "name_extension,"
								+ "birth_date,"
								+ "age,"
								+ "sex,"
								+ "street_address,"
								+ "location,"
								+ "contact_number,"
								+ "date_diagnosed,"
								+ "reg_group,"
								+ "bact_status,"
								+ "referred,"
								+ "start_tx_date,"
								+ "outcome,"
								+ "outcome_date,"
								+ "submitted_via,"
								+ "last_update,"
								+ "userID"
								+ ") "
								+ "VALUES("
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?,"
								+ "?"
								+ ") "
			connection_to_tb_notification.query(queryString, 
												[
													MOBILE_ID_REQ,
													FACILITY_REQ,
													PHYSICIAN_REQ,
													LAST_NAME_REQ,
													FIRST_NAME_REQ,
													MIDDLE_NAME_REQ,
													NAME_EXTENSION_REQ,
													BIRTH_DATE_REQ,
													AGE_REQ,
													SEX_REQ,
													STREET_ADDRESS_REQ,
													LOCATION_REQ,
													CONTACT_NUMBER_REQ,
													DATE_DIAGNOSED_REQ,
													REG_GROUP_REQ,
													BACT_STATUS_REQ,
													REFERRED_REQ,
													START_TX_DATE_REQ,
													OUTCOME_REQ,
													OUTCOME_DATE_REQ,
													SUBMITTED_VIA_REQ,
													LAST_UPDATE_REQ,
													USER_ID_REQ
												], (err, rows, fields) => {

				const dashboard_num = rows.length
				
				if (dashboard_num > 0){
				
					console.log("Fetched Dashboard successfully")

					res.json(dashboard_num);
					
				} else {
					
					res.json(dashboard_num);
					
				}
				
				

			})
			
			
			
		} else {
			
			const invalid_system_key = 102
			res.json(invalid_system_key);
			
		}
		
		
		
		
	})
	
	
})