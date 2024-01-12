package com.lms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lms.entity.Faculty;
import com.lms.repo.FacultyRepo;

@Service
public class FacultyService {
	
	@Autowired
	private FacultyRepo facultyrepo;
	
	// update the faculty
		public void updateFaculty(Faculty faculty, int id) {
			faculty.setFaculty_id(id);
			this.facultyrepo.save(faculty);
		}

}
