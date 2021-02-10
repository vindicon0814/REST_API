//app.get("/patient_data/:systemkeyval/tb_case/:tb_case_va/surname/:surname_val/voucher_code/:voucher_code_val", (req, res)
app.get("/patient_data_bckup/:systemkeyval/patient_id/:patient_id_val", (req, res) => {

    const systemkeyval = req.params.systemkeyval

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

        if (systemkey_num == 1){

            const PATIENT_ID = req.params.patient_id_val

            const Patient_dataquery = "SELECT * FROM patient WHERE patientID = ?"
            connection_to_itisdb.query(Patient_dataquery, [PATIENT_ID], (err,rows,fields) => {

                const count_patient_rows = rows.length

                if (count_patient_rows==1) {

                    console.log("Fetching of Patient Data is Successfull.")

                    var patient_data_return = rows.map((row) => {

                        return  {PATIENT_ID: row.patientID,
                            BIRTHDATE: row.birthDate,
                            BIRTHPLACE: row.birthPlace,
                            GENDER: row.gender,
                            CIVIL_STATUS: row.civilStatus,
                            BLOOD_TYPE: row.bloodType,
                            LANDLINE: row.landline,
                            MOBILE: row.mobile,
                            EMAIL: row.email,
                            RELIGION: row.religion,
                            OCCUPATION: row.occupation,
                            ADDRESS: row.address,
                            GLOCATION: row.gLocation,
                            ZIPCODE: row.zipCode,
                            LAST_NAME: row.lastName,
                            FIRST_NAME: row.firstName,
                            MIDDLE_NAME: row.middleName,
                            NAME_SUFFIX: row.name_suffix,
                            MOTHER_NAME: row.motherName,
                            FAMILY_SN: row.familySN,
                            PHILHEALTH: row.philHealth,
                            NATIONALITY: row.nationality

                        }

                    })

                }else{

                    //var patient_data_return = '0'
                    const patient_data_return = 'Patient Data is Invalid'
                    console.log("Fetching of Patient Data is Unsuccessfull.")
                    res.json(patient_data_return);

                }

                res.json(patient_data_return);
            })


        }else{

            const invalid_system_key = 'Invalid System Key'
            res.json(invalid_system_key);

        }


    })


})
