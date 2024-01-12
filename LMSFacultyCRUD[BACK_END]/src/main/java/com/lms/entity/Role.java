package com.lms.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Role_Details")
public class Role {

	@Id
	@Column(name="Role_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int roleid;
	@Column(name="Role_Name")
	private String rolename;
	@Column(name="Role_Description")
	private String roledescription;
	

	public Role(int roleid, String rolename, String roledescription) {
		super();
		this.roleid = roleid;
		this.rolename = rolename;
		this.roledescription = roledescription;
	}
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}	

	public int getRoleid() {
		return roleid;
	}
	public void setRoleid(int roleid) {
		this.roleid = roleid;
	}
	public String getRolename() {
		return rolename;
	}
	public void setRolename(String rolename) {
		this.rolename = rolename;
	}
	public String getRoledescription() {
		return roledescription;
	}
	public void setRoledescription(String roledescription) {
		this.roledescription = roledescription;
	}
	
	
	
	
}
