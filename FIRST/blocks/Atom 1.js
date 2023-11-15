// IDENTIFIERS_USED=right_driveAsDcMotor,spin1AsDcMotor

/**
 * This function is executed when this OpMode is selected from the Driver Station.
 */
function runOpMode() {
  // You will have to determine which motor to reverse for your robot.
  // In this example, the right motor was reversed so that positive
  // applied power makes it move the robot in the forward direction.
  right_driveAsDcMotor.setDirection("REVERSE");
  // You will have to determine which motor to reverse for your robot.
  // In this example, the right motor was reversed so that positive
  // applied power makes it move the robot in the forward direction.
  spin1AsDcMotor.setDirection("REVERSE");
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      // The Y axis of a joystick ranges from -1 in its topmost position
      // to +1 in its bottommost position. We negate this value so that
      // the topmost position corresponds to maximum forward power.
      spin1AsDcMotor.setDualPower(1, right_driveAsDcMotor, 1);
      linearOpMode.sleep(1500);
      linearOpMode.requestOpModeStop();
    }
  }
}
