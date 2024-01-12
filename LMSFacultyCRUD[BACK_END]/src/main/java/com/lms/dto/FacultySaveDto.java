package com.lms.dto;

public class FacultySaveDto {

	private String faculty_name;
	private int faculty_mobile;
	private String faculty_role;
	
	
	public FacultySaveDto( String faculty_name, int faculty_mobile, String faculty_role) {
		super();
		
		this.faculty_name = faculty_name;
		this.faculty_mobile = faculty_mobile;
		this.faculty_role = faculty_role;
	}
	
	

	public FacultySaveDto() {
		super();
		// TODO Auto-generated constructor stub
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
		return "FacultyDto [ faculty_name=" + faculty_name + ", faculty_mobile="
				+ faculty_mobile + ", faculty_role=" + faculty_role + "]";
	}
}
