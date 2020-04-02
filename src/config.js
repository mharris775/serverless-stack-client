export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_ZFLVAbyg0aXc1fOdPx16bWld00la9RXhj0",
  s3: {
    REGION: "us-east-1",
    BUCKET: "elbert-ballo-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://hbzgm5jveh.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7vp3PZ8LD",
    APP_CLIENT_ID: "210575m5oo96c6d9d7h819c0no",
    IDENTITY_POOL_ID: "us-east-1:8e769d38-64dc-4188-9523-34f91137a473"
  }
};