package com.lms.dto;


public class FacultyDto {

	
	private int faculty_id;
	private String faculty_name;
	private int faculty_mobile;
	private String faculty_role;
	
	
	public FacultyDto(int faculty_id, String faculty_name, int faculty_mobile, String faculty_role) {
		super();
		this.faculty_id = faculty_id;
		this.faculty_name = faculty_name;
		this.faculty_mobile = faculty_mobile;
		this.faculty_role = faculty_role;
	}
	
	

	public FacultyDto() {
		super();
		// TODO Auto-generated constructor stub
	}



	public int getFaculty_id() {
		return faculty_id;
	}


	public void setFaculty_id(int faculty_id) {
		this.faculty_id = faculty_id;
	}


	public String getFaculty_name() {
		return faculty_name;
	}


	public void setFaculty_name(String faculty_name) {
		this.faculty_name = faculty_name;
	}


	public int getFaculty_mobile() {
		return faculty_mobile;
	}


	public void setFaculty_mobile(int faculty_mobile) {
		this.faculty_mobile = faculty_mobile;
	}


	public String getFaculty_role() {
		return faculty_role;
	}


	public void setFaculty_role(String faculty_role) {
		this.faculty_role = faculty_role;
	}


	@Override
	public String toString() {
		return "FacultyDto [faculty_id=" + faculty_id + ", faculty_name=" + faculty_name + ", faculty_mobile="
				+ faculty_mobile + ", faculty_role=" + faculty_role + "]";
	}
	
	
	
}
