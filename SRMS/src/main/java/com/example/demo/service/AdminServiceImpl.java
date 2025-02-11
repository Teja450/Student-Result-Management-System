package com.example.demo.service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.QueryDTO;
import com.example.demo.DTO.StudentDTO;
import com.example.demo.model.Admin;
import com.example.demo.model.Query;
import com.example.demo.model.Student;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.QueryRepository;
import com.example.demo.repository.StudentRepository;


@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;
    
    @Autowired
    private StudentRepository studentRepository;
    
    
    @Autowired
    private QueryRepository queryRepository;
    
    
    @Override
    public Optional<Admin> authenticate(String username, String password) {
        Admin admin = adminRepository.findByUsername(username);
        if (admin != null && admin.getPassword().equals(password)) {
            return Optional.of(admin);
        }
        return Optional.empty();
    }

    @Override
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public void addStudent(StudentDTO studentDTO) {
        Student student = new Student();
        student.setName(studentDTO.getName());
        student.setUsername(studentDTO.getUsername());
        student.setPassword(studentDTO.getPassword());
        student.setUsn(studentDTO.getUsername());
        

        studentRepository.save(student); // Save the student to the database
    }
    
    @Override
    public List<QueryDTO> getQueries() {
        // Fetch all queries from the repository
        List<Query> queries = queryRepository.findAll();
        // Map each Query to a QueryDTO. Adjust the mapping if your QueryDTO has a different structure.
        List<QueryDTO> queryDTOs = queries.stream()
            .map(query -> new QueryDTO(query.getUsername(), query.getQuerydetails()))
            .collect(Collectors.toList());
        return queryDTOs;
    }
    
    
	}



    // Additional methods for admin-related operations
