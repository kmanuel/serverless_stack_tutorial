export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-central-1",
        BUCKET: "manku-note-app-uploads"
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://eh72i5b3ai.execute-api.eu-central-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_DVeSKGFIe",
        APP_CLIENT_ID: "797rero5dkvvdfigqtrdcaiik3",
        IDENTITY_POOL_ID: "eu-central-1:ead782e6-921c-46cd-9066-5e4444c48236"
    }
};