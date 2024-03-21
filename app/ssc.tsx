"use server"

export function bar() {}; // Runtime error "Server actions must be async functions"
export const foo = () => {}; // No error even though not async
