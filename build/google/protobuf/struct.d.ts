import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "google.protobuf";
/**
 * Represents a JSON `null`.
 *
 * `NullValue` is a sentinel, using an enum with only one value to represent
 * the null value for the `Value` type union.
 *
 * A field of type `NullValue` with any value other than `0` is considered
 * invalid. Most ProtoJSON serializers will emit a `Value` with a `null_value`
 * set as a JSON `null` regardless of the integer value, and so will round trip
 * to a `0` value.
 */
export declare enum NullValue {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
/**
 * Represents a JSON object.
 *
 * An unordered key-value map, intending to perfectly capture the semantics of a
 * JSON object. This enables parsing any arbitrary JSON payload as a message
 * field in ProtoJSON format.
 *
 * This follows RFC 8259 guidelines for interoperable JSON: notably this type
 * cannot represent large Int64 values or `NaN`/`Infinity` numbers,
 * since the JSON format generally does not support those values in its number
 * type.
 *
 * If you do not intend to parse arbitrary JSON into your message, a custom
 * typed message should be preferred instead of using this type.
 */
export interface Struct {
    /** Unordered map of dynamically typed values. */
    fields: {
        [key: string]: any | undefined;
    };
}
export interface Struct_FieldsEntry {
    key: string;
    value: any | undefined;
}
/**
 * Represents a JSON value.
 *
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant is an invalid state.
 */
export interface Value {
    /** Represents a JSON `null`. */
    nullValue?: NullValue | undefined;
    /**
     * Represents a JSON number. Must not be `NaN`, `Infinity` or
     * `-Infinity`, since those are not supported in JSON. This also cannot
     * represent large Int64 values, since JSON format generally does not
     * support them in its number type.
     */
    numberValue?: number | undefined;
    /** Represents a JSON string. */
    stringValue?: string | undefined;
    /** Represents a JSON boolean (`true` or `false` literal in JSON). */
    boolValue?: boolean | undefined;
    /** Represents a JSON object. */
    structValue?: {
        [key: string]: any;
    } | undefined;
    /** Represents a JSON array. */
    listValue?: Array<any> | undefined;
}
/** Represents a JSON array. */
export interface ListValue {
    /** Repeated field of dynamically typed values. */
    values: any[];
}
export declare const Struct: {
    encode(message: Struct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Struct;
    fromJSON(object: any): Struct;
    toJSON(message: Struct): unknown;
    create<I extends {
        fields?: {
            [x: string]: any;
        } | undefined;
    } & {
        fields?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["fields"], string | number>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "fields">]: never; }>(base?: I | undefined): Struct;
    fromPartial<I_1 extends {
        fields?: {
            [x: string]: any;
        } | undefined;
    } & {
        fields?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_2 in Exclude<keyof I_1["fields"], string | number>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "fields">]: never; }>(object: I_1): Struct;
    wrap(object: {
        [key: string]: any;
    } | undefined): Struct;
    unwrap(message: Struct): {
        [key: string]: any;
    };
};
export declare const Struct_FieldsEntry: {
    encode(message: Struct_FieldsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry;
    fromJSON(object: any): Struct_FieldsEntry;
    toJSON(message: Struct_FieldsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: any | undefined;
    } & {
        key?: string | undefined;
        value?: any | undefined;
    } & { [K in Exclude<keyof I, keyof Struct_FieldsEntry>]: never; }>(base?: I | undefined): Struct_FieldsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: any | undefined;
    } & {
        key?: string | undefined;
        value?: any | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Struct_FieldsEntry>]: never; }>(object: I_1): Struct_FieldsEntry;
};
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    create<I extends {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: {
            [x: string]: any;
        } | undefined;
        listValue?: any[] | undefined;
    } & {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["structValue"], string | number>]: never; }) | undefined;
        listValue?: (any[] & any[] & { [K_1 in Exclude<keyof I["listValue"], keyof any[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Value>]: never; }>(base?: I | undefined): Value;
    fromPartial<I_1 extends {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: {
            [x: string]: any;
        } | undefined;
        listValue?: any[] | undefined;
    } & {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_3 in Exclude<keyof I_1["structValue"], string | number>]: never; }) | undefined;
        listValue?: (any[] & any[] & { [K_4 in Exclude<keyof I_1["listValue"], keyof any[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Value>]: never; }>(object: I_1): Value;
    wrap(value: any): Value;
    unwrap(message: any): string | number | boolean | Object | null | Array<any> | undefined;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    create<I extends {
        values?: any[] | undefined;
    } & {
        values?: (any[] & any[] & { [K in Exclude<keyof I["values"], keyof any[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "values">]: never; }>(base?: I | undefined): ListValue;
    fromPartial<I_1 extends {
        values?: any[] | undefined;
    } & {
        values?: (any[] & any[] & { [K_2 in Exclude<keyof I_1["values"], keyof any[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "values">]: never; }>(object: I_1): ListValue;
    wrap(array: Array<any> | undefined): ListValue;
    unwrap(message: ListValue): Array<any>;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
