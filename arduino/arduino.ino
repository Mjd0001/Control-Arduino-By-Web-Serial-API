
#include <Servo.h>
Servo servo;
double pos=90;

void setup() {
 Serial.begin(9600);
 servo.attach(10);
 servo.write(pos);
}


void loop() {
  if (Serial.available() > 0) {
    String message = Serial.readStringUntil('\n');
    message.trim();
    if (message.length() == 0) {
      return;
    }
    
    if (message == "right" ||message == "Right" || message == "رايت" ||message == "يمين" ) {
      servo.write(180);
    }
    if (message == "left" || message == "Left" || message == "لفت" || message == "يسار") {
      servo.write(0);
    }
  }

}
