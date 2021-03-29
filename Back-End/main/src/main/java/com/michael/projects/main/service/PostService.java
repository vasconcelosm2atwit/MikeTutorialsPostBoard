package com.michael.projects.main.service;

import com.michael.projects.main.entities.Post;
import com.michael.projects.main.exceptions.PostNotFoundException;
import com.michael.projects.main.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post saveOrUpdatePost(Post post){
        return postRepository.save(post);
    }

    public Post findById(Long id){
        return postRepository.findById(id).orElseThrow(() -> new PostNotFoundException(id));
    }

    public Iterable<Post> findAllPosts(){
        return postRepository.findAll();
    }


    

    
}
