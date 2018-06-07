package IT16033856.IT16033856;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourseRepository extends MongoRepository<Course, String> {
	List<Course> findAll();
}
