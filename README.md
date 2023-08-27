# Coding Assignment 13 - Code Quality Checks

## Requirements

- Node.js
- npm

## To run this application on localhost, port 8018

### Run with npm

Clone this repository and change into it's root directory.\
If you are running this on Windows, there may be workarounds needed to clone (below), as this was made in WSL.\
If not all files cloned (caused by files containing the ':' character), execute the following:

1. Set git flag with `git config core.protectNTFS false`.
   Git is susceptible to NTFS-related attacks when:

- Running Git in the WSL
- Working directly on Windows drives
- Running Git on macOS and working on smb://-mounted network shares

3. Run `git reset`
4. Run `git checkout`
5. Run `git restore ./`

Ensure all project dependencies are installed with `npm install`.\

Run the app on Localhost with: `npm run storybook`.\
If you receive the error, 'Error: error:0308010C:digital envelope routines::unsupported' after the above command:

- Unix: run `export NODE_OPTIONS=--openssl-legacy-provider`
- Windows command prompt: `set NODE_OPTIONS=--openssl-legacy-provider`
- Powershell: `$env:NODE_OPTIONS = "--openssl-legacy-provider"`
  If the above doesn't work, try to use the current LTS version from [Node.js](https://nodejs.org/en/download/releases).

### Run from Docker container

Clone repository with directions above and navigate to the root directory.\
Download Docker [here](https://www.docker.com/) and start it up to ensure the Docker daemon is running.\
To create a Docker image, run: `docker build -t <desired_image_name> .`\
Then run the image as a container: `docker run --name <desired_container_name> -it -p 8018:80 --rm <image_name>`\
Now open localhost:8018 in a browser!

## Pull and run the application image from my Hub

Download Docker [here](https://www.docker.com/) and start it up to ensure the Docker daemon is running.\

```
docker pull abozynski/bozynski_alina_coding_assignment13
```

```
docker run --name <desired_container_name> -it -p 8018:80 --rm abozynski/bozynski_alina_coding_assignment13
```

Then open localhost:8018 in a browser!

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
