// MONTH - YEAR
app.get("/dashboard/:system_key/month/:month/year/:year", (req, res) => {
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
			
			const monthReq = req.params.month
			const yearReq = req.params.year
			const queryString = "SELECT * FROM dashboard WHERE month = ? AND year = ?"
			connection_to_itis_dashboard.query(queryString, [monthReq,yearReq], (err, rows, fields) => {

				const dashboard_num = rows.length
				
				if (dashboard_num > 0){
				
					console.log("Fetched Dashboard successfully")

					const dashboardValue = rows.map((row) => {
						return {FACILITY_ID: row.facility_id,
							    FACILITY_MONTH: row.month,
							   	FACILITY_YEAR: row.year,
								FACILITY_INDICATOR_ID: row.indicator_id,
							    FACILITY_VALUE: row.value}
					
						
						
					});

					res.json(dashboardValue);
					
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