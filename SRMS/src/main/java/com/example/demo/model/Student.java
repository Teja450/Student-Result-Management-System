package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String password;
    private String username;
    private String usn;
    private String semester;
    
    // No-args constructor
    public Student() {}
    
    // All-args constructor
    public Student(Long id, String name, String password, String username, String usn, String semester) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.username = username;
        this.usn = usn;
        this.semester = semester;
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    
    public String getUsn() { return usn; }
    public void setUsn(String usn) { this.usn = usn; }
    
    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }
}
