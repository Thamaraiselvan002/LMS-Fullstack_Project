package com.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lms.entity.Faculty;
import com.lms.repo.FacultyRepo;
import com.lms.service.FacultyService;
import com.lms.exception.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class FacultyController {

	
	@Autowired
	private FacultyService facultyservice;
	
	@Autowired
	private FacultyRepo facultyrepo;
	
	@PostMapping("/createfaculty")
	Faculty newfaculty (@RequestBody Faculty newfaculty) {
		return facultyrepo.save(newfaculty);
	}
	
	@GetMapping("/getfaculty")
	List <Faculty> getAllfaculty(){
		return facultyrepo.findAll();
	}
	
	/*
	 * @GetMapping("/getId") Faculty getUserById(@PathVariable int id){ return
	 * facultyrepo.findById(id) .orElse(()->new UserNotFoundException(id)); }
	 */
	
	 @GetMapping("/getuserbyid/{id}")
	 Faculty getUserById(@PathVariable int id) {
	        return facultyrepo.findById(id)
	                .orElseThrow(() -> new UserNotFoundException(id));
	    }
	 
	 @PutMapping("/update/{id}")
		public Faculty updateBook(@PathVariable("id") int id, @RequestBody Faculty faculty) {
			this.facultyservice.updateFaculty(faculty, id);
			return faculty;
		}

	 
	 @DeleteMapping("/deletefaculty/{id}")
	 String deleteFaculty(@PathVariable int id) {
		 if(!facultyrepo.existsById(id)) {
			 throw new UserNotFoundException(id);
		 }
		 
		 facultyrepo.deleteById(id);
		 return "faculty deleted by this id "+ id ;
	 }
	 
}
