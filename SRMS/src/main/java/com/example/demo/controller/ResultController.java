package com.example.demo.controller;

import com.example.demo.DTO.ResultDTO;
import com.example.demo.DTO.ResultFetchRequest;  // Create this request DTO if needed.
import com.example.demo.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin  // Allow cross-origin if calling from a frontend hosted elsewhere
@RequestMapping("/api/v1/result")
public class ResultController {

    @Autowired
    private ResultService resultService;

    // This endpoint fetches semester-wise results
    @PostMapping("/fetch")
    public ResponseEntity<?> fetchResults(@RequestBody ResultFetchRequest request) {
        List<ResultDTO> results = resultService.getResultsByStudentAndSemester(
                request.getStudent_id(), request.getSemester());
        System.out.println("Controller: fetched results: " + results);
        if (results.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No records found");
        }
        return ResponseEntity.ok(results);
    }
}
