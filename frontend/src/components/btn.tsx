import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BtnWithLinkProps } from "../interfaces/index";

export default function Btn({ text, path, variant, size, textColor, btnColor }: BtnWithLinkProps) {
    return (
        <Link to={path}>
            <Button
                size={size}
                color={btnColor}
                variant={variant}
            >
                <p className={`${textColor} font-semibold`} >{text}</p>
            </Button>
        </Link>
    );
}
