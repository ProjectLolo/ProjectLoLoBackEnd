require("dotenv").config();

module.exports = {
  SALT_ROUNDS: 10,
  PORT: process.env.PORT || 5000,
  BACKEND_API: process.env.BACKEND_API || "http://localhost:5000",
  MONGODB: process.env.MONGODB || 'mongodb+srv://CodaisseurTeam:CodaisseurAlumni@clusterprojectlolo.zqlc0.mongodb.net/ClusterProjectLoLo?retryWrites=true&w=majority',
  SECRET_KEY: process.env.SECRET_KEY || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m",
  SECRET_CODE: process.env.SECRET_CODE || "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()+",
};
