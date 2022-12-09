package com.example.serverjava.repo;

import com.example.serverjava.entity.Fire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FireRepo extends JpaRepository<Fire,Long> {
}
