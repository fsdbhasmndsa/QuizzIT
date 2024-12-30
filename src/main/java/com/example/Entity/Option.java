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
@Table(name = "Options")
@Data
public class Option {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "question_id", nullable = false)
	    private Question question;  // Mối quan hệ với Question

	    @Column(nullable = false)
	    private String content;  // Nội dung lựa chọn (ví dụ: "A", "B", "C", "D")

	    @Column(nullable = false)
	    private boolean isCorrect;  // Đánh dấu lựa chọn này có phải là câu trả lời đúng không
}
