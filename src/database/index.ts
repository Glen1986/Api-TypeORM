import { Connection, createConnection, getConnection } from "typeorm";

export default async(): Promise<Connection> => {
  const defaultOption = getConnection();
  return createConnection(
    await Object.assign(defaultOption)
  )
}
