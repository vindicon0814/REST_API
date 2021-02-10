const CASE_NUMBER_DIR = "/CASE_NUMBER/:CASE_NUMBER";
const LAST_NAME_DIR = "/LAST_NAME/:LAST_NAME";
const PATIENT_ID_DIR = "/PATIENT_ID/:PATIENT_ID";
const BIRTH_DATE_DIR = "/BIRTH_DATE/:BIRTH_DATE";
const BIRTH_PLACE_DIR = "/BIRTH_PLACE/:BIRTH_PLACE";
const GENDER_DIR = "/GENDER/:GENDER";
const CIVIL_STATUS_DIR = "/CIVIL_STATUS/:CIVIL_STATUS";
const BLOOD_TYPE_DIR = "/BLOOD_TYPE/:BLOOD_TYPE";
const LANDLINE_DIR = "/LANDLINE/:LANDLINE";
const MOBILE_DIR = "/MOBILE/:MOBILE";
const EMAIL_DIR = "/EMAIL/:EMAIL";
const RELIGION_DIR = "/RELIGION/:RELIGION";
const OCCUPATION_DIR = "/OCCUPATION/:OCCUPATION";
const ADDRESS_DIR = "/ADDRESS/:ADDRESS";
const GEO_LOCATION_DIR = "/GEO_LOCATION/:GEO_LOCATION";
const ZIPCODE_DIR = "/ZIPCODE/:ZIPCODE";
const FIRST_NAME_DIR = "/FIRST_NAME/:FIRST_NAME";
const MIDDLE_NAME_DIR = "/MIDDLE_NAME/:MIDDLE_NAME";
const NAME_SUFFIX_DIR = "/NAME_SUFFIX/:NAME_SUFFIX";
const PHILHEALTH_DIR = "/PHILHEALTH/:PHILHEALTH";
const NATIONALITY_DIR = "/NATIONALITY/:NATIONALITY";
const LAST_UPDATE_DIR = "/LAST_UPDATE/:LAST_UPDATE";

