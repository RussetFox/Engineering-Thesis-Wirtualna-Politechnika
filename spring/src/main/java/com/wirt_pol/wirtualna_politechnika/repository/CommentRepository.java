package com.wirt_pol.wirtualna_politechnika.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wirt_pol.wirtualna_politechnika.entity.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long>{
    
}
