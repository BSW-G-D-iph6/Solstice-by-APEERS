export interface IGqlProducts {
    title: string,
    benefit: string,
    detail: string,
    tags: string[],
    price: number,
    img: string,
    currency: string,
    UUID: string,
}

export interface ICata {
    allPoductReal: IGqlProducts[]

}