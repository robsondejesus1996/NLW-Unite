package robson.com.pass_in.dto.event.attendee;

import java.time.LocalDateTime;

public record AttendeeDetails(String id, String name, String email, LocalDateTime createdAt, LocalDateTime checkedInAt) {


}
