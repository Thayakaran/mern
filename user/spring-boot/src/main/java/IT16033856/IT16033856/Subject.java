package IT16033856.IT16033856;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.ObjectMapper;

@Document(collection="subjectschemas")
public class Subject {
	@Autowired
	private SubjectRepository repository;
	
	private String sid;
	private String name;
	private String description;
	private double amount;
	
	public String getSid() {
		return sid;
	}
	public void setSid(String id) {
		this.sid = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
}
