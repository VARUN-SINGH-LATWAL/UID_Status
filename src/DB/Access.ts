import ADODB from "node-adodb";


const dbPath = process.env.Tablas_ACCESS_DB_PATH;

// export const Tablas = ADODB.open(
//   "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=D:\\DataBase\\Tablas.mdb;"
// );

export const Tablas = ADODB.open(
  `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${dbPath}`
);

export const checkConnection = async (): Promise<boolean> => {
  try {
    // Simple lightweight query
    await Tablas.query("SELECT 1");
    console.log("✅ Tablas DB connected successfully");
    return true;
  } catch (error: any) {
    console.error("❌ Tablas DB connection failed:", error);
    return false;
  }
};


