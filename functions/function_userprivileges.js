const queryStringValidateCasePrivilege = "(SELECT userprivileges.view FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_ValidateCase+") AS validate_case_privilege, ";
			
			const queryStringAddPatientPrivilege = "(SELECT userprivileges.add FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_AddPatient+") AS add_patient_privilege, ";

			const queryStringEditPatientPrivilege = "(SELECT userprivileges.edit FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_EditPatient+") AS edit_patient_privilege, ";

			const queryStringAddTBCasePrivilege = "(SELECT userprivileges.add FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_AddTBCase+") AS add_tbcase_privilege, ";

			const queryStringEditTBCasePrivilege = "(SELECT userprivileges.edit FROM userprivileges WHERE userprivileges.userlevelID = user.userlevel AND userprivileges.userfunctionID = "+userFunctionID_EditTBCase+") AS edit_tbcase_privilege ";