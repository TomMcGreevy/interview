"use client"

import { Product } from "@/types/products"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "title",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
];
