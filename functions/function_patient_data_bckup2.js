//app.get("/patient_data/:systemkeyval/tb_case/:tb_case_va/surname/:surname_val/voucher_code/:voucher_code_val", (req, res)
app.get("/patient_data_bckup2/:systemkeyval/patient_id/:patient_id_val", (req, res) => {

    const systemkeyval = req.params.systemkeyval
    const PATIENT_ID = req.params.patient_id_val


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




            const Patient_dataquery1 = "SELECT patient.patientID,patient.birthDate,patient.birthPlace,patient.gender,patient.civilStatus,patient.bloodType,patient.landline,patient.mobile,patient.email,patient.religion,patient.occupation,patient.address,patient.gLocation,patient.zipCode,patient.lastName,patient.firstName,patient.middleName,patient.name_suffix,patient.motherName,patient.familySN,patient.philHealth,patient.nationality, "

            const Patient_dataquery2 = "tb_case.caseID AS caseID, tb_case.age AS age, tb_case.caseNumber AS caseNumber, tb_case.scrngAddress AS scrngAddress, tb_case.scrngLocation AS scrngLocation, tb_case.scrngzipCode AS scrngzipCode, tb_case.screening_date AS screening_date, tb_case.registrationDate AS registrationDate, tb_case.starttxDate AS starttxDate, tb_case.endtxDate AS endtxDate, tb_case.presumptive_drtb AS presumptive_drtb, tb_case.screeningCode AS screeningCode, tb_case.registrationCode AS registrationCode, "

            const Patient_dataquery3 = "tb_case.preenrollmentDate AS preenrollmentDate, tb_case.preenrollmentCode AS preenrollmentCode, tb_case.preenrollmentBasis AS preenrollmentBasis, tb_case.screeningUnit AS screeningUnit, tb_case.treatmentUnit AS treatmentUnit, tb_case.regimenCode AS regimenCode, tb_case.classification AS classification, tb_case.siteofDisease AS siteofDisease, tb_case.siteofDisease2 AS siteofDisease2, tb_case.sourceofReferral AS sourceofReferral, tb_case.specific_source AS specific_source, tb_case.source_name AS source_name, tb_case.referringPhysician AS referringPhysician ";

            var queryFromDB = "FROM patient ";

            var queryInnerJoin1 = "INNER JOIN tb_case ON patient.patientID = tb_case.patientID ";

            var queryWhere1 = "WHERE tb_case.patientID = ? ";

            var Patient_dataquery = Patient_dataquery1 + Patient_dataquery2 + Patient_dataquery3 + queryFromDB + queryInnerJoin1 + queryWhere1;

            connection_to_itisdb.query(Patient_dataquery, [PATIENT_ID], (err, rows, fields) => {

                const count_patient_rows = rows.length

                if (count_patient_rows > 0) {

                    console.log("Fetching of Patient Data is Successfull.")

                    var patient_data_return = rows.map((row) => {

                        return {
                            PATIENT_ID: row.patientID,
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
                            NATIONALITY: row.nationality,
                            TBCASE_NUMBER: row.caseID,
                            AGE: row.age,
                            CASE_NUMBER: row.caseNumber,
                            SCREENING_ADDRESS: row.scrngAddress,
                            SCREENING_LOCATION: row.scrngLocation,
                            SCREENING_ZIP_CODE: row.scrngzipCode,
                            SCREENING_DATE: row.screening_date,
                            REGISTRATION_DATE: row.registrationDate,
                            START_TX_DATE: row.starttxDate,
                            END_TX_DATE: row.endtxDate,
                            PRESUMPTIVE_DRTB: row.presumptive_drtb,
                            SCREENING_CODE: row.screeningCode,
                            REGISTRATION_CODE: row.registrationCode,
                            PRE_ENROLLMENT_DATE: row.preenrollmentDate,
                            PRE_ENROLLMENT_CODE: row.preenrollmentCode,
                            PRE_ENROLLMENT_BASIS: row.preenrollmentBasis,
                            SCREENING_UNIT: row.screeningUnit,
                            TREATMENT_UNIT: row.treatmentUnit,
                            REGIMEN_CODE: row.regimenCode,
                            CLASSIFICATIO: row.classification,
                            SITE_OF_DISEASE: row.siteofDisease,
                            SITE_OF_DISEASE2: row.siteofDisease2,
                            SOURCE_OF_REFERRAL: row.sourceofReferral,
                            SPECIFIC_SOURCE: row.specific_source,
                            SOURCE_NAME: row.source_name,
                            REFERRING_PHYSICIAN: row.referringPhysician


                        }

                    })

                } else {

                    //var patient_data_return = '0'
                    const patient_data_return = 'Patient Data is Invalid'
                    console.log("Fetching of Patient Data is Unsuccessfull.")
                    res.json(patient_data_return);

                }

                res.json(patient_data_return);
            })


        } else {

            const invalid_system_key = 'Invalid System Key'
            res.json(invalid_system_key);

        }


    })


})
