package com.taskease.app.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskease.app.Entity.UserEntity;
import com.taskease.app.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository urepo;
	
	//Create or insert user record in tblUsers
	public UserEntity insertUser(UserEntity user) {
		return urepo.save(user);
	}
	
	//Read all records in tblUsers
	public List<UserEntity> getAllUsers() {
		return urepo.findAll();
	}
	
	//U - update a user
	@SuppressWarnings("finally")
	public UserEntity updateUser(int userId, UserEntity newUserDetails) {
		UserEntity user = new UserEntity();
		try {
			// search the id number of the user that will be updated
			user = urepo.findById(userId).get();
					
			// update the record
			user.setfName(newUserDetails.getfName());
			user.setlName(newUserDetails.getlName());
			user.setEmail(newUserDetails.getEmail()); // Corrected method name
			user.setpWord(newUserDetails.getpWord());
					
		} catch(NoSuchElementException ex) {
			throw new NoSuchElementException("User " + userId + " does not exist!");
		} finally {
			return urepo.save(user);
		}
	}

	
	//D - delete a user
	@SuppressWarnings("unused")
	public String deleteUser(int userId) {
			String msg = "";
					
			if (urepo.findById(userId) != null) {
				urepo.deleteById(userId);
				msg = "User" + userId + " is successfully deleted!";
			} else
				msg = "User" + userId + " does not exist!";
				return msg;
		}

		public boolean validateUser(String email, String password) {
			try {
				UserEntity user = urepo.findByEmail(email); // Corrected to use findByEmail
				return user != null && user.getpWord().equals(password);
			} catch (Exception e) {
				return false;
			}
		}
		
		
}
