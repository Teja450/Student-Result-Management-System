package com.example.demo.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.ResultDTO;
import com.example.demo.model.Result;
import com.example.demo.model.Teacher;
import com.example.demo.repository.ResultRepository;
import com.example.demo.repository.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;
    
    private ResultRepository resultRepository;

    @Override
    public Optional<Teacher> authenticate(String username, String password) {
        Teacher teacher = teacherRepository.findByUsername(username);
        if (teacher != null && teacher.getPassword().equals(password)) {
            return Optional.of(teacher);
        }
        return Optional.empty();
    }

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

	@Override
	public String addOrUpdateResult(ResultDTO resultDTO) {
		// TODO Auto-generated method stub
		return null;
	}

	
    // Additional methods for teacher-related operations
}
