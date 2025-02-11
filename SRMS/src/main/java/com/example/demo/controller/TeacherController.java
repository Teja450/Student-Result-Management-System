package com.example.demo.controller;

import com.example.demo.DTO.LoginDTO;
import com.example.demo.DTO.StudentDTO;
import com.example.demo.DTO.TeacherDTO;
import com.example.demo.DTO.ResponseMessage;
import com.example.demo.DTO.ResultDTO;
import com.example.demo.model.Result;
import com.example.demo.model.Teacher;
import com.example.demo.service.ResultService;
import com.example.demo.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;
    
    @Autowired
    private ResultService resultService;

    @PostMapping("/login")
    public ResponseEntity<ResponseMessage> login(@RequestBody LoginDTO loginDTO) {
        Optional<Teacher> teacher = teacherService.authenticate(loginDTO.getUsername(), loginDTO.getPassword());
        if (teacher.isPresent()) {
            System.out.println("Teacher found: " + teacher.get().getUsername());
            return ResponseEntity.ok(new ResponseMessage(true, teacher.get()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ResponseMessage(false, "Invalid credentials"));
    }
    
    

    @PostMapping("/addOrUpdateResult")
    public ResponseEntity<ResponseMessage> addOrUpdateResult(@RequestBody ResultDTO resultDTO) {
        try {
            Result result = resultService.addOrUpdateResult(resultDTO);
            return ResponseEntity.ok(new ResponseMessage(true, "Result saved successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(new ResponseMessage(false, "Failed to save result: " + e.getMessage()));
        }
    }


    
}
