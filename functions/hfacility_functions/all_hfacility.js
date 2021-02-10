// Complete - MONTH - YEAR - INDICATOR ID
app.get("/hfacility/:system_key/parent_facility/:parent_facility", (req, res) => {
	console.log("Fetching dashboard with System Key: " + req.params.system_key);
	
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
			
			// 1 = yes
			// 0 = no
			const parentFacilityReq = req.params.parent_facility
			
			
			if (parentFacilityReq == 1){
					
				var queryString = "SELECT * FROM hfacility ORDER BY name ASC"
				
			}else if (parentFacilityReq == 0){
				
				var queryString = "SELECT * FROM hfacility WHERE parent_facility IS NULL ORDER BY name"
				
			}else{}
			
			
			
			connection_to_itisdb.query(queryString, [], (err, rows, fields) => {

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

