export const getImage = (imgName: string) => {
    return new URL(`../assets/images/${imgName}`, import.meta.url).href;
};

// Helper for trying multiple extensions if needed, though exact names are preferred
export const getItem = (itemName: string) => {
    try {
        return new URL(`../assets/images/${itemName}`, import.meta.url).href;
    } catch (e) {
        return "";
    }
}