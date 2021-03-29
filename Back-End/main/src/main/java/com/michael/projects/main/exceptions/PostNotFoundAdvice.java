package com.michael.projects.main.exceptions;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class PostNotFoundAdvice {
    
    @ResponseBody
    @ExceptionHandler(PostNotFoundException.class)
    @ResponseStatus
    String postNotFoundHandler(PostNotFoundException ex){
        return ex.getMessage();
    }
}
