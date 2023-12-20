package com.wirt_pol.wirtualna_politechnika.DTO;

import com.wirt_pol.wirtualna_politechnika.entity.Comment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private Long commentId;
    private String commentText;
    private String author;

    public static CommentDTO fromComment(Comment comment){
        CommentDTO dto = new CommentDTO();
        dto.setCommentId(comment.getId());
        dto.setCommentText(comment.getCommentText());
        dto.setAuthor(comment.getAuthor().getUsername());
        return dto;
    }
    
}
