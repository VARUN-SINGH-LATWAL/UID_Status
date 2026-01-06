import "./config/env"; 
import {env} from './config'
import app from "./app"

const PORT: number = Number(env.port ?? 3000) || 3000 ;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
