package com.example.demo.DTO;

public class ResultFetchRequest {
    private String student_id;
    private String semester;

    // No-args constructor
    public ResultFetchRequest() {}

    // Getters and setters
    public String getStudent_id() {
        return student_id;
    }
    public void setStudent_id(String student_id) {
        this.student_id = student_id;
    }
    public String getSemester() {
        return semester;
    }
    public void setSemester(String semester) {
        this.semester = semester;
    }
    
    @Override
    public String toString() {
        return "ResultFetchRequest [student_id=" + student_id + ", semester=" + semester + "]";
    }
}
