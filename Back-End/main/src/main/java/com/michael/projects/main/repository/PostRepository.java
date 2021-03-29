package com.michael.projects.main.repository;

import java.util.Optional;

import com.michael.projects.main.entities.Post;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<Post,Long> {

    Optional<Post> findById(Long id);
    
    @Override
    Iterable<Post> findAll();
}
