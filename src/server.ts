import app from './app';
import { SERVER_PORT } from './configs/env.config';
import { connectDB } from './configs/mongodb.config';

(async () => {
  try {
    await connectDB();
    app.listen(SERVER_PORT, () => {
      console.log(`Server running on port ${SERVER_PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server ', error);
    process.exit(1);
  }
})();
