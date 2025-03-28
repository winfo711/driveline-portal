
# Environment Variables

This project uses environment variables to configure various aspects of the application. Below is a list of the available environment variables and their descriptions.

## API Configuration

- `VITE_API_BASE_URL`: The base URL for API requests. Default: `https://admin.bpraceloc.com/api`

## How to Set Environment Variables

### Development

For local development, you can create a `.env` file in the root of the project with the following content:

```
VITE_API_BASE_URL=https://admin.bpraceloc.com/api
```

You can modify the value to point to your local API server if needed.

### Production

For production deployment, you should set these environment variables in your hosting platform's configuration.

## Important Notes

- All environment variables used in the browser must be prefixed with `VITE_` for Vite to expose them to your code.
- If an environment variable is not set, the application will use default values.
- Environment variables are embedded at build time, so if you change them, you need to rebuild the application.
