import { google } from "googleapis";

const driveConfig = {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CLIENT_SECRET,
    redirectUrl: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_REDIRECT_URI,
    refreshToken: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_REFRESH_TOKEN
};

const oauth2Client = new google.auth.OAuth2(
    driveConfig.clientId,
    driveConfig.clientSecret,
    driveConfig.redirectUrl
);

oauth2Client.setCredentials({ refresh_token: driveConfig.refreshToken })

export const drive = google.drive({ version: "v3", auth: oauth2Client });


// Great Guide video -> https://www.youtube.com/watch?v=1y0-IfRW114&ab_channel=MafiaCodes
