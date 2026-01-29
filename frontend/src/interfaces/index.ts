export default interface BtnWithLink{
    text: string;
    path: string;
    variant: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
}