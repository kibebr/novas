import fs from 'fs/promises'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'

export const save = TE.tryCatchK(
  fs.writeFile,
  E.toError
)

export const read = TE.tryCatchK(
  fs.readFile,
  E.toError
)
