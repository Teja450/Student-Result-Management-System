package com.example.demo.repository;
import java.util.List;

import com.example.demo.model.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueryRepository extends JpaRepository<Query, Long> {
    // You can add custom queries here if needed
    // For example, to find queries by username:
    List<Query> findByUsername(String username);
}
