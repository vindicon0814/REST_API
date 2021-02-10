
const NAME = "/NAME/:NAME";

app.get("/testspacing"+NAME, (req, res) => {
	console.log("Fetching dashboard with System Key: " + req.params.system_key);
	
	
	
	const NAME_REQ = req.params.NAME
    res.json(NAME_REQ);

			
	
	
})











































