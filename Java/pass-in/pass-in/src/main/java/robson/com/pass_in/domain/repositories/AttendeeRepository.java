package robson.com.pass_in.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import robson.com.pass_in.domain.attendee.Attendee;

import java.util.List;

public interface AttendeeRepository extends JpaRepository<Attendee, String> {

    public List<Attendee> findByEventId(String eventId);


}
