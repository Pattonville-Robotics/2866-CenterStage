// IDENTIFIERS_USED=gamepad1,gamepad2,left_driveAsDcMotor,right_driveAsDcMotor,spin1AsDcMotor

/**
 * This function is executed when this OpMode is selected from the Driver Station.
 */
function runOpMode() {
  if (linearOpMode.opModeIsActive()) {
  }
  // You will have to determine which motor to reverse for your robot.
  // In this example, the right motor was reversed so that positive
  // applied power makes it move the robot in the forward direction.
  right_driveAsDcMotor.setDirection("REVERSE");
  // You will have to determine which motor to reverse for your robot.
  // In this example, the right motor was reversed so that positive
  // applied power makes it move the robot in the forward direction.
  spin1AsDcMotor.setDirection("REVERSE");
  linearOpMode.waitForStart();
  while (linearOpMode.opModeIsActive()) {
    // The Y axis of a joystick ranges from -1 in its topmost position
    // to +1 in its bottommost position. We negate this value so that
    // the topmost position corresponds to maximum forward power.
    spin1AsDcMotor.setDualPower(-gamepad1.getRightStickY(), right_driveAsDcMotor, -gamepad1.getRightStickY());
    // The Y axis of a joystick ranges from -1 in its topmost position
    // to +1 in its bottommost position. We negate this value so that
    // the topmost position corresponds to maximum forward power.
    spin1AsDcMotor.setDualPower(gamepad1.getLeftStickX(), right_driveAsDcMotor, -1 * gamepad1.getLeftStickX());
    if (gamepad2.getDpadUp()) {
      left_driveAsDcMotor.setTargetPosition(83);
      left_driveAsDcMotor.setMode("RUN_TO_POSITION");
      left_driveAsDcMotor.setPower(0.5);
    } else if (gamepad2.getDpadDown()) {
      left_driveAsDcMotor.setTargetPosition(-83);
      left_driveAsDcMotor.setMode("RUN_TO_POSITION");
      left_driveAsDcMotor.setPower(-0.2);
    } else {
      left_driveAsDcMotor.setPower(0);
    }
  }
}
