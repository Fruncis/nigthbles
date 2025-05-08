
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bottles
 * 
 */
export type bottles = $Result.DefaultSelection<Prisma.$bottlesPayload>
/**
 * Model clubs
 * 
 */
export type clubs = $Result.DefaultSelection<Prisma.$clubsPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model reservations
 * 
 */
export type reservations = $Result.DefaultSelection<Prisma.$reservationsPayload>
/**
 * Model reserved_bottles
 * 
 */
export type reserved_bottles = $Result.DefaultSelection<Prisma.$reserved_bottlesPayload>
/**
 * Model tables
 * 
 */
export type tables = $Result.DefaultSelection<Prisma.$tablesPayload>
/**
 * Model tickets
 * 
 */
export type tickets = $Result.DefaultSelection<Prisma.$ticketsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bottles
 * const bottles = await prisma.bottles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bottles
   * const bottles = await prisma.bottles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bottles`: Exposes CRUD operations for the **bottles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bottles
    * const bottles = await prisma.bottles.findMany()
    * ```
    */
  get bottles(): Prisma.bottlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clubs`: Exposes CRUD operations for the **clubs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.clubs.findMany()
    * ```
    */
  get clubs(): Prisma.clubsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservations`: Exposes CRUD operations for the **reservations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservations.findMany()
    * ```
    */
  get reservations(): Prisma.reservationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserved_bottles`: Exposes CRUD operations for the **reserved_bottles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reserved_bottles
    * const reserved_bottles = await prisma.reserved_bottles.findMany()
    * ```
    */
  get reserved_bottles(): Prisma.reserved_bottlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tables`: Exposes CRUD operations for the **tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.tables.findMany()
    * ```
    */
  get tables(): Prisma.tablesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.ticketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    bottles: 'bottles',
    clubs: 'clubs',
    events: 'events',
    payments: 'payments',
    reservations: 'reservations',
    reserved_bottles: 'reserved_bottles',
    tables: 'tables',
    tickets: 'tickets',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bottles" | "clubs" | "events" | "payments" | "reservations" | "reserved_bottles" | "tables" | "tickets" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bottles: {
        payload: Prisma.$bottlesPayload<ExtArgs>
        fields: Prisma.bottlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bottlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bottlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>
          }
          findFirst: {
            args: Prisma.bottlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bottlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>
          }
          findMany: {
            args: Prisma.bottlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>[]
          }
          create: {
            args: Prisma.bottlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>
          }
          createMany: {
            args: Prisma.bottlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bottlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>[]
          }
          delete: {
            args: Prisma.bottlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>
          }
          update: {
            args: Prisma.bottlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>
          }
          deleteMany: {
            args: Prisma.bottlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bottlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bottlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>[]
          }
          upsert: {
            args: Prisma.bottlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bottlesPayload>
          }
          aggregate: {
            args: Prisma.BottlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBottles>
          }
          groupBy: {
            args: Prisma.bottlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BottlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.bottlesCountArgs<ExtArgs>
            result: $Utils.Optional<BottlesCountAggregateOutputType> | number
          }
        }
      }
      clubs: {
        payload: Prisma.$clubsPayload<ExtArgs>
        fields: Prisma.clubsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clubsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clubsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          findFirst: {
            args: Prisma.clubsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clubsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          findMany: {
            args: Prisma.clubsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>[]
          }
          create: {
            args: Prisma.clubsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          createMany: {
            args: Prisma.clubsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clubsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>[]
          }
          delete: {
            args: Prisma.clubsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          update: {
            args: Prisma.clubsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          deleteMany: {
            args: Prisma.clubsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clubsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clubsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>[]
          }
          upsert: {
            args: Prisma.clubsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          aggregate: {
            args: Prisma.ClubsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClubs>
          }
          groupBy: {
            args: Prisma.clubsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clubsCountArgs<ExtArgs>
            result: $Utils.Optional<ClubsCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      reservations: {
        payload: Prisma.$reservationsPayload<ExtArgs>
        fields: Prisma.reservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          findFirst: {
            args: Prisma.reservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          findMany: {
            args: Prisma.reservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>[]
          }
          create: {
            args: Prisma.reservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          createMany: {
            args: Prisma.reservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>[]
          }
          delete: {
            args: Prisma.reservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          update: {
            args: Prisma.reservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          deleteMany: {
            args: Prisma.reservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>[]
          }
          upsert: {
            args: Prisma.reservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          aggregate: {
            args: Prisma.ReservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservations>
          }
          groupBy: {
            args: Prisma.reservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservationsCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationsCountAggregateOutputType> | number
          }
        }
      }
      reserved_bottles: {
        payload: Prisma.$reserved_bottlesPayload<ExtArgs>
        fields: Prisma.reserved_bottlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reserved_bottlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reserved_bottlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>
          }
          findFirst: {
            args: Prisma.reserved_bottlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reserved_bottlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>
          }
          findMany: {
            args: Prisma.reserved_bottlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>[]
          }
          create: {
            args: Prisma.reserved_bottlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>
          }
          createMany: {
            args: Prisma.reserved_bottlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reserved_bottlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>[]
          }
          delete: {
            args: Prisma.reserved_bottlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>
          }
          update: {
            args: Prisma.reserved_bottlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>
          }
          deleteMany: {
            args: Prisma.reserved_bottlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reserved_bottlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reserved_bottlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>[]
          }
          upsert: {
            args: Prisma.reserved_bottlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserved_bottlesPayload>
          }
          aggregate: {
            args: Prisma.Reserved_bottlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserved_bottles>
          }
          groupBy: {
            args: Prisma.reserved_bottlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reserved_bottlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.reserved_bottlesCountArgs<ExtArgs>
            result: $Utils.Optional<Reserved_bottlesCountAggregateOutputType> | number
          }
        }
      }
      tables: {
        payload: Prisma.$tablesPayload<ExtArgs>
        fields: Prisma.tablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          findFirst: {
            args: Prisma.tablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          findMany: {
            args: Prisma.tablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>[]
          }
          create: {
            args: Prisma.tablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          createMany: {
            args: Prisma.tablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>[]
          }
          delete: {
            args: Prisma.tablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          update: {
            args: Prisma.tablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          deleteMany: {
            args: Prisma.tablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tablesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>[]
          }
          upsert: {
            args: Prisma.tablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          aggregate: {
            args: Prisma.TablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTables>
          }
          groupBy: {
            args: Prisma.tablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tablesCountArgs<ExtArgs>
            result: $Utils.Optional<TablesCountAggregateOutputType> | number
          }
        }
      }
      tickets: {
        payload: Prisma.$ticketsPayload<ExtArgs>
        fields: Prisma.ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findFirst: {
            args: Prisma.ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findMany: {
            args: Prisma.ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          create: {
            args: Prisma.ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          createMany: {
            args: Prisma.ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          delete: {
            args: Prisma.ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          update: {
            args: Prisma.ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          deleteMany: {
            args: Prisma.ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ticketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          upsert: {
            args: Prisma.ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bottles?: bottlesOmit
    clubs?: clubsOmit
    events?: eventsOmit
    payments?: paymentsOmit
    reservations?: reservationsOmit
    reserved_bottles?: reserved_bottlesOmit
    tables?: tablesOmit
    tickets?: ticketsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BottlesCountOutputType
   */

  export type BottlesCountOutputType = {
    reserved_bottles: number
  }

  export type BottlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserved_bottles?: boolean | BottlesCountOutputTypeCountReserved_bottlesArgs
  }

  // Custom InputTypes
  /**
   * BottlesCountOutputType without action
   */
  export type BottlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottlesCountOutputType
     */
    select?: BottlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BottlesCountOutputType without action
   */
  export type BottlesCountOutputTypeCountReserved_bottlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserved_bottlesWhereInput
  }


  /**
   * Count Type ClubsCountOutputType
   */

  export type ClubsCountOutputType = {
    events: number
  }

  export type ClubsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ClubsCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ClubsCountOutputType without action
   */
  export type ClubsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubsCountOutputType
     */
    select?: ClubsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubsCountOutputType without action
   */
  export type ClubsCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    bottles: number
    tables: number
    tickets: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bottles?: boolean | EventsCountOutputTypeCountBottlesArgs
    tables?: boolean | EventsCountOutputTypeCountTablesArgs
    tickets?: boolean | EventsCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountBottlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bottlesWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tablesWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Count Type ReservationsCountOutputType
   */

  export type ReservationsCountOutputType = {
    payments: number
    reserved_bottles: number
  }

  export type ReservationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | ReservationsCountOutputTypeCountPaymentsArgs
    reserved_bottles?: boolean | ReservationsCountOutputTypeCountReserved_bottlesArgs
  }

  // Custom InputTypes
  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationsCountOutputType
     */
    select?: ReservationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeCountReserved_bottlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserved_bottlesWhereInput
  }


  /**
   * Count Type TablesCountOutputType
   */

  export type TablesCountOutputType = {
    reservations: number
  }

  export type TablesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | TablesCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablesCountOutputType
     */
    select?: TablesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationsWhereInput
  }


  /**
   * Count Type TicketsCountOutputType
   */

  export type TicketsCountOutputType = {
    reservations: number
  }

  export type TicketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | TicketsCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketsCountOutputType
     */
    select?: TicketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    reservations: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | UsersCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bottles
   */

  export type AggregateBottles = {
    _count: BottlesCountAggregateOutputType | null
    _avg: BottlesAvgAggregateOutputType | null
    _sum: BottlesSumAggregateOutputType | null
    _min: BottlesMinAggregateOutputType | null
    _max: BottlesMaxAggregateOutputType | null
  }

  export type BottlesAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    price: Decimal | null
  }

  export type BottlesSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    price: Decimal | null
  }

  export type BottlesMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    price: Decimal | null
    created_at: Date | null
  }

  export type BottlesMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    price: Decimal | null
    created_at: Date | null
  }

  export type BottlesCountAggregateOutputType = {
    id: number
    event_id: number
    name: number
    price: number
    created_at: number
    _all: number
  }


  export type BottlesAvgAggregateInputType = {
    id?: true
    event_id?: true
    price?: true
  }

  export type BottlesSumAggregateInputType = {
    id?: true
    event_id?: true
    price?: true
  }

  export type BottlesMinAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    created_at?: true
  }

  export type BottlesMaxAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    created_at?: true
  }

  export type BottlesCountAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    created_at?: true
    _all?: true
  }

  export type BottlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bottles to aggregate.
     */
    where?: bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bottles to fetch.
     */
    orderBy?: bottlesOrderByWithRelationInput | bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bottles
    **/
    _count?: true | BottlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BottlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BottlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BottlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BottlesMaxAggregateInputType
  }

  export type GetBottlesAggregateType<T extends BottlesAggregateArgs> = {
        [P in keyof T & keyof AggregateBottles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBottles[P]>
      : GetScalarType<T[P], AggregateBottles[P]>
  }




  export type bottlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bottlesWhereInput
    orderBy?: bottlesOrderByWithAggregationInput | bottlesOrderByWithAggregationInput[]
    by: BottlesScalarFieldEnum[] | BottlesScalarFieldEnum
    having?: bottlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BottlesCountAggregateInputType | true
    _avg?: BottlesAvgAggregateInputType
    _sum?: BottlesSumAggregateInputType
    _min?: BottlesMinAggregateInputType
    _max?: BottlesMaxAggregateInputType
  }

  export type BottlesGroupByOutputType = {
    id: number
    event_id: number | null
    name: string
    price: Decimal
    created_at: Date | null
    _count: BottlesCountAggregateOutputType | null
    _avg: BottlesAvgAggregateOutputType | null
    _sum: BottlesSumAggregateOutputType | null
    _min: BottlesMinAggregateOutputType | null
    _max: BottlesMaxAggregateOutputType | null
  }

  type GetBottlesGroupByPayload<T extends bottlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BottlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BottlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BottlesGroupByOutputType[P]>
            : GetScalarType<T[P], BottlesGroupByOutputType[P]>
        }
      >
    >


  export type bottlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    created_at?: boolean
    events?: boolean | bottles$eventsArgs<ExtArgs>
    reserved_bottles?: boolean | bottles$reserved_bottlesArgs<ExtArgs>
    _count?: boolean | BottlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bottles"]>

  export type bottlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    created_at?: boolean
    events?: boolean | bottles$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["bottles"]>

  export type bottlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    created_at?: boolean
    events?: boolean | bottles$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["bottles"]>

  export type bottlesSelectScalar = {
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    created_at?: boolean
  }

  export type bottlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "name" | "price" | "created_at", ExtArgs["result"]["bottles"]>
  export type bottlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | bottles$eventsArgs<ExtArgs>
    reserved_bottles?: boolean | bottles$reserved_bottlesArgs<ExtArgs>
    _count?: boolean | BottlesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bottlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | bottles$eventsArgs<ExtArgs>
  }
  export type bottlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | bottles$eventsArgs<ExtArgs>
  }

  export type $bottlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bottles"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs> | null
      reserved_bottles: Prisma.$reserved_bottlesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      name: string
      price: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["bottles"]>
    composites: {}
  }

  type bottlesGetPayload<S extends boolean | null | undefined | bottlesDefaultArgs> = $Result.GetResult<Prisma.$bottlesPayload, S>

  type bottlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bottlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BottlesCountAggregateInputType | true
    }

  export interface bottlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bottles'], meta: { name: 'bottles' } }
    /**
     * Find zero or one Bottles that matches the filter.
     * @param {bottlesFindUniqueArgs} args - Arguments to find a Bottles
     * @example
     * // Get one Bottles
     * const bottles = await prisma.bottles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bottlesFindUniqueArgs>(args: SelectSubset<T, bottlesFindUniqueArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bottles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bottlesFindUniqueOrThrowArgs} args - Arguments to find a Bottles
     * @example
     * // Get one Bottles
     * const bottles = await prisma.bottles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bottlesFindUniqueOrThrowArgs>(args: SelectSubset<T, bottlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bottles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bottlesFindFirstArgs} args - Arguments to find a Bottles
     * @example
     * // Get one Bottles
     * const bottles = await prisma.bottles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bottlesFindFirstArgs>(args?: SelectSubset<T, bottlesFindFirstArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bottles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bottlesFindFirstOrThrowArgs} args - Arguments to find a Bottles
     * @example
     * // Get one Bottles
     * const bottles = await prisma.bottles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bottlesFindFirstOrThrowArgs>(args?: SelectSubset<T, bottlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bottles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bottlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bottles
     * const bottles = await prisma.bottles.findMany()
     * 
     * // Get first 10 Bottles
     * const bottles = await prisma.bottles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bottlesWithIdOnly = await prisma.bottles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bottlesFindManyArgs>(args?: SelectSubset<T, bottlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bottles.
     * @param {bottlesCreateArgs} args - Arguments to create a Bottles.
     * @example
     * // Create one Bottles
     * const Bottles = await prisma.bottles.create({
     *   data: {
     *     // ... data to create a Bottles
     *   }
     * })
     * 
     */
    create<T extends bottlesCreateArgs>(args: SelectSubset<T, bottlesCreateArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bottles.
     * @param {bottlesCreateManyArgs} args - Arguments to create many Bottles.
     * @example
     * // Create many Bottles
     * const bottles = await prisma.bottles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bottlesCreateManyArgs>(args?: SelectSubset<T, bottlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bottles and returns the data saved in the database.
     * @param {bottlesCreateManyAndReturnArgs} args - Arguments to create many Bottles.
     * @example
     * // Create many Bottles
     * const bottles = await prisma.bottles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bottles and only return the `id`
     * const bottlesWithIdOnly = await prisma.bottles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bottlesCreateManyAndReturnArgs>(args?: SelectSubset<T, bottlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bottles.
     * @param {bottlesDeleteArgs} args - Arguments to delete one Bottles.
     * @example
     * // Delete one Bottles
     * const Bottles = await prisma.bottles.delete({
     *   where: {
     *     // ... filter to delete one Bottles
     *   }
     * })
     * 
     */
    delete<T extends bottlesDeleteArgs>(args: SelectSubset<T, bottlesDeleteArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bottles.
     * @param {bottlesUpdateArgs} args - Arguments to update one Bottles.
     * @example
     * // Update one Bottles
     * const bottles = await prisma.bottles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bottlesUpdateArgs>(args: SelectSubset<T, bottlesUpdateArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bottles.
     * @param {bottlesDeleteManyArgs} args - Arguments to filter Bottles to delete.
     * @example
     * // Delete a few Bottles
     * const { count } = await prisma.bottles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bottlesDeleteManyArgs>(args?: SelectSubset<T, bottlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bottlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bottles
     * const bottles = await prisma.bottles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bottlesUpdateManyArgs>(args: SelectSubset<T, bottlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bottles and returns the data updated in the database.
     * @param {bottlesUpdateManyAndReturnArgs} args - Arguments to update many Bottles.
     * @example
     * // Update many Bottles
     * const bottles = await prisma.bottles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bottles and only return the `id`
     * const bottlesWithIdOnly = await prisma.bottles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bottlesUpdateManyAndReturnArgs>(args: SelectSubset<T, bottlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bottles.
     * @param {bottlesUpsertArgs} args - Arguments to update or create a Bottles.
     * @example
     * // Update or create a Bottles
     * const bottles = await prisma.bottles.upsert({
     *   create: {
     *     // ... data to create a Bottles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bottles we want to update
     *   }
     * })
     */
    upsert<T extends bottlesUpsertArgs>(args: SelectSubset<T, bottlesUpsertArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bottlesCountArgs} args - Arguments to filter Bottles to count.
     * @example
     * // Count the number of Bottles
     * const count = await prisma.bottles.count({
     *   where: {
     *     // ... the filter for the Bottles we want to count
     *   }
     * })
    **/
    count<T extends bottlesCountArgs>(
      args?: Subset<T, bottlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BottlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BottlesAggregateArgs>(args: Subset<T, BottlesAggregateArgs>): Prisma.PrismaPromise<GetBottlesAggregateType<T>>

    /**
     * Group by Bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bottlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bottlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bottlesGroupByArgs['orderBy'] }
        : { orderBy?: bottlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bottlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBottlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bottles model
   */
  readonly fields: bottlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bottles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bottlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends bottles$eventsArgs<ExtArgs> = {}>(args?: Subset<T, bottles$eventsArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reserved_bottles<T extends bottles$reserved_bottlesArgs<ExtArgs> = {}>(args?: Subset<T, bottles$reserved_bottlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bottles model
   */
  interface bottlesFieldRefs {
    readonly id: FieldRef<"bottles", 'Int'>
    readonly event_id: FieldRef<"bottles", 'Int'>
    readonly name: FieldRef<"bottles", 'String'>
    readonly price: FieldRef<"bottles", 'Decimal'>
    readonly created_at: FieldRef<"bottles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bottles findUnique
   */
  export type bottlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * Filter, which bottles to fetch.
     */
    where: bottlesWhereUniqueInput
  }

  /**
   * bottles findUniqueOrThrow
   */
  export type bottlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * Filter, which bottles to fetch.
     */
    where: bottlesWhereUniqueInput
  }

  /**
   * bottles findFirst
   */
  export type bottlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * Filter, which bottles to fetch.
     */
    where?: bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bottles to fetch.
     */
    orderBy?: bottlesOrderByWithRelationInput | bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bottles.
     */
    cursor?: bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bottles.
     */
    distinct?: BottlesScalarFieldEnum | BottlesScalarFieldEnum[]
  }

  /**
   * bottles findFirstOrThrow
   */
  export type bottlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * Filter, which bottles to fetch.
     */
    where?: bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bottles to fetch.
     */
    orderBy?: bottlesOrderByWithRelationInput | bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bottles.
     */
    cursor?: bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bottles.
     */
    distinct?: BottlesScalarFieldEnum | BottlesScalarFieldEnum[]
  }

  /**
   * bottles findMany
   */
  export type bottlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * Filter, which bottles to fetch.
     */
    where?: bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bottles to fetch.
     */
    orderBy?: bottlesOrderByWithRelationInput | bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bottles.
     */
    cursor?: bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bottles.
     */
    skip?: number
    distinct?: BottlesScalarFieldEnum | BottlesScalarFieldEnum[]
  }

  /**
   * bottles create
   */
  export type bottlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * The data needed to create a bottles.
     */
    data: XOR<bottlesCreateInput, bottlesUncheckedCreateInput>
  }

  /**
   * bottles createMany
   */
  export type bottlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bottles.
     */
    data: bottlesCreateManyInput | bottlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bottles createManyAndReturn
   */
  export type bottlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * The data used to create many bottles.
     */
    data: bottlesCreateManyInput | bottlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bottles update
   */
  export type bottlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * The data needed to update a bottles.
     */
    data: XOR<bottlesUpdateInput, bottlesUncheckedUpdateInput>
    /**
     * Choose, which bottles to update.
     */
    where: bottlesWhereUniqueInput
  }

  /**
   * bottles updateMany
   */
  export type bottlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bottles.
     */
    data: XOR<bottlesUpdateManyMutationInput, bottlesUncheckedUpdateManyInput>
    /**
     * Filter which bottles to update
     */
    where?: bottlesWhereInput
    /**
     * Limit how many bottles to update.
     */
    limit?: number
  }

  /**
   * bottles updateManyAndReturn
   */
  export type bottlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * The data used to update bottles.
     */
    data: XOR<bottlesUpdateManyMutationInput, bottlesUncheckedUpdateManyInput>
    /**
     * Filter which bottles to update
     */
    where?: bottlesWhereInput
    /**
     * Limit how many bottles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bottles upsert
   */
  export type bottlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * The filter to search for the bottles to update in case it exists.
     */
    where: bottlesWhereUniqueInput
    /**
     * In case the bottles found by the `where` argument doesn't exist, create a new bottles with this data.
     */
    create: XOR<bottlesCreateInput, bottlesUncheckedCreateInput>
    /**
     * In case the bottles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bottlesUpdateInput, bottlesUncheckedUpdateInput>
  }

  /**
   * bottles delete
   */
  export type bottlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    /**
     * Filter which bottles to delete.
     */
    where: bottlesWhereUniqueInput
  }

  /**
   * bottles deleteMany
   */
  export type bottlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bottles to delete
     */
    where?: bottlesWhereInput
    /**
     * Limit how many bottles to delete.
     */
    limit?: number
  }

  /**
   * bottles.events
   */
  export type bottles$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
  }

  /**
   * bottles.reserved_bottles
   */
  export type bottles$reserved_bottlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    where?: reserved_bottlesWhereInput
    orderBy?: reserved_bottlesOrderByWithRelationInput | reserved_bottlesOrderByWithRelationInput[]
    cursor?: reserved_bottlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserved_bottlesScalarFieldEnum | Reserved_bottlesScalarFieldEnum[]
  }

  /**
   * bottles without action
   */
  export type bottlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
  }


  /**
   * Model clubs
   */

  export type AggregateClubs = {
    _count: ClubsCountAggregateOutputType | null
    _avg: ClubsAvgAggregateOutputType | null
    _sum: ClubsSumAggregateOutputType | null
    _min: ClubsMinAggregateOutputType | null
    _max: ClubsMaxAggregateOutputType | null
  }

  export type ClubsAvgAggregateOutputType = {
    id: number | null
  }

  export type ClubsSumAggregateOutputType = {
    id: number | null
  }

  export type ClubsMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type ClubsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type ClubsCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    description: number
    image_url: number
    created_at: number
    _all: number
  }


  export type ClubsAvgAggregateInputType = {
    id?: true
  }

  export type ClubsSumAggregateInputType = {
    id?: true
  }

  export type ClubsMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    description?: true
    image_url?: true
    created_at?: true
  }

  export type ClubsMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    description?: true
    image_url?: true
    created_at?: true
  }

  export type ClubsCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    description?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type ClubsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clubs to aggregate.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clubs
    **/
    _count?: true | ClubsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubsMaxAggregateInputType
  }

  export type GetClubsAggregateType<T extends ClubsAggregateArgs> = {
        [P in keyof T & keyof AggregateClubs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClubs[P]>
      : GetScalarType<T[P], AggregateClubs[P]>
  }




  export type clubsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clubsWhereInput
    orderBy?: clubsOrderByWithAggregationInput | clubsOrderByWithAggregationInput[]
    by: ClubsScalarFieldEnum[] | ClubsScalarFieldEnum
    having?: clubsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubsCountAggregateInputType | true
    _avg?: ClubsAvgAggregateInputType
    _sum?: ClubsSumAggregateInputType
    _min?: ClubsMinAggregateInputType
    _max?: ClubsMaxAggregateInputType
  }

  export type ClubsGroupByOutputType = {
    id: number
    name: string
    address: string | null
    city: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
    _count: ClubsCountAggregateOutputType | null
    _avg: ClubsAvgAggregateOutputType | null
    _sum: ClubsSumAggregateOutputType | null
    _min: ClubsMinAggregateOutputType | null
    _max: ClubsMaxAggregateOutputType | null
  }

  type GetClubsGroupByPayload<T extends clubsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubsGroupByOutputType[P]>
            : GetScalarType<T[P], ClubsGroupByOutputType[P]>
        }
      >
    >


  export type clubsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
    events?: boolean | clubs$eventsArgs<ExtArgs>
    _count?: boolean | ClubsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clubs"]>

  export type clubsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clubs"]>

  export type clubsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clubs"]>

  export type clubsSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type clubsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "description" | "image_url" | "created_at", ExtArgs["result"]["clubs"]>
  export type clubsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | clubs$eventsArgs<ExtArgs>
    _count?: boolean | ClubsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clubsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clubsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clubsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clubs"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      city: string | null
      description: string | null
      image_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["clubs"]>
    composites: {}
  }

  type clubsGetPayload<S extends boolean | null | undefined | clubsDefaultArgs> = $Result.GetResult<Prisma.$clubsPayload, S>

  type clubsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clubsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubsCountAggregateInputType | true
    }

  export interface clubsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clubs'], meta: { name: 'clubs' } }
    /**
     * Find zero or one Clubs that matches the filter.
     * @param {clubsFindUniqueArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clubsFindUniqueArgs>(args: SelectSubset<T, clubsFindUniqueArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clubs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clubsFindUniqueOrThrowArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clubsFindUniqueOrThrowArgs>(args: SelectSubset<T, clubsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsFindFirstArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clubsFindFirstArgs>(args?: SelectSubset<T, clubsFindFirstArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clubs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsFindFirstOrThrowArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clubsFindFirstOrThrowArgs>(args?: SelectSubset<T, clubsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.clubs.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.clubs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubsWithIdOnly = await prisma.clubs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clubsFindManyArgs>(args?: SelectSubset<T, clubsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clubs.
     * @param {clubsCreateArgs} args - Arguments to create a Clubs.
     * @example
     * // Create one Clubs
     * const Clubs = await prisma.clubs.create({
     *   data: {
     *     // ... data to create a Clubs
     *   }
     * })
     * 
     */
    create<T extends clubsCreateArgs>(args: SelectSubset<T, clubsCreateArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {clubsCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const clubs = await prisma.clubs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clubsCreateManyArgs>(args?: SelectSubset<T, clubsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {clubsCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const clubs = await prisma.clubs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubsWithIdOnly = await prisma.clubs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clubsCreateManyAndReturnArgs>(args?: SelectSubset<T, clubsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clubs.
     * @param {clubsDeleteArgs} args - Arguments to delete one Clubs.
     * @example
     * // Delete one Clubs
     * const Clubs = await prisma.clubs.delete({
     *   where: {
     *     // ... filter to delete one Clubs
     *   }
     * })
     * 
     */
    delete<T extends clubsDeleteArgs>(args: SelectSubset<T, clubsDeleteArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clubs.
     * @param {clubsUpdateArgs} args - Arguments to update one Clubs.
     * @example
     * // Update one Clubs
     * const clubs = await prisma.clubs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clubsUpdateArgs>(args: SelectSubset<T, clubsUpdateArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {clubsDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.clubs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clubsDeleteManyArgs>(args?: SelectSubset<T, clubsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const clubs = await prisma.clubs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clubsUpdateManyArgs>(args: SelectSubset<T, clubsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {clubsUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const clubs = await prisma.clubs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubsWithIdOnly = await prisma.clubs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clubsUpdateManyAndReturnArgs>(args: SelectSubset<T, clubsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clubs.
     * @param {clubsUpsertArgs} args - Arguments to update or create a Clubs.
     * @example
     * // Update or create a Clubs
     * const clubs = await prisma.clubs.upsert({
     *   create: {
     *     // ... data to create a Clubs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clubs we want to update
     *   }
     * })
     */
    upsert<T extends clubsUpsertArgs>(args: SelectSubset<T, clubsUpsertArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.clubs.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends clubsCountArgs>(
      args?: Subset<T, clubsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClubsAggregateArgs>(args: Subset<T, ClubsAggregateArgs>): Prisma.PrismaPromise<GetClubsAggregateType<T>>

    /**
     * Group by Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clubsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clubsGroupByArgs['orderBy'] }
        : { orderBy?: clubsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clubsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clubs model
   */
  readonly fields: clubsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clubs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clubsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends clubs$eventsArgs<ExtArgs> = {}>(args?: Subset<T, clubs$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clubs model
   */
  interface clubsFieldRefs {
    readonly id: FieldRef<"clubs", 'Int'>
    readonly name: FieldRef<"clubs", 'String'>
    readonly address: FieldRef<"clubs", 'String'>
    readonly city: FieldRef<"clubs", 'String'>
    readonly description: FieldRef<"clubs", 'String'>
    readonly image_url: FieldRef<"clubs", 'String'>
    readonly created_at: FieldRef<"clubs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clubs findUnique
   */
  export type clubsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs findUniqueOrThrow
   */
  export type clubsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs findFirst
   */
  export type clubsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clubs.
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clubs.
     */
    distinct?: ClubsScalarFieldEnum | ClubsScalarFieldEnum[]
  }

  /**
   * clubs findFirstOrThrow
   */
  export type clubsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clubs.
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clubs.
     */
    distinct?: ClubsScalarFieldEnum | ClubsScalarFieldEnum[]
  }

  /**
   * clubs findMany
   */
  export type clubsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clubs.
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    distinct?: ClubsScalarFieldEnum | ClubsScalarFieldEnum[]
  }

  /**
   * clubs create
   */
  export type clubsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * The data needed to create a clubs.
     */
    data: XOR<clubsCreateInput, clubsUncheckedCreateInput>
  }

  /**
   * clubs createMany
   */
  export type clubsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clubs.
     */
    data: clubsCreateManyInput | clubsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clubs createManyAndReturn
   */
  export type clubsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * The data used to create many clubs.
     */
    data: clubsCreateManyInput | clubsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clubs update
   */
  export type clubsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * The data needed to update a clubs.
     */
    data: XOR<clubsUpdateInput, clubsUncheckedUpdateInput>
    /**
     * Choose, which clubs to update.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs updateMany
   */
  export type clubsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clubs.
     */
    data: XOR<clubsUpdateManyMutationInput, clubsUncheckedUpdateManyInput>
    /**
     * Filter which clubs to update
     */
    where?: clubsWhereInput
    /**
     * Limit how many clubs to update.
     */
    limit?: number
  }

  /**
   * clubs updateManyAndReturn
   */
  export type clubsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * The data used to update clubs.
     */
    data: XOR<clubsUpdateManyMutationInput, clubsUncheckedUpdateManyInput>
    /**
     * Filter which clubs to update
     */
    where?: clubsWhereInput
    /**
     * Limit how many clubs to update.
     */
    limit?: number
  }

  /**
   * clubs upsert
   */
  export type clubsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * The filter to search for the clubs to update in case it exists.
     */
    where: clubsWhereUniqueInput
    /**
     * In case the clubs found by the `where` argument doesn't exist, create a new clubs with this data.
     */
    create: XOR<clubsCreateInput, clubsUncheckedCreateInput>
    /**
     * In case the clubs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clubsUpdateInput, clubsUncheckedUpdateInput>
  }

  /**
   * clubs delete
   */
  export type clubsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter which clubs to delete.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs deleteMany
   */
  export type clubsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clubs to delete
     */
    where?: clubsWhereInput
    /**
     * Limit how many clubs to delete.
     */
    limit?: number
  }

  /**
   * clubs.events
   */
  export type clubs$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * clubs without action
   */
  export type clubsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    club_id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    club_id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    club_id: number | null
    name: string | null
    description: string | null
    event_date: Date | null
    music_genre: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    club_id: number | null
    name: string | null
    description: string | null
    event_date: Date | null
    music_genre: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    club_id: number
    name: number
    description: number
    event_date: number
    music_genre: number
    image_url: number
    created_at: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    club_id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    club_id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    club_id?: true
    name?: true
    description?: true
    event_date?: true
    music_genre?: true
    image_url?: true
    created_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    club_id?: true
    name?: true
    description?: true
    event_date?: true
    music_genre?: true
    image_url?: true
    created_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    club_id?: true
    name?: true
    description?: true
    event_date?: true
    music_genre?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    club_id: number | null
    name: string
    description: string | null
    event_date: Date
    music_genre: string | null
    image_url: string | null
    created_at: Date | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    club_id?: boolean
    name?: boolean
    description?: boolean
    event_date?: boolean
    music_genre?: boolean
    image_url?: boolean
    created_at?: boolean
    bottles?: boolean | events$bottlesArgs<ExtArgs>
    clubs?: boolean | events$clubsArgs<ExtArgs>
    tables?: boolean | events$tablesArgs<ExtArgs>
    tickets?: boolean | events$ticketsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    club_id?: boolean
    name?: boolean
    description?: boolean
    event_date?: boolean
    music_genre?: boolean
    image_url?: boolean
    created_at?: boolean
    clubs?: boolean | events$clubsArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    club_id?: boolean
    name?: boolean
    description?: boolean
    event_date?: boolean
    music_genre?: boolean
    image_url?: boolean
    created_at?: boolean
    clubs?: boolean | events$clubsArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    club_id?: boolean
    name?: boolean
    description?: boolean
    event_date?: boolean
    music_genre?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "club_id" | "name" | "description" | "event_date" | "music_genre" | "image_url" | "created_at", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bottles?: boolean | events$bottlesArgs<ExtArgs>
    clubs?: boolean | events$clubsArgs<ExtArgs>
    tables?: boolean | events$tablesArgs<ExtArgs>
    tickets?: boolean | events$ticketsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | events$clubsArgs<ExtArgs>
  }
  export type eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | events$clubsArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      bottles: Prisma.$bottlesPayload<ExtArgs>[]
      clubs: Prisma.$clubsPayload<ExtArgs> | null
      tables: Prisma.$tablesPayload<ExtArgs>[]
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      club_id: number | null
      name: string
      description: string | null
      event_date: Date
      music_genre: string | null
      image_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bottles<T extends events$bottlesArgs<ExtArgs> = {}>(args?: Subset<T, events$bottlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clubs<T extends events$clubsArgs<ExtArgs> = {}>(args?: Subset<T, events$clubsArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tables<T extends events$tablesArgs<ExtArgs> = {}>(args?: Subset<T, events$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends events$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, events$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly club_id: FieldRef<"events", 'Int'>
    readonly name: FieldRef<"events", 'String'>
    readonly description: FieldRef<"events", 'String'>
    readonly event_date: FieldRef<"events", 'DateTime'>
    readonly music_genre: FieldRef<"events", 'String'>
    readonly image_url: FieldRef<"events", 'String'>
    readonly created_at: FieldRef<"events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events.bottles
   */
  export type events$bottlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    where?: bottlesWhereInput
    orderBy?: bottlesOrderByWithRelationInput | bottlesOrderByWithRelationInput[]
    cursor?: bottlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BottlesScalarFieldEnum | BottlesScalarFieldEnum[]
  }

  /**
   * events.clubs
   */
  export type events$clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    where?: clubsWhereInput
  }

  /**
   * events.tables
   */
  export type events$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    where?: tablesWhereInput
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    cursor?: tablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * events.tickets
   */
  export type events$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    payment_method: string | null
    amount: Decimal | null
    paid_at: Date | null
    status: string | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    payment_method: string | null
    amount: Decimal | null
    paid_at: Date | null
    status: string | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    reservation_id: number
    payment_method: number
    amount: number
    paid_at: number
    status: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    reservation_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    reservation_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    reservation_id?: true
    payment_method?: true
    amount?: true
    paid_at?: true
    status?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    reservation_id?: true
    payment_method?: true
    amount?: true
    paid_at?: true
    status?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    reservation_id?: true
    payment_method?: true
    amount?: true
    paid_at?: true
    status?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    reservation_id: number | null
    payment_method: string | null
    amount: Decimal
    paid_at: Date | null
    status: string | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservation_id?: boolean
    payment_method?: boolean
    amount?: boolean
    paid_at?: boolean
    status?: boolean
    reservations?: boolean | payments$reservationsArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservation_id?: boolean
    payment_method?: boolean
    amount?: boolean
    paid_at?: boolean
    status?: boolean
    reservations?: boolean | payments$reservationsArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservation_id?: boolean
    payment_method?: boolean
    amount?: boolean
    paid_at?: boolean
    status?: boolean
    reservations?: boolean | payments$reservationsArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    reservation_id?: boolean
    payment_method?: boolean
    amount?: boolean
    paid_at?: boolean
    status?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservation_id" | "payment_method" | "amount" | "paid_at" | "status", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | payments$reservationsArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | payments$reservationsArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | payments$reservationsArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      reservations: Prisma.$reservationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservation_id: number | null
      payment_method: string | null
      amount: Prisma.Decimal
      paid_at: Date | null
      status: string | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends payments$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, payments$reservationsArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly reservation_id: FieldRef<"payments", 'Int'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly paid_at: FieldRef<"payments", 'DateTime'>
    readonly status: FieldRef<"payments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments.reservations
   */
  export type payments$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    where?: reservationsWhereInput
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model reservations
   */

  export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  export type ReservationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticket_id: number | null
    table_id: number | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type ReservationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticket_id: number | null
    table_id: number | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type ReservationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticket_id: number | null
    table_id: number | null
    quantity: number | null
    total_price: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type ReservationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticket_id: number | null
    table_id: number | null
    quantity: number | null
    total_price: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type ReservationsCountAggregateOutputType = {
    id: number
    user_id: number
    ticket_id: number
    table_id: number
    quantity: number
    total_price: number
    status: number
    created_at: number
    _all: number
  }


  export type ReservationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    ticket_id?: true
    table_id?: true
    quantity?: true
    total_price?: true
  }

  export type ReservationsSumAggregateInputType = {
    id?: true
    user_id?: true
    ticket_id?: true
    table_id?: true
    quantity?: true
    total_price?: true
  }

  export type ReservationsMinAggregateInputType = {
    id?: true
    user_id?: true
    ticket_id?: true
    table_id?: true
    quantity?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type ReservationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    ticket_id?: true
    table_id?: true
    quantity?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type ReservationsCountAggregateInputType = {
    id?: true
    user_id?: true
    ticket_id?: true
    table_id?: true
    quantity?: true
    total_price?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ReservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservations to aggregate.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservations
    **/
    _count?: true | ReservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationsMaxAggregateInputType
  }

  export type GetReservationsAggregateType<T extends ReservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservations[P]>
      : GetScalarType<T[P], AggregateReservations[P]>
  }




  export type reservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationsWhereInput
    orderBy?: reservationsOrderByWithAggregationInput | reservationsOrderByWithAggregationInput[]
    by: ReservationsScalarFieldEnum[] | ReservationsScalarFieldEnum
    having?: reservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationsCountAggregateInputType | true
    _avg?: ReservationsAvgAggregateInputType
    _sum?: ReservationsSumAggregateInputType
    _min?: ReservationsMinAggregateInputType
    _max?: ReservationsMaxAggregateInputType
  }

  export type ReservationsGroupByOutputType = {
    id: number
    user_id: number | null
    ticket_id: number | null
    table_id: number | null
    quantity: number | null
    total_price: Decimal | null
    status: string | null
    created_at: Date | null
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  type GetReservationsGroupByPayload<T extends reservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
        }
      >
    >


  export type reservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ticket_id?: boolean
    table_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    payments?: boolean | reservations$paymentsArgs<ExtArgs>
    tables?: boolean | reservations$tablesArgs<ExtArgs>
    tickets?: boolean | reservations$ticketsArgs<ExtArgs>
    users?: boolean | reservations$usersArgs<ExtArgs>
    reserved_bottles?: boolean | reservations$reserved_bottlesArgs<ExtArgs>
    _count?: boolean | ReservationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservations"]>

  export type reservationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ticket_id?: boolean
    table_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    tables?: boolean | reservations$tablesArgs<ExtArgs>
    tickets?: boolean | reservations$ticketsArgs<ExtArgs>
    users?: boolean | reservations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reservations"]>

  export type reservationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ticket_id?: boolean
    table_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    tables?: boolean | reservations$tablesArgs<ExtArgs>
    tickets?: boolean | reservations$ticketsArgs<ExtArgs>
    users?: boolean | reservations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reservations"]>

  export type reservationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    ticket_id?: boolean
    table_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type reservationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "ticket_id" | "table_id" | "quantity" | "total_price" | "status" | "created_at", ExtArgs["result"]["reservations"]>
  export type reservationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | reservations$paymentsArgs<ExtArgs>
    tables?: boolean | reservations$tablesArgs<ExtArgs>
    tickets?: boolean | reservations$ticketsArgs<ExtArgs>
    users?: boolean | reservations$usersArgs<ExtArgs>
    reserved_bottles?: boolean | reservations$reserved_bottlesArgs<ExtArgs>
    _count?: boolean | ReservationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reservationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | reservations$tablesArgs<ExtArgs>
    tickets?: boolean | reservations$ticketsArgs<ExtArgs>
    users?: boolean | reservations$usersArgs<ExtArgs>
  }
  export type reservationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | reservations$tablesArgs<ExtArgs>
    tickets?: boolean | reservations$ticketsArgs<ExtArgs>
    users?: boolean | reservations$usersArgs<ExtArgs>
  }

  export type $reservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservations"
    objects: {
      payments: Prisma.$paymentsPayload<ExtArgs>[]
      tables: Prisma.$tablesPayload<ExtArgs> | null
      tickets: Prisma.$ticketsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      reserved_bottles: Prisma.$reserved_bottlesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      ticket_id: number | null
      table_id: number | null
      quantity: number | null
      total_price: Prisma.Decimal | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["reservations"]>
    composites: {}
  }

  type reservationsGetPayload<S extends boolean | null | undefined | reservationsDefaultArgs> = $Result.GetResult<Prisma.$reservationsPayload, S>

  type reservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationsCountAggregateInputType | true
    }

  export interface reservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservations'], meta: { name: 'reservations' } }
    /**
     * Find zero or one Reservations that matches the filter.
     * @param {reservationsFindUniqueArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservationsFindUniqueArgs>(args: SelectSubset<T, reservationsFindUniqueArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservationsFindUniqueOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservationsFindUniqueOrThrowArgs>(args: SelectSubset<T, reservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsFindFirstArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservationsFindFirstArgs>(args?: SelectSubset<T, reservationsFindFirstArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsFindFirstOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservationsFindFirstOrThrowArgs>(args?: SelectSubset<T, reservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservations.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationsWithIdOnly = await prisma.reservations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reservationsFindManyArgs>(args?: SelectSubset<T, reservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservations.
     * @param {reservationsCreateArgs} args - Arguments to create a Reservations.
     * @example
     * // Create one Reservations
     * const Reservations = await prisma.reservations.create({
     *   data: {
     *     // ... data to create a Reservations
     *   }
     * })
     * 
     */
    create<T extends reservationsCreateArgs>(args: SelectSubset<T, reservationsCreateArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {reservationsCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservationsCreateManyArgs>(args?: SelectSubset<T, reservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {reservationsCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationsWithIdOnly = await prisma.reservations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservationsCreateManyAndReturnArgs>(args?: SelectSubset<T, reservationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservations.
     * @param {reservationsDeleteArgs} args - Arguments to delete one Reservations.
     * @example
     * // Delete one Reservations
     * const Reservations = await prisma.reservations.delete({
     *   where: {
     *     // ... filter to delete one Reservations
     *   }
     * })
     * 
     */
    delete<T extends reservationsDeleteArgs>(args: SelectSubset<T, reservationsDeleteArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservations.
     * @param {reservationsUpdateArgs} args - Arguments to update one Reservations.
     * @example
     * // Update one Reservations
     * const reservations = await prisma.reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservationsUpdateArgs>(args: SelectSubset<T, reservationsUpdateArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {reservationsDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservationsDeleteManyArgs>(args?: SelectSubset<T, reservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservationsUpdateManyArgs>(args: SelectSubset<T, reservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {reservationsUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationsWithIdOnly = await prisma.reservations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reservationsUpdateManyAndReturnArgs>(args: SelectSubset<T, reservationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservations.
     * @param {reservationsUpsertArgs} args - Arguments to update or create a Reservations.
     * @example
     * // Update or create a Reservations
     * const reservations = await prisma.reservations.upsert({
     *   create: {
     *     // ... data to create a Reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservations we want to update
     *   }
     * })
     */
    upsert<T extends reservationsUpsertArgs>(args: SelectSubset<T, reservationsUpsertArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservations.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends reservationsCountArgs>(
      args?: Subset<T, reservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationsAggregateArgs>(args: Subset<T, ReservationsAggregateArgs>): Prisma.PrismaPromise<GetReservationsAggregateType<T>>

    /**
     * Group by Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservationsGroupByArgs['orderBy'] }
        : { orderBy?: reservationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservations model
   */
  readonly fields: reservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends reservations$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, reservations$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tables<T extends reservations$tablesArgs<ExtArgs> = {}>(args?: Subset<T, reservations$tablesArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends reservations$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, reservations$ticketsArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends reservations$usersArgs<ExtArgs> = {}>(args?: Subset<T, reservations$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reserved_bottles<T extends reservations$reserved_bottlesArgs<ExtArgs> = {}>(args?: Subset<T, reservations$reserved_bottlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reservations model
   */
  interface reservationsFieldRefs {
    readonly id: FieldRef<"reservations", 'Int'>
    readonly user_id: FieldRef<"reservations", 'Int'>
    readonly ticket_id: FieldRef<"reservations", 'Int'>
    readonly table_id: FieldRef<"reservations", 'Int'>
    readonly quantity: FieldRef<"reservations", 'Int'>
    readonly total_price: FieldRef<"reservations", 'Decimal'>
    readonly status: FieldRef<"reservations", 'String'>
    readonly created_at: FieldRef<"reservations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reservations findUnique
   */
  export type reservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations findUniqueOrThrow
   */
  export type reservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations findFirst
   */
  export type reservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * reservations findFirstOrThrow
   */
  export type reservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * reservations findMany
   */
  export type reservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservations.
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * reservations create
   */
  export type reservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * The data needed to create a reservations.
     */
    data?: XOR<reservationsCreateInput, reservationsUncheckedCreateInput>
  }

  /**
   * reservations createMany
   */
  export type reservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservations.
     */
    data: reservationsCreateManyInput | reservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservations createManyAndReturn
   */
  export type reservationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * The data used to create many reservations.
     */
    data: reservationsCreateManyInput | reservationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservations update
   */
  export type reservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * The data needed to update a reservations.
     */
    data: XOR<reservationsUpdateInput, reservationsUncheckedUpdateInput>
    /**
     * Choose, which reservations to update.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations updateMany
   */
  export type reservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservations.
     */
    data: XOR<reservationsUpdateManyMutationInput, reservationsUncheckedUpdateManyInput>
    /**
     * Filter which reservations to update
     */
    where?: reservationsWhereInput
    /**
     * Limit how many reservations to update.
     */
    limit?: number
  }

  /**
   * reservations updateManyAndReturn
   */
  export type reservationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * The data used to update reservations.
     */
    data: XOR<reservationsUpdateManyMutationInput, reservationsUncheckedUpdateManyInput>
    /**
     * Filter which reservations to update
     */
    where?: reservationsWhereInput
    /**
     * Limit how many reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservations upsert
   */
  export type reservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * The filter to search for the reservations to update in case it exists.
     */
    where: reservationsWhereUniqueInput
    /**
     * In case the reservations found by the `where` argument doesn't exist, create a new reservations with this data.
     */
    create: XOR<reservationsCreateInput, reservationsUncheckedCreateInput>
    /**
     * In case the reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservationsUpdateInput, reservationsUncheckedUpdateInput>
  }

  /**
   * reservations delete
   */
  export type reservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    /**
     * Filter which reservations to delete.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations deleteMany
   */
  export type reservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservations to delete
     */
    where?: reservationsWhereInput
    /**
     * Limit how many reservations to delete.
     */
    limit?: number
  }

  /**
   * reservations.payments
   */
  export type reservations$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * reservations.tables
   */
  export type reservations$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    where?: tablesWhereInput
  }

  /**
   * reservations.tickets
   */
  export type reservations$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
  }

  /**
   * reservations.users
   */
  export type reservations$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * reservations.reserved_bottles
   */
  export type reservations$reserved_bottlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    where?: reserved_bottlesWhereInput
    orderBy?: reserved_bottlesOrderByWithRelationInput | reserved_bottlesOrderByWithRelationInput[]
    cursor?: reserved_bottlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserved_bottlesScalarFieldEnum | Reserved_bottlesScalarFieldEnum[]
  }

  /**
   * reservations without action
   */
  export type reservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
  }


  /**
   * Model reserved_bottles
   */

  export type AggregateReserved_bottles = {
    _count: Reserved_bottlesCountAggregateOutputType | null
    _avg: Reserved_bottlesAvgAggregateOutputType | null
    _sum: Reserved_bottlesSumAggregateOutputType | null
    _min: Reserved_bottlesMinAggregateOutputType | null
    _max: Reserved_bottlesMaxAggregateOutputType | null
  }

  export type Reserved_bottlesAvgAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    bottle_id: number | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type Reserved_bottlesSumAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    bottle_id: number | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type Reserved_bottlesMinAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    bottle_id: number | null
    quantity: number | null
    total_price: Decimal | null
    note: string | null
  }

  export type Reserved_bottlesMaxAggregateOutputType = {
    id: number | null
    reservation_id: number | null
    bottle_id: number | null
    quantity: number | null
    total_price: Decimal | null
    note: string | null
  }

  export type Reserved_bottlesCountAggregateOutputType = {
    id: number
    reservation_id: number
    bottle_id: number
    quantity: number
    total_price: number
    note: number
    _all: number
  }


  export type Reserved_bottlesAvgAggregateInputType = {
    id?: true
    reservation_id?: true
    bottle_id?: true
    quantity?: true
    total_price?: true
  }

  export type Reserved_bottlesSumAggregateInputType = {
    id?: true
    reservation_id?: true
    bottle_id?: true
    quantity?: true
    total_price?: true
  }

  export type Reserved_bottlesMinAggregateInputType = {
    id?: true
    reservation_id?: true
    bottle_id?: true
    quantity?: true
    total_price?: true
    note?: true
  }

  export type Reserved_bottlesMaxAggregateInputType = {
    id?: true
    reservation_id?: true
    bottle_id?: true
    quantity?: true
    total_price?: true
    note?: true
  }

  export type Reserved_bottlesCountAggregateInputType = {
    id?: true
    reservation_id?: true
    bottle_id?: true
    quantity?: true
    total_price?: true
    note?: true
    _all?: true
  }

  export type Reserved_bottlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserved_bottles to aggregate.
     */
    where?: reserved_bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserved_bottles to fetch.
     */
    orderBy?: reserved_bottlesOrderByWithRelationInput | reserved_bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reserved_bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserved_bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserved_bottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reserved_bottles
    **/
    _count?: true | Reserved_bottlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reserved_bottlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reserved_bottlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reserved_bottlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reserved_bottlesMaxAggregateInputType
  }

  export type GetReserved_bottlesAggregateType<T extends Reserved_bottlesAggregateArgs> = {
        [P in keyof T & keyof AggregateReserved_bottles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserved_bottles[P]>
      : GetScalarType<T[P], AggregateReserved_bottles[P]>
  }




  export type reserved_bottlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserved_bottlesWhereInput
    orderBy?: reserved_bottlesOrderByWithAggregationInput | reserved_bottlesOrderByWithAggregationInput[]
    by: Reserved_bottlesScalarFieldEnum[] | Reserved_bottlesScalarFieldEnum
    having?: reserved_bottlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reserved_bottlesCountAggregateInputType | true
    _avg?: Reserved_bottlesAvgAggregateInputType
    _sum?: Reserved_bottlesSumAggregateInputType
    _min?: Reserved_bottlesMinAggregateInputType
    _max?: Reserved_bottlesMaxAggregateInputType
  }

  export type Reserved_bottlesGroupByOutputType = {
    id: number
    reservation_id: number | null
    bottle_id: number | null
    quantity: number | null
    total_price: Decimal | null
    note: string | null
    _count: Reserved_bottlesCountAggregateOutputType | null
    _avg: Reserved_bottlesAvgAggregateOutputType | null
    _sum: Reserved_bottlesSumAggregateOutputType | null
    _min: Reserved_bottlesMinAggregateOutputType | null
    _max: Reserved_bottlesMaxAggregateOutputType | null
  }

  type GetReserved_bottlesGroupByPayload<T extends reserved_bottlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reserved_bottlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reserved_bottlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reserved_bottlesGroupByOutputType[P]>
            : GetScalarType<T[P], Reserved_bottlesGroupByOutputType[P]>
        }
      >
    >


  export type reserved_bottlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservation_id?: boolean
    bottle_id?: boolean
    quantity?: boolean
    total_price?: boolean
    note?: boolean
    bottles?: boolean | reserved_bottles$bottlesArgs<ExtArgs>
    reservations?: boolean | reserved_bottles$reservationsArgs<ExtArgs>
  }, ExtArgs["result"]["reserved_bottles"]>

  export type reserved_bottlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservation_id?: boolean
    bottle_id?: boolean
    quantity?: boolean
    total_price?: boolean
    note?: boolean
    bottles?: boolean | reserved_bottles$bottlesArgs<ExtArgs>
    reservations?: boolean | reserved_bottles$reservationsArgs<ExtArgs>
  }, ExtArgs["result"]["reserved_bottles"]>

  export type reserved_bottlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservation_id?: boolean
    bottle_id?: boolean
    quantity?: boolean
    total_price?: boolean
    note?: boolean
    bottles?: boolean | reserved_bottles$bottlesArgs<ExtArgs>
    reservations?: boolean | reserved_bottles$reservationsArgs<ExtArgs>
  }, ExtArgs["result"]["reserved_bottles"]>

  export type reserved_bottlesSelectScalar = {
    id?: boolean
    reservation_id?: boolean
    bottle_id?: boolean
    quantity?: boolean
    total_price?: boolean
    note?: boolean
  }

  export type reserved_bottlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservation_id" | "bottle_id" | "quantity" | "total_price" | "note", ExtArgs["result"]["reserved_bottles"]>
  export type reserved_bottlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bottles?: boolean | reserved_bottles$bottlesArgs<ExtArgs>
    reservations?: boolean | reserved_bottles$reservationsArgs<ExtArgs>
  }
  export type reserved_bottlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bottles?: boolean | reserved_bottles$bottlesArgs<ExtArgs>
    reservations?: boolean | reserved_bottles$reservationsArgs<ExtArgs>
  }
  export type reserved_bottlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bottles?: boolean | reserved_bottles$bottlesArgs<ExtArgs>
    reservations?: boolean | reserved_bottles$reservationsArgs<ExtArgs>
  }

  export type $reserved_bottlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reserved_bottles"
    objects: {
      bottles: Prisma.$bottlesPayload<ExtArgs> | null
      reservations: Prisma.$reservationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservation_id: number | null
      bottle_id: number | null
      quantity: number | null
      total_price: Prisma.Decimal | null
      note: string | null
    }, ExtArgs["result"]["reserved_bottles"]>
    composites: {}
  }

  type reserved_bottlesGetPayload<S extends boolean | null | undefined | reserved_bottlesDefaultArgs> = $Result.GetResult<Prisma.$reserved_bottlesPayload, S>

  type reserved_bottlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reserved_bottlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reserved_bottlesCountAggregateInputType | true
    }

  export interface reserved_bottlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reserved_bottles'], meta: { name: 'reserved_bottles' } }
    /**
     * Find zero or one Reserved_bottles that matches the filter.
     * @param {reserved_bottlesFindUniqueArgs} args - Arguments to find a Reserved_bottles
     * @example
     * // Get one Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reserved_bottlesFindUniqueArgs>(args: SelectSubset<T, reserved_bottlesFindUniqueArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserved_bottles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reserved_bottlesFindUniqueOrThrowArgs} args - Arguments to find a Reserved_bottles
     * @example
     * // Get one Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reserved_bottlesFindUniqueOrThrowArgs>(args: SelectSubset<T, reserved_bottlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserved_bottles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserved_bottlesFindFirstArgs} args - Arguments to find a Reserved_bottles
     * @example
     * // Get one Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reserved_bottlesFindFirstArgs>(args?: SelectSubset<T, reserved_bottlesFindFirstArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserved_bottles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserved_bottlesFindFirstOrThrowArgs} args - Arguments to find a Reserved_bottles
     * @example
     * // Get one Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reserved_bottlesFindFirstOrThrowArgs>(args?: SelectSubset<T, reserved_bottlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reserved_bottles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserved_bottlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.findMany()
     * 
     * // Get first 10 Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reserved_bottlesWithIdOnly = await prisma.reserved_bottles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reserved_bottlesFindManyArgs>(args?: SelectSubset<T, reserved_bottlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserved_bottles.
     * @param {reserved_bottlesCreateArgs} args - Arguments to create a Reserved_bottles.
     * @example
     * // Create one Reserved_bottles
     * const Reserved_bottles = await prisma.reserved_bottles.create({
     *   data: {
     *     // ... data to create a Reserved_bottles
     *   }
     * })
     * 
     */
    create<T extends reserved_bottlesCreateArgs>(args: SelectSubset<T, reserved_bottlesCreateArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reserved_bottles.
     * @param {reserved_bottlesCreateManyArgs} args - Arguments to create many Reserved_bottles.
     * @example
     * // Create many Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reserved_bottlesCreateManyArgs>(args?: SelectSubset<T, reserved_bottlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reserved_bottles and returns the data saved in the database.
     * @param {reserved_bottlesCreateManyAndReturnArgs} args - Arguments to create many Reserved_bottles.
     * @example
     * // Create many Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reserved_bottles and only return the `id`
     * const reserved_bottlesWithIdOnly = await prisma.reserved_bottles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reserved_bottlesCreateManyAndReturnArgs>(args?: SelectSubset<T, reserved_bottlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserved_bottles.
     * @param {reserved_bottlesDeleteArgs} args - Arguments to delete one Reserved_bottles.
     * @example
     * // Delete one Reserved_bottles
     * const Reserved_bottles = await prisma.reserved_bottles.delete({
     *   where: {
     *     // ... filter to delete one Reserved_bottles
     *   }
     * })
     * 
     */
    delete<T extends reserved_bottlesDeleteArgs>(args: SelectSubset<T, reserved_bottlesDeleteArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserved_bottles.
     * @param {reserved_bottlesUpdateArgs} args - Arguments to update one Reserved_bottles.
     * @example
     * // Update one Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reserved_bottlesUpdateArgs>(args: SelectSubset<T, reserved_bottlesUpdateArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reserved_bottles.
     * @param {reserved_bottlesDeleteManyArgs} args - Arguments to filter Reserved_bottles to delete.
     * @example
     * // Delete a few Reserved_bottles
     * const { count } = await prisma.reserved_bottles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reserved_bottlesDeleteManyArgs>(args?: SelectSubset<T, reserved_bottlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reserved_bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserved_bottlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reserved_bottlesUpdateManyArgs>(args: SelectSubset<T, reserved_bottlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reserved_bottles and returns the data updated in the database.
     * @param {reserved_bottlesUpdateManyAndReturnArgs} args - Arguments to update many Reserved_bottles.
     * @example
     * // Update many Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reserved_bottles and only return the `id`
     * const reserved_bottlesWithIdOnly = await prisma.reserved_bottles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reserved_bottlesUpdateManyAndReturnArgs>(args: SelectSubset<T, reserved_bottlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserved_bottles.
     * @param {reserved_bottlesUpsertArgs} args - Arguments to update or create a Reserved_bottles.
     * @example
     * // Update or create a Reserved_bottles
     * const reserved_bottles = await prisma.reserved_bottles.upsert({
     *   create: {
     *     // ... data to create a Reserved_bottles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserved_bottles we want to update
     *   }
     * })
     */
    upsert<T extends reserved_bottlesUpsertArgs>(args: SelectSubset<T, reserved_bottlesUpsertArgs<ExtArgs>>): Prisma__reserved_bottlesClient<$Result.GetResult<Prisma.$reserved_bottlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reserved_bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserved_bottlesCountArgs} args - Arguments to filter Reserved_bottles to count.
     * @example
     * // Count the number of Reserved_bottles
     * const count = await prisma.reserved_bottles.count({
     *   where: {
     *     // ... the filter for the Reserved_bottles we want to count
     *   }
     * })
    **/
    count<T extends reserved_bottlesCountArgs>(
      args?: Subset<T, reserved_bottlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reserved_bottlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserved_bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reserved_bottlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reserved_bottlesAggregateArgs>(args: Subset<T, Reserved_bottlesAggregateArgs>): Prisma.PrismaPromise<GetReserved_bottlesAggregateType<T>>

    /**
     * Group by Reserved_bottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserved_bottlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reserved_bottlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reserved_bottlesGroupByArgs['orderBy'] }
        : { orderBy?: reserved_bottlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reserved_bottlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReserved_bottlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reserved_bottles model
   */
  readonly fields: reserved_bottlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reserved_bottles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reserved_bottlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bottles<T extends reserved_bottles$bottlesArgs<ExtArgs> = {}>(args?: Subset<T, reserved_bottles$bottlesArgs<ExtArgs>>): Prisma__bottlesClient<$Result.GetResult<Prisma.$bottlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservations<T extends reserved_bottles$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, reserved_bottles$reservationsArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reserved_bottles model
   */
  interface reserved_bottlesFieldRefs {
    readonly id: FieldRef<"reserved_bottles", 'Int'>
    readonly reservation_id: FieldRef<"reserved_bottles", 'Int'>
    readonly bottle_id: FieldRef<"reserved_bottles", 'Int'>
    readonly quantity: FieldRef<"reserved_bottles", 'Int'>
    readonly total_price: FieldRef<"reserved_bottles", 'Decimal'>
    readonly note: FieldRef<"reserved_bottles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reserved_bottles findUnique
   */
  export type reserved_bottlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * Filter, which reserved_bottles to fetch.
     */
    where: reserved_bottlesWhereUniqueInput
  }

  /**
   * reserved_bottles findUniqueOrThrow
   */
  export type reserved_bottlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * Filter, which reserved_bottles to fetch.
     */
    where: reserved_bottlesWhereUniqueInput
  }

  /**
   * reserved_bottles findFirst
   */
  export type reserved_bottlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * Filter, which reserved_bottles to fetch.
     */
    where?: reserved_bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserved_bottles to fetch.
     */
    orderBy?: reserved_bottlesOrderByWithRelationInput | reserved_bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserved_bottles.
     */
    cursor?: reserved_bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserved_bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserved_bottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserved_bottles.
     */
    distinct?: Reserved_bottlesScalarFieldEnum | Reserved_bottlesScalarFieldEnum[]
  }

  /**
   * reserved_bottles findFirstOrThrow
   */
  export type reserved_bottlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * Filter, which reserved_bottles to fetch.
     */
    where?: reserved_bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserved_bottles to fetch.
     */
    orderBy?: reserved_bottlesOrderByWithRelationInput | reserved_bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserved_bottles.
     */
    cursor?: reserved_bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserved_bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserved_bottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserved_bottles.
     */
    distinct?: Reserved_bottlesScalarFieldEnum | Reserved_bottlesScalarFieldEnum[]
  }

  /**
   * reserved_bottles findMany
   */
  export type reserved_bottlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * Filter, which reserved_bottles to fetch.
     */
    where?: reserved_bottlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserved_bottles to fetch.
     */
    orderBy?: reserved_bottlesOrderByWithRelationInput | reserved_bottlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reserved_bottles.
     */
    cursor?: reserved_bottlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserved_bottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserved_bottles.
     */
    skip?: number
    distinct?: Reserved_bottlesScalarFieldEnum | Reserved_bottlesScalarFieldEnum[]
  }

  /**
   * reserved_bottles create
   */
  export type reserved_bottlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * The data needed to create a reserved_bottles.
     */
    data?: XOR<reserved_bottlesCreateInput, reserved_bottlesUncheckedCreateInput>
  }

  /**
   * reserved_bottles createMany
   */
  export type reserved_bottlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reserved_bottles.
     */
    data: reserved_bottlesCreateManyInput | reserved_bottlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reserved_bottles createManyAndReturn
   */
  export type reserved_bottlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * The data used to create many reserved_bottles.
     */
    data: reserved_bottlesCreateManyInput | reserved_bottlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserved_bottles update
   */
  export type reserved_bottlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * The data needed to update a reserved_bottles.
     */
    data: XOR<reserved_bottlesUpdateInput, reserved_bottlesUncheckedUpdateInput>
    /**
     * Choose, which reserved_bottles to update.
     */
    where: reserved_bottlesWhereUniqueInput
  }

  /**
   * reserved_bottles updateMany
   */
  export type reserved_bottlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reserved_bottles.
     */
    data: XOR<reserved_bottlesUpdateManyMutationInput, reserved_bottlesUncheckedUpdateManyInput>
    /**
     * Filter which reserved_bottles to update
     */
    where?: reserved_bottlesWhereInput
    /**
     * Limit how many reserved_bottles to update.
     */
    limit?: number
  }

  /**
   * reserved_bottles updateManyAndReturn
   */
  export type reserved_bottlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * The data used to update reserved_bottles.
     */
    data: XOR<reserved_bottlesUpdateManyMutationInput, reserved_bottlesUncheckedUpdateManyInput>
    /**
     * Filter which reserved_bottles to update
     */
    where?: reserved_bottlesWhereInput
    /**
     * Limit how many reserved_bottles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserved_bottles upsert
   */
  export type reserved_bottlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * The filter to search for the reserved_bottles to update in case it exists.
     */
    where: reserved_bottlesWhereUniqueInput
    /**
     * In case the reserved_bottles found by the `where` argument doesn't exist, create a new reserved_bottles with this data.
     */
    create: XOR<reserved_bottlesCreateInput, reserved_bottlesUncheckedCreateInput>
    /**
     * In case the reserved_bottles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reserved_bottlesUpdateInput, reserved_bottlesUncheckedUpdateInput>
  }

  /**
   * reserved_bottles delete
   */
  export type reserved_bottlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
    /**
     * Filter which reserved_bottles to delete.
     */
    where: reserved_bottlesWhereUniqueInput
  }

  /**
   * reserved_bottles deleteMany
   */
  export type reserved_bottlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserved_bottles to delete
     */
    where?: reserved_bottlesWhereInput
    /**
     * Limit how many reserved_bottles to delete.
     */
    limit?: number
  }

  /**
   * reserved_bottles.bottles
   */
  export type reserved_bottles$bottlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bottles
     */
    select?: bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bottles
     */
    omit?: bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bottlesInclude<ExtArgs> | null
    where?: bottlesWhereInput
  }

  /**
   * reserved_bottles.reservations
   */
  export type reserved_bottles$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    where?: reservationsWhereInput
  }

  /**
   * reserved_bottles without action
   */
  export type reserved_bottlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserved_bottles
     */
    select?: reserved_bottlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserved_bottles
     */
    omit?: reserved_bottlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserved_bottlesInclude<ExtArgs> | null
  }


  /**
   * Model tables
   */

  export type AggregateTables = {
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  export type TablesAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    price: Decimal | null
    capacity: number | null
    available_quantity: number | null
  }

  export type TablesSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    price: Decimal | null
    capacity: number | null
    available_quantity: number | null
  }

  export type TablesMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    price: Decimal | null
    capacity: number | null
    available_quantity: number | null
    created_at: Date | null
  }

  export type TablesMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    price: Decimal | null
    capacity: number | null
    available_quantity: number | null
    created_at: Date | null
  }

  export type TablesCountAggregateOutputType = {
    id: number
    event_id: number
    name: number
    price: number
    capacity: number
    available_quantity: number
    created_at: number
    _all: number
  }


  export type TablesAvgAggregateInputType = {
    id?: true
    event_id?: true
    price?: true
    capacity?: true
    available_quantity?: true
  }

  export type TablesSumAggregateInputType = {
    id?: true
    event_id?: true
    price?: true
    capacity?: true
    available_quantity?: true
  }

  export type TablesMinAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    capacity?: true
    available_quantity?: true
    created_at?: true
  }

  export type TablesMaxAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    capacity?: true
    available_quantity?: true
    created_at?: true
  }

  export type TablesCountAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    capacity?: true
    available_quantity?: true
    created_at?: true
    _all?: true
  }

  export type TablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to aggregate.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tables
    **/
    _count?: true | TablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TablesMaxAggregateInputType
  }

  export type GetTablesAggregateType<T extends TablesAggregateArgs> = {
        [P in keyof T & keyof AggregateTables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTables[P]>
      : GetScalarType<T[P], AggregateTables[P]>
  }




  export type tablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tablesWhereInput
    orderBy?: tablesOrderByWithAggregationInput | tablesOrderByWithAggregationInput[]
    by: TablesScalarFieldEnum[] | TablesScalarFieldEnum
    having?: tablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TablesCountAggregateInputType | true
    _avg?: TablesAvgAggregateInputType
    _sum?: TablesSumAggregateInputType
    _min?: TablesMinAggregateInputType
    _max?: TablesMaxAggregateInputType
  }

  export type TablesGroupByOutputType = {
    id: number
    event_id: number | null
    name: string | null
    price: Decimal
    capacity: number | null
    available_quantity: number | null
    created_at: Date | null
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  type GetTablesGroupByPayload<T extends tablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TablesGroupByOutputType[P]>
            : GetScalarType<T[P], TablesGroupByOutputType[P]>
        }
      >
    >


  export type tablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    available_quantity?: boolean
    created_at?: boolean
    reservations?: boolean | tables$reservationsArgs<ExtArgs>
    events?: boolean | tables$eventsArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>

  export type tablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    available_quantity?: boolean
    created_at?: boolean
    events?: boolean | tables$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>

  export type tablesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    available_quantity?: boolean
    created_at?: boolean
    events?: boolean | tables$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>

  export type tablesSelectScalar = {
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    available_quantity?: boolean
    created_at?: boolean
  }

  export type tablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "name" | "price" | "capacity" | "available_quantity" | "created_at", ExtArgs["result"]["tables"]>
  export type tablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | tables$reservationsArgs<ExtArgs>
    events?: boolean | tables$eventsArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tablesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | tables$eventsArgs<ExtArgs>
  }
  export type tablesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | tables$eventsArgs<ExtArgs>
  }

  export type $tablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tables"
    objects: {
      reservations: Prisma.$reservationsPayload<ExtArgs>[]
      events: Prisma.$eventsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      name: string | null
      price: Prisma.Decimal
      capacity: number | null
      available_quantity: number | null
      created_at: Date | null
    }, ExtArgs["result"]["tables"]>
    composites: {}
  }

  type tablesGetPayload<S extends boolean | null | undefined | tablesDefaultArgs> = $Result.GetResult<Prisma.$tablesPayload, S>

  type tablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TablesCountAggregateInputType | true
    }

  export interface tablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tables'], meta: { name: 'tables' } }
    /**
     * Find zero or one Tables that matches the filter.
     * @param {tablesFindUniqueArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tablesFindUniqueArgs>(args: SelectSubset<T, tablesFindUniqueArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tablesFindUniqueOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tablesFindUniqueOrThrowArgs>(args: SelectSubset<T, tablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tablesFindFirstArgs>(args?: SelectSubset<T, tablesFindFirstArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tablesFindFirstOrThrowArgs>(args?: SelectSubset<T, tablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.tables.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.tables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tablesWithIdOnly = await prisma.tables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tablesFindManyArgs>(args?: SelectSubset<T, tablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tables.
     * @param {tablesCreateArgs} args - Arguments to create a Tables.
     * @example
     * // Create one Tables
     * const Tables = await prisma.tables.create({
     *   data: {
     *     // ... data to create a Tables
     *   }
     * })
     * 
     */
    create<T extends tablesCreateArgs>(args: SelectSubset<T, tablesCreateArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {tablesCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const tables = await prisma.tables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tablesCreateManyArgs>(args?: SelectSubset<T, tablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {tablesCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const tables = await prisma.tables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tablesWithIdOnly = await prisma.tables.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tablesCreateManyAndReturnArgs>(args?: SelectSubset<T, tablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tables.
     * @param {tablesDeleteArgs} args - Arguments to delete one Tables.
     * @example
     * // Delete one Tables
     * const Tables = await prisma.tables.delete({
     *   where: {
     *     // ... filter to delete one Tables
     *   }
     * })
     * 
     */
    delete<T extends tablesDeleteArgs>(args: SelectSubset<T, tablesDeleteArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tables.
     * @param {tablesUpdateArgs} args - Arguments to update one Tables.
     * @example
     * // Update one Tables
     * const tables = await prisma.tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tablesUpdateArgs>(args: SelectSubset<T, tablesUpdateArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {tablesDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tablesDeleteManyArgs>(args?: SelectSubset<T, tablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const tables = await prisma.tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tablesUpdateManyArgs>(args: SelectSubset<T, tablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {tablesUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const tables = await prisma.tables.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tablesWithIdOnly = await prisma.tables.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tablesUpdateManyAndReturnArgs>(args: SelectSubset<T, tablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tables.
     * @param {tablesUpsertArgs} args - Arguments to update or create a Tables.
     * @example
     * // Update or create a Tables
     * const tables = await prisma.tables.upsert({
     *   create: {
     *     // ... data to create a Tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tables we want to update
     *   }
     * })
     */
    upsert<T extends tablesUpsertArgs>(args: SelectSubset<T, tablesUpsertArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.tables.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends tablesCountArgs>(
      args?: Subset<T, tablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TablesAggregateArgs>(args: Subset<T, TablesAggregateArgs>): Prisma.PrismaPromise<GetTablesAggregateType<T>>

    /**
     * Group by Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tablesGroupByArgs['orderBy'] }
        : { orderBy?: tablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tables model
   */
  readonly fields: tablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends tables$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, tables$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends tables$eventsArgs<ExtArgs> = {}>(args?: Subset<T, tables$eventsArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tables model
   */
  interface tablesFieldRefs {
    readonly id: FieldRef<"tables", 'Int'>
    readonly event_id: FieldRef<"tables", 'Int'>
    readonly name: FieldRef<"tables", 'String'>
    readonly price: FieldRef<"tables", 'Decimal'>
    readonly capacity: FieldRef<"tables", 'Int'>
    readonly available_quantity: FieldRef<"tables", 'Int'>
    readonly created_at: FieldRef<"tables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tables findUnique
   */
  export type tablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables findUniqueOrThrow
   */
  export type tablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables findFirst
   */
  export type tablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables findFirstOrThrow
   */
  export type tablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables findMany
   */
  export type tablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables create
   */
  export type tablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The data needed to create a tables.
     */
    data: XOR<tablesCreateInput, tablesUncheckedCreateInput>
  }

  /**
   * tables createMany
   */
  export type tablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tables.
     */
    data: tablesCreateManyInput | tablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tables createManyAndReturn
   */
  export type tablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * The data used to create many tables.
     */
    data: tablesCreateManyInput | tablesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tables update
   */
  export type tablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The data needed to update a tables.
     */
    data: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
    /**
     * Choose, which tables to update.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables updateMany
   */
  export type tablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tables.
     */
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to update.
     */
    limit?: number
  }

  /**
   * tables updateManyAndReturn
   */
  export type tablesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * The data used to update tables.
     */
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tables upsert
   */
  export type tablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The filter to search for the tables to update in case it exists.
     */
    where: tablesWhereUniqueInput
    /**
     * In case the tables found by the `where` argument doesn't exist, create a new tables with this data.
     */
    create: XOR<tablesCreateInput, tablesUncheckedCreateInput>
    /**
     * In case the tables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
  }

  /**
   * tables delete
   */
  export type tablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter which tables to delete.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables deleteMany
   */
  export type tablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to delete
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to delete.
     */
    limit?: number
  }

  /**
   * tables.reservations
   */
  export type tables$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    where?: reservationsWhereInput
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    cursor?: reservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * tables.events
   */
  export type tables$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
  }

  /**
   * tables without action
   */
  export type tablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
  }


  /**
   * Model tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    price: Decimal | null
    available_quantity: number | null
  }

  export type TicketsSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    price: Decimal | null
    available_quantity: number | null
  }

  export type TicketsMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    price: Decimal | null
    available_quantity: number | null
    created_at: Date | null
  }

  export type TicketsMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    price: Decimal | null
    available_quantity: number | null
    created_at: Date | null
  }

  export type TicketsCountAggregateOutputType = {
    id: number
    event_id: number
    name: number
    price: number
    available_quantity: number
    created_at: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    id?: true
    event_id?: true
    price?: true
    available_quantity?: true
  }

  export type TicketsSumAggregateInputType = {
    id?: true
    event_id?: true
    price?: true
    available_quantity?: true
  }

  export type TicketsMinAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    available_quantity?: true
    created_at?: true
  }

  export type TicketsMaxAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    available_quantity?: true
    created_at?: true
  }

  export type TicketsCountAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    price?: true
    available_quantity?: true
    created_at?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to aggregate.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithAggregationInput | ticketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    id: number
    event_id: number | null
    name: string | null
    price: Decimal
    available_quantity: number | null
    created_at: Date | null
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    available_quantity?: boolean
    created_at?: boolean
    reservations?: boolean | tickets$reservationsArgs<ExtArgs>
    events?: boolean | tickets$eventsArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    available_quantity?: boolean
    created_at?: boolean
    events?: boolean | tickets$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    available_quantity?: boolean
    created_at?: boolean
    events?: boolean | tickets$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectScalar = {
    id?: boolean
    event_id?: boolean
    name?: boolean
    price?: boolean
    available_quantity?: boolean
    created_at?: boolean
  }

  export type ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "name" | "price" | "available_quantity" | "created_at", ExtArgs["result"]["tickets"]>
  export type ticketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | tickets$reservationsArgs<ExtArgs>
    events?: boolean | tickets$eventsArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ticketsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | tickets$eventsArgs<ExtArgs>
  }
  export type ticketsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | tickets$eventsArgs<ExtArgs>
  }

  export type $ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tickets"
    objects: {
      reservations: Prisma.$reservationsPayload<ExtArgs>[]
      events: Prisma.$eventsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      name: string | null
      price: Prisma.Decimal
      available_quantity: number | null
      created_at: Date | null
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = $Result.GetResult<Prisma.$ticketsPayload, S>

  type ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tickets'], meta: { name: 'tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {ticketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketsFindUniqueArgs>(args: SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketsFindFirstArgs>(args?: SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketsWithIdOnly = await prisma.tickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketsFindManyArgs>(args?: SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {ticketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends ticketsCreateArgs>(args: SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketsCreateManyArgs>(args?: SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {ticketsCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticketsCreateManyAndReturnArgs>(args?: SelectSubset<T, ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickets.
     * @param {ticketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends ticketsDeleteArgs>(args: SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {ticketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketsUpdateArgs>(args: SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketsDeleteManyArgs>(args?: SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketsUpdateManyArgs>(args: SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {ticketsUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ticketsUpdateManyAndReturnArgs>(args: SelectSubset<T, ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickets.
     * @param {ticketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends ticketsUpsertArgs>(args: SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketsCountArgs>(
      args?: Subset<T, ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketsGroupByArgs['orderBy'] }
        : { orderBy?: ticketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tickets model
   */
  readonly fields: ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends tickets$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, tickets$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends tickets$eventsArgs<ExtArgs> = {}>(args?: Subset<T, tickets$eventsArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tickets model
   */
  interface ticketsFieldRefs {
    readonly id: FieldRef<"tickets", 'Int'>
    readonly event_id: FieldRef<"tickets", 'Int'>
    readonly name: FieldRef<"tickets", 'String'>
    readonly price: FieldRef<"tickets", 'Decimal'>
    readonly available_quantity: FieldRef<"tickets", 'Int'>
    readonly created_at: FieldRef<"tickets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tickets findUnique
   */
  export type ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findUniqueOrThrow
   */
  export type ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findFirst
   */
  export type ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findFirstOrThrow
   */
  export type ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findMany
   */
  export type ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets create
   */
  export type ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a tickets.
     */
    data: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
  }

  /**
   * tickets createMany
   */
  export type ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets createManyAndReturn
   */
  export type ticketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tickets update
   */
  export type ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a tickets.
     */
    data: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
    /**
     * Choose, which tickets to update.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets updateMany
   */
  export type ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets updateManyAndReturn
   */
  export type ticketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tickets upsert
   */
  export type ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the tickets to update in case it exists.
     */
    where: ticketsWhereUniqueInput
    /**
     * In case the tickets found by the `where` argument doesn't exist, create a new tickets with this data.
     */
    create: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
    /**
     * In case the tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
  }

  /**
   * tickets delete
   */
  export type ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter which tickets to delete.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets deleteMany
   */
  export type ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * tickets.reservations
   */
  export type tickets$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    where?: reservationsWhereInput
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    cursor?: reservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * tickets.events
   */
  export type tickets$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
  }

  /**
   * tickets without action
   */
  export type ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    full_name: string | null
    phone_number: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    full_name: string | null
    phone_number: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    full_name: number
    phone_number: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    full_name?: true
    phone_number?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    full_name?: true
    phone_number?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    full_name?: true
    phone_number?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    full_name: string | null
    phone_number: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    phone_number?: boolean
    created_at?: boolean
    reservations?: boolean | users$reservationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    phone_number?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    phone_number?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    phone_number?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "full_name" | "phone_number" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | users$reservationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      reservations: Prisma.$reservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      full_name: string | null
      phone_number: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends users$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, users$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.reservations
   */
  export type users$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationsInclude<ExtArgs> | null
    where?: reservationsWhereInput
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    cursor?: reservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BottlesScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    name: 'name',
    price: 'price',
    created_at: 'created_at'
  };

  export type BottlesScalarFieldEnum = (typeof BottlesScalarFieldEnum)[keyof typeof BottlesScalarFieldEnum]


  export const ClubsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    description: 'description',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type ClubsScalarFieldEnum = (typeof ClubsScalarFieldEnum)[keyof typeof ClubsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    club_id: 'club_id',
    name: 'name',
    description: 'description',
    event_date: 'event_date',
    music_genre: 'music_genre',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    reservation_id: 'reservation_id',
    payment_method: 'payment_method',
    amount: 'amount',
    paid_at: 'paid_at',
    status: 'status'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ReservationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    ticket_id: 'ticket_id',
    table_id: 'table_id',
    quantity: 'quantity',
    total_price: 'total_price',
    status: 'status',
    created_at: 'created_at'
  };

  export type ReservationsScalarFieldEnum = (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum]


  export const Reserved_bottlesScalarFieldEnum: {
    id: 'id',
    reservation_id: 'reservation_id',
    bottle_id: 'bottle_id',
    quantity: 'quantity',
    total_price: 'total_price',
    note: 'note'
  };

  export type Reserved_bottlesScalarFieldEnum = (typeof Reserved_bottlesScalarFieldEnum)[keyof typeof Reserved_bottlesScalarFieldEnum]


  export const TablesScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    name: 'name',
    price: 'price',
    capacity: 'capacity',
    available_quantity: 'available_quantity',
    created_at: 'created_at'
  };

  export type TablesScalarFieldEnum = (typeof TablesScalarFieldEnum)[keyof typeof TablesScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    name: 'name',
    price: 'price',
    available_quantity: 'available_quantity',
    created_at: 'created_at'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    full_name: 'full_name',
    phone_number: 'phone_number',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bottlesWhereInput = {
    AND?: bottlesWhereInput | bottlesWhereInput[]
    OR?: bottlesWhereInput[]
    NOT?: bottlesWhereInput | bottlesWhereInput[]
    id?: IntFilter<"bottles"> | number
    event_id?: IntNullableFilter<"bottles"> | number | null
    name?: StringFilter<"bottles"> | string
    price?: DecimalFilter<"bottles"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"bottles"> | Date | string | null
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
    reserved_bottles?: Reserved_bottlesListRelationFilter
  }

  export type bottlesOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrder
    price?: SortOrder
    created_at?: SortOrderInput | SortOrder
    events?: eventsOrderByWithRelationInput
    reserved_bottles?: reserved_bottlesOrderByRelationAggregateInput
  }

  export type bottlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bottlesWhereInput | bottlesWhereInput[]
    OR?: bottlesWhereInput[]
    NOT?: bottlesWhereInput | bottlesWhereInput[]
    event_id?: IntNullableFilter<"bottles"> | number | null
    name?: StringFilter<"bottles"> | string
    price?: DecimalFilter<"bottles"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"bottles"> | Date | string | null
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
    reserved_bottles?: Reserved_bottlesListRelationFilter
  }, "id">

  export type bottlesOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrder
    price?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: bottlesCountOrderByAggregateInput
    _avg?: bottlesAvgOrderByAggregateInput
    _max?: bottlesMaxOrderByAggregateInput
    _min?: bottlesMinOrderByAggregateInput
    _sum?: bottlesSumOrderByAggregateInput
  }

  export type bottlesScalarWhereWithAggregatesInput = {
    AND?: bottlesScalarWhereWithAggregatesInput | bottlesScalarWhereWithAggregatesInput[]
    OR?: bottlesScalarWhereWithAggregatesInput[]
    NOT?: bottlesScalarWhereWithAggregatesInput | bottlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bottles"> | number
    event_id?: IntNullableWithAggregatesFilter<"bottles"> | number | null
    name?: StringWithAggregatesFilter<"bottles"> | string
    price?: DecimalWithAggregatesFilter<"bottles"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"bottles"> | Date | string | null
  }

  export type clubsWhereInput = {
    AND?: clubsWhereInput | clubsWhereInput[]
    OR?: clubsWhereInput[]
    NOT?: clubsWhereInput | clubsWhereInput[]
    id?: IntFilter<"clubs"> | number
    name?: StringFilter<"clubs"> | string
    address?: StringNullableFilter<"clubs"> | string | null
    city?: StringNullableFilter<"clubs"> | string | null
    description?: StringNullableFilter<"clubs"> | string | null
    image_url?: StringNullableFilter<"clubs"> | string | null
    created_at?: DateTimeNullableFilter<"clubs"> | Date | string | null
    events?: EventsListRelationFilter
  }

  export type clubsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    events?: eventsOrderByRelationAggregateInput
  }

  export type clubsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clubsWhereInput | clubsWhereInput[]
    OR?: clubsWhereInput[]
    NOT?: clubsWhereInput | clubsWhereInput[]
    name?: StringFilter<"clubs"> | string
    address?: StringNullableFilter<"clubs"> | string | null
    city?: StringNullableFilter<"clubs"> | string | null
    description?: StringNullableFilter<"clubs"> | string | null
    image_url?: StringNullableFilter<"clubs"> | string | null
    created_at?: DateTimeNullableFilter<"clubs"> | Date | string | null
    events?: EventsListRelationFilter
  }, "id">

  export type clubsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: clubsCountOrderByAggregateInput
    _avg?: clubsAvgOrderByAggregateInput
    _max?: clubsMaxOrderByAggregateInput
    _min?: clubsMinOrderByAggregateInput
    _sum?: clubsSumOrderByAggregateInput
  }

  export type clubsScalarWhereWithAggregatesInput = {
    AND?: clubsScalarWhereWithAggregatesInput | clubsScalarWhereWithAggregatesInput[]
    OR?: clubsScalarWhereWithAggregatesInput[]
    NOT?: clubsScalarWhereWithAggregatesInput | clubsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clubs"> | number
    name?: StringWithAggregatesFilter<"clubs"> | string
    address?: StringNullableWithAggregatesFilter<"clubs"> | string | null
    city?: StringNullableWithAggregatesFilter<"clubs"> | string | null
    description?: StringNullableWithAggregatesFilter<"clubs"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"clubs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"clubs"> | Date | string | null
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    club_id?: IntNullableFilter<"events"> | number | null
    name?: StringFilter<"events"> | string
    description?: StringNullableFilter<"events"> | string | null
    event_date?: DateTimeFilter<"events"> | Date | string
    music_genre?: StringNullableFilter<"events"> | string | null
    image_url?: StringNullableFilter<"events"> | string | null
    created_at?: DateTimeNullableFilter<"events"> | Date | string | null
    bottles?: BottlesListRelationFilter
    clubs?: XOR<ClubsNullableScalarRelationFilter, clubsWhereInput> | null
    tables?: TablesListRelationFilter
    tickets?: TicketsListRelationFilter
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    club_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    event_date?: SortOrder
    music_genre?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    bottles?: bottlesOrderByRelationAggregateInput
    clubs?: clubsOrderByWithRelationInput
    tables?: tablesOrderByRelationAggregateInput
    tickets?: ticketsOrderByRelationAggregateInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    club_id?: IntNullableFilter<"events"> | number | null
    name?: StringFilter<"events"> | string
    description?: StringNullableFilter<"events"> | string | null
    event_date?: DateTimeFilter<"events"> | Date | string
    music_genre?: StringNullableFilter<"events"> | string | null
    image_url?: StringNullableFilter<"events"> | string | null
    created_at?: DateTimeNullableFilter<"events"> | Date | string | null
    bottles?: BottlesListRelationFilter
    clubs?: XOR<ClubsNullableScalarRelationFilter, clubsWhereInput> | null
    tables?: TablesListRelationFilter
    tickets?: TicketsListRelationFilter
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    club_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    event_date?: SortOrder
    music_genre?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    club_id?: IntNullableWithAggregatesFilter<"events"> | number | null
    name?: StringWithAggregatesFilter<"events"> | string
    description?: StringNullableWithAggregatesFilter<"events"> | string | null
    event_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    music_genre?: StringNullableWithAggregatesFilter<"events"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"events"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    reservation_id?: IntNullableFilter<"payments"> | number | null
    payment_method?: StringNullableFilter<"payments"> | string | null
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    status?: StringNullableFilter<"payments"> | string | null
    reservations?: XOR<ReservationsNullableScalarRelationFilter, reservationsWhereInput> | null
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    reservation_id?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    amount?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    reservations?: reservationsOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    reservation_id?: IntNullableFilter<"payments"> | number | null
    payment_method?: StringNullableFilter<"payments"> | string | null
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    status?: StringNullableFilter<"payments"> | string | null
    reservations?: XOR<ReservationsNullableScalarRelationFilter, reservationsWhereInput> | null
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    reservation_id?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    amount?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    reservation_id?: IntNullableWithAggregatesFilter<"payments"> | number | null
    payment_method?: StringNullableWithAggregatesFilter<"payments"> | string | null
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"payments"> | string | null
  }

  export type reservationsWhereInput = {
    AND?: reservationsWhereInput | reservationsWhereInput[]
    OR?: reservationsWhereInput[]
    NOT?: reservationsWhereInput | reservationsWhereInput[]
    id?: IntFilter<"reservations"> | number
    user_id?: IntNullableFilter<"reservations"> | number | null
    ticket_id?: IntNullableFilter<"reservations"> | number | null
    table_id?: IntNullableFilter<"reservations"> | number | null
    quantity?: IntNullableFilter<"reservations"> | number | null
    total_price?: DecimalNullableFilter<"reservations"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"reservations"> | string | null
    created_at?: DateTimeNullableFilter<"reservations"> | Date | string | null
    payments?: PaymentsListRelationFilter
    tables?: XOR<TablesNullableScalarRelationFilter, tablesWhereInput> | null
    tickets?: XOR<TicketsNullableScalarRelationFilter, ticketsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    reserved_bottles?: Reserved_bottlesListRelationFilter
  }

  export type reservationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    table_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    payments?: paymentsOrderByRelationAggregateInput
    tables?: tablesOrderByWithRelationInput
    tickets?: ticketsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    reserved_bottles?: reserved_bottlesOrderByRelationAggregateInput
  }

  export type reservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reservationsWhereInput | reservationsWhereInput[]
    OR?: reservationsWhereInput[]
    NOT?: reservationsWhereInput | reservationsWhereInput[]
    user_id?: IntNullableFilter<"reservations"> | number | null
    ticket_id?: IntNullableFilter<"reservations"> | number | null
    table_id?: IntNullableFilter<"reservations"> | number | null
    quantity?: IntNullableFilter<"reservations"> | number | null
    total_price?: DecimalNullableFilter<"reservations"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"reservations"> | string | null
    created_at?: DateTimeNullableFilter<"reservations"> | Date | string | null
    payments?: PaymentsListRelationFilter
    tables?: XOR<TablesNullableScalarRelationFilter, tablesWhereInput> | null
    tickets?: XOR<TicketsNullableScalarRelationFilter, ticketsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    reserved_bottles?: Reserved_bottlesListRelationFilter
  }, "id">

  export type reservationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    table_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: reservationsCountOrderByAggregateInput
    _avg?: reservationsAvgOrderByAggregateInput
    _max?: reservationsMaxOrderByAggregateInput
    _min?: reservationsMinOrderByAggregateInput
    _sum?: reservationsSumOrderByAggregateInput
  }

  export type reservationsScalarWhereWithAggregatesInput = {
    AND?: reservationsScalarWhereWithAggregatesInput | reservationsScalarWhereWithAggregatesInput[]
    OR?: reservationsScalarWhereWithAggregatesInput[]
    NOT?: reservationsScalarWhereWithAggregatesInput | reservationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reservations"> | number
    user_id?: IntNullableWithAggregatesFilter<"reservations"> | number | null
    ticket_id?: IntNullableWithAggregatesFilter<"reservations"> | number | null
    table_id?: IntNullableWithAggregatesFilter<"reservations"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"reservations"> | number | null
    total_price?: DecimalNullableWithAggregatesFilter<"reservations"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"reservations"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"reservations"> | Date | string | null
  }

  export type reserved_bottlesWhereInput = {
    AND?: reserved_bottlesWhereInput | reserved_bottlesWhereInput[]
    OR?: reserved_bottlesWhereInput[]
    NOT?: reserved_bottlesWhereInput | reserved_bottlesWhereInput[]
    id?: IntFilter<"reserved_bottles"> | number
    reservation_id?: IntNullableFilter<"reserved_bottles"> | number | null
    bottle_id?: IntNullableFilter<"reserved_bottles"> | number | null
    quantity?: IntNullableFilter<"reserved_bottles"> | number | null
    total_price?: DecimalNullableFilter<"reserved_bottles"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableFilter<"reserved_bottles"> | string | null
    bottles?: XOR<BottlesNullableScalarRelationFilter, bottlesWhereInput> | null
    reservations?: XOR<ReservationsNullableScalarRelationFilter, reservationsWhereInput> | null
  }

  export type reserved_bottlesOrderByWithRelationInput = {
    id?: SortOrder
    reservation_id?: SortOrderInput | SortOrder
    bottle_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    bottles?: bottlesOrderByWithRelationInput
    reservations?: reservationsOrderByWithRelationInput
  }

  export type reserved_bottlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reserved_bottlesWhereInput | reserved_bottlesWhereInput[]
    OR?: reserved_bottlesWhereInput[]
    NOT?: reserved_bottlesWhereInput | reserved_bottlesWhereInput[]
    reservation_id?: IntNullableFilter<"reserved_bottles"> | number | null
    bottle_id?: IntNullableFilter<"reserved_bottles"> | number | null
    quantity?: IntNullableFilter<"reserved_bottles"> | number | null
    total_price?: DecimalNullableFilter<"reserved_bottles"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableFilter<"reserved_bottles"> | string | null
    bottles?: XOR<BottlesNullableScalarRelationFilter, bottlesWhereInput> | null
    reservations?: XOR<ReservationsNullableScalarRelationFilter, reservationsWhereInput> | null
  }, "id">

  export type reserved_bottlesOrderByWithAggregationInput = {
    id?: SortOrder
    reservation_id?: SortOrderInput | SortOrder
    bottle_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: reserved_bottlesCountOrderByAggregateInput
    _avg?: reserved_bottlesAvgOrderByAggregateInput
    _max?: reserved_bottlesMaxOrderByAggregateInput
    _min?: reserved_bottlesMinOrderByAggregateInput
    _sum?: reserved_bottlesSumOrderByAggregateInput
  }

  export type reserved_bottlesScalarWhereWithAggregatesInput = {
    AND?: reserved_bottlesScalarWhereWithAggregatesInput | reserved_bottlesScalarWhereWithAggregatesInput[]
    OR?: reserved_bottlesScalarWhereWithAggregatesInput[]
    NOT?: reserved_bottlesScalarWhereWithAggregatesInput | reserved_bottlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reserved_bottles"> | number
    reservation_id?: IntNullableWithAggregatesFilter<"reserved_bottles"> | number | null
    bottle_id?: IntNullableWithAggregatesFilter<"reserved_bottles"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"reserved_bottles"> | number | null
    total_price?: DecimalNullableWithAggregatesFilter<"reserved_bottles"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableWithAggregatesFilter<"reserved_bottles"> | string | null
  }

  export type tablesWhereInput = {
    AND?: tablesWhereInput | tablesWhereInput[]
    OR?: tablesWhereInput[]
    NOT?: tablesWhereInput | tablesWhereInput[]
    id?: IntFilter<"tables"> | number
    event_id?: IntNullableFilter<"tables"> | number | null
    name?: StringNullableFilter<"tables"> | string | null
    price?: DecimalFilter<"tables"> | Decimal | DecimalJsLike | number | string
    capacity?: IntNullableFilter<"tables"> | number | null
    available_quantity?: IntNullableFilter<"tables"> | number | null
    created_at?: DateTimeNullableFilter<"tables"> | Date | string | null
    reservations?: ReservationsListRelationFilter
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }

  export type tablesOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    capacity?: SortOrderInput | SortOrder
    available_quantity?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    reservations?: reservationsOrderByRelationAggregateInput
    events?: eventsOrderByWithRelationInput
  }

  export type tablesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tablesWhereInput | tablesWhereInput[]
    OR?: tablesWhereInput[]
    NOT?: tablesWhereInput | tablesWhereInput[]
    event_id?: IntNullableFilter<"tables"> | number | null
    name?: StringNullableFilter<"tables"> | string | null
    price?: DecimalFilter<"tables"> | Decimal | DecimalJsLike | number | string
    capacity?: IntNullableFilter<"tables"> | number | null
    available_quantity?: IntNullableFilter<"tables"> | number | null
    created_at?: DateTimeNullableFilter<"tables"> | Date | string | null
    reservations?: ReservationsListRelationFilter
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }, "id">

  export type tablesOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    capacity?: SortOrderInput | SortOrder
    available_quantity?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: tablesCountOrderByAggregateInput
    _avg?: tablesAvgOrderByAggregateInput
    _max?: tablesMaxOrderByAggregateInput
    _min?: tablesMinOrderByAggregateInput
    _sum?: tablesSumOrderByAggregateInput
  }

  export type tablesScalarWhereWithAggregatesInput = {
    AND?: tablesScalarWhereWithAggregatesInput | tablesScalarWhereWithAggregatesInput[]
    OR?: tablesScalarWhereWithAggregatesInput[]
    NOT?: tablesScalarWhereWithAggregatesInput | tablesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tables"> | number
    event_id?: IntNullableWithAggregatesFilter<"tables"> | number | null
    name?: StringNullableWithAggregatesFilter<"tables"> | string | null
    price?: DecimalWithAggregatesFilter<"tables"> | Decimal | DecimalJsLike | number | string
    capacity?: IntNullableWithAggregatesFilter<"tables"> | number | null
    available_quantity?: IntNullableWithAggregatesFilter<"tables"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tables"> | Date | string | null
  }

  export type ticketsWhereInput = {
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    id?: IntFilter<"tickets"> | number
    event_id?: IntNullableFilter<"tickets"> | number | null
    name?: StringNullableFilter<"tickets"> | string | null
    price?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    available_quantity?: IntNullableFilter<"tickets"> | number | null
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    reservations?: ReservationsListRelationFilter
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }

  export type ticketsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    available_quantity?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    reservations?: reservationsOrderByRelationAggregateInput
    events?: eventsOrderByWithRelationInput
  }

  export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    event_id?: IntNullableFilter<"tickets"> | number | null
    name?: StringNullableFilter<"tickets"> | string | null
    price?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    available_quantity?: IntNullableFilter<"tickets"> | number | null
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    reservations?: ReservationsListRelationFilter
    events?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }, "id">

  export type ticketsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    available_quantity?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ticketsCountOrderByAggregateInput
    _avg?: ticketsAvgOrderByAggregateInput
    _max?: ticketsMaxOrderByAggregateInput
    _min?: ticketsMinOrderByAggregateInput
    _sum?: ticketsSumOrderByAggregateInput
  }

  export type ticketsScalarWhereWithAggregatesInput = {
    AND?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    OR?: ticketsScalarWhereWithAggregatesInput[]
    NOT?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tickets"> | number
    event_id?: IntNullableWithAggregatesFilter<"tickets"> | number | null
    name?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    price?: DecimalWithAggregatesFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    available_quantity?: IntNullableWithAggregatesFilter<"tickets"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    full_name?: StringNullableFilter<"users"> | string | null
    phone_number?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    reservations?: ReservationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    reservations?: reservationsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    full_name?: StringNullableFilter<"users"> | string | null
    phone_number?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    reservations?: ReservationsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    full_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type bottlesCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    events?: eventsCreateNestedOneWithoutBottlesInput
    reserved_bottles?: reserved_bottlesCreateNestedManyWithoutBottlesInput
  }

  export type bottlesUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    reserved_bottles?: reserved_bottlesUncheckedCreateNestedManyWithoutBottlesInput
  }

  export type bottlesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: eventsUpdateOneWithoutBottlesNestedInput
    reserved_bottles?: reserved_bottlesUpdateManyWithoutBottlesNestedInput
  }

  export type bottlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserved_bottles?: reserved_bottlesUncheckedUpdateManyWithoutBottlesNestedInput
  }

  export type bottlesCreateManyInput = {
    id?: number
    event_id?: number | null
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type bottlesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bottlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clubsCreateInput = {
    name: string
    address?: string | null
    city?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    events?: eventsCreateNestedManyWithoutClubsInput
  }

  export type clubsUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    city?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    events?: eventsUncheckedCreateNestedManyWithoutClubsInput
  }

  export type clubsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: eventsUpdateManyWithoutClubsNestedInput
  }

  export type clubsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: eventsUncheckedUpdateManyWithoutClubsNestedInput
  }

  export type clubsCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    city?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type clubsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clubsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsCreateInput = {
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesCreateNestedManyWithoutEventsInput
    clubs?: clubsCreateNestedOneWithoutEventsInput
    tables?: tablesCreateNestedManyWithoutEventsInput
    tickets?: ticketsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    club_id?: number | null
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesUncheckedCreateNestedManyWithoutEventsInput
    tables?: tablesUncheckedCreateNestedManyWithoutEventsInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUpdateManyWithoutEventsNestedInput
    clubs?: clubsUpdateOneWithoutEventsNestedInput
    tables?: tablesUpdateManyWithoutEventsNestedInput
    tickets?: ticketsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUncheckedUpdateManyWithoutEventsNestedInput
    tables?: tablesUncheckedUpdateManyWithoutEventsNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateManyInput = {
    id?: number
    club_id?: number | null
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type eventsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateInput = {
    payment_method?: string | null
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
    status?: string | null
    reservations?: reservationsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    reservation_id?: number | null
    payment_method?: string | null
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
    status?: string | null
  }

  export type paymentsUpdateInput = {
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: reservationsUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservation_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsCreateManyInput = {
    id?: number
    reservation_id?: number | null
    payment_method?: string | null
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
    status?: string | null
  }

  export type paymentsUpdateManyMutationInput = {
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservation_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservationsCreateInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsCreateNestedManyWithoutReservationsInput
    tables?: tablesCreateNestedOneWithoutReservationsInput
    tickets?: ticketsCreateNestedOneWithoutReservationsInput
    users?: usersCreateNestedOneWithoutReservationsInput
    reserved_bottles?: reserved_bottlesCreateNestedManyWithoutReservationsInput
  }

  export type reservationsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    ticket_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedManyWithoutReservationsInput
    reserved_bottles?: reserved_bottlesUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type reservationsUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUpdateManyWithoutReservationsNestedInput
    tables?: tablesUpdateOneWithoutReservationsNestedInput
    tickets?: ticketsUpdateOneWithoutReservationsNestedInput
    users?: usersUpdateOneWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateManyWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsCreateManyInput = {
    id?: number
    user_id?: number | null
    ticket_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type reservationsUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reservationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reserved_bottlesCreateInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    bottles?: bottlesCreateNestedOneWithoutReserved_bottlesInput
    reservations?: reservationsCreateNestedOneWithoutReserved_bottlesInput
  }

  export type reserved_bottlesUncheckedCreateInput = {
    id?: number
    reservation_id?: number | null
    bottle_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
  }

  export type reserved_bottlesUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    bottles?: bottlesUpdateOneWithoutReserved_bottlesNestedInput
    reservations?: reservationsUpdateOneWithoutReserved_bottlesNestedInput
  }

  export type reserved_bottlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservation_id?: NullableIntFieldUpdateOperationsInput | number | null
    bottle_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserved_bottlesCreateManyInput = {
    id?: number
    reservation_id?: number | null
    bottle_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
  }

  export type reserved_bottlesUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserved_bottlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservation_id?: NullableIntFieldUpdateOperationsInput | number | null
    bottle_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tablesCreateInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsCreateNestedManyWithoutTablesInput
    events?: eventsCreateNestedOneWithoutTablesInput
  }

  export type tablesUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsUncheckedCreateNestedManyWithoutTablesInput
  }

  export type tablesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUpdateManyWithoutTablesNestedInput
    events?: eventsUpdateOneWithoutTablesNestedInput
  }

  export type tablesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type tablesCreateManyInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
  }

  export type tablesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tablesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsCreateInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsCreateNestedManyWithoutTicketsInput
    events?: eventsCreateNestedOneWithoutTicketsInput
  }

  export type ticketsUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUpdateManyWithoutTicketsNestedInput
    events?: eventsUpdateOneWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsCreateManyInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
  }

  export type ticketsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    full_name?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    reservations?: reservationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    full_name?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
    reservations?: reservationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    full_name?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventsNullableScalarRelationFilter = {
    is?: eventsWhereInput | null
    isNot?: eventsWhereInput | null
  }

  export type Reserved_bottlesListRelationFilter = {
    every?: reserved_bottlesWhereInput
    some?: reserved_bottlesWhereInput
    none?: reserved_bottlesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reserved_bottlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bottlesCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type bottlesAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
  }

  export type bottlesMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type bottlesMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type bottlesSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clubsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type clubsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clubsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type clubsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type clubsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BottlesListRelationFilter = {
    every?: bottlesWhereInput
    some?: bottlesWhereInput
    none?: bottlesWhereInput
  }

  export type ClubsNullableScalarRelationFilter = {
    is?: clubsWhereInput | null
    isNot?: clubsWhereInput | null
  }

  export type TablesListRelationFilter = {
    every?: tablesWhereInput
    some?: tablesWhereInput
    none?: tablesWhereInput
  }

  export type TicketsListRelationFilter = {
    every?: ticketsWhereInput
    some?: ticketsWhereInput
    none?: ticketsWhereInput
  }

  export type bottlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    event_date?: SortOrder
    music_genre?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    event_date?: SortOrder
    music_genre?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    event_date?: SortOrder
    music_genre?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReservationsNullableScalarRelationFilter = {
    is?: reservationsWhereInput | null
    isNot?: reservationsWhereInput | null
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type TablesNullableScalarRelationFilter = {
    is?: tablesWhereInput | null
    isNot?: tablesWhereInput | null
  }

  export type TicketsNullableScalarRelationFilter = {
    is?: ticketsWhereInput | null
    isNot?: ticketsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reservationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticket_id?: SortOrder
    table_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reservationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticket_id?: SortOrder
    table_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type reservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticket_id?: SortOrder
    table_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reservationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticket_id?: SortOrder
    table_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reservationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticket_id?: SortOrder
    table_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BottlesNullableScalarRelationFilter = {
    is?: bottlesWhereInput | null
    isNot?: bottlesWhereInput | null
  }

  export type reserved_bottlesCountOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    bottle_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    note?: SortOrder
  }

  export type reserved_bottlesAvgOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    bottle_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type reserved_bottlesMaxOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    bottle_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    note?: SortOrder
  }

  export type reserved_bottlesMinOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    bottle_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    note?: SortOrder
  }

  export type reserved_bottlesSumOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    bottle_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type ReservationsListRelationFilter = {
    every?: reservationsWhereInput
    some?: reservationsWhereInput
    none?: reservationsWhereInput
  }

  export type reservationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tablesCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    available_quantity?: SortOrder
    created_at?: SortOrder
  }

  export type tablesAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    available_quantity?: SortOrder
  }

  export type tablesMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    available_quantity?: SortOrder
    created_at?: SortOrder
  }

  export type tablesMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    available_quantity?: SortOrder
    created_at?: SortOrder
  }

  export type tablesSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    available_quantity?: SortOrder
  }

  export type ticketsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    available_quantity?: SortOrder
    created_at?: SortOrder
  }

  export type ticketsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
    available_quantity?: SortOrder
  }

  export type ticketsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    available_quantity?: SortOrder
    created_at?: SortOrder
  }

  export type ticketsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    available_quantity?: SortOrder
    created_at?: SortOrder
  }

  export type ticketsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
    available_quantity?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventsCreateNestedOneWithoutBottlesInput = {
    create?: XOR<eventsCreateWithoutBottlesInput, eventsUncheckedCreateWithoutBottlesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutBottlesInput
    connect?: eventsWhereUniqueInput
  }

  export type reserved_bottlesCreateNestedManyWithoutBottlesInput = {
    create?: XOR<reserved_bottlesCreateWithoutBottlesInput, reserved_bottlesUncheckedCreateWithoutBottlesInput> | reserved_bottlesCreateWithoutBottlesInput[] | reserved_bottlesUncheckedCreateWithoutBottlesInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutBottlesInput | reserved_bottlesCreateOrConnectWithoutBottlesInput[]
    createMany?: reserved_bottlesCreateManyBottlesInputEnvelope
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
  }

  export type reserved_bottlesUncheckedCreateNestedManyWithoutBottlesInput = {
    create?: XOR<reserved_bottlesCreateWithoutBottlesInput, reserved_bottlesUncheckedCreateWithoutBottlesInput> | reserved_bottlesCreateWithoutBottlesInput[] | reserved_bottlesUncheckedCreateWithoutBottlesInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutBottlesInput | reserved_bottlesCreateOrConnectWithoutBottlesInput[]
    createMany?: reserved_bottlesCreateManyBottlesInputEnvelope
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type eventsUpdateOneWithoutBottlesNestedInput = {
    create?: XOR<eventsCreateWithoutBottlesInput, eventsUncheckedCreateWithoutBottlesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutBottlesInput
    upsert?: eventsUpsertWithoutBottlesInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutBottlesInput, eventsUpdateWithoutBottlesInput>, eventsUncheckedUpdateWithoutBottlesInput>
  }

  export type reserved_bottlesUpdateManyWithoutBottlesNestedInput = {
    create?: XOR<reserved_bottlesCreateWithoutBottlesInput, reserved_bottlesUncheckedCreateWithoutBottlesInput> | reserved_bottlesCreateWithoutBottlesInput[] | reserved_bottlesUncheckedCreateWithoutBottlesInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutBottlesInput | reserved_bottlesCreateOrConnectWithoutBottlesInput[]
    upsert?: reserved_bottlesUpsertWithWhereUniqueWithoutBottlesInput | reserved_bottlesUpsertWithWhereUniqueWithoutBottlesInput[]
    createMany?: reserved_bottlesCreateManyBottlesInputEnvelope
    set?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    disconnect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    delete?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    update?: reserved_bottlesUpdateWithWhereUniqueWithoutBottlesInput | reserved_bottlesUpdateWithWhereUniqueWithoutBottlesInput[]
    updateMany?: reserved_bottlesUpdateManyWithWhereWithoutBottlesInput | reserved_bottlesUpdateManyWithWhereWithoutBottlesInput[]
    deleteMany?: reserved_bottlesScalarWhereInput | reserved_bottlesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reserved_bottlesUncheckedUpdateManyWithoutBottlesNestedInput = {
    create?: XOR<reserved_bottlesCreateWithoutBottlesInput, reserved_bottlesUncheckedCreateWithoutBottlesInput> | reserved_bottlesCreateWithoutBottlesInput[] | reserved_bottlesUncheckedCreateWithoutBottlesInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutBottlesInput | reserved_bottlesCreateOrConnectWithoutBottlesInput[]
    upsert?: reserved_bottlesUpsertWithWhereUniqueWithoutBottlesInput | reserved_bottlesUpsertWithWhereUniqueWithoutBottlesInput[]
    createMany?: reserved_bottlesCreateManyBottlesInputEnvelope
    set?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    disconnect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    delete?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    update?: reserved_bottlesUpdateWithWhereUniqueWithoutBottlesInput | reserved_bottlesUpdateWithWhereUniqueWithoutBottlesInput[]
    updateMany?: reserved_bottlesUpdateManyWithWhereWithoutBottlesInput | reserved_bottlesUpdateManyWithWhereWithoutBottlesInput[]
    deleteMany?: reserved_bottlesScalarWhereInput | reserved_bottlesScalarWhereInput[]
  }

  export type eventsCreateNestedManyWithoutClubsInput = {
    create?: XOR<eventsCreateWithoutClubsInput, eventsUncheckedCreateWithoutClubsInput> | eventsCreateWithoutClubsInput[] | eventsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutClubsInput | eventsCreateOrConnectWithoutClubsInput[]
    createMany?: eventsCreateManyClubsInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type eventsUncheckedCreateNestedManyWithoutClubsInput = {
    create?: XOR<eventsCreateWithoutClubsInput, eventsUncheckedCreateWithoutClubsInput> | eventsCreateWithoutClubsInput[] | eventsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutClubsInput | eventsCreateOrConnectWithoutClubsInput[]
    createMany?: eventsCreateManyClubsInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type eventsUpdateManyWithoutClubsNestedInput = {
    create?: XOR<eventsCreateWithoutClubsInput, eventsUncheckedCreateWithoutClubsInput> | eventsCreateWithoutClubsInput[] | eventsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutClubsInput | eventsCreateOrConnectWithoutClubsInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutClubsInput | eventsUpsertWithWhereUniqueWithoutClubsInput[]
    createMany?: eventsCreateManyClubsInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutClubsInput | eventsUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutClubsInput | eventsUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type eventsUncheckedUpdateManyWithoutClubsNestedInput = {
    create?: XOR<eventsCreateWithoutClubsInput, eventsUncheckedCreateWithoutClubsInput> | eventsCreateWithoutClubsInput[] | eventsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutClubsInput | eventsCreateOrConnectWithoutClubsInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutClubsInput | eventsUpsertWithWhereUniqueWithoutClubsInput[]
    createMany?: eventsCreateManyClubsInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutClubsInput | eventsUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutClubsInput | eventsUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type bottlesCreateNestedManyWithoutEventsInput = {
    create?: XOR<bottlesCreateWithoutEventsInput, bottlesUncheckedCreateWithoutEventsInput> | bottlesCreateWithoutEventsInput[] | bottlesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: bottlesCreateOrConnectWithoutEventsInput | bottlesCreateOrConnectWithoutEventsInput[]
    createMany?: bottlesCreateManyEventsInputEnvelope
    connect?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
  }

  export type clubsCreateNestedOneWithoutEventsInput = {
    create?: XOR<clubsCreateWithoutEventsInput, clubsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: clubsCreateOrConnectWithoutEventsInput
    connect?: clubsWhereUniqueInput
  }

  export type tablesCreateNestedManyWithoutEventsInput = {
    create?: XOR<tablesCreateWithoutEventsInput, tablesUncheckedCreateWithoutEventsInput> | tablesCreateWithoutEventsInput[] | tablesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutEventsInput | tablesCreateOrConnectWithoutEventsInput[]
    createMany?: tablesCreateManyEventsInputEnvelope
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
  }

  export type ticketsCreateNestedManyWithoutEventsInput = {
    create?: XOR<ticketsCreateWithoutEventsInput, ticketsUncheckedCreateWithoutEventsInput> | ticketsCreateWithoutEventsInput[] | ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutEventsInput | ticketsCreateOrConnectWithoutEventsInput[]
    createMany?: ticketsCreateManyEventsInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type bottlesUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<bottlesCreateWithoutEventsInput, bottlesUncheckedCreateWithoutEventsInput> | bottlesCreateWithoutEventsInput[] | bottlesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: bottlesCreateOrConnectWithoutEventsInput | bottlesCreateOrConnectWithoutEventsInput[]
    createMany?: bottlesCreateManyEventsInputEnvelope
    connect?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
  }

  export type tablesUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<tablesCreateWithoutEventsInput, tablesUncheckedCreateWithoutEventsInput> | tablesCreateWithoutEventsInput[] | tablesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutEventsInput | tablesCreateOrConnectWithoutEventsInput[]
    createMany?: tablesCreateManyEventsInputEnvelope
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<ticketsCreateWithoutEventsInput, ticketsUncheckedCreateWithoutEventsInput> | ticketsCreateWithoutEventsInput[] | ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutEventsInput | ticketsCreateOrConnectWithoutEventsInput[]
    createMany?: ticketsCreateManyEventsInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type bottlesUpdateManyWithoutEventsNestedInput = {
    create?: XOR<bottlesCreateWithoutEventsInput, bottlesUncheckedCreateWithoutEventsInput> | bottlesCreateWithoutEventsInput[] | bottlesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: bottlesCreateOrConnectWithoutEventsInput | bottlesCreateOrConnectWithoutEventsInput[]
    upsert?: bottlesUpsertWithWhereUniqueWithoutEventsInput | bottlesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: bottlesCreateManyEventsInputEnvelope
    set?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    disconnect?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    delete?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    connect?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    update?: bottlesUpdateWithWhereUniqueWithoutEventsInput | bottlesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: bottlesUpdateManyWithWhereWithoutEventsInput | bottlesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: bottlesScalarWhereInput | bottlesScalarWhereInput[]
  }

  export type clubsUpdateOneWithoutEventsNestedInput = {
    create?: XOR<clubsCreateWithoutEventsInput, clubsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: clubsCreateOrConnectWithoutEventsInput
    upsert?: clubsUpsertWithoutEventsInput
    disconnect?: clubsWhereInput | boolean
    delete?: clubsWhereInput | boolean
    connect?: clubsWhereUniqueInput
    update?: XOR<XOR<clubsUpdateToOneWithWhereWithoutEventsInput, clubsUpdateWithoutEventsInput>, clubsUncheckedUpdateWithoutEventsInput>
  }

  export type tablesUpdateManyWithoutEventsNestedInput = {
    create?: XOR<tablesCreateWithoutEventsInput, tablesUncheckedCreateWithoutEventsInput> | tablesCreateWithoutEventsInput[] | tablesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutEventsInput | tablesCreateOrConnectWithoutEventsInput[]
    upsert?: tablesUpsertWithWhereUniqueWithoutEventsInput | tablesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: tablesCreateManyEventsInputEnvelope
    set?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    disconnect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    delete?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    update?: tablesUpdateWithWhereUniqueWithoutEventsInput | tablesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: tablesUpdateManyWithWhereWithoutEventsInput | tablesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: tablesScalarWhereInput | tablesScalarWhereInput[]
  }

  export type ticketsUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ticketsCreateWithoutEventsInput, ticketsUncheckedCreateWithoutEventsInput> | ticketsCreateWithoutEventsInput[] | ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutEventsInput | ticketsCreateOrConnectWithoutEventsInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutEventsInput | ticketsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ticketsCreateManyEventsInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutEventsInput | ticketsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutEventsInput | ticketsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type bottlesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<bottlesCreateWithoutEventsInput, bottlesUncheckedCreateWithoutEventsInput> | bottlesCreateWithoutEventsInput[] | bottlesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: bottlesCreateOrConnectWithoutEventsInput | bottlesCreateOrConnectWithoutEventsInput[]
    upsert?: bottlesUpsertWithWhereUniqueWithoutEventsInput | bottlesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: bottlesCreateManyEventsInputEnvelope
    set?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    disconnect?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    delete?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    connect?: bottlesWhereUniqueInput | bottlesWhereUniqueInput[]
    update?: bottlesUpdateWithWhereUniqueWithoutEventsInput | bottlesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: bottlesUpdateManyWithWhereWithoutEventsInput | bottlesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: bottlesScalarWhereInput | bottlesScalarWhereInput[]
  }

  export type tablesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<tablesCreateWithoutEventsInput, tablesUncheckedCreateWithoutEventsInput> | tablesCreateWithoutEventsInput[] | tablesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutEventsInput | tablesCreateOrConnectWithoutEventsInput[]
    upsert?: tablesUpsertWithWhereUniqueWithoutEventsInput | tablesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: tablesCreateManyEventsInputEnvelope
    set?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    disconnect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    delete?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    update?: tablesUpdateWithWhereUniqueWithoutEventsInput | tablesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: tablesUpdateManyWithWhereWithoutEventsInput | tablesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: tablesScalarWhereInput | tablesScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ticketsCreateWithoutEventsInput, ticketsUncheckedCreateWithoutEventsInput> | ticketsCreateWithoutEventsInput[] | ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutEventsInput | ticketsCreateOrConnectWithoutEventsInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutEventsInput | ticketsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ticketsCreateManyEventsInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutEventsInput | ticketsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutEventsInput | ticketsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type reservationsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<reservationsCreateWithoutPaymentsInput, reservationsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: reservationsCreateOrConnectWithoutPaymentsInput
    connect?: reservationsWhereUniqueInput
  }

  export type reservationsUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<reservationsCreateWithoutPaymentsInput, reservationsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: reservationsCreateOrConnectWithoutPaymentsInput
    upsert?: reservationsUpsertWithoutPaymentsInput
    disconnect?: reservationsWhereInput | boolean
    delete?: reservationsWhereInput | boolean
    connect?: reservationsWhereUniqueInput
    update?: XOR<XOR<reservationsUpdateToOneWithWhereWithoutPaymentsInput, reservationsUpdateWithoutPaymentsInput>, reservationsUncheckedUpdateWithoutPaymentsInput>
  }

  export type paymentsCreateNestedManyWithoutReservationsInput = {
    create?: XOR<paymentsCreateWithoutReservationsInput, paymentsUncheckedCreateWithoutReservationsInput> | paymentsCreateWithoutReservationsInput[] | paymentsUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutReservationsInput | paymentsCreateOrConnectWithoutReservationsInput[]
    createMany?: paymentsCreateManyReservationsInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type tablesCreateNestedOneWithoutReservationsInput = {
    create?: XOR<tablesCreateWithoutReservationsInput, tablesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: tablesCreateOrConnectWithoutReservationsInput
    connect?: tablesWhereUniqueInput
  }

  export type ticketsCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ticketsCreateWithoutReservationsInput, ticketsUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutReservationsInput
    connect?: ticketsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReservationsInput = {
    create?: XOR<usersCreateWithoutReservationsInput, usersUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReservationsInput
    connect?: usersWhereUniqueInput
  }

  export type reserved_bottlesCreateNestedManyWithoutReservationsInput = {
    create?: XOR<reserved_bottlesCreateWithoutReservationsInput, reserved_bottlesUncheckedCreateWithoutReservationsInput> | reserved_bottlesCreateWithoutReservationsInput[] | reserved_bottlesUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutReservationsInput | reserved_bottlesCreateOrConnectWithoutReservationsInput[]
    createMany?: reserved_bottlesCreateManyReservationsInputEnvelope
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutReservationsInput = {
    create?: XOR<paymentsCreateWithoutReservationsInput, paymentsUncheckedCreateWithoutReservationsInput> | paymentsCreateWithoutReservationsInput[] | paymentsUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutReservationsInput | paymentsCreateOrConnectWithoutReservationsInput[]
    createMany?: paymentsCreateManyReservationsInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type reserved_bottlesUncheckedCreateNestedManyWithoutReservationsInput = {
    create?: XOR<reserved_bottlesCreateWithoutReservationsInput, reserved_bottlesUncheckedCreateWithoutReservationsInput> | reserved_bottlesCreateWithoutReservationsInput[] | reserved_bottlesUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutReservationsInput | reserved_bottlesCreateOrConnectWithoutReservationsInput[]
    createMany?: reserved_bottlesCreateManyReservationsInputEnvelope
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type paymentsUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<paymentsCreateWithoutReservationsInput, paymentsUncheckedCreateWithoutReservationsInput> | paymentsCreateWithoutReservationsInput[] | paymentsUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutReservationsInput | paymentsCreateOrConnectWithoutReservationsInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutReservationsInput | paymentsUpsertWithWhereUniqueWithoutReservationsInput[]
    createMany?: paymentsCreateManyReservationsInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutReservationsInput | paymentsUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutReservationsInput | paymentsUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type tablesUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<tablesCreateWithoutReservationsInput, tablesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: tablesCreateOrConnectWithoutReservationsInput
    upsert?: tablesUpsertWithoutReservationsInput
    disconnect?: tablesWhereInput | boolean
    delete?: tablesWhereInput | boolean
    connect?: tablesWhereUniqueInput
    update?: XOR<XOR<tablesUpdateToOneWithWhereWithoutReservationsInput, tablesUpdateWithoutReservationsInput>, tablesUncheckedUpdateWithoutReservationsInput>
  }

  export type ticketsUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<ticketsCreateWithoutReservationsInput, ticketsUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutReservationsInput
    upsert?: ticketsUpsertWithoutReservationsInput
    disconnect?: ticketsWhereInput | boolean
    delete?: ticketsWhereInput | boolean
    connect?: ticketsWhereUniqueInput
    update?: XOR<XOR<ticketsUpdateToOneWithWhereWithoutReservationsInput, ticketsUpdateWithoutReservationsInput>, ticketsUncheckedUpdateWithoutReservationsInput>
  }

  export type usersUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<usersCreateWithoutReservationsInput, usersUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReservationsInput
    upsert?: usersUpsertWithoutReservationsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReservationsInput, usersUpdateWithoutReservationsInput>, usersUncheckedUpdateWithoutReservationsInput>
  }

  export type reserved_bottlesUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<reserved_bottlesCreateWithoutReservationsInput, reserved_bottlesUncheckedCreateWithoutReservationsInput> | reserved_bottlesCreateWithoutReservationsInput[] | reserved_bottlesUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutReservationsInput | reserved_bottlesCreateOrConnectWithoutReservationsInput[]
    upsert?: reserved_bottlesUpsertWithWhereUniqueWithoutReservationsInput | reserved_bottlesUpsertWithWhereUniqueWithoutReservationsInput[]
    createMany?: reserved_bottlesCreateManyReservationsInputEnvelope
    set?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    disconnect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    delete?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    update?: reserved_bottlesUpdateWithWhereUniqueWithoutReservationsInput | reserved_bottlesUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: reserved_bottlesUpdateManyWithWhereWithoutReservationsInput | reserved_bottlesUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: reserved_bottlesScalarWhereInput | reserved_bottlesScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<paymentsCreateWithoutReservationsInput, paymentsUncheckedCreateWithoutReservationsInput> | paymentsCreateWithoutReservationsInput[] | paymentsUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutReservationsInput | paymentsCreateOrConnectWithoutReservationsInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutReservationsInput | paymentsUpsertWithWhereUniqueWithoutReservationsInput[]
    createMany?: paymentsCreateManyReservationsInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutReservationsInput | paymentsUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutReservationsInput | paymentsUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type reserved_bottlesUncheckedUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<reserved_bottlesCreateWithoutReservationsInput, reserved_bottlesUncheckedCreateWithoutReservationsInput> | reserved_bottlesCreateWithoutReservationsInput[] | reserved_bottlesUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: reserved_bottlesCreateOrConnectWithoutReservationsInput | reserved_bottlesCreateOrConnectWithoutReservationsInput[]
    upsert?: reserved_bottlesUpsertWithWhereUniqueWithoutReservationsInput | reserved_bottlesUpsertWithWhereUniqueWithoutReservationsInput[]
    createMany?: reserved_bottlesCreateManyReservationsInputEnvelope
    set?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    disconnect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    delete?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    connect?: reserved_bottlesWhereUniqueInput | reserved_bottlesWhereUniqueInput[]
    update?: reserved_bottlesUpdateWithWhereUniqueWithoutReservationsInput | reserved_bottlesUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: reserved_bottlesUpdateManyWithWhereWithoutReservationsInput | reserved_bottlesUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: reserved_bottlesScalarWhereInput | reserved_bottlesScalarWhereInput[]
  }

  export type bottlesCreateNestedOneWithoutReserved_bottlesInput = {
    create?: XOR<bottlesCreateWithoutReserved_bottlesInput, bottlesUncheckedCreateWithoutReserved_bottlesInput>
    connectOrCreate?: bottlesCreateOrConnectWithoutReserved_bottlesInput
    connect?: bottlesWhereUniqueInput
  }

  export type reservationsCreateNestedOneWithoutReserved_bottlesInput = {
    create?: XOR<reservationsCreateWithoutReserved_bottlesInput, reservationsUncheckedCreateWithoutReserved_bottlesInput>
    connectOrCreate?: reservationsCreateOrConnectWithoutReserved_bottlesInput
    connect?: reservationsWhereUniqueInput
  }

  export type bottlesUpdateOneWithoutReserved_bottlesNestedInput = {
    create?: XOR<bottlesCreateWithoutReserved_bottlesInput, bottlesUncheckedCreateWithoutReserved_bottlesInput>
    connectOrCreate?: bottlesCreateOrConnectWithoutReserved_bottlesInput
    upsert?: bottlesUpsertWithoutReserved_bottlesInput
    disconnect?: bottlesWhereInput | boolean
    delete?: bottlesWhereInput | boolean
    connect?: bottlesWhereUniqueInput
    update?: XOR<XOR<bottlesUpdateToOneWithWhereWithoutReserved_bottlesInput, bottlesUpdateWithoutReserved_bottlesInput>, bottlesUncheckedUpdateWithoutReserved_bottlesInput>
  }

  export type reservationsUpdateOneWithoutReserved_bottlesNestedInput = {
    create?: XOR<reservationsCreateWithoutReserved_bottlesInput, reservationsUncheckedCreateWithoutReserved_bottlesInput>
    connectOrCreate?: reservationsCreateOrConnectWithoutReserved_bottlesInput
    upsert?: reservationsUpsertWithoutReserved_bottlesInput
    disconnect?: reservationsWhereInput | boolean
    delete?: reservationsWhereInput | boolean
    connect?: reservationsWhereUniqueInput
    update?: XOR<XOR<reservationsUpdateToOneWithWhereWithoutReserved_bottlesInput, reservationsUpdateWithoutReserved_bottlesInput>, reservationsUncheckedUpdateWithoutReserved_bottlesInput>
  }

  export type reservationsCreateNestedManyWithoutTablesInput = {
    create?: XOR<reservationsCreateWithoutTablesInput, reservationsUncheckedCreateWithoutTablesInput> | reservationsCreateWithoutTablesInput[] | reservationsUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTablesInput | reservationsCreateOrConnectWithoutTablesInput[]
    createMany?: reservationsCreateManyTablesInputEnvelope
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
  }

  export type eventsCreateNestedOneWithoutTablesInput = {
    create?: XOR<eventsCreateWithoutTablesInput, eventsUncheckedCreateWithoutTablesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTablesInput
    connect?: eventsWhereUniqueInput
  }

  export type reservationsUncheckedCreateNestedManyWithoutTablesInput = {
    create?: XOR<reservationsCreateWithoutTablesInput, reservationsUncheckedCreateWithoutTablesInput> | reservationsCreateWithoutTablesInput[] | reservationsUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTablesInput | reservationsCreateOrConnectWithoutTablesInput[]
    createMany?: reservationsCreateManyTablesInputEnvelope
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
  }

  export type reservationsUpdateManyWithoutTablesNestedInput = {
    create?: XOR<reservationsCreateWithoutTablesInput, reservationsUncheckedCreateWithoutTablesInput> | reservationsCreateWithoutTablesInput[] | reservationsUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTablesInput | reservationsCreateOrConnectWithoutTablesInput[]
    upsert?: reservationsUpsertWithWhereUniqueWithoutTablesInput | reservationsUpsertWithWhereUniqueWithoutTablesInput[]
    createMany?: reservationsCreateManyTablesInputEnvelope
    set?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    disconnect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    delete?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    update?: reservationsUpdateWithWhereUniqueWithoutTablesInput | reservationsUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: reservationsUpdateManyWithWhereWithoutTablesInput | reservationsUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
  }

  export type eventsUpdateOneWithoutTablesNestedInput = {
    create?: XOR<eventsCreateWithoutTablesInput, eventsUncheckedCreateWithoutTablesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTablesInput
    upsert?: eventsUpsertWithoutTablesInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutTablesInput, eventsUpdateWithoutTablesInput>, eventsUncheckedUpdateWithoutTablesInput>
  }

  export type reservationsUncheckedUpdateManyWithoutTablesNestedInput = {
    create?: XOR<reservationsCreateWithoutTablesInput, reservationsUncheckedCreateWithoutTablesInput> | reservationsCreateWithoutTablesInput[] | reservationsUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTablesInput | reservationsCreateOrConnectWithoutTablesInput[]
    upsert?: reservationsUpsertWithWhereUniqueWithoutTablesInput | reservationsUpsertWithWhereUniqueWithoutTablesInput[]
    createMany?: reservationsCreateManyTablesInputEnvelope
    set?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    disconnect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    delete?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    update?: reservationsUpdateWithWhereUniqueWithoutTablesInput | reservationsUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: reservationsUpdateManyWithWhereWithoutTablesInput | reservationsUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
  }

  export type reservationsCreateNestedManyWithoutTicketsInput = {
    create?: XOR<reservationsCreateWithoutTicketsInput, reservationsUncheckedCreateWithoutTicketsInput> | reservationsCreateWithoutTicketsInput[] | reservationsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTicketsInput | reservationsCreateOrConnectWithoutTicketsInput[]
    createMany?: reservationsCreateManyTicketsInputEnvelope
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
  }

  export type eventsCreateNestedOneWithoutTicketsInput = {
    create?: XOR<eventsCreateWithoutTicketsInput, eventsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTicketsInput
    connect?: eventsWhereUniqueInput
  }

  export type reservationsUncheckedCreateNestedManyWithoutTicketsInput = {
    create?: XOR<reservationsCreateWithoutTicketsInput, reservationsUncheckedCreateWithoutTicketsInput> | reservationsCreateWithoutTicketsInput[] | reservationsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTicketsInput | reservationsCreateOrConnectWithoutTicketsInput[]
    createMany?: reservationsCreateManyTicketsInputEnvelope
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
  }

  export type reservationsUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<reservationsCreateWithoutTicketsInput, reservationsUncheckedCreateWithoutTicketsInput> | reservationsCreateWithoutTicketsInput[] | reservationsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTicketsInput | reservationsCreateOrConnectWithoutTicketsInput[]
    upsert?: reservationsUpsertWithWhereUniqueWithoutTicketsInput | reservationsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: reservationsCreateManyTicketsInputEnvelope
    set?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    disconnect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    delete?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    update?: reservationsUpdateWithWhereUniqueWithoutTicketsInput | reservationsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: reservationsUpdateManyWithWhereWithoutTicketsInput | reservationsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
  }

  export type eventsUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<eventsCreateWithoutTicketsInput, eventsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutTicketsInput
    upsert?: eventsUpsertWithoutTicketsInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutTicketsInput, eventsUpdateWithoutTicketsInput>, eventsUncheckedUpdateWithoutTicketsInput>
  }

  export type reservationsUncheckedUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<reservationsCreateWithoutTicketsInput, reservationsUncheckedCreateWithoutTicketsInput> | reservationsCreateWithoutTicketsInput[] | reservationsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutTicketsInput | reservationsCreateOrConnectWithoutTicketsInput[]
    upsert?: reservationsUpsertWithWhereUniqueWithoutTicketsInput | reservationsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: reservationsCreateManyTicketsInputEnvelope
    set?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    disconnect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    delete?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    update?: reservationsUpdateWithWhereUniqueWithoutTicketsInput | reservationsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: reservationsUpdateManyWithWhereWithoutTicketsInput | reservationsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
  }

  export type reservationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<reservationsCreateWithoutUsersInput, reservationsUncheckedCreateWithoutUsersInput> | reservationsCreateWithoutUsersInput[] | reservationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutUsersInput | reservationsCreateOrConnectWithoutUsersInput[]
    createMany?: reservationsCreateManyUsersInputEnvelope
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
  }

  export type reservationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reservationsCreateWithoutUsersInput, reservationsUncheckedCreateWithoutUsersInput> | reservationsCreateWithoutUsersInput[] | reservationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutUsersInput | reservationsCreateOrConnectWithoutUsersInput[]
    createMany?: reservationsCreateManyUsersInputEnvelope
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
  }

  export type reservationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reservationsCreateWithoutUsersInput, reservationsUncheckedCreateWithoutUsersInput> | reservationsCreateWithoutUsersInput[] | reservationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutUsersInput | reservationsCreateOrConnectWithoutUsersInput[]
    upsert?: reservationsUpsertWithWhereUniqueWithoutUsersInput | reservationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reservationsCreateManyUsersInputEnvelope
    set?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    disconnect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    delete?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    update?: reservationsUpdateWithWhereUniqueWithoutUsersInput | reservationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reservationsUpdateManyWithWhereWithoutUsersInput | reservationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
  }

  export type reservationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reservationsCreateWithoutUsersInput, reservationsUncheckedCreateWithoutUsersInput> | reservationsCreateWithoutUsersInput[] | reservationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reservationsCreateOrConnectWithoutUsersInput | reservationsCreateOrConnectWithoutUsersInput[]
    upsert?: reservationsUpsertWithWhereUniqueWithoutUsersInput | reservationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reservationsCreateManyUsersInputEnvelope
    set?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    disconnect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    delete?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    connect?: reservationsWhereUniqueInput | reservationsWhereUniqueInput[]
    update?: reservationsUpdateWithWhereUniqueWithoutUsersInput | reservationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reservationsUpdateManyWithWhereWithoutUsersInput | reservationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type eventsCreateWithoutBottlesInput = {
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    clubs?: clubsCreateNestedOneWithoutEventsInput
    tables?: tablesCreateNestedManyWithoutEventsInput
    tickets?: ticketsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutBottlesInput = {
    id?: number
    club_id?: number | null
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    tables?: tablesUncheckedCreateNestedManyWithoutEventsInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutBottlesInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutBottlesInput, eventsUncheckedCreateWithoutBottlesInput>
  }

  export type reserved_bottlesCreateWithoutBottlesInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    reservations?: reservationsCreateNestedOneWithoutReserved_bottlesInput
  }

  export type reserved_bottlesUncheckedCreateWithoutBottlesInput = {
    id?: number
    reservation_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
  }

  export type reserved_bottlesCreateOrConnectWithoutBottlesInput = {
    where: reserved_bottlesWhereUniqueInput
    create: XOR<reserved_bottlesCreateWithoutBottlesInput, reserved_bottlesUncheckedCreateWithoutBottlesInput>
  }

  export type reserved_bottlesCreateManyBottlesInputEnvelope = {
    data: reserved_bottlesCreateManyBottlesInput | reserved_bottlesCreateManyBottlesInput[]
    skipDuplicates?: boolean
  }

  export type eventsUpsertWithoutBottlesInput = {
    update: XOR<eventsUpdateWithoutBottlesInput, eventsUncheckedUpdateWithoutBottlesInput>
    create: XOR<eventsCreateWithoutBottlesInput, eventsUncheckedCreateWithoutBottlesInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutBottlesInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutBottlesInput, eventsUncheckedUpdateWithoutBottlesInput>
  }

  export type eventsUpdateWithoutBottlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clubs?: clubsUpdateOneWithoutEventsNestedInput
    tables?: tablesUpdateManyWithoutEventsNestedInput
    tickets?: ticketsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutBottlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tables?: tablesUncheckedUpdateManyWithoutEventsNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type reserved_bottlesUpsertWithWhereUniqueWithoutBottlesInput = {
    where: reserved_bottlesWhereUniqueInput
    update: XOR<reserved_bottlesUpdateWithoutBottlesInput, reserved_bottlesUncheckedUpdateWithoutBottlesInput>
    create: XOR<reserved_bottlesCreateWithoutBottlesInput, reserved_bottlesUncheckedCreateWithoutBottlesInput>
  }

  export type reserved_bottlesUpdateWithWhereUniqueWithoutBottlesInput = {
    where: reserved_bottlesWhereUniqueInput
    data: XOR<reserved_bottlesUpdateWithoutBottlesInput, reserved_bottlesUncheckedUpdateWithoutBottlesInput>
  }

  export type reserved_bottlesUpdateManyWithWhereWithoutBottlesInput = {
    where: reserved_bottlesScalarWhereInput
    data: XOR<reserved_bottlesUpdateManyMutationInput, reserved_bottlesUncheckedUpdateManyWithoutBottlesInput>
  }

  export type reserved_bottlesScalarWhereInput = {
    AND?: reserved_bottlesScalarWhereInput | reserved_bottlesScalarWhereInput[]
    OR?: reserved_bottlesScalarWhereInput[]
    NOT?: reserved_bottlesScalarWhereInput | reserved_bottlesScalarWhereInput[]
    id?: IntFilter<"reserved_bottles"> | number
    reservation_id?: IntNullableFilter<"reserved_bottles"> | number | null
    bottle_id?: IntNullableFilter<"reserved_bottles"> | number | null
    quantity?: IntNullableFilter<"reserved_bottles"> | number | null
    total_price?: DecimalNullableFilter<"reserved_bottles"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableFilter<"reserved_bottles"> | string | null
  }

  export type eventsCreateWithoutClubsInput = {
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesCreateNestedManyWithoutEventsInput
    tables?: tablesCreateNestedManyWithoutEventsInput
    tickets?: ticketsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutClubsInput = {
    id?: number
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesUncheckedCreateNestedManyWithoutEventsInput
    tables?: tablesUncheckedCreateNestedManyWithoutEventsInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutClubsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutClubsInput, eventsUncheckedCreateWithoutClubsInput>
  }

  export type eventsCreateManyClubsInputEnvelope = {
    data: eventsCreateManyClubsInput | eventsCreateManyClubsInput[]
    skipDuplicates?: boolean
  }

  export type eventsUpsertWithWhereUniqueWithoutClubsInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutClubsInput, eventsUncheckedUpdateWithoutClubsInput>
    create: XOR<eventsCreateWithoutClubsInput, eventsUncheckedCreateWithoutClubsInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutClubsInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutClubsInput, eventsUncheckedUpdateWithoutClubsInput>
  }

  export type eventsUpdateManyWithWhereWithoutClubsInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutClubsInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    club_id?: IntNullableFilter<"events"> | number | null
    name?: StringFilter<"events"> | string
    description?: StringNullableFilter<"events"> | string | null
    event_date?: DateTimeFilter<"events"> | Date | string
    music_genre?: StringNullableFilter<"events"> | string | null
    image_url?: StringNullableFilter<"events"> | string | null
    created_at?: DateTimeNullableFilter<"events"> | Date | string | null
  }

  export type bottlesCreateWithoutEventsInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    reserved_bottles?: reserved_bottlesCreateNestedManyWithoutBottlesInput
  }

  export type bottlesUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    reserved_bottles?: reserved_bottlesUncheckedCreateNestedManyWithoutBottlesInput
  }

  export type bottlesCreateOrConnectWithoutEventsInput = {
    where: bottlesWhereUniqueInput
    create: XOR<bottlesCreateWithoutEventsInput, bottlesUncheckedCreateWithoutEventsInput>
  }

  export type bottlesCreateManyEventsInputEnvelope = {
    data: bottlesCreateManyEventsInput | bottlesCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type clubsCreateWithoutEventsInput = {
    name: string
    address?: string | null
    city?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type clubsUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    address?: string | null
    city?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type clubsCreateOrConnectWithoutEventsInput = {
    where: clubsWhereUniqueInput
    create: XOR<clubsCreateWithoutEventsInput, clubsUncheckedCreateWithoutEventsInput>
  }

  export type tablesCreateWithoutEventsInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsCreateNestedManyWithoutTablesInput
  }

  export type tablesUncheckedCreateWithoutEventsInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsUncheckedCreateNestedManyWithoutTablesInput
  }

  export type tablesCreateOrConnectWithoutEventsInput = {
    where: tablesWhereUniqueInput
    create: XOR<tablesCreateWithoutEventsInput, tablesUncheckedCreateWithoutEventsInput>
  }

  export type tablesCreateManyEventsInputEnvelope = {
    data: tablesCreateManyEventsInput | tablesCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type ticketsCreateWithoutEventsInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsCreateNestedManyWithoutTicketsInput
  }

  export type ticketsUncheckedCreateWithoutEventsInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
    reservations?: reservationsUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutEventsInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutEventsInput, ticketsUncheckedCreateWithoutEventsInput>
  }

  export type ticketsCreateManyEventsInputEnvelope = {
    data: ticketsCreateManyEventsInput | ticketsCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type bottlesUpsertWithWhereUniqueWithoutEventsInput = {
    where: bottlesWhereUniqueInput
    update: XOR<bottlesUpdateWithoutEventsInput, bottlesUncheckedUpdateWithoutEventsInput>
    create: XOR<bottlesCreateWithoutEventsInput, bottlesUncheckedCreateWithoutEventsInput>
  }

  export type bottlesUpdateWithWhereUniqueWithoutEventsInput = {
    where: bottlesWhereUniqueInput
    data: XOR<bottlesUpdateWithoutEventsInput, bottlesUncheckedUpdateWithoutEventsInput>
  }

  export type bottlesUpdateManyWithWhereWithoutEventsInput = {
    where: bottlesScalarWhereInput
    data: XOR<bottlesUpdateManyMutationInput, bottlesUncheckedUpdateManyWithoutEventsInput>
  }

  export type bottlesScalarWhereInput = {
    AND?: bottlesScalarWhereInput | bottlesScalarWhereInput[]
    OR?: bottlesScalarWhereInput[]
    NOT?: bottlesScalarWhereInput | bottlesScalarWhereInput[]
    id?: IntFilter<"bottles"> | number
    event_id?: IntNullableFilter<"bottles"> | number | null
    name?: StringFilter<"bottles"> | string
    price?: DecimalFilter<"bottles"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"bottles"> | Date | string | null
  }

  export type clubsUpsertWithoutEventsInput = {
    update: XOR<clubsUpdateWithoutEventsInput, clubsUncheckedUpdateWithoutEventsInput>
    create: XOR<clubsCreateWithoutEventsInput, clubsUncheckedCreateWithoutEventsInput>
    where?: clubsWhereInput
  }

  export type clubsUpdateToOneWithWhereWithoutEventsInput = {
    where?: clubsWhereInput
    data: XOR<clubsUpdateWithoutEventsInput, clubsUncheckedUpdateWithoutEventsInput>
  }

  export type clubsUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clubsUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tablesUpsertWithWhereUniqueWithoutEventsInput = {
    where: tablesWhereUniqueInput
    update: XOR<tablesUpdateWithoutEventsInput, tablesUncheckedUpdateWithoutEventsInput>
    create: XOR<tablesCreateWithoutEventsInput, tablesUncheckedCreateWithoutEventsInput>
  }

  export type tablesUpdateWithWhereUniqueWithoutEventsInput = {
    where: tablesWhereUniqueInput
    data: XOR<tablesUpdateWithoutEventsInput, tablesUncheckedUpdateWithoutEventsInput>
  }

  export type tablesUpdateManyWithWhereWithoutEventsInput = {
    where: tablesScalarWhereInput
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyWithoutEventsInput>
  }

  export type tablesScalarWhereInput = {
    AND?: tablesScalarWhereInput | tablesScalarWhereInput[]
    OR?: tablesScalarWhereInput[]
    NOT?: tablesScalarWhereInput | tablesScalarWhereInput[]
    id?: IntFilter<"tables"> | number
    event_id?: IntNullableFilter<"tables"> | number | null
    name?: StringNullableFilter<"tables"> | string | null
    price?: DecimalFilter<"tables"> | Decimal | DecimalJsLike | number | string
    capacity?: IntNullableFilter<"tables"> | number | null
    available_quantity?: IntNullableFilter<"tables"> | number | null
    created_at?: DateTimeNullableFilter<"tables"> | Date | string | null
  }

  export type ticketsUpsertWithWhereUniqueWithoutEventsInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutEventsInput, ticketsUncheckedUpdateWithoutEventsInput>
    create: XOR<ticketsCreateWithoutEventsInput, ticketsUncheckedCreateWithoutEventsInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutEventsInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutEventsInput, ticketsUncheckedUpdateWithoutEventsInput>
  }

  export type ticketsUpdateManyWithWhereWithoutEventsInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutEventsInput>
  }

  export type ticketsScalarWhereInput = {
    AND?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    OR?: ticketsScalarWhereInput[]
    NOT?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    id?: IntFilter<"tickets"> | number
    event_id?: IntNullableFilter<"tickets"> | number | null
    name?: StringNullableFilter<"tickets"> | string | null
    price?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    available_quantity?: IntNullableFilter<"tickets"> | number | null
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
  }

  export type reservationsCreateWithoutPaymentsInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    tables?: tablesCreateNestedOneWithoutReservationsInput
    tickets?: ticketsCreateNestedOneWithoutReservationsInput
    users?: usersCreateNestedOneWithoutReservationsInput
    reserved_bottles?: reserved_bottlesCreateNestedManyWithoutReservationsInput
  }

  export type reservationsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    user_id?: number | null
    ticket_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    reserved_bottles?: reserved_bottlesUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type reservationsCreateOrConnectWithoutPaymentsInput = {
    where: reservationsWhereUniqueInput
    create: XOR<reservationsCreateWithoutPaymentsInput, reservationsUncheckedCreateWithoutPaymentsInput>
  }

  export type reservationsUpsertWithoutPaymentsInput = {
    update: XOR<reservationsUpdateWithoutPaymentsInput, reservationsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<reservationsCreateWithoutPaymentsInput, reservationsUncheckedCreateWithoutPaymentsInput>
    where?: reservationsWhereInput
  }

  export type reservationsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: reservationsWhereInput
    data: XOR<reservationsUpdateWithoutPaymentsInput, reservationsUncheckedUpdateWithoutPaymentsInput>
  }

  export type reservationsUpdateWithoutPaymentsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tables?: tablesUpdateOneWithoutReservationsNestedInput
    tickets?: ticketsUpdateOneWithoutReservationsNestedInput
    users?: usersUpdateOneWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserved_bottles?: reserved_bottlesUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type paymentsCreateWithoutReservationsInput = {
    payment_method?: string | null
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
    status?: string | null
  }

  export type paymentsUncheckedCreateWithoutReservationsInput = {
    id?: number
    payment_method?: string | null
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
    status?: string | null
  }

  export type paymentsCreateOrConnectWithoutReservationsInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutReservationsInput, paymentsUncheckedCreateWithoutReservationsInput>
  }

  export type paymentsCreateManyReservationsInputEnvelope = {
    data: paymentsCreateManyReservationsInput | paymentsCreateManyReservationsInput[]
    skipDuplicates?: boolean
  }

  export type tablesCreateWithoutReservationsInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
    events?: eventsCreateNestedOneWithoutTablesInput
  }

  export type tablesUncheckedCreateWithoutReservationsInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
  }

  export type tablesCreateOrConnectWithoutReservationsInput = {
    where: tablesWhereUniqueInput
    create: XOR<tablesCreateWithoutReservationsInput, tablesUncheckedCreateWithoutReservationsInput>
  }

  export type ticketsCreateWithoutReservationsInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
    events?: eventsCreateNestedOneWithoutTicketsInput
  }

  export type ticketsUncheckedCreateWithoutReservationsInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
  }

  export type ticketsCreateOrConnectWithoutReservationsInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutReservationsInput, ticketsUncheckedCreateWithoutReservationsInput>
  }

  export type usersCreateWithoutReservationsInput = {
    email: string
    password_hash: string
    full_name?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutReservationsInput = {
    id?: number
    email: string
    password_hash: string
    full_name?: string | null
    phone_number?: string | null
    created_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutReservationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReservationsInput, usersUncheckedCreateWithoutReservationsInput>
  }

  export type reserved_bottlesCreateWithoutReservationsInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    bottles?: bottlesCreateNestedOneWithoutReserved_bottlesInput
  }

  export type reserved_bottlesUncheckedCreateWithoutReservationsInput = {
    id?: number
    bottle_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
  }

  export type reserved_bottlesCreateOrConnectWithoutReservationsInput = {
    where: reserved_bottlesWhereUniqueInput
    create: XOR<reserved_bottlesCreateWithoutReservationsInput, reserved_bottlesUncheckedCreateWithoutReservationsInput>
  }

  export type reserved_bottlesCreateManyReservationsInputEnvelope = {
    data: reserved_bottlesCreateManyReservationsInput | reserved_bottlesCreateManyReservationsInput[]
    skipDuplicates?: boolean
  }

  export type paymentsUpsertWithWhereUniqueWithoutReservationsInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutReservationsInput, paymentsUncheckedUpdateWithoutReservationsInput>
    create: XOR<paymentsCreateWithoutReservationsInput, paymentsUncheckedCreateWithoutReservationsInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutReservationsInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutReservationsInput, paymentsUncheckedUpdateWithoutReservationsInput>
  }

  export type paymentsUpdateManyWithWhereWithoutReservationsInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutReservationsInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    reservation_id?: IntNullableFilter<"payments"> | number | null
    payment_method?: StringNullableFilter<"payments"> | string | null
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    status?: StringNullableFilter<"payments"> | string | null
  }

  export type tablesUpsertWithoutReservationsInput = {
    update: XOR<tablesUpdateWithoutReservationsInput, tablesUncheckedUpdateWithoutReservationsInput>
    create: XOR<tablesCreateWithoutReservationsInput, tablesUncheckedCreateWithoutReservationsInput>
    where?: tablesWhereInput
  }

  export type tablesUpdateToOneWithWhereWithoutReservationsInput = {
    where?: tablesWhereInput
    data: XOR<tablesUpdateWithoutReservationsInput, tablesUncheckedUpdateWithoutReservationsInput>
  }

  export type tablesUpdateWithoutReservationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: eventsUpdateOneWithoutTablesNestedInput
  }

  export type tablesUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUpsertWithoutReservationsInput = {
    update: XOR<ticketsUpdateWithoutReservationsInput, ticketsUncheckedUpdateWithoutReservationsInput>
    create: XOR<ticketsCreateWithoutReservationsInput, ticketsUncheckedCreateWithoutReservationsInput>
    where?: ticketsWhereInput
  }

  export type ticketsUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ticketsWhereInput
    data: XOR<ticketsUpdateWithoutReservationsInput, ticketsUncheckedUpdateWithoutReservationsInput>
  }

  export type ticketsUpdateWithoutReservationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: eventsUpdateOneWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutReservationsInput = {
    update: XOR<usersUpdateWithoutReservationsInput, usersUncheckedUpdateWithoutReservationsInput>
    create: XOR<usersCreateWithoutReservationsInput, usersUncheckedCreateWithoutReservationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReservationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReservationsInput, usersUncheckedUpdateWithoutReservationsInput>
  }

  export type usersUpdateWithoutReservationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reserved_bottlesUpsertWithWhereUniqueWithoutReservationsInput = {
    where: reserved_bottlesWhereUniqueInput
    update: XOR<reserved_bottlesUpdateWithoutReservationsInput, reserved_bottlesUncheckedUpdateWithoutReservationsInput>
    create: XOR<reserved_bottlesCreateWithoutReservationsInput, reserved_bottlesUncheckedCreateWithoutReservationsInput>
  }

  export type reserved_bottlesUpdateWithWhereUniqueWithoutReservationsInput = {
    where: reserved_bottlesWhereUniqueInput
    data: XOR<reserved_bottlesUpdateWithoutReservationsInput, reserved_bottlesUncheckedUpdateWithoutReservationsInput>
  }

  export type reserved_bottlesUpdateManyWithWhereWithoutReservationsInput = {
    where: reserved_bottlesScalarWhereInput
    data: XOR<reserved_bottlesUpdateManyMutationInput, reserved_bottlesUncheckedUpdateManyWithoutReservationsInput>
  }

  export type bottlesCreateWithoutReserved_bottlesInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    events?: eventsCreateNestedOneWithoutBottlesInput
  }

  export type bottlesUncheckedCreateWithoutReserved_bottlesInput = {
    id?: number
    event_id?: number | null
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type bottlesCreateOrConnectWithoutReserved_bottlesInput = {
    where: bottlesWhereUniqueInput
    create: XOR<bottlesCreateWithoutReserved_bottlesInput, bottlesUncheckedCreateWithoutReserved_bottlesInput>
  }

  export type reservationsCreateWithoutReserved_bottlesInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsCreateNestedManyWithoutReservationsInput
    tables?: tablesCreateNestedOneWithoutReservationsInput
    tickets?: ticketsCreateNestedOneWithoutReservationsInput
    users?: usersCreateNestedOneWithoutReservationsInput
  }

  export type reservationsUncheckedCreateWithoutReserved_bottlesInput = {
    id?: number
    user_id?: number | null
    ticket_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type reservationsCreateOrConnectWithoutReserved_bottlesInput = {
    where: reservationsWhereUniqueInput
    create: XOR<reservationsCreateWithoutReserved_bottlesInput, reservationsUncheckedCreateWithoutReserved_bottlesInput>
  }

  export type bottlesUpsertWithoutReserved_bottlesInput = {
    update: XOR<bottlesUpdateWithoutReserved_bottlesInput, bottlesUncheckedUpdateWithoutReserved_bottlesInput>
    create: XOR<bottlesCreateWithoutReserved_bottlesInput, bottlesUncheckedCreateWithoutReserved_bottlesInput>
    where?: bottlesWhereInput
  }

  export type bottlesUpdateToOneWithWhereWithoutReserved_bottlesInput = {
    where?: bottlesWhereInput
    data: XOR<bottlesUpdateWithoutReserved_bottlesInput, bottlesUncheckedUpdateWithoutReserved_bottlesInput>
  }

  export type bottlesUpdateWithoutReserved_bottlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: eventsUpdateOneWithoutBottlesNestedInput
  }

  export type bottlesUncheckedUpdateWithoutReserved_bottlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reservationsUpsertWithoutReserved_bottlesInput = {
    update: XOR<reservationsUpdateWithoutReserved_bottlesInput, reservationsUncheckedUpdateWithoutReserved_bottlesInput>
    create: XOR<reservationsCreateWithoutReserved_bottlesInput, reservationsUncheckedCreateWithoutReserved_bottlesInput>
    where?: reservationsWhereInput
  }

  export type reservationsUpdateToOneWithWhereWithoutReserved_bottlesInput = {
    where?: reservationsWhereInput
    data: XOR<reservationsUpdateWithoutReserved_bottlesInput, reservationsUncheckedUpdateWithoutReserved_bottlesInput>
  }

  export type reservationsUpdateWithoutReserved_bottlesInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUpdateManyWithoutReservationsNestedInput
    tables?: tablesUpdateOneWithoutReservationsNestedInput
    tickets?: ticketsUpdateOneWithoutReservationsNestedInput
    users?: usersUpdateOneWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateWithoutReserved_bottlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsCreateWithoutTablesInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsCreateNestedManyWithoutReservationsInput
    tickets?: ticketsCreateNestedOneWithoutReservationsInput
    users?: usersCreateNestedOneWithoutReservationsInput
    reserved_bottles?: reserved_bottlesCreateNestedManyWithoutReservationsInput
  }

  export type reservationsUncheckedCreateWithoutTablesInput = {
    id?: number
    user_id?: number | null
    ticket_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedManyWithoutReservationsInput
    reserved_bottles?: reserved_bottlesUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type reservationsCreateOrConnectWithoutTablesInput = {
    where: reservationsWhereUniqueInput
    create: XOR<reservationsCreateWithoutTablesInput, reservationsUncheckedCreateWithoutTablesInput>
  }

  export type reservationsCreateManyTablesInputEnvelope = {
    data: reservationsCreateManyTablesInput | reservationsCreateManyTablesInput[]
    skipDuplicates?: boolean
  }

  export type eventsCreateWithoutTablesInput = {
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesCreateNestedManyWithoutEventsInput
    clubs?: clubsCreateNestedOneWithoutEventsInput
    tickets?: ticketsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutTablesInput = {
    id?: number
    club_id?: number | null
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesUncheckedCreateNestedManyWithoutEventsInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutTablesInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutTablesInput, eventsUncheckedCreateWithoutTablesInput>
  }

  export type reservationsUpsertWithWhereUniqueWithoutTablesInput = {
    where: reservationsWhereUniqueInput
    update: XOR<reservationsUpdateWithoutTablesInput, reservationsUncheckedUpdateWithoutTablesInput>
    create: XOR<reservationsCreateWithoutTablesInput, reservationsUncheckedCreateWithoutTablesInput>
  }

  export type reservationsUpdateWithWhereUniqueWithoutTablesInput = {
    where: reservationsWhereUniqueInput
    data: XOR<reservationsUpdateWithoutTablesInput, reservationsUncheckedUpdateWithoutTablesInput>
  }

  export type reservationsUpdateManyWithWhereWithoutTablesInput = {
    where: reservationsScalarWhereInput
    data: XOR<reservationsUpdateManyMutationInput, reservationsUncheckedUpdateManyWithoutTablesInput>
  }

  export type reservationsScalarWhereInput = {
    AND?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
    OR?: reservationsScalarWhereInput[]
    NOT?: reservationsScalarWhereInput | reservationsScalarWhereInput[]
    id?: IntFilter<"reservations"> | number
    user_id?: IntNullableFilter<"reservations"> | number | null
    ticket_id?: IntNullableFilter<"reservations"> | number | null
    table_id?: IntNullableFilter<"reservations"> | number | null
    quantity?: IntNullableFilter<"reservations"> | number | null
    total_price?: DecimalNullableFilter<"reservations"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"reservations"> | string | null
    created_at?: DateTimeNullableFilter<"reservations"> | Date | string | null
  }

  export type eventsUpsertWithoutTablesInput = {
    update: XOR<eventsUpdateWithoutTablesInput, eventsUncheckedUpdateWithoutTablesInput>
    create: XOR<eventsCreateWithoutTablesInput, eventsUncheckedCreateWithoutTablesInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutTablesInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutTablesInput, eventsUncheckedUpdateWithoutTablesInput>
  }

  export type eventsUpdateWithoutTablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUpdateManyWithoutEventsNestedInput
    clubs?: clubsUpdateOneWithoutEventsNestedInput
    tickets?: ticketsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUncheckedUpdateManyWithoutEventsNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type reservationsCreateWithoutTicketsInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsCreateNestedManyWithoutReservationsInput
    tables?: tablesCreateNestedOneWithoutReservationsInput
    users?: usersCreateNestedOneWithoutReservationsInput
    reserved_bottles?: reserved_bottlesCreateNestedManyWithoutReservationsInput
  }

  export type reservationsUncheckedCreateWithoutTicketsInput = {
    id?: number
    user_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedManyWithoutReservationsInput
    reserved_bottles?: reserved_bottlesUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type reservationsCreateOrConnectWithoutTicketsInput = {
    where: reservationsWhereUniqueInput
    create: XOR<reservationsCreateWithoutTicketsInput, reservationsUncheckedCreateWithoutTicketsInput>
  }

  export type reservationsCreateManyTicketsInputEnvelope = {
    data: reservationsCreateManyTicketsInput | reservationsCreateManyTicketsInput[]
    skipDuplicates?: boolean
  }

  export type eventsCreateWithoutTicketsInput = {
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesCreateNestedManyWithoutEventsInput
    clubs?: clubsCreateNestedOneWithoutEventsInput
    tables?: tablesCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutTicketsInput = {
    id?: number
    club_id?: number | null
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
    bottles?: bottlesUncheckedCreateNestedManyWithoutEventsInput
    tables?: tablesUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutTicketsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutTicketsInput, eventsUncheckedCreateWithoutTicketsInput>
  }

  export type reservationsUpsertWithWhereUniqueWithoutTicketsInput = {
    where: reservationsWhereUniqueInput
    update: XOR<reservationsUpdateWithoutTicketsInput, reservationsUncheckedUpdateWithoutTicketsInput>
    create: XOR<reservationsCreateWithoutTicketsInput, reservationsUncheckedCreateWithoutTicketsInput>
  }

  export type reservationsUpdateWithWhereUniqueWithoutTicketsInput = {
    where: reservationsWhereUniqueInput
    data: XOR<reservationsUpdateWithoutTicketsInput, reservationsUncheckedUpdateWithoutTicketsInput>
  }

  export type reservationsUpdateManyWithWhereWithoutTicketsInput = {
    where: reservationsScalarWhereInput
    data: XOR<reservationsUpdateManyMutationInput, reservationsUncheckedUpdateManyWithoutTicketsInput>
  }

  export type eventsUpsertWithoutTicketsInput = {
    update: XOR<eventsUpdateWithoutTicketsInput, eventsUncheckedUpdateWithoutTicketsInput>
    create: XOR<eventsCreateWithoutTicketsInput, eventsUncheckedCreateWithoutTicketsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutTicketsInput, eventsUncheckedUpdateWithoutTicketsInput>
  }

  export type eventsUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUpdateManyWithoutEventsNestedInput
    clubs?: clubsUpdateOneWithoutEventsNestedInput
    tables?: tablesUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUncheckedUpdateManyWithoutEventsNestedInput
    tables?: tablesUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type reservationsCreateWithoutUsersInput = {
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsCreateNestedManyWithoutReservationsInput
    tables?: tablesCreateNestedOneWithoutReservationsInput
    tickets?: ticketsCreateNestedOneWithoutReservationsInput
    reserved_bottles?: reserved_bottlesCreateNestedManyWithoutReservationsInput
  }

  export type reservationsUncheckedCreateWithoutUsersInput = {
    id?: number
    ticket_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedManyWithoutReservationsInput
    reserved_bottles?: reserved_bottlesUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type reservationsCreateOrConnectWithoutUsersInput = {
    where: reservationsWhereUniqueInput
    create: XOR<reservationsCreateWithoutUsersInput, reservationsUncheckedCreateWithoutUsersInput>
  }

  export type reservationsCreateManyUsersInputEnvelope = {
    data: reservationsCreateManyUsersInput | reservationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reservationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: reservationsWhereUniqueInput
    update: XOR<reservationsUpdateWithoutUsersInput, reservationsUncheckedUpdateWithoutUsersInput>
    create: XOR<reservationsCreateWithoutUsersInput, reservationsUncheckedCreateWithoutUsersInput>
  }

  export type reservationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: reservationsWhereUniqueInput
    data: XOR<reservationsUpdateWithoutUsersInput, reservationsUncheckedUpdateWithoutUsersInput>
  }

  export type reservationsUpdateManyWithWhereWithoutUsersInput = {
    where: reservationsScalarWhereInput
    data: XOR<reservationsUpdateManyMutationInput, reservationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type reserved_bottlesCreateManyBottlesInput = {
    id?: number
    reservation_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
  }

  export type reserved_bottlesUpdateWithoutBottlesInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: reservationsUpdateOneWithoutReserved_bottlesNestedInput
  }

  export type reserved_bottlesUncheckedUpdateWithoutBottlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservation_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserved_bottlesUncheckedUpdateManyWithoutBottlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservation_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsCreateManyClubsInput = {
    id?: number
    name: string
    description?: string | null
    event_date: Date | string
    music_genre?: string | null
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type eventsUpdateWithoutClubsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUpdateManyWithoutEventsNestedInput
    tables?: tablesUpdateManyWithoutEventsNestedInput
    tickets?: ticketsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutClubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bottles?: bottlesUncheckedUpdateManyWithoutEventsNestedInput
    tables?: tablesUncheckedUpdateManyWithoutEventsNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateManyWithoutClubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_genre?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bottlesCreateManyEventsInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type tablesCreateManyEventsInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    capacity?: number | null
    available_quantity?: number | null
    created_at?: Date | string | null
  }

  export type ticketsCreateManyEventsInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_quantity?: number | null
    created_at?: Date | string | null
  }

  export type bottlesUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserved_bottles?: reserved_bottlesUpdateManyWithoutBottlesNestedInput
  }

  export type bottlesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserved_bottles?: reserved_bottlesUncheckedUpdateManyWithoutBottlesNestedInput
  }

  export type bottlesUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tablesUpdateWithoutEventsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUpdateManyWithoutTablesNestedInput
  }

  export type tablesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type tablesUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUpdateWithoutEventsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: reservationsUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateManyReservationsInput = {
    id?: number
    payment_method?: string | null
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
    status?: string | null
  }

  export type reserved_bottlesCreateManyReservationsInput = {
    id?: number
    bottle_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
  }

  export type paymentsUpdateWithoutReservationsInput = {
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserved_bottlesUpdateWithoutReservationsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    bottles?: bottlesUpdateOneWithoutReserved_bottlesNestedInput
  }

  export type reserved_bottlesUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    bottle_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserved_bottlesUncheckedUpdateManyWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    bottle_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservationsCreateManyTablesInput = {
    id?: number
    user_id?: number | null
    ticket_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type reservationsUpdateWithoutTablesInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUpdateManyWithoutReservationsNestedInput
    tickets?: ticketsUpdateOneWithoutReservationsNestedInput
    users?: usersUpdateOneWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateManyWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateManyWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reservationsCreateManyTicketsInput = {
    id?: number
    user_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type reservationsUpdateWithoutTicketsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUpdateManyWithoutReservationsNestedInput
    tables?: tablesUpdateOneWithoutReservationsNestedInput
    users?: usersUpdateOneWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateManyWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateManyWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reservationsCreateManyUsersInput = {
    id?: number
    ticket_id?: number | null
    table_id?: number | null
    quantity?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type reservationsUpdateWithoutUsersInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUpdateManyWithoutReservationsNestedInput
    tables?: tablesUpdateOneWithoutReservationsNestedInput
    tickets?: ticketsUpdateOneWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateManyWithoutReservationsNestedInput
    reserved_bottles?: reserved_bottlesUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type reservationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}