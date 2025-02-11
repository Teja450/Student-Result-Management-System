package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "subject")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "subject_code", nullable = false, unique = true)
    private String subjectCode;
    
    @Column(name = "subject_name", nullable = false)
    private String subjectName;
    
    @Column(name = "credit_hours")
    private int creditHours;
    
    @Column(name = "semester")
    private String semester;
    
    @Column(name = "teacher_id")
    private Long teacherId;
    
    // No-args constructor
    public Subject() {}
    
    // All-args constructor
    public Subject(Long id, String subjectCode, String subjectName, int creditHours, String semester, Long teacherId) {
        this.id = id;
        this.subjectCode = subjectCode;
        this.subjectName = subjectName;
        this.creditHours = creditHours;
        this.semester = semester;
        this.teacherId = teacherId;
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getSubjectCode() { return subjectCode; }
    public void setSubjectCode(String subjectCode) { this.subjectCode = subjectCode; }
    
    public String getSubjectName() { return subjectName; }
    public void setSubjectName(String subjectName) { this.subjectName = subjectName; }
    
    public int getCreditHours() { return creditHours; }
    public void setCreditHours(int creditHours) { this.creditHours = creditHours; }
    
    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }
    
    public Long getTeacherId() { return teacherId; }
    public void setTeacherId(Long teacherId) { this.teacherId = teacherId; }
}
