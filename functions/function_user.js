app.get("/user/:username", (req, res) => {
	console.log("Fetching username: " + req.params.username)
	
	const username = req.params.username
	const queryString = "SELECT * FROM user WHERE username = ?"
	connection_to_itisdb.query(queryString, [username], (err, rows, fields) => {
		
		if (err) {
			console.log(err)
			res.sendStatus(500)
			throw err
			return
		} 
		
		const user_num = rows.length
		res.json(user_num)
		
		
		
		
		
		
		
	})
	
	
})