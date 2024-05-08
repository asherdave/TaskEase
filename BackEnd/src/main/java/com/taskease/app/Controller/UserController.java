package com.taskease.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taskease.app.Entity.UserEntity;
import com.taskease.app.Service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = ("http://localhost:3000"))

public class UserController {
	
	@Autowired
	UserService userv;
	
	@GetMapping("/print")
	public String itWorks() {
		return "It works";
	}
	
	//Create
	@PostMapping("/insertUser")
	public UserEntity insertUser(@RequestBody UserEntity user) {
		return userv.insertUser(user);
	}
	
	//Read
	@GetMapping("/getAllUsers")
	public List<UserEntity> getAllUsers() {
		return userv.getAllUsers();
	}
	
	//U - Update a user record
	@PutMapping("/updateUser")
	public UserEntity updateUser(@RequestParam int userId, @RequestBody UserEntity newUserDetails) {
		return userv.updateUser(userId, newUserDetails);
	}
				
	//D - Delete a user record
	@DeleteMapping("/deleteUser/{userId}")
	public String deleteUser(@PathVariable int userId) {
		return userv.deleteUser(userId);
	}

	@PostMapping("/login")
public ResponseEntity<String> loginUser(@RequestBody UserEntity user) {
    boolean isValid = userv.validateUser(user.geteMail(), user.getpWord());
    if (isValid) {
        return ResponseEntity.ok("Login successful");
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect credentials");
    }
}


}
