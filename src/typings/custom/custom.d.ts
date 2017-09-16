// interface String {
//     format(...replacements: any[]): string;
// }

// declare var ISDEVELOPMENT: boolean;
// declare var ISPRODUCTION: boolean;

// interface IDictionary {
//      [index: string]: any;
// }

declare module '*.json' {
    const value: any;
    export default value;
}