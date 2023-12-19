package com.wirt_pol.wirtualna_politechnika.DTO;

import com.wirt_pol.wirtualna_politechnika.entity.Comment;
import com.wirt_pol.wirtualna_politechnika.entity.Content;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContentDTO {
    private Long contentId;
    private String description;
    private LocalDateTime creationTime;
    private List<String> tags;
    private String author;
    private int likes;
    private List<Comment> comments;

    public static ContentDTO fromContent(Content content){
        ContentDTO dto = new ContentDTO();
        dto.setContentId(content.getId());
        dto.setDescription(content.getDescription());
        dto.setCreationTime(content.getCreationTime());
        dto.setTags(content.getTags());
        dto.setAuthor(content.getAuthor().getUsername());
        dto.setLikes(content.getLikes());
        dto.setComments(content.getComments());
        return dto;
    }
}
