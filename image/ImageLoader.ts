import fs from 'fs/promises'
import nodeFetch, { Response } from 'node-fetch'
import FileType, { FileTypeResult } from 'file-type/core'
import { map as temap, chain, tryCatch, TaskEither } from 'fp-ts/TaskEither'
import { toError } from 'fp-ts/Either'
import { flow, pipe, constant } from 'fp-ts/function'
import { prop } from 'fp-ts-ramda'
import { fold, fromNullable, Option } from 'fp-ts/Option'

export interface DownloadedImage {
  extension: string
  buffer: Buffer
}

const fromBuffer = (b: Buffer): TaskEither<Error, Option<FileTypeResult>> => pipe(
  tryCatch(
    async () => await FileType.fromBuffer(b),
    toError
  ),
  temap(fromNullable)
)

const getFiletypeFromBuffer: (b: Buffer) => TaskEither<Error, string> = flow(
  fromBuffer,
  temap(fold(
    constant('whatever'),
    flow(prop('ext'))
  ))
)

const toArrayBuffer = (r: Response): TaskEither<Error, ArrayBuffer> => tryCatch(
  constant(r.arrayBuffer()),
  toError
)

const toBuffer: (a: ArrayBuffer) => Buffer = Buffer.from

export const downloadImage = (url: string): TaskEither<Error, DownloadedImage> => pipe(
  tryCatch(
    pipe(url, nodeFetch, constant),
    toError
  ),
  chain(toArrayBuffer),
  temap(toBuffer),
  chain((buffer) => pipe(
    getFiletypeFromBuffer(buffer),
    temap((extension) => ({ extension, buffer }))
  ))
)

export const saveImage = (to: string) => (img: Buffer): TaskEither<Error, void> => tryCatch(
  async () => await fs.writeFile(to, img),
  toError
)
