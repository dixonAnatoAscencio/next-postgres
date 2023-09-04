## NextJS PostgresSQL 


actualizar la url de la base de datos de postgresSQL en el .env  DATABASE_URL=postgresql://postgres:MwSkcKk3pCnrME0Q6HEN@containers-us-west-47.railway.app:6993/railway

comando migrar modelo base de datos y inicializar conexion
npx prisma migrate dev --name "Intialized database"

```bash
npm install 
npm run dev
```

update .env file with your [Railway](http://railway.app) postgreSQL DATABASE_URL

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
