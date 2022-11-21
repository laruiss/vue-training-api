import jwt from 'jsonwebtoken'

import { v4 as uuidv4 } from 'uuid'

import config from '../config.js'

type DecodedJwt = {
  username: string;
  id: string;
}

export const options = {
  expiresIn: config.tokenExpiration,
}

const messages: Record<string, string> = {
  'Token maximum age exceeded': 'Token expired, please login again',
}

const secret = config.tokenSecret

export async function createJwt (payload: Record<string, (string | string[])>) {
  const token = jwt.sign({ ...payload, aud: 'urn:audience:test', iss: 'urn:issuer:test', ...options }, secret)
  return token
}

export function checkToken (token: string) {
  try {
    jwt.verify(token, secret)
  } catch (error) {
    if (!(error instanceof Error)) {
      throw new Error(String(error))
    }
    const message = messages[error.message] || error.message
    throw new Error(message)
  }
}

export function validateToken (decoded: DecodedJwt, request: Request & { decoded: DecodedJwt, userPseudo: string }) {
  if (!decoded.username) {
    return { isValid: false }
  }
  request.decoded = decoded
  return { isValid: true }
}

export function createUuid () {
  return uuidv4()
}
