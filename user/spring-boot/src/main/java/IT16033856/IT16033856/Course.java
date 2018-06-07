package IT16033856.IT16033856;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="courseschemas")
public class Course {
	private String code;
	private String name;
	private double passMark;
	private String lecturerInCharge;
	private String[] subjects;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPassMark() {
		return passMark;
	}
	public void setPassMark(double passMark) {
		this.passMark = passMark;
	}
	public String getLecturerInCharge() {
		return lecturerInCharge;
	}
	public void setLecturerInCharge(String lecturerInCharge) {
		this.lecturerInCharge = lecturerInCharge;
	}
	public String[] getSubjects() {
		return subjects;
	}
	public void setSubjects(String[] subjects) {
		this.subjects = subjects;
	}
}
