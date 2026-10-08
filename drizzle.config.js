import 'dotenv/config';

export default {
  // 1. Double asterisk ensures it scans all JavaScript files in the folder
  schema: './src/models/**/*.js',
  // 2. Changed to a standard non-hidden directory
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // 3. FIXED: Changed to uppercase to match your exact .env variable name
    url: process.env.DATABASE_URL,
  }
};
