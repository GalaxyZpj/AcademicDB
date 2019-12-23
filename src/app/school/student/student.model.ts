export class Student {
    public firstName: string;
    public lastName: string;
    public rollno: number;
    public dob: string;
    public fatherName: string;
    public motherName: string;
    public mobile: string;
    public email: string;
    public address: string;
    public subjects: [];

    constructor(
        firstName: string,
        lastName: string,
        rollno: number,
        dob: string,
        fatherName: string,
        motherName: string,
        mobile: string,
        email: string,
        address: string,
        subjects: [],
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollno = rollno;
        this.dob = dob;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.mobile = mobile;
        this.email = email;
        this.address = address;
        this.subjects = subjects;
    }
}