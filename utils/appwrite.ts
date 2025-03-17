import { APP_WRITE_ID } from '@/app.constants'
import { Account, Client, Databases} from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_WRITE_ID)

export const account = new Account(client)
export { ID } from 'appwrite'
export const DB = new Databases(client)
