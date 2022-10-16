export type TypedOmit<Type extends any, TypeToOmit extends keyof Type > = {
    [Key in keyof Type as Key extends TypeToOmit ? Key : never]: Type[Key]
}