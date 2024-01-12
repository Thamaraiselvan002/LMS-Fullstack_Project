package com.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lms.entity.Role;
import com.lms.exception.UserNotFoundException;
import com.lms.repo.RoleRepo;


@RestController
@CrossOrigin("http://localhost:3000")
public class RoleController {

	@Autowired
	private RoleRepo rolerepo;
	
	@PostMapping("/add")
	Role newrole(@RequestBody Role newrole) {
		return rolerepo.save(newrole);
		
	}
	
	@GetMapping("/allrole")
		List<Role> getAllRole(){
			return rolerepo.findAll();
		}
	
	@DeleteMapping("/delete/{id}") // Note the curly braces around "id" in the path
	public ResponseEntity<String> roleDelete(@PathVariable int id) {
	    if (!rolerepo.existsById(id)) {
	        throw new UserNotFoundException(id);
	    }
	    rolerepo.deleteById(id);
	    return ResponseEntity.ok("Role with ID " + id + " deleted successfully");
	}
	

	
	 
}
