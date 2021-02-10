// Complete - MONTH - YEAR - INDICATOR ID
app.get("/hfacility_list/:system_key/current/:currentVal/offset/:offsetVal", (req, res) => {
	console.log("Fetching facility list with System Key: " + req.params.system_key);
	
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
			
			
			const current = Number(req.params.currentVal)
			const offset = Number(req.params.offsetVal)
			
			
				
			var queryString = "SELECT id, name, address, contact_number, gLocation, email, type, tcdots, latitude, longitude FROM itisdb.hfacility WHERE (parent_facility IS NULL AND tcdots != -1 AND implementation != 1) OR (id IN(SELECT DISTINCT facility_id FROM itis_dashboard.dashboard)) ORDER BY name ASC LIMIT ?, ?"
				
			
			
			
			
			connection_to_itisdb.query(queryString, [current,offset], (err, rows, fields) => {

				const hfacility_num = rows.length
				
				if (hfacility_num > 0){
				
					console.log("Fetched Health Facility successfully")

					const hfacilityValue = rows.map((row) => {
						return {FACILITY_ID: row.id,
							    FACILITY_PARENT_FACILITY: row.parent_facility,
							    FACILITY_NAME: row.name,
							    FACILITY_ABBREVIATION: row.abbreviation,
							    FACILITY_ADDRESS: row.address,
							    FACILITY_CONTACT_NUMBER: row.contact_number,
							    FACILITY_GLOCATION: row.gLocation,
							    FACILITY_LANDLINE: row.landline,
							    FACILITY_EMAIL: row.email,
							    FACILITY_DISTRICT: row.district,
							    FACILITY_TYPE: row.type,
							    FACILITY_TCDOTS: row.tcdots,
							    FACILITY_LATITUDE: row.latitude,
							    FACILITY_LONGITUDE: row.longitude,
							    FACILITY_NTP_FACILITY_CODE: row.ntp_faciltiy_code
						}
					
						
								// ------------- OPTIONAL FIELDS -----------
							    //FACILITY_DUPLICATE_OF: row.duplicate_of,
							   	//FACILITY_HFCODE: row.HFCODE,
								//FACILITY_FACILITY_ID: row.FACILITYID,
							    //FACILITY_STANDARD_ID: row.standardID,
							    //FACILITY_OTHER_ID: row.otherID,
							    //FACILITY_NTP_FACILITY_ID: row.ntp_facility_id,
							    //FACILITY_IMPLEMENTATION: row.implementation,
							    //FACILITY_ENGAGER: row.engager,
							    //FACILITY_ENGAGER_OTHERS: row.engager_others,
							    //FACILITY_ACTIVE: row.active,
							    //FACILITY_ONLINE: row.online,
							    //FACILITY_ZIP_CODE: row.zip_code,
							    //FACILITY_FAX: row.fax,
							    //FACILITY_TYPE_OTHERS: row.type_others,
							    //FACILITY_SERVICE_TYPE: row.service_type,
							    //FACILITY_PRIVATE: row.private,
							    //FACILITY_DATE_OPERATIONAL: row.date_operational,
							    //FACILITY_DATE_STOP_OPERATIONAL: row.date_stop_operational,
							    //FACILITY_DATE_TB_LAMP: row.date_tb_lamp,
							    //FACILITY_DATE_CULTURE: row.date_culture,
							    //FACILITY_DATE_XPERT: row.date_xpert,
							    //FACILITY_DATE_DST: row.date_dst,
							    //FACILITY_DATE_LPA: row.date_lpa,
							    //FACILITY_ADMINISTRATIVE_UNIT: row.adminstrative_unit,
							    //FACILITY_DATE_ACRCREDITED: row.date_accredited,
							    //FACILITY_DATE_CERTIFIED: row.date_certified,
							    //FACILITY_PPMD: row.ppmd,
							    //FACILITY_DSSM: row.dssm,
							    //FACILITY_TB_LAMP: row.tb_lamp,
							    //FACILITY_CULTURE: row.culture,
							    //FACILITY_GENEXPERT: row.genexpert,
							    //FACILITY_XPERT_MODULE: row.num_xpert_module,
							    //FACILITY_DST: row.dst,
							    //FACILITY_LPA: row.lpa,
							    //FACILITY_XRAY: row.xray,
							    //FACILITY_START_INVENTORY: row.start_inventory,
							    //FACILITY_SCHED: row.sched,
							    //FACILITY_LEVEL: row.hosp_level,
							    //FACILITY_CAPACITY: row.bed_capacity,
							    //FACILITY_OPERATIONS: row.operations,
							    //FACILITY_EXTENT_DMG: row.extent_dmg,
							    //FACILITY_CATEGORY: row.hiv_category,
							    //FACILITY_REPORTING_TO: row.reporting_to,
							    //FACILITY_REMARKS: row.remarks,
							    //FACILITY_USERID: row.userID,
							    //FACILITY_DATE_UPDATED: row.date_updated,
							    //FACILITY_DATE_HIV: row.date_hiv,
							    //FACILITY_HEALTH_WORKERS: row.health_workers,
							    //FACILITY_NTP_CODE: row.ntp_code,
						
						
					});

					res.json(hfacilityValue);
					
				} else {
					
					res.json(hfacility_num);
					
				}
				
				

			})
			
			
			
		} else {
			
			const invalid_system_key = 102
			res.json(invalid_system_key);
			
		}
		
		
		
		
	})
	
	
})






































