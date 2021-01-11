import { Entity } from './dlang/entity'
import { Enum } from './dlang/enum'
import { Service } from './dlang/service'

export interface IType {
  tsType: string
  javaType: string
  generic?: Array<Entity | Enum | (() => IType)>
}

export interface IEntityField {
  name: string
  type: IType
  comment?: string
}

export type TServiceMethod = {
  [k in string]: IMethodMeta
}

export type IMethodArgs = {
  name: string
  tsType: string
  javaType: string
}

export interface IMethodMeta {
  args: Array<IMethodArgs>
  ret: { tsType: string; javaType: string }
}

export interface IConfigure {
  buildEntry: {
    entity: {
      [k in string]: Entity
    }
    service: {
      [k in string]: Service
    }
  }
  output?: {
    lang?: Array<'ts' | 'java' | 'go'> | 'ts' | 'java' | 'go'
    type?:
      | Array<'consumer' | 'service' | 'serviceImpl' | 'entity'>
      | 'consumer'
      | 'service'
      | 'serviceImpl'
      | 'entity'
  }
}
