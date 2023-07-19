export type NavEle = {
    id: number
    name: string
    child: JSX.Element
    link: string
}

export type FLinks = {
    id: number
    name: string
    link: string
}

export type FSocials = {
    id: number
    child: JSX.Element
    link: string
}

export type Trending = {
    id: number
    child: JSX.Element
    name: string
    discount: string
}