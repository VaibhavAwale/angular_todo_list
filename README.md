# TaskList

## Brief tutorial on steps followed to setup angular for simple task list

## Setup
1. Install [NodeJS](https://nodejs.org/en/)
    1. Check installation with 
        ```
        node -v
        ```
    2. Verify npm JS package manager is installed 
        ```
        npm –version
        ```
2. Install Angular command line tools
    ```
    npm install -g @angular/cli
    ```
3. If using vscode, install "tslint" and "alexiv.vscode-angular2-files" extensions.

## Setting up project
1. Create new workspace and initial application. Accept use of routing service and CSS.
    ```
    ng new task-list
    ```
2. Serve the application and check if it works
    ```
    cd task-list/
    ng serve --open
    ```

## Creating components
The UI of the application is divided into separate logical UI components. Each angular component has a model and view part. The model and controller part is desribed by the component's class and view part is described by the html template.

1. Update the auto-generated "app.component" component's .ts and .html file
2. Add CSS styling in app.component.css
3. Build and verify that the changes are reflected
4. Add new component for input text field - task-input
    ```
    ng generate component task-input
    ```

## References

1. [Angular Setup](https://angular.io/guide/setup-local)
