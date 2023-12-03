# Twitter Clone

This is a Twitter clone built using React Native / Expo for the frontend and TRPC and Prisma for the backend. The whole project is in a Yarn monorepo.

## Getting Started

1. Clone the repository
2. Install the dependencies using `yarn install`
3. Start the frontend server using `yarn start:frontend`
4. Start the backend server using `yarn start:backend`

## Project Structure

The project is divided into two packages: `frontend` and `backend`.

### Frontend

The frontend is built using React Native and Expo. The entry point of the application is `App.tsx`. The components are located in the `components` directory and the screens are located in the `screens` directory.

### Backend

The backend is built using TRPC and Prisma. The entry point of the server is `index.ts`. The routes are defined in `routes.ts`. The controllers are located in the `controllers` directory and the models are located in the `models` directory. The Prisma schema is defined in `schema.prisma`.

## Available Scripts

In the project directory, you can run:

- `yarn start:frontend`: Starts the frontend server
- `yarn start:backend`: Starts the backend server
- `yarn test:frontend`: Runs the frontend tests
- `yarn test:backend`: Runs the backend tests

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)