package com.example.matrimonial.repository;

import com.example.matrimonial.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<UserModel,Long> {
}
