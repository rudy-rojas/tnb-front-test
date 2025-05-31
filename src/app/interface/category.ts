export type Category ={
    pkCategory: number;
    name: string;
    description: string;
    createdAt: string | null;
    updatedAt: string | null;
    subCategory: SubCategory[];
}
export type SubCategory = {
    pkSubCategory: number;
    name: string;
    description: string;
};

