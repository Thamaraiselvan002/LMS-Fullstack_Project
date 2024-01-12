package com.lms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lms.entity.Faculty;

@Repository
public interface FacultyRepo extends JpaRepository<Faculty, Integer> {
	
	
	//public Faculty findById(int id);
	
}
