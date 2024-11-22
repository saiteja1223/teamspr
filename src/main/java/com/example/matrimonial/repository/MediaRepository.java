package com.example.matrimonial.repository;

import com.example.matrimonial.model.PhotoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MediaRepository extends JpaRepository<PhotoModel,Integer> {
}
