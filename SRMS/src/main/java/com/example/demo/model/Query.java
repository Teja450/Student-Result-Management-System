package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="query")

@NoArgsConstructor
@AllArgsConstructor
public class Query{
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getQuerydetails() {
		return querydetails;
	}

	public void setQuerydetails(String querydetails) {
		this.querydetails = querydetails;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="querydetails")
	private String querydetails;
}