package com.example.matrimonial.controler;

import com.example.matrimonial.dto.Userdto;
import com.example.matrimonial.model.PhotoModel;
import com.example.matrimonial.model.UserModel;
import com.example.matrimonial.repository.MediaRepository;
import com.example.matrimonial.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/regis")
public class RegistrationController {
    @Autowired
    RegistrationService registrationService;
    @Autowired
    MediaRepository media;
    @PostMapping(value = "/adduser", consumes = {"multipart/form-data", "application/octet-stream"})

    public ResponseEntity<UserModel> addUser(@RequestPart Userdto user, @RequestPart MultipartFile photo) throws IOException {
        System.out.println("in adduser");
       UserModel model= registrationService.addUser(user,photo);
       return new ResponseEntity<>(model, HttpStatus.CREATED);

}
@GetMapping("/getAllUsers")
    public ResponseEntity<List<UserModel>> getAllUsers(){
    System.out.println("in getAllUsers");
       List<UserModel> model=registrationService.getAllUsers();
       return new ResponseEntity<>(model,HttpStatus.OK);
}
@GetMapping("/getUser/{id}")
    public ResponseEntity<UserModel> getUser(@PathVariable Long id){
    System.out.println("in user");
    UserModel model=registrationService.getUser(id);
    return  new ResponseEntity<>(model,HttpStatus.OK);


}
@PostMapping("/post")
    public String seeSimple( @RequestBody String name){
    System.out.println("in simplePost");
        return name;
}
@PostMapping("/addphoto")
    public String addPhoto(@RequestBody  MultipartFile file ){
          PhotoModel model=new PhotoModel();
        model.setFileName(file.getOriginalFilename());

        return "success";
}
}
