import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import BtnWithLink from "../interfaces";

export default function Btn({ text, path, variant, size }: BtnWithLink) {
    return (
        <Link to={path}>
            <Button
                size={size}
                color="success"
                variant={variant}
            >
                <p className="font-semibold">{text}</p>
            </Button>
        </Link>
    );
}
