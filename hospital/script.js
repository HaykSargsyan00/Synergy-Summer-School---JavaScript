hospital = {
	name:'MyHospital',
	address:'MyAddress',
	doctors:new Array(),
	patients:new Array(),
	addDoctor(name,surname,age,specialization){
		let doctor = new CreateNewDoctorObject(name,surname,age,specialization);
		this.doctors.push(doctor);
	},
	addPatient(name,surname,age,disease){
		let patient = new CreateNewPatientObject(name,surname,age,disease);
		this.patients.push(patient);
	},
	findDoctor(name,surname,age,specialization){
		let doctors = new Array();
		for(i in this.doctors){
			if( this.doctors[i].name == name
			    && (surname ? this.doctors[i].surname == surname:true)
			    && (age ? this.doctors[i].age == age:true)
			    && (specialization ? this.doctors[i].specialization == specialization:true)
			   ){
				doctors.push(this.doctors[i]);
			}
		}
		return doctors;
	},
	findPatient(name,surname){
		let patients = new Array();
		for(i in this.patients){
			if(this.patients[i].name == name && this.patients[i].surname == surname){
				patients.push(this.patients[i]);
			}
		}
		return patients;
	}
};


function CreateNewDoctorObject(name,surname,age,specialization){
	return {
		name,
		surname,
		age,
		specialization,
		patients: new Array(),
		addPatient(patient){
			this.patients.push(patient);
		}
	}
};

function CreateNewPatientObject(name,surname,age,disease){
	return {
		name,
		surname,
		age,
		disease,
		doctors: new Array(),
		attachToDoctor(doctorName,doctorSurname){
			let doctor = hospital.findDoctor(doctorName,doctorSurname);
			if(doctor.length != 0){
				if(doctor.length == 1){
					this.doctors.push(doctor[0]);
					doctor[0].addPatient(this);
				}
				else{
					/*Add option to choose doctor from list*/
					console.log("there are more then one doctors with such name and surname")
				}
			}else{
				console.log("ther are no doctor with such name and surname");
			}
		}
	}
};

hospital.addPatient('Karen','Sargsyan',34,'blah');
hospital.addDoctor('Hayk','Sargsyan',13,'Dentist');

let patients = hospital.findPatient('Karen','Sargsyan')
for(i in patients){
	patients[i].attachToDoctor('Hayk','Sargsyan')
}