package IT16033856.IT16033856;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/subject")
public class SubjectService {
	@Autowired
	private SubjectRepository repository;
	
	@SuppressWarnings("finally")
	public Subject findOne(String id) {
		Subject instance = null;
		try {
			List<Subject> subjectList = repository.findAll();
			for (Subject subject: subjectList) {
				if (subject.getSid().equals(id)) {
					instance = subject;
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
	public List<Subject> GetAllSubjects() {
		List<Subject> subjectList = null;
		try {
			subjectList = repository.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			return subjectList;
		}
	}
	
	@SuppressWarnings("finally")
	@RequestMapping(value ="/{id}", method = RequestMethod.GET)
	public Subject getSingle(@PathVariable String id) {
		Subject instance = null;
		try {
			instance = this.findOne(id);
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			return instance;
		}
	}
}
