package com.example.demo.service;

import com.example.demo.DTO.ResultDTO;
import com.example.demo.model.Result;
import java.util.List;

public interface ResultService {

    // Existing method:
    Result addOrUpdateResult(ResultDTO resultDTO);
    
    // NEW: Fetch results by student USN and semester
    List<ResultDTO> getResultsByStudentAndSemester(String studentUsn, String semester);
}
