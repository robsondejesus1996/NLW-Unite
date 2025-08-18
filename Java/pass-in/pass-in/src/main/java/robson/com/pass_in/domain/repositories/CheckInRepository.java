package robson.com.pass_in.domain.repositories;

import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import robson.com.pass_in.domain.checkin.CheckIn;

public interface CheckInRepository extends JpaAttributeConverter<CheckIn, Integer> {
}
