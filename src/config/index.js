import colors from "./colors";
import {} from "@env";

export { colors };

export default {
  App: {
    FirebaseConfig: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
    },
  },
};
