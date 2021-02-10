
const CASE_NUMBER_DIR = "/CASE_NUMBER/:CASE_NUMBER";
const SPECIMEN_CODE_DIR = "/SPECIMEN_CODE/:SPECIMEN_CODE";
const REQUESTING_FACILITY_DIR = "/REQUESTING_FACILITY/:REQUESTING_FACILITY";
const DATE_REQUESTED_DIR = "/DATE_REQUESTED/:DATE_REQUESTED";
const REQUESTING_PHYSICIAN_DIR = "/REQUESTING_PHYSICIAN/:REQUESTING_PHYSICIAN";
const LAST_NAME_DIR = "/LAST_NAME/:LAST_NAME";
const FIRST_NAME_DIR = "/FIRST_NAME/:FIRST_NAME";
const MIDDLE_NAME_DIR = "/MIDDLE_NAME/:MIDDLE_NAME";
const AGE_DIR = "/AGE/:AGE";
const STREET_ADDRESS_DIR = "/STREET_ADDRESS/:STREET_ADDRESS";
const GEO_LOCATION_DIR = "/GEO_LOCATION/:GEO_LOCATION";
const SEX_DIR = "/SEX/:SEX";
const MOBILE_NUMBER_DIR = "/MOBILE_NUMBER/:MOBILE_NUMBER";
const LANDLINE_DIR = "/LANDLINE/:LANDLINE";
const EMAIL_DIR = "/EMAIL/:EMAIL";
const REASON_FOR_EXAMINATION_DIR = "/REASON_FOR_EXAMINATION/:REASON_FOR_EXAMINATION";
const REGISTRATION_GROUP_DIR = "/REGISTRATION_GROUP/:REGISTRATION_GROUP";
const SPECIMEN_TYPE_DIR = "/SPECIMEN_TYPE/:SPECIMEN_TYPE";
const REPEAT_COLLECTION_DIR = "/REPEAT_COLLECTION/:REPEAT_COLLECTION";
const PRESUMPTIVE_DSDR_TB_DIR = "/PRESUMPTIVE_DSDR_TB/:PRESUMPTIVE_DSDR_TB";
const SPECIMEN_COLLECTION_DATE_DIR = "/SPECIMEN_COLLECTION_DATE/:SPECIMEN_COLLECTION_DATE";
const VISUAL_APPEARANCE_DIR = "/VISUAL_APPEARANCE/:VISUAL_APPEARANCE";
const RESULT_MTB_DIR = "/RESULT_MTB/:RESULT_MTB";
const RESULT_RIF_DIR = "/RESULT_RIF/:RESULT_RIF";
const RELEASE_DATE_DIR = "/RELEASE_DATE/:RELEASE_DATE";
const PERFORMED_BY_DIR = "/PERFORMED_BY/:PERFORMED_BY";
const LAST_UPDATE_DIR = "/LAST_UPDATE/:LAST_UPDATE";
const SENDER_DIR = "/SENDER/:SENDER";

