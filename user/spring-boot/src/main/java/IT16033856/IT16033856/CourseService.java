package IT16033856.IT16033856;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/course")
public class CourseService {
	
	public double total = 0;
	@Autowired
	private CourseRepository repository;
	
	@SuppressWarnings("finally")
	private Course findOne(String code) {
		Course instance = null;
		try {
			List<Course> courseList = repository.findAll();
			for (Course course: courseList) {
				if (course.getCode().equals(code)) {
					instance = course;
					break;
				}
			}
 		} catch( Exception e) {
 			e.printStackTrace();
 		} finally {
 			return instance;
 		}
	}
	
	@SuppressWarnings("finally")
	@RequestMapping(method=RequestMethod.GET)
	public List<Course> GetAllCourses() {
		List<Course> courseList = null;
		try {
			courseList = repository.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			return courseList;
		}
	}
	
	@SuppressWarnings("finally")
	@RequestMapping(value ="/{code}", method = RequestMethod.GET)
	public Course getSingle(@PathVariable String code) {
		Course instance = null;
		try {
			instance = this.findOne(code);
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			return instance;
		}
	}
}
