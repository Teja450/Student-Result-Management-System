package com.example.demo.repository;

import com.example.demo.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    // You can add custom queries here if needed
    Admin findByUsername(String username);
}
