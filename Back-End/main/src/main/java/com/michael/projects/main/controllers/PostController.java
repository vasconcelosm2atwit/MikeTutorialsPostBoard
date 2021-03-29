package com.michael.projects.main.controllers;

import javax.validation.Valid;

import com.michael.projects.main.entities.Post;
import com.michael.projects.main.service.PostService;
import com.michael.projects.main.service.ValidationErrorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
public class PostController {
    
    @Autowired
    private PostService postService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewPost(@Valid @RequestBody Post post, BindingResult result) {
        ResponseEntity<?> errorMap = validationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Post newPost = postService.saveOrUpdatePost(post);

        return new ResponseEntity<Post>(newPost,HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> byId(@PathVariable Long id){
        Post newPost = postService.findById(id);
        return new ResponseEntity<Post>(newPost,HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Post> getAllPosts(){
        return postService.findAllPosts();
    }

}
