package com.example.demo.service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Optional<Student> findById(Long id) {
        return studentRepository.findById(id);
    }

    @Override
    public Optional<Student> findByUsername(String username) {
        return Optional.ofNullable(studentRepository.findByUsername(username));
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Optional<Student> authenticate(String username, String password) {
        Student student = studentRepository.findByUsername(username);
        if (student != null && (student).getPassword().equals(password)) {
            return Optional.of(student);
        }
        return Optional.empty();
    }
}
