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
const LAST_NAME_DIR = "/LAST_NAME/:LAST_NAME";
const FIRST_NAME_DIR = "/FIRST_NAME/:FIRST_NAME";
const MIDDLE_NAME_DIR = "/MIDDLE_NAME/:MIDDLE_NAME";
const NAME_SUFFIX_DIR = "/NAME_SUFFIX/:NAME_SUFFIX";
const PHILHEALTH_DIR = "/PHILHEALTH/:PHILHEALTH";
const NATIONALITY_DIR = "/NATIONALITY/:NATIONALITY";
const LAST_UPDATE_DIR = "/LAST_UPDATE/:LAST_UPDATE";

app.get("/pushpatientdata/:SYSTEM_KEY"
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
    + LAST_NAME_DIR
    + FIRST_NAME_DIR
    + MIDDLE_NAME_DIR
    + NAME_SUFFIX_DIR
    + PHILHEALTH_DIR
    + NATIONALITY_DIR
    + LAST_UPDATE_DIR
    , (req, res) => {
        console.log("Accessing Patient Data with System Key: " + req.params.SYSTEM_KEY);



        const SYSTEM_KEY_REQ = req.params.SYSTEM_KEY
        const PATIENT_ID_REQ = req.params.PATIENT_ID

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

        const LAST_NAME_REQ = req.params.LAST_NAME
        if (LAST_NAME_REQ == null || LAST_NAME_REQ.toUpperCase() == 'NULL') { var LAST_NAME_VALUE = '' }
        else { var LAST_NAME_VALUE = req.params.LAST_NAME }

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



                if (PATIENT_ID_REQ == null || PATIENT_ID_REQ.toUpperCase() == 'NULL') {

                    const message = 'Patient ID cannot be empty.'
                    res.json(SENDER_VALUE);

                } else {

                    const queryString = "SELECT * FROM patient_data_pending WHERE patientID = ?"
                    connection_to_itisdb.query(queryString, [PATIENT_ID_REQ], (err, rows, fields) => {

                        const patient_num = rows.length

                        if (patient_num == 1) {

                            const queryString = "UPDATE patient_data_pending SET "
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
                                + " WHERE patientID = ?"
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
                                    LAST_NAME_VALUE,
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
                                    PATIENT_ID_REQ,
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
                                    LAST_NAME_VALUE,
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