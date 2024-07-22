## Data Flow Overview

### 1. User Interface (UI) Interaction:
The user enters Typescript code into a form and submits it.

### 2. Front End (React) Processing:
The React component captures the code snippet and sends it as a POST request to the Node server running on the host machine.

### 3. Node Server on Host:
The server receives the code snippet and forwards it to the persistent Docker container where the Node runtime is hosted.

### 4. Docker Node Runtime:
The Docker container runs a Node server that receives the code snippet, compiles and executes the Typescript code, and captures the output.

### 5. Returning the Output:
The Node server inside the Docker container sends the output back to the Node server on the host.

### 6. Sending Output Back to UI:
The host Node server sends the output back to the React front end.

### 7. Update the UI:
The React component updates the UI to display the output.

