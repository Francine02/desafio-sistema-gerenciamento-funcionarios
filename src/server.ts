import app from './app';
import { connectDb } from './configs/db/mongodb.config';
import { SERVER_PORT } from './configs/env/env.config';

(async () => {
  try {
    await connectDb();
    app.listen(SERVER_PORT, () => {
      console.log(`Server running on port ${SERVER_PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server ', error);
    process.exit(1);
  }
})();
