package com.example.serverjava.repo;

import com.example.serverjava.entity.Infoaddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InfoaddressRepo extends JpaRepository<Infoaddress,Long> {
    @Query("SELECT t FROM Infoaddress t WHERE t.code = ?1")
    Infoaddress findByCode(String code);
}
