# deno-robot

Deno Robot is a toy robot simulator that takes commands to move a robot on a 5x5 grid.
It's built with 🦕 [Deno](https://deno.land/) and TypeScript.

## Usage

The robot understands the following commands:
- MOVE: moves the robot one unit forward in the direction it is currently facing
- LEFT: rotates the robot 90 degrees to the left
- RIGHT: rotates the robot 90 degrees to the right
- REPORT: prints the current position of the robot
- PLACE X,Y,F: places the robot on the grid in position X,Y and facing direction F (NORTH, SOUTH, EAST, or WEST)

The robot runs in two modes: interactive and file mode.

To run the robot, you need to have Deno installed on your machine. You can download Deno from [here](https://https://deno.com/).

Alternatively, you can download the executable file from the [releases page](https://github.com/antklim/deno-robot/releases).

### Interactive mode

Start the robot in interactive mode by running the following command:

```sh
$ deno task start
or
$ ./deno-robot 
```

The robot will prompt you to enter commands. You can enter commands one by one and see the robot move on the grid.


### File mode

You can also run the robot in file mode by providing a file with commands. The file should contain one command per line.

```sh
$ deno task start --file <path-to-file>
or
$ ./deno-robot --file <path-to-file>
```

The examples of the command file are in the test folder.

## Development

To run the tests, use the following command:

```sh
$ deno test
```

To format the code, use the following command:

```sh
$ deno fmt
```

To lint the code, use the following command:

```sh 
$ deno lint
```

### Contributing

If you have any ideas on how to improve the robot, feel free to open an issue or a pull request. Please follow the [Deno style guide](https://docs.deno.com/runtime/manual/references/contributing/style_guide) when contributing to this project.
