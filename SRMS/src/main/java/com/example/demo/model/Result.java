package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "result")
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "externalmarks")
    private int externalMarks;
    
    @Column(name = "grade")
    private String grade;
    
    @Column(name = "internalmarks")
    private int internalMarks;
    
    @Column(name = "semester")
    private String semester;
    
    @Column(name = "student_usn")
    private String studentUsn;
    
    @Column(name = "subject_id")
    private Long subjectId;
    
    // No-args constructor
    public Result() {}
    
    // All-args constructor
    public Result(Long id, String studentUsn, String semester, int internalMarks, int externalMarks, String grade, Long subjectId) {
        this.id = id;
        this.studentUsn = studentUsn;
        this.semester = semester;
        this.internalMarks = internalMarks;
        this.externalMarks = externalMarks;
        this.grade = grade;
        this.subjectId = subjectId;
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public int getExternalMarks() { return externalMarks; }
    public void setExternalMarks(int externalMarks) { this.externalMarks = externalMarks; }
    
    public String getGrade() { return grade; }
    public void setGrade(String grade) { this.grade = grade; }
    
    public int getInternalMarks() { return internalMarks; }
    public void setInternalMarks(int internalMarks) { this.internalMarks = internalMarks; }
    
    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }
    
    public String getStudentUsn() { return studentUsn; }
    public void setStudentUsn(String studentUsn) { this.studentUsn = studentUsn; }
    
    public Long getSubjectId() { return subjectId; }
    public void setSubjectId(Long subjectId) { this.subjectId = subjectId; }

	
}
