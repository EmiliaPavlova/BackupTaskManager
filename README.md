# Backup task manager

## Task
Create a web application with React, which represents a backup task manager. It should consist of the
following elements:
* toggle-button to start/stop the backup process
* current status
* date of the next execution
* date of the last successful execution
* progress bar to represent the current status and moved albums

These are examples of a user flow:

#### Activation
1.User comes and starts the backup by clicking on the toggle button.
* The status changes to “Running”.
* The progress bar grows gradually until the backup finishes.

2.The backup finishes successfully.
* The status changes to “Finished”.
* Next execution date is generated
* Last successful execution date is saved and presented to the user.
* The toggle button remains active.

*Note: While the status is “Running”, no additional changes can be applied. This means that the toggle
button should stay disabled until the backup is finished.*

*Note: If an error occurs during the backup process, the status should be changed to “Aborted”. The
toggle button becomes active but not switched on, which indicates that the backup is stopped. It
should be pressed again to restart the backup.*

#### Pausing the backup
1.The user wants to stop the auto backup. He clicks on the active toggle button to switch it off.
* The status changes from “Finished” to “Paused”.
* Next execution date is removed until the next activation.

**Required data values:**
* **status** - Running | Finished | Aborted | Paused
* **next_execution** - MM/DD/YY Date
* **last_execution** - MM/DD/YY Date
* **backuped_albums** - 0 >= number <= 1 000
* **total_albums** - 0 > number <= 1 000

*Note: next_execution should be generated 28 days after the last successful execution date. If the backupfinishes successfully on 05/01/2021, the next_execution value should be 05/28/2021.*

#### Design
![Unset](public/Unset.png?raw=true "Unset")
![Running](public/Status_running.png?raw=true "Running")
![Finished](public/Status_finished.png?raw=true "Finished")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
There are no tests implemented for the moment.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
