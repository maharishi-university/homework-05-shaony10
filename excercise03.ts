export interface DataResponse {
    json(): any
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}

export interface Recipe {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    caloriesPerServing: number
    tags: string[]
    userId: number
    image: string
    rating: number
    reviewCount: number
    mealType: string[]
}

/*export const fetchData = async () => {
    const rawResponse: Response = await fetch('https://dummyjson.com/recipes');
    const jsonBody: DataResponse = await rawResponse.json();
    console.log(jsonBody.recipes[0]);
}*/