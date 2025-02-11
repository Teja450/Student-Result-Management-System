package com.example.demo.service;
import java.util.Optional;

import com.example.demo.DTO.ResultDTO;
import com.example.demo.model.Result;
import com.example.demo.model.Teacher;

public interface TeacherService {
    Optional<Teacher> authenticate(String username, String password);
    Teacher saveTeacher(Teacher teacher);
    // Additional methods for teacher-related operations
    
    
	String addOrUpdateResult(ResultDTO resultDTO);
    
    
}
