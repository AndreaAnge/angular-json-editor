Angular Json Viewer/Editor.

Working with latest Angular 8.

# TreeviewEditor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Setup and installation

1. Clone the repository.
2. Navigate to root project folder using any command line interface (e.g. Command Prompt on Windows).
3. Run npm install to install packages.
3. Run development server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Project structure
`/src` - source folder, has the general Angular CLI project structure.<br/>
  `/app` - contains AppComponent along with the following subfolders:
    - `/tree` - TreeModule and related components, models, etc..
    - `/demo` - DemoModule (imports TreeModule) with DemoComponent demonstrating Tree View/Editor.

## Features
1. Checkbox selection - user can select/check any tree node. Child nodes are coupled with parent meaning if all child nodes are selected,   parent node will be selected as well. 
2. Remove selected nodes - after nodes are marked/checked (for deletion), user can click REMOVE button to remove nodes from tree.

## To Do
1. Validate against schema.
3. Provide (at least 70%) unit test coverage.
2. Provide better design/styling.
