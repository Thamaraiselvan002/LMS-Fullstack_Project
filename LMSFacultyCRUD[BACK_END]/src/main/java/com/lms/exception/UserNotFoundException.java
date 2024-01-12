package com.lms.exception;

public class UserNotFoundException extends RuntimeException {

	
		public UserNotFoundException(long id) {
			super("could found the user with id " +id);
		}
}
