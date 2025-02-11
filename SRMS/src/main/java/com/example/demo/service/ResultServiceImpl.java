package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.ResultDTO;
import com.example.demo.model.Result;
import com.example.demo.model.Subject;
import com.example.demo.repository.ResultRepository;
import com.example.demo.repository.SubjectRepository;

@Service
public class ResultServiceImpl implements ResultService {

    @Autowired
    private ResultRepository resultRepository;
    
    @Autowired
    private SubjectRepository subjectRepository;
    
    // This method assumes you want to update or add a result.
    // Note: We now look up an existing result by subject_id (instead of subject name).
    public Result addOrUpdateResult(ResultDTO resultDTO) {
        Optional<Result> existingResult = resultRepository.findByStudentUsnAndSemesterAndSubjectId(
                resultDTO.getUsn(), resultDTO.getSemester(), resultDTO.getSubjectId());
        Result result;
        if (existingResult.isPresent()) {
            result = existingResult.get();
            result.setInternalMarks(resultDTO.getInternalMarks());
            result.setExternalMarks(resultDTO.getExternalMarks());
            result.setGrade(resultDTO.getGrade());
        } else {
            result = new Result();
            result.setStudentUsn(resultDTO.getUsn());
            result.setSemester(resultDTO.getSemester());
            // Save the subject_id directly
            result.setSubjectId(resultDTO.getSubjectId());
            result.setInternalMarks(resultDTO.getInternalMarks());
            result.setExternalMarks(resultDTO.getExternalMarks());
            result.setGrade(resultDTO.getGrade());
        }
        return resultRepository.save(result);
    }
    
    @Override
    public List<ResultDTO> getResultsByStudentAndSemester(String studentUsn, String semester) {
        // For testing, using hardcoded values:
        String testStudentUsn = "1NT20CS195"; // Known to exist
        String testSemester = "1";            // Known to exist
        
        System.out.println("usn "+ studentUsn);
        System.out.println("semester "+ semester);
        
        
        List<Result> results = resultRepository.findByStudentUsnAndSemester(studentUsn, semester);
        System.out.println("Hardcoded query - Raw results: " + results);
        
        // Print out each result's field values
        for (Result r : results) {
            System.out.println("Result fields -> studentUsn: " + r.getStudentUsn() +
                ", semester: " + r.getSemester() +
                ", subjectId: " + r.getSubjectId() +
                ", internalMarks: " + r.getInternalMarks() +
                ", externalMarks: " + r.getExternalMarks() +
                ", grade: " + r.getGrade());
        }
        
        // Map each Result entity to a ResultDTO
        // Here, we fetch the subject name from the subject table using subject_id.
        List<ResultDTO> resultDTOs = results.stream()
            .map(result -> {
                String subjectName = "Unknown";
                Long subjId = result.getSubjectId();
                if (subjId != null) {
                    Optional<Subject> subjOpt = subjectRepository.findById(subjId);
                    if (subjOpt.isPresent()) {
                        subjectName = subjOpt.get().getSubjectName();
                    }
                }
                // Create the DTO using the fetched subject name.
                return new ResultDTO(
                    result.getStudentUsn(),
                    result.getSemester(),
                    subjectName,
                    result.getInternalMarks(),
                    result.getExternalMarks(),
                    result.getGrade(),
                    result.getSubjectId()
                );
            })
            .collect(Collectors.toList());
        
        System.out.println("Returning results: " + resultDTOs);
        return resultDTOs;
    }
}
