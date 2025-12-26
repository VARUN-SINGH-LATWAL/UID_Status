import ADODB from "node-adodb";

export const connection = ADODB.open(
  "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=D:\\DataBase\\Tablas.mdb;"
);

export const checkConnection = async (): Promise<boolean> => {
  try {
    // Simple lightweight query
    await connection.query("SELECT 1");
    console.log("✅ Access DB connected successfully");
    return true;
  } catch (error) {
    console.error("❌ Access DB connection failed:", error);
    return false;
  }
};


