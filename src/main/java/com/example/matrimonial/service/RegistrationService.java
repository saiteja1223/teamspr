package com.example.matrimonial.service;

import com.example.matrimonial.dto.Userdto;
import com.example.matrimonial.model.UserModel;
import com.example.matrimonial.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class RegistrationService {
    @Autowired
    Repository repository;
   public UserModel addUser(Userdto user, MultipartFile file) throws IOException {
       System.out.println("in adduser block");
          UserModel model=new UserModel();
          model.setName(user.getName());
          model.setEmail(user.getEmail());
          model.setAge(user.getAge());
          model.setAddress(user.getAddress());
          model.setPhonenumber(user.getPhonenumber());
        String fileName= file.getOriginalFilename();
        byte[] data=file.getBytes();

        model.setFileName(fileName);
        model.setData(data);
        model.setType(file.getContentType());
       UserModel newModel=repository.save(model);

       return newModel;
   }

    public List<UserModel> getAllUsers() {
          return repository.findAll();
    }

    public UserModel getUser(Long id) {
       return  repository.findById(id).orElseThrow(()-> new  RuntimeException("not found"));
    }
}
