app.get("/testfunction/:systemkeyval", (req, res) => {
	console.log("Fetching System Key: " + req.params.systemkeyval)
	
	const systemkeyval= req.params.systemkeyval
	const queryString = "SELECT * FROM dohsystems WHERE systemID = ?"
	connection_to_itisdb.query(queryString, [systemkeyval], (err, rows, fields) => {
		
		if (err) {
			console.log(err)
			res.sendStatus(500)
			throw err
			return
		} 
		
		const systemkey_num = rows.length
		res.json(systemkey_num)
		
		
		
		
		
		
		
	})
	
	
})
