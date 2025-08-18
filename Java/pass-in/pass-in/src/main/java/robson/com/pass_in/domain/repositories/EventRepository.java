package robson.com.pass_in.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import robson.com.pass_in.domain.events.Event;

public interface EventRepository extends JpaRepository<Event, String> {

}
