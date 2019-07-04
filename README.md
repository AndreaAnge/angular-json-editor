Angular Json Editor (wrapper for jsoneditor). View/Edit Json file with formatting.

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
`/src` - contains all application files
  - `/tree` - Tree module is located here
  - `/demo` - Demo application demonstrating Tree View/Editor

## Features
1. Checkbox selection - user can select/check any tree node. Child nodes are coupled with parent meaning if all child nodes are selected,   parent node will be selected as well. 
2. Delete selected nodes - after nodes are marked/checked for deletion, user can click REMOVE button to delete nodes from tree.
  If all children of a parent node are being removed, parent node will be removed as well.
 
