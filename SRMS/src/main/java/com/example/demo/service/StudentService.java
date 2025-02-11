package com.example.demo.service;

import com.example.demo.model.Student;
import java.util.Optional;

public interface StudentService {
    Student saveStudent(Student student);
    Optional<Student> findById(Long id);
    Optional<Student> findByUsername(String username);
    void deleteStudent(Long id);
    Optional<Student> authenticate(String username, String password);
}
