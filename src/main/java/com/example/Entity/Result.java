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
@Table(name = "Results")
@Data
public class Result {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "quiz_id", nullable = false)
	    private Quiz quiz;  // Mối quan hệ với Quiz

	    @ManyToOne
	    @JoinColumn(name = "user_id", nullable = false)
	    private User user;  // Mối quan hệ với User
	    
	    @Column(nullable = false)
	    private int score;  // Điểm thi của người dùng
}
