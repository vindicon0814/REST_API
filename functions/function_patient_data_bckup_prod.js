//app.get("/patient_data/:systemkeyval/tb_case/:tb_case_val/patient_surname/:surname_val/voucher_code/:voucher_code_val", (req, res) => {
app.get("/patient_data/:systemkeyval/patient_case_id/:tb_case_val/patient_lastname/:surname_val/voucher_code/:voucher_code_val", (req, res) => {

    const systemkeyval = req.params.systemkeyval
    const PATIENT_ID = req.params.patient_id_val
    const PATIENT_TBCASE_ID = req.params.tb_case_val
    const PATIENT_SURNAME = req.params.surname_val
    const PATIENT_VOUCHER_CODE = req.params.voucher_code_val 
    


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


            const Patient_dataquery1 = "SELECT patient.patientID AS patientID, patient.birthDate AS birthDate, patient.birthPlace AS birthPlace, patient.gender AS gender, patient.civilStatus AS civilStatus, patient.bloodType AS bloodType, patient.landline AS landline, patient.mobile AS mobile, patient.email AS email, patient.religion AS relegion, patient.occupation AS occupation, patient.address AS address, patient.gLocation AS glocation, patient.zipCode AS zipCode, patient.lastName AS lastName, patient.firstName AS firstName, patient.middleName AS middleName, patient.name_suffix AS name_suffix, patient.motherName AS motherName, patient.familySN AS familySN, patient.philHealth AS philHealth, patient.nationality AS nationality, "

            const Patient_dataquery2 = "tb_case.caseID AS caseID, tb_case.age AS age, tb_case.caseNumber AS caseNumber, tb_case.scrngAddress AS scrngAddress, tb_case.scrngLocation AS scrngLocation, tb_case.scrngzipCode AS scrngzipCode, tb_case.mode_of_screening AS mode_of_screening, tb_case.screening_date AS screening_date, tb_case.registrationDate AS registrationDate, tb_case.starttxDate AS starttxDate, tb_case.endtxDate AS endtxDate, tb_case.presumptive_drtb AS presumptive_drtb, tb_case.voucher_code AS voucher_code, tb_case.screeningCode AS screeningCode, tb_case.registrationCode AS registrationCode, "

            const Patient_dataquery3 = "tb_case.preenrollmentDate AS preenrollmentDate, tb_case.preenrollmentCode AS preenrollmentCode, tb_case.preenrollmentBasis AS preenrollmentBasis, tb_case.lpa_result AS lpa_result,  tb_case.screeningUnit AS screeningUnit, tb_case.treatmentUnit AS treatmentUnit, tb_case.regimenCode AS regimenCode, tb_case.dat AS dat, tb_case.classification AS classification, tb_case.siteofDisease AS siteofDisease, tb_case.siteofDisease2 AS siteofDisease2, tb_case.sourceofReferral AS sourceofReferral, tb_case.specific_source AS specific_source, tb_case.source_name AS source_name, tb_case.referringPhysician AS referringPhysician, "

            const Patient_dataquery4 = "tb_case.drType AS drType, tb_case.tbContact AS tbContact, tb_case.plannedtxDays AS plannedtxDays, tb_case.pulmonaryForms AS pulmonaryForms, tb_case.patientType AS patientType, tb_case.ipt_type AS ipt_type, tb_case.tpt_indication AS tpt_indication, tb_case.transin AS transin, tb_case.category AS category, tb_case.diagnosisType AS diagnosisType, tb_case.enrollmentCaseType AS enrollmentCaseType, tb_case.latestCaseType, tb_case.notifyPerson AS notifyPerson, tb_case.notifyAddress AS notifyAddress, tb_case.outcome AS outcome, tb_case.outcome_reason AS outcome_reason, tb_case.outcome_comment AS outcome_comment, "

            const Patient_dataquery5 = "tb_case.outcomeDate AS outcomeDate, tb_case.post_tx_outcome AS post_tx_outcome, tb_case.post_tx_outcome_date AS post_tx_outcome_date, tb_case.no_hiv_reason AS no_hiv_reason, tb_case.no_hiv_comment AS no_hiv_comment, tb_case.no_art_reason AS no_art_reason, tb_case.no_art_comment AS no_art_comment, tb_case.notifyContact AS notifyContact, tb_case.validated AS validated, tb_case.dateValidated AS dateValidated, tb_case.validator AS validator, tb_case.tbdcReview as tbdcReview, tb_case.continuationTx as continuationTx, tb_case.txPartner AS txPartner, tb_case.tx_supporter_location AS tx_supporter_location, "

            const Patient_dataquery6 = "tb_case.socialClass AS socialClass, tb_case.pict AS pict, tb_case.pictDate AS pictDate, tb_case.pict_result AS pict_result, tb_case.comments AS comments, tb_case.tb_kind AS tb_kind, tb_case.prev_TB AS prev_TB, tb_case.date_recieved_txunit AS date_recieved_txunit, tb_case.bact_status AS bact_status, tb_case.mop_version AS mop_version, tb_case.study_participation AS study_participation, tb_case.contact_less_15 AS contact_less_15, tb_case.contact_15_above AS contact_15_above, tb_case.dateEncoded AS dateEncoded ";

            var queryFromDB = "FROM patient ";

            var queryInnerJoin1 = "INNER JOIN tb_case ON patient.patientID = tb_case.patientID ";

            var queryWhere1 = "WHERE tb_case.caseID = ? AND patient.lastName = ? AND tb_case.voucher_code = ? ";

            var Patient_dataquery = Patient_dataquery1 + Patient_dataquery2 + Patient_dataquery3 + Patient_dataquery4 + Patient_dataquery5 + Patient_dataquery6 + queryFromDB + queryInnerJoin1 + queryWhere1;

            connection_to_itisdb.query(Patient_dataquery, [PATIENT_TBCASE_ID, PATIENT_SURNAME, PATIENT_VOUCHER_CODE], (err, rows, fields) => {

                const count_patient_rows = rows.length

                if (count_patient_rows > 0) {

                    console.log("Fetching of Patient Data is Successfull.")

                    var patient_data_return = rows.map((row) => {

                        return {
                            PATIENT_ID: row.patientID,
                            PATIENT_BIRTHDATE: row.birthDate,
                            PATIENT_BIRTHPLACE: row.birthPlace,
                            PATIENT_GENDER: row.gender,
                            PATIENT_CIVIL_STATUS: row.civilStatus,
                            PATIENT_BLOOD_TYPE: row.bloodType,
                            PATIENT_LANDLINE: row.landline,
                            PATIENT_MOBILE: row.mobile,
                            PATIENT_EMAIL: row.email,
                            PATIENT_RELIGION: row.religion,
                            PATIENT_OCCUPATION: row.occupation,
                            PATIENT_ADDRESS: row.address,
                            PATIENT_GLOCATION: row.gLocation,
                            PATIENT_ZIPCODE: row.zipCode,
                            PATIENT_LAST_NAME: row.lastName,
                            PATIENT_FIRST_NAME: row.firstName,
                            PATIENT_MIDDLE_NAME: row.middleName,
                            PATIENT_NAME_SUFFIX: row.name_suffix,
                            PATIENT_MOTHER_NAME: row.motherName,
                            PATIENT_FAMILY_SN: row.familySN,
                            PATIENT_PHILHEALTH: row.philHealth,
                            PATIENT_NATIONALITY: row.nationality,
                            PATIENT_TBCASE_ID: row.caseID,
                            PATIENT_AGE: row.age,
                            PATIENT_CASE_NUMBER: row.caseNumber,
                            PATIENT_SCREENING_ADDRESS: row.scrngAddress,
                            PATIENT_SCREENING_LOCATION: row.scrngLocation,
                            PATIENT_SCREENING_ZIP_CODE: row.scrngzipCode,
                            PATIENT_MODE_OF_SCREENING: row.mode_of_screening,
                            PATIENT_SCREENING_DATE: row.screening_date,
                            PATIENT_REGISTRATION_DATE: row.registrationDate,
                            PATIENT_START_TX_DATE: row.starttxDate,
                            PATIENT_END_TX_DATE: row.endtxDate,
                            PATIENT_PRESUMPTIVE_DRTB: row.presumptive_drtb,
                            PATIENT_VOUCHER_CODE: row.voucher_code,
                            PATIENT_SCREENING_CODE: row.screeningCode,
                            PATIENT_REGISTRATION_CODE: row.registrationCode,
                            // PATIENT_PRE_ENROLLMENT_DATE: row.preenrollmentDate,
                            // PATIENT_PRE_ENROLLMENT_CODE: row.preenrollmentCode,
                            // PATIENT_PRE_ENROLLMENT_BASIS: row.preenrollmentBasis,
                            // PATIENT_LPA_RESULT: row.lpa_result,
                            PATIENT_SCREENING_UNIT: row.screeningUnit,
                            PATIENT_TREATMENT_UNIT: row.treatmentUnit,
                            PATIENT_REGIMEN_CODE: row.regimenCode,
                            // PATIENT_DAT: row.dat,
                            PATIENT_CLASSIFICATION: row.classification,
                            PATIENT_SITE_OF_DISEASE: row.siteofDisease,
                            PATIENT_SITE_OF_DISEASE2: row.siteofDisease2,
                            PATIENT_SOURCE_OF_REFERRAL: row.sourceofReferral,
                            PATIENT_SPECIFIC_SOURCE: row.specific_source,
                            PATIENT_SOURCE_NAME: row.source_name,
                            PATIENT_REFERRING_PHYSICIAN: row.referringPhysician,
                            PATIENT_DRTYPE: row.drType,
                            // PATIENT_TB_CONTACT: row.tbContact,
                            // PATIENT_PLANNED_TX_DAYS: row.plannedtxDays,
                            // PATIENT_PULMONARY_FORMS: row.pulmonaryForms,
                            PATIENT_PATIENT_TYPE: row.patientType,
                            PATIENT_IPT_TYPE: row.ipt_type,
                            PATIENT_TPT_INDICATION: row.tpt_indication,
                            PATIENT_TRANSIN: row.transin,
                            PATIENT_CATEGORY: row.category,
                            // PATIENT_DIAGNOSIS_TYPE: row.diagnosisType,
                            // PATIENT_ENROLLMENT_CASE_TYPE: row.enrollmentCaseType,
                            // PATIENT_LATEST_CASE_TYPE: row.latestCaseType,
                            PATIENT_NOTIFY_PERSON: row.notifyPerson,
                            PATIENT_NOTIFY_ADDRESS: row.notifyAddress,
                            PATIENT_OUTCOME: row.outcome,
                            PATIENT_OUTCOME_REASON: row.outcome_reason,
                            PATIENT_OUTCOME_COMMENT: row.outcome_comment,
                            PATIENT_OUTCOME_DATE: row.outcomeDate,
                            PATIENT_POST_TX_OUTCOME: row.post_tx_outcome,
                            PATIENT_POST_TX_OUTCOME_DATE: row.post_tx_outcome_date,
                            // PATIENT_NO_HIV_REASON: row.no_hiv_reason,
                            // PATIENT_NO_HIV_COMMENT: row.no_hiv_comment,
                            // PATIENT_NO_ART_REASON: row.no_art_reason,
                            // PATIENT_NO_ART_COMMENT: row.no_art_comment,
                            PATIENT_NOTIFY_CONTACT: row.notifyContact,
                            // PATIENT_VALIDATED: row.validated,
                            // PATIENT_DATE_VALIDATED: row.dateValidated,
                            // PATIENT_VALIDATOR: row.validator,
                            // PATIENT_TBDC_REVIEW: row.tbdcReview,
                            PATIENT_CONTINUATION_TX: row.continuationTx,
                            PATIENT_TX_PARTNER: row.txPartner,
                            PATIENT_TX_SUPPORTER_LOCATION: row.tx_supporter_location,
                            PATIENT_SOCIAL_CLASS: row.socialClass,
                            // PATIENT_PICT: row.pict,
                            // PATIENT_PICT_DATE: row.pictDate,
                            // PATIENT_PICT_RESULT: row.pict_result,
                            PATIENT_COMMENTS: row.comments,
                            PATIENT_TB_KIND: row.tb_kind,
                            PATIENT_PREV_TB: row.prev_TB,
                            // PATIENT_DATE_RECEIVED_TXUNIT: row.date_recieved_txunit,
                            PATIENT_BACT_STATUS: row.bact_status,
                            // PATIENT_MOP_VERSION: row.mop_version,
                            PATIENT_STUDY_PARTICIPATION: row.study_participation,
                            // PATIENT_CONTACT_LESS_15: row.contact_less_15,
                            // PATIENT_CONTACT_15_ABOVE: row.contact_15_above,
                            PATIENT_DATE_ENCODED: row.dateEncoded


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
