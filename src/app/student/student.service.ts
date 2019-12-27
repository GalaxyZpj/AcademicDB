import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({providedIn: 'root'})
export class StudentService {
    private students: Student[] = [
        new Student(
            'Pranav',
            'Jain',
            1,
            '2000-09-19',
            'Yogesh Jain',
            'Seema Jain',
            '8223909888',
            'pranav19sept@gmail.com',
            'Sec-62, Noida, Uttar Pradesh',
            []
        )
    ]
}