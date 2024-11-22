package com.example.matrimonial.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "photo")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PhotoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private  String fileName;
    @Lob
    private  byte[] data;
    private String type;
}
