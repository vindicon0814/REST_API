//app.get("/patient_data/:systemkeyval/tb_case/:tb_case_val/patient_surname/:surname_val/voucher_code/:voucher_code_val", (req, res) => {
// app.get("/patient_data/:systemkeyval/patient_case_id/:tb_case_val/patient_lastname/:surname_val/voucher_code/:voucher_code_val", (req, res) => {
app.get("/pushpatientdata/:systemkeyval", (req, res) => {

    const systemkeyval = req.params.systemkeyval
    // const PATIENT_ID = req.params.patient_id_val
    // const PATIENT_TBCASE_ID = req.params.tb_case_val
    // const PATIENT_REGISTRATIONCODE = req.params.registration_code_val
    // const PATIENT_SURNAME = req.params.surname_val
    // const PATIENT_VOUCHER_CODE = req.params.voucher_code_val



    console.log("Fetching System Key: " + req.params.systemkeyval)


    const queryString = "SELECT * FROM dohsystems WHERE systemID = ?"
    connection_to_itisdb.query(queryString, [systemkeyval], (err, rows, fields) => {

        if (err) {
            console.log(err)
            res.sendStatus(500)
            throw err
            return
        }

        const systemkey_num = rows.length
        // res.json(systemkey_num)

        if (systemkey_num == 1) {


            // const PATIENT_ID = req.params.patient_id_val
            // const PATIENT_TB_CASE_ID = req.params.tb_case_id_val
            // //const PATIENT_SURNAME = req.params.surname_val 
            // const PATIENT_VOUCHER_CODE = req.params.voucher_code_val 

            const invalid_system_key = 'Welcome!!'
            res.json(invalid_system_key);

        } else {

            const invalid_system_key = 'Invalid System Key'
            res.json(invalid_system_key);

        }


    })


})
