export class School {

    public schoolcode: string;
    public address: string;
    public name: string;
    public board: string;
    public subDistrict: string;
    public teacherCount: number
    public principal: string;

    constructor(    
        schoolcode: string,
        name: string,
        address: string,
        subDistrict: string,
        board: string,
        principal: string,
        teacherCount: number) {
        this.schoolcode = schoolcode;
        this.name = name;
        this.address = address;
        this.subDistrict = subDistrict;
        this.board = board;
        this.principal = principal;
        this.teacherCount = teacherCount;
    }
}