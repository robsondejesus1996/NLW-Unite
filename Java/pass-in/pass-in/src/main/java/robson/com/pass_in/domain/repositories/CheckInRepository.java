package robson.com.pass_in.domain.repositories;

import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;
import robson.com.pass_in.domain.checkin.CheckIn;

import java.util.Optional;

public interface CheckInRepository extends JpaRepository<CheckIn, Integer> {

    Optional<CheckIn> findByAttendeeId(String attendeeId);
}
