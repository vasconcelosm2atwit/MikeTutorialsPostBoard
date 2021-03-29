package com.michael.projects.main.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PostNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    public PostNotFoundException(Long id) {
        super("Could not find Post " + id);
    }
}