app.get("/push_patient_data/:SYSTEM_KEY"
    + CASE_NUMBER_DIR
    + LAST_NAME_DIR
    + PATIENT_ID_DIR
    + BIRTH_DATE_DIR
    + BIRTH_PLACE_DIR
    + GENDER_DIR
    + CIVIL_STATUS_DIR
    + BLOOD_TYPE_DIR
    + LANDLINE_DIR
    + MOBILE_DIR
    + EMAIL_DIR
    + RELIGION_DIR
    + OCCUPATION_DIR
    + ADDRESS_DIR
    + GEO_LOCATION_DIR
    + ZIPCODE_DIR
    + FIRST_NAME_DIR
    + MIDDLE_NAME_DIR
    + NAME_SUFFIX_DIR
    + PHILHEALTH_DIR
    + NATIONALITY_DIR
    + LAST_UPDATE_DIR
    , (req, res) => {
        console.log("Accessing Patient Data with System Key: " + req.params.SYSTEM_KEY);



        const SYSTEM_KEY_REQ = req.params.SYSTEM_KEY
        const CASE_NUMBER_REQ = req.params.CASE_NUMBER
        const LAST_NAME_REQ = req.params.LAST_NAME

        const PATIENT_ID_REQ = req.params.PATIENT_ID
        if (PATIENT_ID_REQ == null || PATIENT_ID_REQ.toUpperCase() == 'NULL') { var PATIENT_ID_VALUE = '' }
        else { var PATIENT_ID_VALUE = req.params.PATIENT_ID }

        const BIRTH_DATE_REQ = req.params.BIRTH_DATE
        if (BIRTH_DATE_REQ == null || BIRTH_DATE_REQ.toUpperCase() == 'NULL') { var BIRTH_DATE_VALUE = '0000-00-00' }
        else { var BIRTH_DATE_VALUE = req.params.BIRTH_DATE }

        const BIRTH_PLACE_REQ = req.params.BIRTH_PLACE
        if (BIRTH_PLACE_REQ == null || BIRTH_PLACE_REQ.toUpperCase() == 'NULL') { var BIRTH_PLACE_VALUE = '' }
        else { var BIRTH_PLACE_VALUE = req.params.BIRTH_PLACE }

        const GENDER_REQ = req.params.GENDER
        if (GENDER_REQ == null || GENDER_REQ.toUpperCase() == 'NULL') { var GENDER_VALUE = '' }
        else { var GENDER_VALUE = req.params.GENDER }

        const CIVIL_STATUS_REQ = req.params.CIVIL_STATUS
        if (CIVIL_STATUS_REQ == null || CIVIL_STATUS_REQ.toUpperCase() == 'NULL') { var CIVIL_STATUS_VALUE = '' }
        else { var CIVIL_STATUS_VALUE = req.params.REQUESTING_PHYSICIAN }

        const BLOOD_TYPE_REQ = req.params.BLOOD_TYPE
        if (BLOOD_TYPE_REQ == null || BLOOD_TYPE_REQ.toUpperCase() == 'NULL') { var BLOOD_TYPE_VALUE = '' }
        else { var BLOOD_TYPE_VALUE = req.params.BLOOD_TYPE }

        const LAND_LINE_REQ = req.params.LAND_LINE
        if (LAND_LINE_REQ == null || LAND_LINE_REQ.toUpperCase() == 'NULL') { var LAND_LINE_VALUE = '' }
        else { var LAND_LINE_VALUE = req.params.LAND_LINE }

        const MOBILE_REQ = req.params.MOBILE
        if (MOBILE_REQ == null || MOBILE_REQ.toUpperCase() == 'NULL') { var MOBILE_VALUE = '' }
        else { var MOBILE_VALUE = req.params.MOBILE }

        const EMAIL_REQ = req.params.EMAIL
        if (EMAIL_REQ == null || EMAIL_REQ.toUpperCase() == 'NULL') { var EMAIL_VALUE = '' }
        else { var EMAIL_VALUE = req.params.EMAIL }

        const RELIGION_REQ = req.params.RELIGION
        if (RELIGION_REQ == null || RELIGION_REQ.toUpperCase() == 'NULL') { var RELIGION_VALUE = '' }
        else { var BLOOD_TYPE_VALUE = req.params.RELIGION }

        const OCCUPATION_REQ = req.params.OCCUPATION
        if (OCCUPATION_REQ == null || OCCUPATION_REQ.toUpperCase() == 'NULL') { var OCCUPATION_VALUE = '' }
        else { var OCCUPATION_VALUE = req.params.OCCUPATION }

        const ADDRESS_REQ = req.params.ADDRESS
        if (ADDRESS_REQ == null || ADDRESS_REQ.toUpperCase() == 'NULL') { var ADDRESS_VALUE = '' }
        else { var ADDRESS_VALUE = req.params.ADDRESS }

        const GEO_LOCATION_REQ = req.params.GEO_LOCATION
        if (GEO_LOCATION_REQ == null || GEO_LOCATION_REQ.toUpperCase() == 'NULL') { var GEO_LOCATION_VALUE = '' }
        else { var GEO_LOCATION_VALUE = req.params.GEO_LOCATION }

        const ZIPCODE_REQ = req.params.ZIPCODE
        if (GEO_LOCATION_REQ == null || ZIPCODE_REQ.toUpperCase() == 'NULL') { var ZIPCODE_VALUE = '' }
        else { var ZIPCODE_VALUE = req.params.ZIPCODE }

        // const LAST_NAME_REQ = req.params.LAST_NAME
        // if (LAST_NAME_REQ == null || LAST_NAME_REQ.toUpperCase() == 'NULL') { var LAST_NAME_VALUE = '' }
        // else { var LAST_NAME_VALUE = req.params.LAST_NAME }

        const FIRST_NAME_REQ = req.params.FIRST_NAME
        if (FIRST_NAME_REQ == null || FIRST_NAME_REQ.toUpperCase() == 'NULL') { var FIRST_NAME_VALUE = '' }
        else { var FIRST_NAME_VALUE = req.params.FIRST_NAME }

        const MIDDLE_NAME_REQ = req.params.MIDDLE_NAME
        if (MIDDLE_NAME_REQ == null || MIDDLE_NAME_REQ.toUpperCase() == 'NULL') { var MIDDLE_NAME_VALUE = '' }
        else { var MIDDLE_NAME_VALUE = req.params.MIDDLE_NAME }

        const NAME_SUFFIX_REQ = req.params.NAME_SUFFIX
        if (NAME_SUFFIX_REQ == null || NAME_SUFFIX_REQ.toUpperCase() == 'NULL') { var NAME_SUFFIX_VALUE = '' }
        else { var NAME_SUFFIX_VALUE = req.params.NAME_SUFFIX }

        const PHILHEALTH_REQ = req.params.PHILHEALTH
        if (PHILHEALTH_REQ == null || PHILHEALTH_REQ.toUpperCase() == 'NULL') { var PHILHEALTH_VALUE = '' }
        else { var PHILHEALTH_VALUE = req.params.PHILHEALTH }

        const NATIONALITY_REQ = req.params.NATIONALITY
        if (NATIONALITY_REQ == null || NATIONALITY_REQ.toUpperCase() == 'NULL') { var NATIONALITY_VALUE = '' }
        else { var NATIONALITY_VALUE = req.params.NATIONALITY_VALUE }

        const LAST_UPDATE_VALUE = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0].replace('T', ' ');



        const queryString = "SELECT * FROM dohsystems WHERE systemID = ?"
        connection_to_itisdb.query(queryString, [SYSTEM_KEY_REQ], (err, rows, fields) => {

            if (err) {
                console.log(err)
                res.sendStatus(500)
                throw err
                return
            }

            const system_key_num = rows.length
            const SENDER_VALUE = rows[0].id


            if (system_key_num == 1) {



                if (CASE_NUMBER_REQ == null || CASE_NUMBER_REQ.toUpperCase() == 'NULL' || LAST_NAME_REQ == null || LAST_NAME_REQ.toUpperCase() == 'NULL') {

                    const message = 'Case Number and /or Patient Last Name cannot be empty.'
                    res.json(SENDER_VALUE);

                } else {

                    // const queryString = "SELECT * FROM patient_data_pending WHERE patientID = ?"

                    const Patient_dataquery1 = "SELECT patient.patientID AS patientID, patient.birthDate AS birthDate, patient.birthPlace AS birthPlace, patient.gender AS gender, patient.civilStatus AS civilStatus, patient.bloodType AS bloodType, patient.landline AS landline, patient.mobile AS mobile, patient.email AS email, patient.religion AS relegion, patient.occupation AS occupation, patient.address AS address, patient.gLocation AS glocation, patient.zipCode AS zipCode, patient.lastName AS lastName, patient.firstName AS firstName, patient.middleName AS middleName, patient.name_suffix AS name_suffix, patient.motherName AS motherName, patient.familySN AS familySN, patient.philHealth AS philHealth, patient.nationality AS nationality, "

                    const Patient_dataquery2 = "tb_case.caseID AS caseID, tb_case.age AS age, tb_case.caseNumber AS caseNumber, tb_case.scrngAddress AS scrngAddress, tb_case.scrngLocation AS scrngLocation, tb_case.scrngzipCode AS scrngzipCode, tb_case.mode_of_screening AS mode_of_screening, tb_case.screening_date AS screening_date, tb_case.registrationDate AS registrationDate, tb_case.starttxDate AS starttxDate, tb_case.endtxDate AS endtxDate, tb_case.presumptive_drtb AS presumptive_drtb, tb_case.voucher_code AS voucher_code, tb_case.screeningCode AS screeningCode, tb_case.registrationCode AS registrationCode, "

                    const Patient_dataquery3 = "tb_case.preenrollmentDate AS preenrollmentDate, tb_case.preenrollmentCode AS preenrollmentCode, tb_case.preenrollmentBasis AS preenrollmentBasis, tb_case.lpa_result AS lpa_result,  tb_case.screeningUnit AS screeningUnit, tb_case.treatmentUnit AS treatmentUnit, tb_case.regimenCode AS regimenCode, tb_case.dat AS dat, tb_case.classification AS classification, tb_case.siteofDisease AS siteofDisease, tb_case.siteofDisease2 AS siteofDisease2, tb_case.sourceofReferral AS sourceofReferral, tb_case.specific_source AS specific_source, tb_case.source_name AS source_name, tb_case.referringPhysician AS referringPhysician, "

                    const Patient_dataquery4 = "tb_case.drType AS drType, tb_case.tbContact AS tbContact, tb_case.plannedtxDays AS plannedtxDays, tb_case.pulmonaryForms AS pulmonaryForms, tb_case.patientType AS patientType, tb_case.ipt_type AS ipt_type, tb_case.tpt_indication AS tpt_indication, tb_case.transin AS transin, tb_case.category AS category, tb_case.diagnosisType AS diagnosisType, tb_case.enrollmentCaseType AS enrollmentCaseType, tb_case.latestCaseType, tb_case.notifyPerson AS notifyPerson, tb_case.notifyAddress AS notifyAddress, tb_case.outcome AS outcome, tb_case.outcome_reason AS outcome_reason, tb_case.outcome_comment AS outcome_comment, "

                    const Patient_dataquery5 = "tb_case.outcomeDate AS outcomeDate, tb_case.post_tx_outcome AS post_tx_outcome, tb_case.post_tx_outcome_date AS post_tx_outcome_date, tb_case.no_hiv_reason AS no_hiv_reason, tb_case.no_hiv_comment AS no_hiv_comment, tb_case.no_art_reason AS no_art_reason, tb_case.no_art_comment AS no_art_comment, tb_case.notifyContact AS notifyContact, tb_case.validated AS validated, tb_case.dateValidated AS dateValidated, tb_case.validator AS validator, tb_case.tbdcReview as tbdcReview, tb_case.continuationTx as continuationTx, tb_case.txPartner AS txPartner, tb_case.tx_supporter_location AS tx_supporter_location, "

                    const Patient_dataquery6 = "tb_case.socialClass AS socialClass, tb_case.pict AS pict, tb_case.pictDate AS pictDate, tb_case.pict_result AS pict_result, tb_case.comments AS comments, tb_case.tb_kind AS tb_kind, tb_case.prev_TB AS prev_TB, tb_case.date_recieved_txunit AS date_recieved_txunit, tb_case.bact_status AS bact_status, tb_case.mop_version AS mop_version, tb_case.study_participation AS study_participation, tb_case.contact_less_15 AS contact_less_15, tb_case.contact_15_above AS contact_15_above, tb_case.dateEncoded AS dateEncoded ";

                    var queryFromDB = "FROM patient ";

                    var queryInnerJoin1 = "INNER JOIN tb_case ON patient.patientID = tb_case.patientID ";

                    var queryWhere1 = "WHERE tb_case.registrationCode = ? AND patient.lastName = ? ";

                    var Patient_dataquery = Patient_dataquery1 + Patient_dataquery2 + Patient_dataquery3 + Patient_dataquery4 + Patient_dataquery5 + Patient_dataquery6 + queryFromDB + queryInnerJoin1 + queryWhere1;

                    connection_to_itisdb.query(Patient_dataquery, [CASE_NUMBER_REQ, LAST_NAME_REQ], (err, rows, fields) => {

                        const count_patient_rows = rows.length

                        if (count_patient_rows == 1) {

                            const queryString = "UPDATE patient_data_pending INNER JOIN tb_case ON tb_case.caseID = tb_dot_test_api.caseID INNER JOIN patient ON patient.patientID = tb_case.patientID SET "
                                + "birthDate = ?,"
                                + "birthPlace = ?,"
                                + "gender = ?,"
                                + "civilStatus = ?,"
                                + "bloodType = ?,"
                                + "landline = ?,"
                                + "mobile = ?,"
                                + "email = ?,"
                                + "religion = ?,"
                                + "occupation = ?,"
                                + "address = ?,"
                                + "gLocation = ?,"
                                + "zipCode = ?,"
                                + "lastName = ?,"
                                + "firstName = ?,"
                                + "middleName = ?,"
                                + "name_suffix = ?,"
                                + "philHealth = ?,"
                                + "nationality = ?,"
                                + "last_update = ?"
                                + " WHERE tb_case.registrationCode = ? AND patient.lastName = ?"
                            connection_to_itisdb.query(queryString,
                                [
                                    BIRTH_DATE_VALUE,
                                    BIRTH_PLACE_VALUE,
                                    GENDER_VALUE,
                                    CIVIL_STATUS_VALUE,
                                    BLOOD_TYPE_VALUE,
                                    LAND_LINE_VALUE,
                                    MOBILE_VALUE,
                                    EMAIL_VALUE,
                                    RELIGION_VALUE,
                                    OCCUPATION_VALUE,
                                    ADDRESS_VALUE,
                                    GEO_LOCATION_VALUE,
                                    ZIPCODE_VALUE,
                                    LAST_NAME_REQ,
                                    FIRST_NAME_VALUE,
                                    MIDDLE_NAME_VALUE,
                                    NAME_SUFFIX_VALUE,
                                    PHILHEALTH_VALUE,
                                    NATIONALITY_VALUE,
                                    LAST_UPDATE_VALUE,
                                    PATIENT_ID_REQ
                                ], (err, results, fields) => {


                                    if (err) {
                                        const message = 'Update Error'
                                        res.json(message);
                                    } else {
                                        console.log("Update Patient Data successfully")

                                        const message = 105
                                        res.json(message);
                                    }


                                })



                        } else {

                            const queryString = "INSERT INTO patient_data_pending ("
                                + "patientID,"
                                + "birthDate,"
                                + "birthPlace,"
                                + "gender,"
                                + "civilStatus,"
                                + "bloodType,"
                                + "landline,"
                                + "mobile,"
                                + "email,"
                                + "religion,"
                                + "occupation,"
                                + "address,"
                                + "gLocation,"
                                + "zipCode,"
                                + "lastName,"
                                + "firstName,"
                                + "middleName,"
                                + "name_suffix,"
                                + "philHealth,"
                                + "nationality,"
                                + "last_update"
                                + ") VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
                            connection_to_itisdb.query(queryString,
                                [
                                    PATIENT_ID_VALUE,
                                    BIRTH_DATE_VALUE,
                                    BIRTH_PLACE_VALUE,
                                    GENDER_VALUE,
                                    CIVIL_STATUS_VALUE,
                                    BLOOD_TYPE_VALUE,
                                    LAND_LINE_VALUE,
                                    MOBILE_VALUE,
                                    EMAIL_VALUE,
                                    BLOOD_TYPE_VALUE,
                                    OCCUPATION_VALUE,
                                    ADDRESS_VALUE,
                                    GEO_LOCATION_VALUE,
                                    ZIPCODE_VALUE,
                                    LAST_NAME_REQ,
                                    FIRST_NAME_VALUE,
                                    MIDDLE_NAME_VALUE,
                                    NAME_SUFFIX_VALUE,
                                    PHILHEALTH_VALUE,
                                    NATIONALITY_VALUE,
                                    LAST_UPDATE_VALUE
                                ], (err, results, fields) => {


                                    if (err) {
                                        const message = 'Add Error'
                                        res.json(message);
                                    } else {
                                        console.log("Added Patient successfully")

                                        const message = 104
                                        res.json(message);
                                    }


                                })



                        }

                    })

                }






            } else {

                const message = 102  // 102 - Invalid System Key
                res.json(message);

            }




        })


    })