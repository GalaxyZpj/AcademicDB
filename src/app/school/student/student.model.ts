export class Student {
    
    public admissionNo: string;
    public name: string;
    public rollno: string;
    public standard: string;
    public section: string;
    public gender: string;
    public dob: string;
    public fatherName: string;
    public motherName: string;
    public phone: string;
    public email: string;
    public address: string;
    public dateOfJoining: string;
    public transport: string;
    public marks: string;

    constructor(
        admissionNo: string,
        name: string,
        rollno: string,
        standard: string,
        section: string,
        gender: string,
        dob: string,
        fatherName: string,
        motherName: string,
        phone: string,
        email: string,
        address: string,
        dateOfJoining: string,
        transport: string,
        marks: string
    ) {
        this.admissionNo = admissionNo;
        this.name = name;
        this.rollno = rollno;
        this.standard = standard;
        this.section = section;
        this.gender = gender;
        this.dob = dob;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.dateOfJoining = dateOfJoining;
        this.transport = transport;
        this.marks = marks;
    }
}