package com.example.demo.controller;

import com.example.demo.DTO.LoginDTO;
import com.example.demo.DTO.StudentDTO;
import com.example.demo.DTO.QueryDTO;
import com.example.demo.DTO.ResponseMessage;
import com.example.demo.model.Admin;
import com.example.demo.model.Query;
import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import com.example.demo.repository.QueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;
    
    @Autowired
    private QueryRepository queryRepository;

    @PostMapping("/login")
    public ResponseEntity<ResponseMessage> login(@RequestBody LoginDTO loginDTO) {
        Optional<Student> student = studentService.authenticate(loginDTO.getUsername(), loginDTO.getPassword());
        if (student.isPresent()) {
            return ResponseEntity.ok(new ResponseMessage(true, student.get()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ResponseMessage(false, "Invalid credentials"));
    }
    
    @PostMapping("/query")
    public ResponseEntity<ResponseMessage> submitQuery(@RequestBody QueryDTO queryDTO) {
        try {
            // Create a new Query object from the DTO data
            Query query = new Query();
            query.setUsername(queryDTO.getUsername());
            query.setQuerydetails(queryDTO.getQuery());
            
            // Save the query to the database
            Query savedQuery = queryRepository.save(query);
            
            return ResponseEntity.ok(new ResponseMessage(true, "Query submitted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(new ResponseMessage(false, "Failed to submit query: " + e.getMessage()));
        }
    }
}
