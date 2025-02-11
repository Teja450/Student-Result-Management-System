package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String password;
    private String username;
    
    // No-args constructor
    public Admin() {}
    
    // All-args constructor
    public Admin(Long id, String name, String password, String username) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.username = username;
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
}
