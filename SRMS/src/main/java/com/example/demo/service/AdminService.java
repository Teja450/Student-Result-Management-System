package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import com.example.demo.DTO.QueryDTO;
import com.example.demo.DTO.StudentDTO;
import com.example.demo.model.Admin;

public interface AdminService {
    Optional<Admin> authenticate(String username, String password);
    Admin saveAdmin(Admin admin);
    // Additional methods for admin-related operations
    void addStudent(StudentDTO studentDTO);
	List<QueryDTO> getQueries();
}
