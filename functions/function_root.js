app.get("/PING_API", (req, res) => {
	console.log("Responding to root route")
	res.send("Hello. I am gROOT and Connection is Established")	
})