package com.example.demo.controller;

import com.example.demo.DTO.LoginDTO;
import com.example.demo.DTO.TeacherDTO;
import com.example.demo.DTO.QueryDTO;
import com.example.demo.DTO.ResponseMessage;
import com.example.demo.DTO.StudentDTO;
import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<ResponseMessage> login(@RequestBody LoginDTO loginDTO) {
        Optional<Admin> admin = adminService.authenticate(loginDTO.getUsername(), loginDTO.getPassword());
        if (admin.isPresent()) {
            return ResponseEntity.ok(new ResponseMessage(true, admin.get()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ResponseMessage(false, "Invalid credentials"));
    }

    @PostMapping("/addTeacher")
    public ResponseEntity<ResponseMessage> addTeacher(@RequestBody TeacherDTO teacherDTO) {
        // Logic to add a teacher
        // For example: adminService.addTeacher(teacherDTO);
        return ResponseEntity.ok(new ResponseMessage(true, "Teacher added"));
    }

    @PostMapping("/addStudent")
    public ResponseEntity<?> addStudent(@RequestBody StudentDTO studentDTO) {
        try {
            adminService.addStudent(studentDTO); // Assuming this method saves the student to the database
            return ResponseEntity.ok(new ResponseMessage(true, "Student added successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(new ResponseMessage(false, "Failed to add student: " + e.getMessage()));
        }
    }



    @GetMapping("/queries")
    public ResponseEntity<ResponseMessage> viewQueries() {
        List<QueryDTO> queries = adminService.getQueries();
        // Now, ResponseMessage contains a list of queries in its data property.
        return ResponseEntity.ok(new ResponseMessage(true, queries));
    }
    }