app.get("/pushgxalert/:SYSTEM_KEY"
		+ CASE_NUMBER_DIR
		+ SPECIMEN_CODE_DIR
		+ REQUESTING_FACILITY_DIR
		+ DATE_REQUESTED_DIR
		+ REQUESTING_PHYSICIAN_DIR
		+ LAST_NAME_DIR
		+ FIRST_NAME_DIR
		+ MIDDLE_NAME_DIR
		+ AGE_DIR
		+ STREET_ADDRESS_DIR
		+ GEO_LOCATION_DIR
		+ SEX_DIR
		+ MOBILE_NUMBER_DIR
		+ LANDLINE_DIR
		+ EMAIL_DIR
		+ REASON_FOR_EXAMINATION_DIR
		+ REGISTRATION_GROUP_DIR
		+ SPECIMEN_TYPE_DIR
		+ REPEAT_COLLECTION_DIR
		+ PRESUMPTIVE_DSDR_TB_DIR
		+ SPECIMEN_COLLECTION_DATE_DIR
		+ VISUAL_APPEARANCE_DIR
		+ RESULT_MTB_DIR
		+ RESULT_RIF_DIR
		+ RELEASE_DATE_DIR
		+ PERFORMED_BY_DIR
		+ LAST_UPDATE_DIR
		+ SENDER_DIR, (req, res) => {
	console.log("Fetching dashboard with System Key: " + req.params.system_key);
	
	
	
	const SYSTEM_KEY_REQ = req.params.SYSTEM_KEY
	const CASE_NUMBER_REQ = req.params.CASE_NUMBER
	const SPECIMEN_CODE_REQ = req.params.SPECIMEN_CODE

	const REQUESTING_FACILITY_REQ = req.params.REQUESTING_FACILITY
	if(REQUESTING_FACILITY_REQ == null || REQUESTING_FACILITY_REQ.toUpperCase() == 'NULL'){ var REQUESTING_FACILITY_VALUE = '' }
	else{ var REQUESTING_FACILITY_VALUE = req.params.REQUESTING_FACILITY }

	const DATE_REQUESTED_REQ = req.params.DATE_REQUESTED
	if(DATE_REQUESTED_REQ == null || DATE_REQUESTED_REQ.toUpperCase() == 'NULL'){ var DATE_REQUESTED_VALUE = '0000-00-00' }
	else{ var DATE_REQUESTED_VALUE = req.params.DATE_REQUESTED }

	const REQUESTING_PHYSICIAN_REQ = req.params.REQUESTING_PHYSICIAN
	if(REQUESTING_PHYSICIAN_REQ == null || REQUESTING_PHYSICIAN_REQ.toUpperCase() == 'NULL'){ var REQUESTING_PHYSICIAN_VALUE = '' }
	else{ var REQUESTING_PHYSICIAN_VALUE = req.params.REQUESTING_PHYSICIAN }

	const LAST_NAME_REQ = req.params.LAST_NAME
	if(LAST_NAME_REQ == null || LAST_NAME_REQ.toUpperCase() == 'NULL'){ var LAST_NAME_VALUE = '' }
	else{ var LAST_NAME_VALUE = req.params.LAST_NAME }

	const FIRST_NAME_REQ = req.params.FIRST_NAME
	if(FIRST_NAME_REQ == null || FIRST_NAME_REQ.toUpperCase() == 'NULL'){ var FIRST_NAME_VALUE = '' }
	else{ var FIRST_NAME_VALUE = req.params.FIRST_NAME }

	const MIDDLE_NAME_REQ = req.params.MIDDLE_NAME
	if(MIDDLE_NAME_REQ == null || MIDDLE_NAME_REQ.toUpperCase() == 'NULL'){ var MIDDLE_NAME_VALUE = '' }
	else{ var MIDDLE_NAME_VALUE = req.params.MIDDLE_NAME }

	const AGE_REQ = req.params.AGE
	if(AGE_REQ == null || AGE_REQ.toUpperCase() == 'NULL'){ var AGE_VALUE = '' }
	else{ var AGE_VALUE = req.params.AGE }

	const STREET_ADDRESS_REQ = req.params.STREET_ADDRESS
	if(STREET_ADDRESS_REQ == null || STREET_ADDRESS_REQ.toUpperCase() == 'NULL'){ var STREET_ADDRESS_VALUE = '' }
	else{ var STREET_ADDRESS_VALUE = req.params.STREET_ADDRESS }

	const GEO_LOCATION_REQ = req.params.GEO_LOCATION
	if(GEO_LOCATION_REQ == null || GEO_LOCATION_REQ.toUpperCase() == 'NULL'){ var GEO_LOCATION_VALUE = '' }
	else{ var GEO_LOCATION_VALUE = req.params.GEO_LOCATION }

	const SEX_REQ = req.params.SEX
	if(SEX_REQ == null || SEX_REQ.toUpperCase() == 'NULL'){ var SEX_VALUE = '' }
	else{ var SEX_VALUE = req.params.SEX }
	
	const MOBILE_NUMBER_REQ = req.params.MOBILE_NUMBER
	if(MOBILE_NUMBER_REQ == null || MOBILE_NUMBER_REQ.toUpperCase() == 'NULL'){ var MOBILE_NUMBER_VALUE = '' }
	else{ var MOBILE_NUMBER_VALUE = req.params.MOBILE_NUMBER }

	const LANDLINE_REQ = req.params.LANDLINE
	if(LANDLINE_REQ == null || LANDLINE_REQ.toUpperCase() == 'NULL'){ var LANDLINE_VALUE = '' }
	else{ var LANDLINE_VALUE = req.params.LANDLINE }

	const EMAIL_REQ = req.params.EMAIL
	if(EMAIL_REQ == null || EMAIL_REQ.toUpperCase() == 'NULL'){ var EMAIL_VALUE = '' }
	else{ var EMAIL_VALUE = req.params.EMAIL }

	const REASON_FOR_EXAMINATION_REQ = req.params.REASON_FOR_EXAMINATION
	if(REASON_FOR_EXAMINATION_REQ == null || REASON_FOR_EXAMINATION_REQ.toUpperCase() == 'NULL'){ var REASON_FOR_EXAMINATION_VALUE = '' }
	else{ var REASON_FOR_EXAMINATION_VALUE = req.params.REASON_FOR_EXAMINATION }

	const REGISTRATION_GROUP_REQ = req.params.REGISTRATION_GROUP
	if(REGISTRATION_GROUP_REQ == null || REGISTRATION_GROUP_REQ.toUpperCase() == 'NULL'){ var REGISTRATION_GROUP_VALUE = '' }
	else{ var REGISTRATION_GROUP_VALUE = req.params.REGISTRATION_GROUP }

	const SPECIMEN_TYPE_REQ = req.params.SPECIMEN_TYPE
	if(SPECIMEN_TYPE_REQ == null || SPECIMEN_TYPE_REQ.toUpperCase() == 'NULL'){ var SPECIMEN_TYPE_VALUE = '' }
	else{ var SPECIMEN_TYPE_VALUE = req.params.SPECIMEN_TYPE }

	const REPEAT_COLLECTION_REQ = req.params.REPEAT_COLLECTION
	if(REPEAT_COLLECTION_REQ == null || REPEAT_COLLECTION_REQ.toUpperCase() == 'NULL'){ var REPEAT_COLLECTION_VALUE = '' }
	else{ var REPEAT_COLLECTION_VALUE = req.params.REPEAT_COLLECTION }

	const PRESUMPTIVE_DSDR_TB_REQ = req.params.PRESUMPTIVE_DSDR_TB
	if(PRESUMPTIVE_DSDR_TB_REQ == null || PRESUMPTIVE_DSDR_TB_REQ.toUpperCase() == 'NULL'){ var PRESUMPTIVE_DSDR_TB_VALUE = '' }
	else{ var PRESUMPTIVE_DSDR_TB_VALUE = req.params.PRESUMPTIVE_DSDR_TB }

	const SPECIMEN_COLLECTION_DATE_REQ = req.params.SPECIMEN_COLLECTION_DATE
	if(SPECIMEN_COLLECTION_DATE_REQ == null || SPECIMEN_COLLECTION_DATE_REQ.toUpperCase() == 'NULL'){ var SPECIMEN_COLLECTION_DATE_VALUE = '0000-00-00' }
	else{ var SPECIMEN_COLLECTION_DATE_VALUE = req.params.SPECIMEN_COLLECTION_DATE }

	const VISUAL_APPEARANCE_REQ = req.params.VISUAL_APPEARANCE
	if(VISUAL_APPEARANCE_REQ == null || VISUAL_APPEARANCE_REQ.toUpperCase() == 'NULL'){ var VISUAL_APPEARANCE_VALUE = '' }
	else{ var VISUAL_APPEARANCE_VALUE = req.params.VISUAL_APPEARANCE }

	const RESULT_MTB_REQ = req.params.RESULT_MTB
	if(RESULT_MTB_REQ == null || RESULT_MTB_REQ.toUpperCase() == 'NULL'){ var RESULT_MTB_VALUE = '' }
	else{ var RESULT_MTB_VALUE = req.params.RESULT_MTB }

	const RESULT_RIF_REQ = req.params.RESULT_RIF
	if(RESULT_RIF_REQ == null || RESULT_RIF_REQ.toUpperCase() == 'NULL'){ var RESULT_RIF_VALUE = '' }
	else{ var RESULT_RIF_VALUE = req.params.RESULT_RIF }

	const RELEASE_DATE_REQ = req.params.RELEASE_DATE
	if(RELEASE_DATE_REQ == null || RELEASE_DATE_REQ.toUpperCase() == 'NULL'){ var RELEASE_DATE_VALUE = '0000-00-00' }
	else{ var RELEASE_DATE_VALUE = req.params.RELEASE_DATE }

	const PERFORMED_BY_REQ = req.params.PERFORMED_BY
	if(PERFORMED_BY_REQ == null || PERFORMED_BY_REQ.toUpperCase() == 'NULL'){ var PERFORMED_BY_VALUE = '' }
	else{ var PERFORMED_BY_VALUE = req.params.PERFORMED_BY }

	const LAST_UPDATE_REQ = req.params.LAST_UPDATE
	if(LAST_UPDATE_REQ == null || LAST_UPDATE_REQ.toUpperCase() == 'NULL'){ var LAST_UPDATE_VALUE = '0000-00-00' }
	else{ var LAST_UPDATE_VALUE = req.params.LAST_UPDATE }

	const SENDER_REQ = req.params.SENDER
	if(SENDER_REQ == null || SENDER_REQ.toUpperCase() == 'NULL'){ var SENDER_VALUE = '' }
	else{ var SENDER_VALUE = req.params.SENDER }

	
	
	const queryString = "SELECT * FROM dohsystems WHERE systemID = ?"
	connection_to_itisdb.query(queryString, [SYSTEM_KEY_REQ], (err, rows, fields) => {
		
		if (err) {
			console.log(err)
			res.sendStatus(500)
			throw err
			return
		} 
		
		const system_key_num = rows.length
		
		
		if (system_key_num == 1){
			
			
			
			if(CASE_NUMBER_REQ == null || CASE_NUMBER_REQ.toUpperCase() == 'NULL' || SPECIMEN_CODE_REQ == null || SPECIMEN_CODE_REQ.toUpperCase() == 'NULL'){

				const message = 'Case Number and/or Specimen Code cannot be empty.'
				res.json(message);

			}else{

				const queryString = "SELECT * FROM xpert_test_api WHERE case_number = ? AND specimen_code = ?"
				connection_to_itisdb.query(queryString, [
					CASE_NUMBER_REQ,
					SPECIMEN_CODE_REQ], (err, rows, fields) => {
				
					const xpert_num = rows.length

					if (xpert_num == 1){

						const queryString = "UPDATE xpert_test_api SET " 
											+ "requesting_facility = ?,"
											+ "date_requested = ?,"
											+ "requesting_physician = ?,"
											+ "last_name = ?,"
											+ "first_name = ?,"
											+ "middle_name = ?,"
											+ "age = ?,"
											+ "street_address = ?,"
											+ "geo_location = ?,"
											+ "sex = ?,"
											+ "mobile_number = ?,"
											+ "landline = ?,"
											+ "email = ?,"
											+ "reason_for_examination = ?,"
											+ "registration_group = ?," 
											+ "specimen_type = ?," 
											+ "repeat_collection = ?," 
											+ "presumptive_dsdr_tb = ?," 
											+ "specimen_collection_date = ?," 
											+ "visual_appearance = ?," 
											+ "result_mtb = ?," 
											+ "result_rif = ?," 
											+ "release_date = ?," 
											+ "performed_by = ?," 
											+ "last_updated = ?," 
											+ "sender = ?" 
											+ " WHERE case_number = ? AND specimen_code = ?"
						connection_to_itisdb.query(queryString, 
							[
								REQUESTING_FACILITY_VALUE, 
								DATE_REQUESTED_VALUE, 
								REQUESTING_PHYSICIAN_VALUE, 
								LAST_NAME_VALUE,
								FIRST_NAME_VALUE,
								MIDDLE_NAME_VALUE,
								AGE_VALUE,
								STREET_ADDRESS_VALUE,
								GEO_LOCATION_VALUE,
								SEX_VALUE,
								MOBILE_NUMBER_VALUE,
								LANDLINE_VALUE,
								EMAIL_VALUE,
								REASON_FOR_EXAMINATION_VALUE,
								REGISTRATION_GROUP_VALUE,
								SPECIMEN_TYPE_VALUE,
								REPEAT_COLLECTION_VALUE,
								PRESUMPTIVE_DSDR_TB_VALUE,
								SPECIMEN_COLLECTION_DATE_VALUE,
								VISUAL_APPEARANCE_VALUE,
								RESULT_MTB_VALUE,
								RESULT_RIF_VALUE,
								RELEASE_DATE_VALUE,
								PERFORMED_BY_VALUE,
								LAST_UPDATE_VALUE,
								SENDER_VALUE,
								CASE_NUMBER_REQ, 
								SPECIMEN_CODE_REQ
							], (err, results, fields) => {
							
							
							if(err){
								const message = 'Update Error'
								res.json(message);
							}else{
								console.log("Update GXAlert successfully")

								const message = 'Update GXAlert successfully'
								res.json(message);
							}


						})

						

					}else{

						const queryString = "INSERT INTO xpert_test_api ("
											+ "case_number,"
											+ "specimen_code,"
											+ "requesting_facility,"
											+ "date_requested,"
											+ "requesting_physician,"
											+ "last_name,"
											+ "first_name,"
											+ "middle_name,"
											+ "age,"
											+ "street_address,"
											+ "geo_location,"
											+ "sex,"
											+ "mobile_number,"
											+ "landline,"
											+ "email,"
											+ "reason_for_examination," 
											+ "registration_group," 
											+ "specimen_type," 
											+ "repeat_collection," 
											+ "presumptive_dsdr_tb," 
											+ "specimen_collection_date," 
											+ "visual_appearance," 
											+ "result_mtb," 
											+ "result_rif," 
											+ "release_date," 
											+ "performed_by," 
											+ "last_updated," 
											+ "sender" 
											+ ") VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
						connection_to_itisdb.query(queryString, 
							[
								CASE_NUMBER_REQ, 
								SPECIMEN_CODE_REQ, 
								REQUESTING_FACILITY_VALUE, 
								DATE_REQUESTED_VALUE, 
								REQUESTING_PHYSICIAN_VALUE, 
								LAST_NAME_VALUE,
								FIRST_NAME_VALUE,
								MIDDLE_NAME_VALUE,
								AGE_VALUE,
								STREET_ADDRESS_VALUE,
								GEO_LOCATION_VALUE,
								SEX_VALUE,
								MOBILE_NUMBER_VALUE,
								LANDLINE_VALUE,
								EMAIL_VALUE,
								REASON_FOR_EXAMINATION_VALUE,
								REGISTRATION_GROUP_VALUE,
								SPECIMEN_TYPE_VALUE,
								REPEAT_COLLECTION_VALUE,
								PRESUMPTIVE_DSDR_TB_VALUE,
								SPECIMEN_COLLECTION_DATE_VALUE,
								VISUAL_APPEARANCE_VALUE,
								RESULT_MTB_VALUE,
								RESULT_RIF_VALUE,
								RELEASE_DATE_VALUE,
								PERFORMED_BY_VALUE,
								LAST_UPDATE_VALUE,
								SENDER_VALUE
							], (err, results, fields) => {
							
							
							if(err){
								const message = 'Add Error'
								res.json(message);
							}else{
								console.log("Add GXAlert successfully")

								const message = 'Add GXAlert successfully'
								res.json(message);
							}


						})

						

					}

				})

			}

			
			
			
			
			
		} else {
			
			const message = 102  // 102 - Invalid System Key
			res.json(message);
			
		}
		
		
		
		
	})
	
	
})











































