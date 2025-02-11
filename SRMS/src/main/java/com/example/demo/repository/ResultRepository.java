package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
    Optional<Result> findByStudentUsnAndSemesterAndSubjectId(String studentUsn, String semester, Long subjectId);
    List<Result> findByStudentUsnAndSemester(String studentUsn, String semester);
}
