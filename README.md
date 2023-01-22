# Coding Assignment13

## To run this application on port 8018

Fork the [GitHub repository](https://github.com/bozzywozzy/coding_assignment13) of this application.\
Ensure all project dependencies are installed.\
To run the app on Localhost:

### `npm run storybook`

Or:\
To run from a Docker container, navigate to the root directory of this project in a terminal.\
To create a Docker image, run:

### `docker build -t <desired_image_name> .`

Then, to run the image as a container:

### `docker run --name <desired_container_name> -it -p 8018:80 --rm <image_name>`

Now open localhost:8018 in a browser!

## Pull and run the application image from my Hub

### `docker pull abozynski/bozynski_alina_coding_assignment13`

### `docker run --name <desired_container_name> -it -p 8018:80 --rm abozynski/bozynski_alina_coding_assignment12`

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the Storybook component library in your browser on Localhost at port 8018.

### `npm run test`

Runs all test files with Jest.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

To list all files that you gave nginx access to, run:

### `sudo docker exec -it <container_name> ls -l /usr/share/nginx/html`

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
