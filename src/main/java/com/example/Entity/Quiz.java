package com.example.Entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Quizzes")
@Data
public class Quiz {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long quizId;

	    @Column(nullable = false)
	    private String title;
	    
	    @Column(nullable = false)
	    private String image;

	    @ManyToOne
	    @JoinColumn(name = "industry_id", nullable = false)
	    private Industry industry;  // Mối quan hệ với Industry

	    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Question> questions;  // Một quiz có thể có nhiều câu hỏi

	    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Result> results;  // Một quiz có thể có nhiều kết quả
	
	
}
