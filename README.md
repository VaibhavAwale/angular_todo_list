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

### Create text input field component
1. Add new component for input text field - task-input
    ```
    ng generate component task-input
    ```
2. We will be using [Reactive](https://angular.io/guide/reactive-forms) forms for creating form input. 
    1. Edit the "task-input.component.ts" file to import `FormControl`.
    2. Import `ReactiveFormsModule` in app.module.ts
    3. Add `formControl` object for input text field.

3. Add necessary html form elements and corresponding event listeners.
    1. In this example, we add `input type="text"` and `button` elements
    2. The common form elements are grouped together using `FormGroup`
    3. The complete form group can register a callback when the input is submitted, using `ngSubmit`

4. Add validation for form inputs
    1. Import `Validators` from `'@angular/forms'`.
    1. In this example, the text task input field is marked as required.
    2. The submit button is disabled if text task input field is empty.

## References

1. [Angular Setup](https://angular.io/guide/setup-local)
