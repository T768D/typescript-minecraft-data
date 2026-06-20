import baseTypes from "./configs/default.json" with { type: "json" };

declare global {
	interface ArrayConstructor {
		isArray(arg: unknown): arg is unknown[];
	}

	interface ObjectConstructor {
		entries<T>(object: T): [keyof T, T[keyof T]][];
		keys<T>(object: T): (keyof T)[];
		values<T>(object: T): (T[keyof T])[];
	}

	interface ReadonlyArray<T> {
		includes(searchElement: unknown, fromIndex?: number): searchElement is T;
	}

	interface Array<T> {
		includes(searchElement: unknown, fromIndex?: number): searchElement is T;
	}

	interface Set<T> {
		has(value: unknown): value is T;
	}
}


// switch cannot be a type, and void is already a ts type
export const ignoredTypes = new Set(["switch", "void", "string"]);
// No types in ignoredTypes should be present in someTypes


export const unimplementedBaseTypes = new Set<string>();

export function getBaseType(type: string) {
	if (type in baseTypes)
		return baseTypes[type as keyof typeof baseTypes];

	unimplementedBaseTypes.add(type);
	return "unknown";
}