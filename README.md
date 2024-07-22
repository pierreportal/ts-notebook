**************
**🚧 IN MAINTENANCE**
**************

# The TsNb (TypeScript NoteBook)

Heavily inspired by **Jupyter Notebook**, this project provides a web-based interface for writing documents and executing TypeScript code snippets. 
The setup includes a React front end for user input, a Node.js server to handle requests, and a persistent Docker container that executes the TypeScript code while maintaining state between executions.

## Features

- **User Interface**: (Description TODO)
- **Persistent Execution Environment**: Uses a Docker container to execute TypeScript code and maintain state across multiple requests.
- **Real-time Output**: Displays the output of the executed code back in the web interface.
- **The `.tsnb` file extension** to save ongoing project.
- **Markdown format export**.

## Architecture

1. **React Front End**: Allows users to take notes in markdown format, input TypeScript code and send it to the server.
2. **Node.js Server (Host)**: Receives code from the front end and forwards it to the Docker container.
3. **Docker Container**: Runs a Node.js server that compiles and executes the TypeScript code, then returns the output.
4. **Output Handling**: The output from the Docker container is sent back to the React front end and displayed to the user.

## Getting Started

### Prerequisites

- Docker

### Installation
(TODO)
clone the repo -> run installation script -> add in PATH

### Usage
(TODO)
```bash
$ tsnb 
```
```bash
$ tsnb my_notebook.tsnb
```

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

