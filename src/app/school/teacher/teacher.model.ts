export class Teacher {
    public teachercode: string;
    public name: string;
    public dob: string;
    public gender: string;
    public address: string;
    public pincode: string;
    public email: string;
    public phone: string;
    public division: string;
    public dateOfJoining: string;
    public subjects: { name: string, code: string }[];

    constructor(
        teachercode: string,
        name: string,
        dob: string,
        gender: string,
        address: string,
        pincode: string,
        email: string,
        phone: string,
        division: string,
        dateOfJoining: string,
        subjects: { name: string, code: string }[]
    ) {
        this.teachercode = teachercode;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.pincode = pincode;
        this.email = email;
        this.phone = phone;
        this.division = division;
        this.dateOfJoining = dateOfJoining;
        this.subjects = subjects;
    }
}