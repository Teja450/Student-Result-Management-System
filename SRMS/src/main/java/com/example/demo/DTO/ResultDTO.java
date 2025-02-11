package com.example.demo.DTO;

public class ResultDTO {
    private String usn;
    private String semester;
    private String subjectName;
    private int internalMarks;
    private int externalMarks;
    private String grade;
    private Long subjectId; // new field

    // No-args constructor
    public ResultDTO() {}

    // All-args constructor
    public ResultDTO(String usn, String semester, String subjectName, int internalMarks, int externalMarks, String grade, Long subjectId) {
        this.usn = usn;
        this.semester = semester;
        this.subjectName = subjectName;
        this.internalMarks = internalMarks;
        this.externalMarks = externalMarks;
        this.grade = grade;
        this.subjectId = subjectId;
    }

    // Getters and Setters

    public String getUsn() {
        return usn;
    }
    public void setUsn(String usn) {
        this.usn = usn;
    }
    public String getSemester() {
        return semester;
    }
    public void setSemester(String semester) {
        this.semester = semester;
    }
    public String getSubjectName() {
        return subjectName;
    }
    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }
    public int getInternalMarks() {
        return internalMarks;
    }
    public void setInternalMarks(int internalMarks) {
        this.internalMarks = internalMarks;
    }
    public int getExternalMarks() {
        return externalMarks;
    }
    public void setExternalMarks(int externalMarks) {
        this.externalMarks = externalMarks;
    }
    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }
    public Long getSubjectId() {
        return subjectId;
    }
    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }
}
