export const usage = `
    help     Show help
    place    Place robot on the table
    left     Turn robot to the left
    right    Turn robot to the right
    move     Move robot
    report   Report robot position
    quit     Quit the application
`;

const run = () => {
  console.log(`Supported commands:\n${usage}`);
};

export default { run };
